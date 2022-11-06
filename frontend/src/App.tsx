import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Login } from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Register } from "./components/Register";
import { Homepage } from "./components/Homepage";
import CustomNavbar from "./components/CustomNavbar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <CustomNavbar />
        <h1>Earth Day Project</h1>
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
