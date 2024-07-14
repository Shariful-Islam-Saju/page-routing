import React from "react";
import { Link } from "react-router-dom";
const serv = ["HTML", "Css", "JavaScript", "React", "BootStrap"];

export default function Services() {
  return (
    <>
      <h1>Services</h1>
      {serv.map((item, index) => (
        <div key={index}>
          <Link to={`/services/${item}`}>{item}</Link>
          <br />
          <br />
        </div>
      ))}
    </>
  );
}
