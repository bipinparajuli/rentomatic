import React from "react";
import { Link } from "react-router-dom";
import "./forget.css";

function Forget() {
  return (
    <>
      <div className="forget-password-container">
        <div id="form">
          <div className="form-title">
            {" "}
            <h2>Forgot Your Password?</h2>
          </div>
          <div>Your Email:</div>
          <input typeof="text"></input>
          <br />
          <br />
          <button className="btn">Send Email verification</button>
          <br />
          <span id="or">OR</span>
          <p><Link to={`/login`}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Forget;
