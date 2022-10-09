import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Style-Wrappers/Error";

const Error = () => {
  return (
    <Wrapper>
      <div>
        <h1>404</h1>
        <h3>sorry, the page you tried cannot be found.</h3>
        <Link to="/" className="btn ">
          Back Home
        </Link>
      </div>
    </Wrapper>
  );
};

export default Error;
