import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  const [userType, setUserType] = useState<string | null>(null);

  const handleUserTypeChange = (e: React.FormEvent) => {
    setUserType((e.target as HTMLInputElement).value);
  };

  return (
    <div>
      <h2>Register</h2>
      <p>Fill the form below to create your account.</p>
      <Form>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address"></Form.Control>
        </Form.Group>

        <Form.Group onChange={handleUserTypeChange}>
          <Form.Check
            inline
            label="1"
            name="userType"
            type="radio"
            id="gleaner"
            value="gleaner"
          />
          <Form.Check
            inline
            label="2"
            name="userType"
            type="radio"
            id="farmer"
            value="farmer"
          />
          <Form.Check
            inline
            name="userType"
            label="Organization"
            type="radio"
            id="organization"
            value="organization"
          />
        </Form.Group>

        {userType === "gleaner" && (
          <div id="gleaner-form">
            <Form.Group className="mb-3" controlId="formGroupSize">
              <Form.Label>Group Size (minimum 5)</Form.Label>
              <Form.Control type="number" placeholder="5"></Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMaxDistance">
              <Form.Label>Maximum Travel Distance (km)</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Form.Group>
          </div>
        )}

        {userType === "farmer" && (
          <div id="farmer-form">
            <Form.Group className="mb-3" controlId="formFarmerCapacity">
              <Form.Label>Capacity (Number of gleaners)</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Form.Group>
          </div>
        )}

        {userType === "organization" && (
          <div id="organization-form">
            <Form.Group className="mb-3" controlId="formOrganizationCapacity">
              <Form.Label>Food Capacity</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formOrganizationMaxDistance"
            >
              <Form.Label>Maximum Travel Distance (km)</Form.Label>
              <Form.Control type="number"></Form.Control>
            </Form.Group>
          </div>
        )}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label={rulesAgreementLabel} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

const rulesAgreementLabel: React.ReactNode = (
  <div>
    You hereby agree to the <a>Privacy Policy</a>, Terms of Service and User
    Rules.
  </div>
);
