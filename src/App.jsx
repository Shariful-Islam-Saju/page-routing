import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { NavLink, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="container">
        <NavLink to={"/home"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/services"}>Services</NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default App;
