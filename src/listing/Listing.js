import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

import { getRoomById } from "../helper/ApiHelper";
import ImageHelper from "../helper/ImageHelper";
import image from "./img/en.jpg";
import "./Listing.css";

const Listing = () => {
  let { id } = useParams();
  const [state, setState] = useState({lng:"",lat:""})
  const [values, setValues] = useState({
   
  });

  const {lat,lng} = state;

  
  const LIBRARIES = ["places"];


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
    // setState("hello")
  }, []);

  useEffect(()=>{

    if(values.roomAddress !== undefined){

  
      if(values.roomAddress.district == "Kathmandu"){
        setState({...state,lat:27.7172,lng:85.3240})
      }
      if(values.roomAddress.district == "Bhaktapur"){
        setState({...state,lat:27.6710,lng:85.4298})
        
      }
      if(values.roomAddress.district == "Lalitpur"){
        setState({...state,lat:27.6588,lng:85.3247})
        
      }
    }
  },[values])
console.log(state);
  return (
    <div className="container">
      <div className="listing-container">
        <div className="listing-container-image">
          {/* <img src={image} /> */}
          <ImageHelper 
          // productId={values._id}
           />
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
              {/* <div
                className="content-description-map"
                style={{ }}
<<<<<<< HEAD
              > */}
                {/* <div style={{ width:"200px",height: "50vh" }}> */}
                {/* <LoadScript googleMapsApiKey="AIzaSyA0EZwSE1rQCNi2k2enIApfYpQwbONKVEQ" libraries={LIBRARIES}>
          <GoogleMap
            id="map"
            center={defaultProps.center}
            zoom={defaultProps.zoom}
            mapContainerStyle={{ height: "100vh" }}
          >
            {/*  Marker component */}
            {/* <Marker position={{lat:state.lat,lng:state.lng}} /> */}
          {/* </GoogleMap> */}
        {/* </LoadScript> */}
        <MapContainer 
        style={{ height: 280, width: 280 }}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        center={[27.7172, 85.3240]} zoom={13}>
 <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={[27.7172, 85.3240]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker>
</MapContainer>
                  
                {/* </div> */}
            {/* </div> */}

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
