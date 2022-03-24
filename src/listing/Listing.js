import React from "react";
import image from "./img/en.jpg";
import "./Listing.css";

const Listing = () => {
  return (
    <div className="container">
      <div className="listing-container">
        <div className="listing-container-image">
          <img src={image} />
        </div>
        <div className="listing-container-content">
          <div className="content-title">
            <h2>Studio of 98 m² in Dublin</h2>
            <h4>Ireland, Dublin, Dublin , Aungier Street</h4>
            <hr />
            <div className="content-description">
              <div className="content-description-type">
                <ul>
                  <li>Area:</li>
                  <li>Bedrooms:</li>
                  <li>Property Types:</li>
                  <li>Verified by Rentomatic</li>
                  <li>Case Number:</li>
                </ul>
              </div>
              <div className="content-description-content">
                <ul>
                  <li>
                    98m<sup>2</sup>
                  </li>
                  <li>1 Bedroom</li>
                  <li>Studio</li>
                  <li>Yes</li>
                  <li>80202</li>
                </ul>
              </div>
              <div className="content-description-map"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="input">
         <div><i class="fa-2x fa-solid fa-envelope"></i><input type="text"></input></div>
          <button>Contact Landlord</button>
        </div>
    </div>
  );
};

export default Listing;
