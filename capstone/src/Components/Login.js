import React, { useState } from "react";
import { Link } from "react-router-dom";
import Img from "../Images/logo.png";
import { auth } from "../Config/Config";
import { useNavigate } from "react-router-dom";
import "./Login.css";

//Login
const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // console.log(email, password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setSuccessMsg(
          "Login Successfully. You will now automatically get redirected to Home page"
        );
        setEmail("");
        setPassword("");
        setErrorMsg("");
        setTimeout(() => {
          setSuccessMsg("");
          navigate("/");
        }, 2000);
      })
      .catch((error) => setErrorMsg(error.message));
  };

  return (
    <div class="parent clearfix">
      <div class="bg-illustration">
        <img
          src={Img}
          alt="logo"
          style={{ borderRadius: "50%", width: "150px" }}
        />

        <div class="burger-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="login">
        <div class="container">
          <h1 className="text-center" style={{ color: "#3B3B3B" }}>
            Login
          </h1>
          <div class="login-form">
            {successMsg && (
              <>
                <div className="success-msg">{successMsg}</div>
                <br></br>
              </>
            )}
            <form action="" onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email Address"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                required
              />
              <span className="text-center">
                Don't have an account SignUp <span> </span>
                <Link to="/signup" className="link">
                  Here
                </Link>
                <button type="submit">LOG IN</button>
              </span>
            </form>
            {errorMsg && (
              <>
                <br></br>
                <div className="error-msg">{errorMsg}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
