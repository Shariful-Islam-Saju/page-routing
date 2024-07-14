import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Single() {
  const useparams = useParams();
  return (
    <div>
      <p>This is Services for {useparams.id}</p>
      <Link to={"/services"}>
        <button>Go Back</button>
      </Link>
    </div>
  );
}
