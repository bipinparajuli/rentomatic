import React from "react";
import { Link } from "react-router-dom";
import "./registration.css";

function Registration() {
  return (
    <>
      <div className="registration-container">
        <div id="form">
          <div className="form-title">
            {" "}
            <h2>Register Now</h2>
            <i className="x  fa-solid fa-x"></i>
          </div>
          <button className="btn">Registration as owner</button>
          <br />
          <i className="info fa fa-circle-info" />
          <span>You can add room</span>
          <br />
          <button className="btn">Registration as Tenant</button>
          <br />
          <i className="info fa fa-circle-info" />
          <span>You can find room</span>
          <p>
            Already have an account? <Link to={`/login`}>Login Now</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Registration;
