import React,{useState,useEffect} from "react";
import {useParams} from 'react-router-dom'
import { Modal, Button, Group } from '@mantine/core';

// import GoogleMapReact from 'google-map-react';

import { getTenantById } from "../helper/ApiHelper";
import ImageHelper from '../helper/ImageHelper'
import image from "./img/en.jpg";
import "./Listing.css";



const TenantProfile = () => {
  let { id } = useParams();

  const [opened, setOpened] = useState(false);

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
      lng: 84
    },
    zoom: 11
  };

  const AnyReactComponent = ({ text }) => <div>{text}</div>;
  
  const preloadProduct = async (next) => {
    await getTenantById(id).then((data) => {
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
  console.log(values.profileDescription);
  useEffect(() => {
    preloadProduct();
  }, []);
  return (
    <div className="container">
      <div className="listing-container">
        <div className="listing-container-image">
          <img src={values.profileDescription !== undefined? values.profileDescription.images :""} />
          {/* <ImageHelper 
          productId={values._id}
          /> */}
        </div>
        <div className="listing-container-content">
          <div className="content-title">
            <h1>{}</h1>
            <h2>
            { values._id !== undefined? values.profileDescription.bio : "wait . . . " }
            </h2>
            <h4> { values._id !== undefined? `Max rent: Rs ${values.preferredRooms.rentPerMonth} `: "wait . . . " }</h4>
            <hr />
            <div className="content-description">
              <div className="content-description-type">
                <ul>
                  <li>Area:</li>
                  {/* <li>Bedrooms:</li> */}
                  <li>Rental Period:</li>
                  <li>Internet:</li>
                  <li>Pets Allowed:</li>
                  <li>Parking:</li>
                  <li>Attached Bathroom:</li>

                </ul>
              </div>
              <div className="content-description-content">
                <ul>
                  <li>
                    { values._id !== undefined? values.preferredRooms.roomLocation : "wait . . . " }
                  </li>
                  <li>
                  { values._id !== undefined? values.preferredRooms.rentDuration : "wait . . . " }
                  </li>
                  {
                  // console.log(values)
                    values._id !== undefined && values.facilities ? values.facilities.map(data=>{
                      
                      return(<>
                        {data == true ? <li>Yes</li>:<li>No</li>}
                      </>)
                    }):null
                  }
                 
                </ul>
               
              </div>
              {/* <div className="content-description-map" style={{width:"800px",height:"200px"}} >
              <div style={{ height: '10vh', width: '100%' }}> */}
        {/* <GoogleMapReact
          bootstrapURLKeys={{ key:"AIzaSyA0EZwSE1rQCNi2k2enIApfYpQwbONKVEQ"}}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact> */}
      {/* </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="input">
         <div><i class="fa-2x fa-solid fa-envelope"></i><input type="text"></input></div>
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

export default TenantProfile;
