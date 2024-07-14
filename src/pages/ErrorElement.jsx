import React from "react";
import { Link } from "react-router-dom";

export default function ErrorElement() {
  return (
    <>
      <h1>404 Not Found!!!</h1>{" "}
      <Link className="btn" to={"/"}>
        <button>Go Back Home</button>{" "}
      </Link>
    </>
  );
}
