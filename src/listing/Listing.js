import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { LoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Modal, Button, Group } from '@mantine/core';
import { getRoomById } from "../helper/ApiHelper";
import ImageHelper from "../helper/ImageHelper";
import image from "./img/en.jpg";
import "./Listing.css";

const Listing = () => {
  let { id } = useParams();
  const [state, setState] = useState({lng:"",lat:""})
  const [values, setValues] = useState({
   
  });
  const [opened, setOpened] = useState(false);
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
  useEffect(() => {
    preloadProduct();
    // setState("hello")
  }, []);

  useEffect(()=>{

    if(values.roomAddress !== undefined){

      setState({...state,lat:JSON.parse(values.roomAddress.area).lat,lng:JSON.parse(values.roomAddress.area).lan})
      
      // if(values.roomAddress.district == "Kathmandu"){
      //   setState({...state,lat:27.7172,lng:85.3240})
      // }
      // if(values.roomAddress.district == "Bhaktapur"){
      //   setState({...state,lat:27.6710,lng:85.4298})
        
      // }
      // if(values.roomAddress.district == "Lalitpur"){
      //   setState({...state,lat:27.6588,lng:85.3247})
        
      // }
    }
  },[values])
  console.log(values);

// console.log(JSON.parse(values.roomAddress.area));
  return (
    <div className="container">
      <div className="listing-container">
        <div className="listing-container-image">
          {/* <img src={image} /> */}
          <ImageHelper 
          productId={id}
           />
        </div>
        <div className="listing-container-content">
          <div className="content-title">
          <h2>
              {values.roomAddress !== undefined
                ? values.title
                : "wait . . . "}
            </h2>
            <h2>
              {values.roomAddress !== undefined
                ? values.description
                : "wait . . . "}
            </h2>
           
            <hr />
            <div className="content-description">
              <div className="content-description-type">
                <ul>
                  <li>Area:</li>
                  {/* <li>Bedrooms:</li> */}
                  <li>Rental Period:</li>
                  <li>Tenant Preference:</li>
                  <li>Rent Per Months:</li>

                  <li>Room Type:</li>
                 
                </ul>
              </div>
              <div className="content-description-content">
                <ul>
                  <li>
                    {values.roomAddress !== undefined
                      ? JSON.parse(values.roomAddress.area).name
                      : "wait . . . "}
                    {/* m<sup>2</sup> */}
                  </li>
                  <li>
                    {values.roomAddress !== undefined
                      ? values.roomDetails.rentDuration
                      : "wait . . . "}
                  </li>
                  <li>
                    {values.roomAddress !== undefined
                      ? values.tenantPreference
                      : "wait . . . "}
                  </li>
                  <li>
                    {values.roomAddress !== undefined
                      ? values.roomDetails.rentPerMonth
                      : "wait . . . "}
                  </li>
                   <li>
                    {values.roomAddress !== undefined
                      ? values.roomDetails.roomType
                      : "wait . . . "}
                  </li>
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
        center={[27.7172, 85.3240]}
        zoom={13}
        // center={[JSON.parse(values.roomAddress.area).lat, JSON.parse(values.roomAddress.area).lng]} zoom={13}
        
        >
 <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  <Marker position={[lat,lng]}>
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
        <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title="Contact Info"
      >
        <h3>{values.name}</h3>
        <h6>{values.owneremail}</h6>
      </Modal>
        <button onClick={() => setOpened(true)} >Contact Landlord</button>
      </div>
    </div>
  );
};

export default Listing;
