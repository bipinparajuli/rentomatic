import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GoogleMapReact from "google-map-react";

import { getRoomById } from "../helper/ApiHelper";
import ImageHelper from "../helper/ImageHelper";
import image from "./img/en.jpg";
import "./Listing.css";

const Listing = () => {
  let { id } = useParams();

  const [values, setValues] = useState({
    // name: "",
    // description: "",
    // price: "",
    // stock: "",
    // photo: "",
    // category: "",
    // loading: false,
    // err: "",
    // success: false,
    // formData: "",
  });

  const defaultProps = {
    center: {
      lat: 28,
      lng: 84,
    },
    zoom: 11,
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  const preloadProduct = async (next) => {
    await getRoomById(id).then((data) => {
      console.log(data);
      if (data.err) {
        setValues({ ...values, err: data.err });
      } else {
        setValues(
          data
          // ...values,
          // name: data.name,
          // description: data.description,
          // price: data.price,
          // stock: data.stock,
          // category: data.category,
          // formData: new FormData(),
        );
      }
    });
  };
  console.log(values);
  useEffect(() => {
    preloadProduct();
  }, []);
  return (
    <div className="container">
      <div className="listing-container">
        <div className="listing-container-image">
          {/* <img src={image} /> */}
          <ImageHelper />
        </div>
        <div className="listing-container-content">
          <div className="content-title">
            <h2>
              {values.roomAddress !== undefined
                ? values.description
                : "wait . . . "}
            </h2>
            <h4>
              {" "}
              {values.roomAddress !== undefined
                ? values.roomAddress.district
                : "wait . . . "}
            </h4>
            <hr />
            <div className="content-description">
              <div className="content-description-type">
                <ul>
                  <li>Area:</li>
                  {/* <li>Bedrooms:</li> */}
                  <li>Rental Period:</li>
                  <li>Verified by Rentomatic</li>
                  <li>Property Type</li>
                  <li>Case Number:</li>
                </ul>
              </div>
              <div className="content-description-content">
                <ul>
                  <li>
                    {values.roomAddress !== undefined
                      ? values.roomAddress.area
                      : "wait . . . "}
                    m<sup>2</sup>
                  </li>
                  <li>
                    {values.roomAddress !== undefined
                      ? values.roomDetails.rentDuration
                      : "wait . . . "}
                  </li>
                  <li>Studio</li>
                  <li>Yes</li>
                  <li>80202</li>
                </ul>
              </div>
              </div>
              <div
                className="content-description-map"
                style={{ }}
              >
                <div  style={{ height: "20vh" ,overflow:"scroll"}}>
                  <GoogleMapReact
                    bootstrapURLKeys={{
                      key: "AIzaSyA0EZwSE1rQCNi2k2enIApfYpQwbONKVEQ",
                    }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                  >
                    <AnyReactComponent
                      lat={59.955413}
                      lng={30.337844}
                      text="My Marker"
                    />
                  </GoogleMapReact>
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className="input">
        <div>
          <i class="fa-2x fa-solid fa-envelope"></i>
          <input type="text"></input>
        </div>
        <button>Contact Landlord</button>
      </div>
    </div>
  );
};

export default Listing;
