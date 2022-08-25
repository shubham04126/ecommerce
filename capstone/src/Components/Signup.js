import React, { useState } from "react";
import { auth, fs } from "../Config/Config";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Img from "../Images/logo.png";

//Sign Up
export const Signup = () => {
  const navigate = useNavigate();

  const [fullName, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(fullName, email, password);
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((credentials) => {
        console.log(credentials);
        fs.collection("users")
          .doc(credentials.user.uid)
          .set({
            FullName: fullName,
            Email: email,
            Password: password,
          })
          .then(() => {
            setSuccessMsg(
              "Signup Successfully. You will now automatically get redirected to Login"
            );
            setFullname("");
            setEmail("");
            setPassword("");
            setErrorMsg("");
            setTimeout(() => {
              setSuccessMsg("");
              navigate("/login");
            }, 2000);
          })
          .catch((error) => setErrorMsg(error.message));
      })
      .catch((error) => {
        setErrorMsg(error.message);
      });
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
            SignUp
          </h1>
          {successMsg && (
            <>
              <div className="success-msg">{successMsg}</div>
              <br></br>
            </>
          )}
          <div class="login-form">
            <form action="" onSubmit={handleSignup}>
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setFullname(e.target.value)}
                value={fullName}
              />
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
                Already have an account Login <span> </span>
                <Link to="/login" className="link">
                  Here
                </Link>
                {/* <div class="remember-form">
                <input type="checkbox" /> */}
                {/* <span>Remember me</span> */}
                {/* </div> */}
                {/* <div class="forget-pass">
                <a href="#">Forgot Password ?</a>
              </div> */}
                <button type="submit">SIGN UP</button>
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

    // <div
    //   className="container my-5"
    //   style={{ width: "30%", border: "2px solid rgb(236, 230, 230)" }}
    // >
    //   <br></br>
    //   <br></br>
    //   <h1 className="fw-bold mb-4 text-center">Sign Up</h1>
    //   <hr></hr>
    //   {successMsg && (
    //     <>
    //       <div className="success-msg">{successMsg}</div>
    //       <br></br>
    //     </>
    //   )}
    //   <form className="form-group" autoComplete="off" onSubmit={handleSignup}>
    //     <label>Full Name</label>
    //     <input
    //       type="text"
    //       className="form-control"
    //       required
    //       onChange={(e) => setFullname(e.target.value)}
    //       value={fullName}
    //     ></input>
    //     <br></br>
    //     <label>Email</label>
    //     <input
    //       type="email"
    //       className="form-control"
    //       required
    //       onChange={(e) => setEmail(e.target.value)}
    //       value={email}
    //     ></input>
    //     <br></br>
    //     <label>Password</label>
    //     <input
    //       type="password"
    //       className="form-control"
    //       required
    //       onChange={(e) => setPassword(e.target.value)}
    //       value={password}
    //     ></input>
    //     <br></br>
    //     <div className="btn-box">
    //       <span>
    //         Already have an account Login <span> </span>
    //         <Link to="/login" className="link">
    //           Here
    //         </Link>
    //       </span>
    //       <div className="text-center">
    //         <button type="submit" className="btn btn-dark btn-md">
    //           SIGN UP
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    //   {errorMsg && (
    //     <>
    //       <br></br>
    //       <div className="error-msg">{errorMsg}</div>
    //     </>
    //   )}
    // </div>
  );
};

export default Signup;
