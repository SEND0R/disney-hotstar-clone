import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function login() {
    navigate("/");
  }

  return (
    <div className="login_container">
      <div className="login_container_inner">
        <img
          className="login_logo"
          src="/assets/images/cta-logo-one.svg"
          alt=""
        />
        <button className="login_btn" onClick={login}>
          sign up
        </button>
        <div className="login_discription">
          <p>
            get access to premium content make an account and buy a membership
            plan the
          </p>
        </div>
        <img
          className="login_logo"
          src="/assets/images/cta-logo-two.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
