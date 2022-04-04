import React,{useState} from "react";
import {Link, useNavigate,useParams} from 'react-router-dom'
import { Modal } from '@mantine/core';
import { searchRoom } from "../helper/ApiHelper";
import "./Hero.css";
import Bouddha from './img/bouddha.png'
import Patan from './img/patan.png'
import Bhaktapur from './img/bhaktapur.png'
import Baneshor from './img/baneshor.png'
import Pepsicola from './img/pepsicola.png'
import Kritipur from './img/kritipur.png'



function Hero() {

  const [search,setSearch] = useState();
  const [opened, setOpened] = useState(false);
  let navigate = useNavigate();
let params = useParams();


  function handleSearch(){

navigate(`/findroom/?location=${search}`)
}

  return (
    <>
      
      <div className="hero">
        <div className="hero-description">
          <h2 className="hero_heading" >Rooms for Rent</h2>
          <h3 className="hero_sub_heading">Find your suitable rentals</h3>
          <br />
          <br />
          <div className="searchspan">
            <input
              type="text"
              className="search"
              placeholder="Enter an address , city or area"
              onChange={e=>setSearch(e.target.value)}
              onKeyPress={event => {
                if (event.key === 'Enter') {
                  handleSearch()
                }
              }}
            ></input>
            <img className="searchicon" src={require("./img/searchicon.png")} />
          </div>
        </div>
      </div>
    <div className="hero-section-wrapper">

      <div className="hero-section">
        <h4 className="customer"> Customer rating</h4>
        <div className="rating">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star"></span>
          <span className="fa fa-star"></span>
        </div>
        <div className="rating-description">
          <span>Average rating</span>
          <span>4</span>/<span>5</span>
        </div>
      </div>
      </div>

      <Modal
      overflow="inside"
        opened={opened}
        onClose={() => setOpened(false)}
        title="Publish your add!"
      >
          <div className="room-details">
      <div className="room-details-title">
          <span>Room Details:</span>
          <hr className="seperater right"></hr>
        </div>
        <div className="room-details-content">
        <label for="room-types">Room types:</label>{" "}
        <select className="xyz"
        // value={formValues.owner.roomDetails.roomType}
        // onChange={(e) =>
                      // renderProps.setFieldValue("owner.roomDetails.roomType", e.target.value)
                  // }
                  >
          <option value="Single">Single</option>
          <option value="Double">Double</option>
        </select><br />
        <label for="available">Available From:</label> 
        <input
         type="date"
        //  value={formValues.owner.roomDetails.roomType}
        //  onChange={(e) =>
        //                renderProps.setFieldValue("owner.roomDetails.roomType", e.target.value)
        //            }
         />
        <br />
        <label for="rent-duration">Rent Duration:</label> 

        <select 
        className="xyz"
        // value={formValues.owner.roomDetails.rentDuration}
        // onChange={(e) =>
                      // renderProps.setFieldValue("owner.roomDetails.rentDuration", e.target.value)
                  // }
        >
          <option value="Under 6 months">Under 6 months</option>
          <option value="More than 6 months" >More than 6 months</option>
          <option value="Unlimited">Unlimited</option>

        </select>
        <label for="rent-per-month">Rent per Month:</label>{" "}
        <input type="text"
        // value={formValues.owner.roomDetails.rentPerMonth}
        // onChange={(e) =>
                      // renderProps.setFieldValue("owner.roomDetails.rentPerMonth", e.target.value)
                  // }
        />
        <br />
        <label for="work-preference">Tenant preference:</label>{" "}
        <select 
        className="xyz"
        // value={formValues.owner.tenantPreference}
        // onChange={(e) =>
                      // renderProps.setFieldValue("owner.tenantPreference", e.target.value)
                  // }
        >
          <option value="Male" >Male</option>
          <option value="Female">Female</option>
          <option value="Couple">Couple</option>
          <option value="Others">Others</option>
        </select>
        <label for="work-preference">Work preference:</label>{" "}
        <select 
        className="xyz"
        // value={formValues.owner.workPreference}
        // onChange={(e) =>
                      // renderProps.setFieldValue("owner.workPreference", e.target.value)
                  // }
        >
          <option value="Student">Student</option>
          <option value="Employeed">Employeed</option>
          <option value="Retired">Retired</option>
          <option value="Other">Other</option>

        </select>
        <br />
        {/* <div className="rooms-checkbox">
        <input type="checkbox" />
        <span>Internet</span>
        <input type="checkbox" />
        <span>Pets Allowed</span>
        <input type="checkbox" />
        <span>Parking</span>
        <input type="checkbox" />
        <span>Attached Bathroom</span>
        </div> */}
        </div>
      </div>
      <div className="room-address">
      <div className="room-address-title">
          <span>Room Address:</span>
          <hr className="seperater right"></hr>
        </div>
        <label for="district">District:</label>
        <select
        className="xyz"
          // value={formValues.owner.roomAddress.district}
          // onChange={(e) =>
          //               renderProps.setFieldValue("owner.roomAddress.district", e.target.value)
          //           }
        >
          <option value="Kathmandu" >Kathmandu</option>
          <option value="Bhaktapur">Bhaktapur</option>
          <option value="Lalitpur">Lalitpur</option>

        </select>
        <br />
        <label for="area">Area:</label>
        <input
        type="text"
        // value={formValues.owner.roomAddress.area}
        // onChange={(e) =>
        //               renderProps.setFieldValue("owner.roomAddress.area", e.target.value)
        //           }
        />
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
          <input 
              type="text"
            //  value={formValues.owner.title}
            //  onChange={(e) =>
            //                renderProps.setFieldValue("owner.title", e.target.value)
            //            }
          />
          <br />
          <label for="ad-description">Ad Description:</label>
          <textarea
            //  value={formValues.owner.description}
            //  onChange={(e) =>
            //                renderProps.setFieldValue("owner.description", e.target.value)
            //            }
          />
          <br />
        </div>
        <div className="title-and-description-image">
          <h4>Add your room Images:</h4>
          <input 
          type="file"
          // value={formValues.owner.images}
          //    onChange={(e) =>
          //                  renderProps.setFieldValue("owner.images", e.target.value)
          //              }
          />
        </div>
        </div>
      </div>
      </Modal>
      <div className="card-section">
        <div className="card-1">
          <div className="card-description">
            <h2>Got a Room to Rent?</h2>
            <h4>
              Rentomatic rooms provides its users with free advertisement. Your
              room will be rented to a good Tenant in short period of time.
            </h4>
          </div>
          <div className="card-bottom">
            <div className="btndiv">
              <button
              onClick={() => setOpened(true)}
              className="btns">List Your Rooms</button>
              <span className="btnplus fa-solid fa-plus"></span>
            </div>
          </div>
        </div>
        <div className="card-2">
        <div className="card-description">
            <h2>Need a Room?</h2>
            <h4>
              Rentomatic Rooms provides its users with free room findings.Your 
              will be able to find your preferred rooms in short time.
            </h4>
          </div>
          <div className="card-bottom">
            <div className="btndiv">
              <Link
              to={'/findroom'}
              >
              <button
              className="btns">Find Your Room</button>
              </Link>
             
              <span className="btnplus fa-solid fa-home"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-section-2">
        <div className="title-hero-section-2">
          <h2>Rent Easily With Safety</h2>
        </div>
        <div className="hero-section-2-card">
          <div className="card">
            <i class="file fa-4x fa-solid fa-file"></i>
            <h5>List Room Easily</h5>
            <span>Post available rooms with details and find tenants easily</span>
          </div>
          <div className="card">
            <i class="file fa-4x fa-solid fa-globe"></i>
            <h5>Online Room Tour</h5>
            <span>Search rooms and view their details with images.</span>
          </div>
          <div className="card">
            <i class="file fa-4x fa-solid fa-phone-volume"></i>
            <h5>Quick contact</h5>
            <span>Find preferred rooms or tenants and contact easily to rent.</span>
          </div>
        </div>
      </div>

      <div className="hero-section-3">
        <div className="title-hero-section-3">
          <h2>Explore rooms in popular Areas</h2>
        </div>
        <div className="hero-section-3-card-section">
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Boudha
        </div>
        <img src={Bouddha} />
        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Patan
        </div>
        <img src={Patan} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Bhaktapur
        </div>
        <img src={Bhaktapur} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Baneshor
        </div>
        <img src={Baneshor} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Pepsicola
        </div>
        <img src={Pepsicola} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Kritipur
        </div>
        <img src={Kritipur} />

        </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
