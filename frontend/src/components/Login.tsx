import React, { useState } from "react";
import { logInWithEmailAndPassword, auth } from "../utils/Firebase";

interface LoginProps {}

export const Login: React.FC<LoginProps> = ({}) => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div>
      <h2>Login</h2>
      <p>Fill the form below to sign in to your account.</p>
      <div className="email-input">
        <label htmlFor="email" className="label-name underline">
          <span className="content-name">Email: </span>
        </label>
        <input
          name="email"
          placeholder="Enter email"
          type="text"
          onChange={handleChange}
          value={input.email}
          required
          autoComplete="true"
        />
      </div>
      <div className="password-input">
        <label htmlFor="password" className="label-name mr-5">
          <span className="content-name">Password</span>
        </label>
        <input
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={input.password}
          type="password"
          required
          autoComplete="true"
        />
      </div>
    </div>
  );
};
