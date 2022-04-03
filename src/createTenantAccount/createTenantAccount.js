import React from "react";
import "./createTenantAccount.css";
import ReCAPTCHA from "react-google-recaptcha";

import image from  './img/house.png';

function createTenantAccount() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
      <div className="tenant-account">
      <div className="image-area">
        <img src={image}></img>
        <span className="image-area-text">
          <h2>Create an Tenant Account</h2>
          <div>
          <span>
            {" "}
            Rentomatic Rooms offers free advertisement of your rooms. Create
            your owner account and list rooms with proper details. Your rooms
            will be rented out to a good tenant in no time.
          </span>
          </div>
        </span>
      </div>
        <div className="user-details-container">
          <div className="user-details">
          <div className="user-details-title">
          <span>My Account Details:</span>
          <hr className="seperater right"></hr>
        </div >
        <div className="user-details-content">
          <div className="user-details-content-left">
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
            <option>Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <label for="email">Email:</label>
            <input 
            type="email" 
            
            />
            <br />
            <label for="password">Password:</label>
            <input type="password" />
            <br />
          </div>
          <div className="user-details-content-right">
            <h4>Add your room Images:</h4>
            <input type="file" className="file"/>
          </div>
          </div>
        </div>
        </div>
        <div className="profile">
        <div className="user-details-title">
          <span>My Profile:</span>
          <hr className="seperater right"></hr>
        </div >
          <div className="profile-content">
            <label>I am:</label>
            <select>
              <option >Select</option>

              <option value="Student">Student</option>
              <option value="Employeed">Employeed</option>
              <option value="Retired">Retired</option>
              <option value="Other">Other</option>

            </select>
            <label>Age:</label>
            <input type="number" />
            <label>Occupation:</label>
            <select>
              <option value="Student">Student</option>
              <option value="Employeed">Employeed</option>
              <option value="Retired">Retired</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <label>Profile Description:</label>
            <textarea placeholder="Describe more about you and the type of room you are looking for."></textarea>
          </div>
        </div>
        <div className="preferences">
        <div className="preferences-title">
          <span>Preferred Rooms:</span>
          <hr className="seperater right"></hr>
        </div >
        <div className="preferences-content">
          <div className="preferences-content-left">
          <label>Room Location:</label>
          <select>
          {/* enum: ['Kathmandu', 'Bhaktapur', 'Lalitpur'], */}
          <option>Select</option>
            <option>Kathmandu</option>
            <option>Bhaktapur</option>
            <option>Lalitpur</option>

          </select>
          <br/>
          <label>Rent Duration:</label>
          <select>
        {/* enum: ['Under 6 months', 'More than 6 months', 'Unlimited'], */}
        <option>Select</option>
            <option>Under 6 months</option>
            <option>More than 6 months</option>
            <option>Unlimited</option>

          </select>
          <br />
          <label>Available Within:</label>
          <input type="date" />
          </div>
          <div className="preferences-content-right">
          <label>Room Type:</label>
          <select>
            <option>Select</option>
            <option>Single</option>
            <option>Double</option>
            
          </select>
          <br />
          <label>Rent per Month:</label>
            <input type="text" />
          </div>
          </div>
          <br />
          <div className="selection-div">
          <div><input type="checkbox" />
          <label for="Internet">Internet</label></div>
         <div> <input type="checkbox" />
          <label for="Pets">Pets Allowed</label></div>
         <div> <input type="checkbox" />
          <label for="Parking">Parking</label></div>
         <div> <input type="checkbox" />
          <label for="bathroom">Attached Bathroom</label></div>
          <br />

          </div>
          <div className="rec">
          <ReCAPTCHA sitekey="I'm not a robot" onChange={onChange} />
          </div>
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
