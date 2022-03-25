import React from "react";
import "./createOwnerAccount.css";
import ReCAPTCHA from "react-google-recaptcha";

function createUserAccount() {
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <>
    <div className="user-account">
      <div className="image-area">
        <span className="image-area-text">
          <h2>Create an Owner Account</h2>
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
      <div className="user-details">
      <div className="user-details-title">
          <span>My Account Details:</span>
          <hr className="seperater right"></hr>
        </div>
        <div className="user-details-description">
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
      </div>
      <div className="room-details">
      <div className="room-details-title">
          <span>Room Details:</span>
          <hr className="seperater right"></hr>
        </div>
        <div className="room-details-content">
        <label for="room-types">Room types:</label>{" "}
        <select className="xyz">
          <option>Single</option>
          <option>Double</option>
        </select>
        <label for="available">Available From:</label> <input type="date" />
        <br />
        <label for="rent-duration">Rent Duration:</label> <input type="text" />
        <label for="rent-per-month">Rent per Month:</label>{" "}
        <input type="text" />
        <br />
        <label for="tenant-preference">Rent per Month:</label>{" "}
        <input type="text" />
        <label for="work-preference">Work preference:</label>{" "}
        <input type="text" />
        <br />
        <div className="rooms-checkbox">
        <input type="checkbox" />
        <span>Internet</span>
        <input type="checkbox" />
        <span>Pets Allowed</span>
        <input type="checkbox" />
        <span>Parking</span>
        <input type="checkbox" />
        <span>Attached Bathroom</span>
        </div>
        </div>
      </div>
      <div className="room-address">
      <div className="room-address-title">
          <span>Room Address:</span>
          <hr className="seperater right"></hr>
        </div>
        <label for="district">District:</label>
        <select>
          <option>Kathmandu</option>
          <option>Bhaktapur</option>
          <option>Lalitpur</option>

        </select>
        <br />
        <label for="area">Area:</label>
        <select>
          <option></option>
        </select>
        <br />
      </div>
      <div className="title-and-description">
      <div className="title-description-title">
          <span>Title and Description:</span>
          <hr className="seperater right"></hr>
        </div>
        <div className="title-and-description-content">
        <div className="title-and-description-text">
          <label for="ad-title">Ad Title:</label>
          <input type="text" />
          <br />
          <label for="ad-description">Ad Description:</label>
          <textarea />
          <br />
        </div>
        <div className="title-and-description-image">
          <h4>Add your room Images:</h4>
          <input type="file" />
        </div>
        </div>
      </div>
      <div>
        
        <ReCAPTCHA className="re" sitekey="I'm not a robot" onChange={onChange} />
        <div className="terms">
          {" "}
          <input type="checkbox" />
          <span>
            I have read and agree the Terms & Privacy Policy of Rentomatic
            Rooms.
          </span>
        </div>
        <div className="create">
            <button type="submit">Create Owner Account with Ads</button>

        </div>
      </div>
      </div>
    </>
  );
}

export default createUserAccount;
