import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Earth Day Project</h1>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
