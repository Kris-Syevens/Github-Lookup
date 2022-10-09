import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loginImg from "../images/login-img.svg";
import Wrapper from "./Style-Wrappers/Login";

const Login = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Wrapper>
      <div className="container">
        <img src={loginImg} alt="github lookup" />
        <h1>github lookup</h1>
        <button onClick={loginWithRedirect} className="btn">
          login / register
        </button>
      </div>
    </Wrapper>
  );
};

export default Login;
