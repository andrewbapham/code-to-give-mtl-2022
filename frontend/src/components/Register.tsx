import React, { useState } from "react";

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = ({}) => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInput((prevState) => ({
      ...prevState,
      [e.currentTarget.name]: e.currentTarget.value,
    }));
  };
  return (
    <div>
      <h2>Login</h2>
      <p>Fill the form below to sign in to your account.</p>
      <div className="email-input">
        <input
          name="email"
          placeholder="Enter email"
          type="text"
          onChange={handleChange}
          value={input.email}
          required
          autoComplete="true"
        />
        <label htmlFor="email" className="label-name">
          <span className="content-name">Email</span>
        </label>
      </div>
      <div className="password-input">
        <input
          name="password"
          placeholder="Enter password"
          onChange={handleChange}
          value={input.password}
          type="password"
          required
          autoComplete="true"
        />
        <label htmlFor="password" className="label-name">
          <span className="content-name">Password</span>
        </label>
      </div>
    </div>
  );
};
