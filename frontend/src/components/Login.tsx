import React, { useRef, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { logInWithEmailAndPassword, auth } from "../utils/Firebase";
import { Link, useNavigate } from "react-router-dom";
import { idText } from "typescript";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });

  const handleSubmit = (e: React.FormEvent) => {
    const form = e.currentTarget;
    logInWithEmailAndPassword(input.email, input.password)
      .then((res) => {
        navigate("/home");
      })
      .catch((e) => {
        var errorMsg = document.getElementById("errorMsg");
        if (errorMsg) errorMsg.innerHTML = e.message;
      });
  };

  const handleChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setInput({ ...input, [target.name]: target.value });
  };

  return (
    <div>
      <Form>
        <p id="errorMsg" style={{ color: "red" }}></p>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
      <Link to="/register">Don't have an account? Register here.</Link>
    </div>
  );
};
