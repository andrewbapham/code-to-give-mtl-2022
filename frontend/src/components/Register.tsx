import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  const [userType, setUserType] = useState<string | null>(null);
  const [validated, setValidated] = useState(false);

  const handleUserTypeChange = (e: React.FormEvent) => {
    setUserType((e.target as HTMLInputElement).value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    const form = e.currentTarget as HTMLFormElement;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div>
      <h2>Register</h2>
      <p>Fill the form below to create your account.</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Enter email"
            name="email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            name="password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address"
            name="Address"
          ></Form.Control>
        </Form.Group>

        <Form.Group onChange={handleUserTypeChange}>
          <Form.Check
            required
            inline
            label="Gleaner"
            name="userType"
            type="radio"
            id="gleaner"
            value="gleaner"
          />
          <Form.Check
            required
            inline
            label="Farmer"
            name="userType"
            type="radio"
            id="farmer"
            value="farmer"
          />
          <Form.Check
            required
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
              <Form.Control
                required
                type="number"
                placeholder="5"
                min={5}
                name="groupSize"
              ></Form.Control>
              <Form.Control.Feedback type="invalid">
                Please provide a number greater than or equal to 5.
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formMaxDistance">
              <Form.Label>Maximum Travel Distance (km)</Form.Label>
              <Form.Control
                required
                type="number"
                name="maxDistance"
              ></Form.Control>
            </Form.Group>
          </div>
        )}

        {userType === "farmer" && (
          <div id="farmer-form">
            <Form.Group className="mb-3" controlId="formFarmerCapacity">
              <Form.Label>Capacity (Number of gleaners)</Form.Label>
              <Form.Control
                required
                type="number"
                name="farmerCapacity"
              ></Form.Control>
            </Form.Group>
          </div>
        )}

        {userType === "organization" && (
          <div id="organization-form">
            <Form.Group className="mb-3" controlId="formOrganizationCapacity">
              <Form.Label>Food Capacity</Form.Label>
              <Form.Control
                required
                type="number"
                name="organizationCapacity"
              ></Form.Control>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="formOrganizationMaxDistance"
            >
              <Form.Label>Maximum Travel Distance (km)</Form.Label>
              <Form.Control
                required
                type="number"
                name="maxDistance"
              ></Form.Control>
            </Form.Group>
          </div>
        )}

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check required type="checkbox" label={rulesAgreementLabel} />
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
