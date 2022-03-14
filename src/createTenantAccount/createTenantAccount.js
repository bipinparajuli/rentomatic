import React from "react";
import "./createTenantAccount.css";
import ReCAPTCHA from "react-google-recaptcha";

function createTenantAccount() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
    <div className="tenant-account">
      <div className="image-area">
        <span className="image-area-text">
          <h2>Create an Tenant Account</h2>
          <span>
            {" "}
            Rentomatic Rooms offers free findings of your rooms. Create your
            tenant account with preferred rooms details. You will find rooms
            with good owner in no time.
          </span>
        </span>
      </div>
      <div className="user-details-container">
        <div className="user-details">
          <label for="full-name">Full name:</label> <input type="text" />
          <br />
          <label for="dob">Date of Birth:</label> <input type="date" />
          <br />
          <label for="address">Address:</label> <input type="text" />
          <br />
          <label for="phone">Phone number:</label> <input type="text" />
          <br />
          <label for="gender">Gender:</label>{" "}
          <select>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
          <br />
          <label for="email">Email:</label>
          <input type="email" />
          <br />
          <label for="password">Password:</label>
          <input type="password" />
          <br />
        </div>
        <div className="title-and-description-image">
          <h4>Add your room Images:</h4>
          <input type="file" />
        </div>
      </div>
      <div className="profile">
        <div className="profile-title">
          <h2>My profile</h2>
          <span></span>
        </div>
        <div className="profile-content">
          <label>I am:</label>
          <select>
            <option></option>
          </select>
          <label>Age:</label>
          <select>
            <option></option>
          </select>
          <label>Occupation:</label>
          <select>
            <option></option>
          </select>
          <br />
          <label>Profile Description:</label>
          <textarea placeholder="Describe more about you and the type of room you are looking for."></textarea>
        </div>
      </div>
      <div className="preference">
        <label>Room Location:</label>
        <select>
          <option></option>
        </select>
        <label>Room Type:</label>
        <select>
          <option></option>
        </select>
        <br />
        <label>Rent Duration:</label>
        <select>
          <option></option>
        </select>
        <label>Rent per Month:</label>
        <select>
          <option></option>
        </select>
        <br />
        <label>Available Within:</label>
        <select>
          <option></option>
        </select>
        <br />
        <input type="checkbox" />
        <label for="Internet">Internet</label>
        <input type="checkbox" />
        <label for="Pets">Pets Allowed</label>
        <input type="checkbox" />
        <label for="Parking">Parking</label>
        <input type="checkbox" />
        <label for="bathroom">Attached Bathroom</label>
        <br />
        <ReCAPTCHA sitekey="I'm not a robot" onChange={onChange} />
        <div className="terms">
          {" "}
          <input type="checkbox" />
          <span>
            I have read and agree the Terms & Privacy Policy of Rentomatic
            Rooms.
          </span>
        </div>
        <div className="create">
          <button type="submit">Create Tenant Account</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default createTenantAccount;
