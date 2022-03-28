import React from "react";
import "./FindRoom.css";
import { useState, useEffect } from "react";

import room from "./img/1.png";
import ImageHelper from '../helper/ImageHelper'
import {getAllRooms, searchRoom} from '../helper/ApiHelper'
import { Link,} from "react-router-dom";

function FindRoom() {
  const [value, onChange] = useState(1);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const queryParams = new URLSearchParams(window.location.search)
  // const term = queryParams.get("term")
  const location = queryParams.get("location")
  // const api = "https://cors-anywhere.herokuapp.com/localhost:5000/api/v1/users/getphoto/623c5932f9ab201e74deb3dc"
  
  const preloadProducts = async ()  => {
    if(location){
      await  searchRoom(location).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });
    }else{
      await  getAllRooms().then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });
    }
   
  };

  useEffect(() => {
    preloadProducts();
  }, []);
  useEffect(() => {
    const ele = document.querySelector(".slider-mechanism");
    if (ele) {
      ele.style.left = `${Number(value)}px`;
    }
  });
  return (
    <>
      <div className="findroom-main-section">
        <div className="title-main-section">
          <h2>Find Your Preferred Room</h2>
        </div>
        <div className="main-section-hero">
          <div className="example">
            {products.map((room)=>{
              console.log(room);
              return (
                <>
                  <div key={room._id} className="example-card">
              <div className="image">
                {/* <img src={api} /> */}
                <ImageHelper productId={room._id} />
                </div>
              <div className="image-description">
                <span className="image-description-title">
                  { room.owner !== undefined? room.owner.description : "wait . . . " }
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span> { room.owner !== undefined? room.owner.roomAddress.district : "wait . . . " }</span>
                <Link to={`/room/${room.owner._id}`}>
                  <button>More</button>
                </Link> 
                <br />
                <span>Rs. { room.owner !== undefined? room.owner.roomDetails.rentPerMonth : "wait . . . " } per Month</span>
              </div>
            </div>
                </>
              )
            })}
          
            {/* <div className="example-card">
              <div className="image"><img src={room}></img></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span>Baneshwor</span><button>More</button>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
            <div className="example-card">
              <div className="image"><img src={room}></img></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span>Baneshwor</span><button>More</button>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
            <div className="example-card">
              <div className="image"><img src={room}></img></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span>Baneshwor</span><button>More</button>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div> */}
          </div>
          <div className="filters">
            <div className="filters-title">
              <h3>Filters</h3>
            </div>
            <div className="filter-content">
              <span>What are you looking for?</span>
              <br />
              <div>
                <button className="tenant-btn">Tenant</button>
                <button className="room-btn">Room</button>
              </div>
              <span>Sort By</span>
              <br />
              <div>
                <button className="recent-btn">Recent</button>
                <button className="cheapest-btn">Cheapest</button>
                <button className="expensive">Expensive</button>
              </div>
              <span>Location:</span>
              <br />
              <div>
                <button className="kathmandu-btn selected-btn">
                  Kathmandu
                </button>
                <button className="lalitpur-btn">Lalitpur</button>
                <button className="bhaktapur-btn">Bhaktapur</button>
              </div>
              <span>Room For:</span>
              <br />
              <div>
                <button className="male-btn">Male</button>
                <button className="female-btn">Female</button>
                <button className="family">Family</button>
              </div>
              <span>Stay Duration:</span>
              <br />
              <div>
                <button className="shortTerm-btn">Short Term</button>
                <button className="longTerm-btn">Long Term</button>
              </div>
              <span>Rent for Month</span>
              <br />
            </div>
            <div className="slider-div">
              <div className="slider">
                <div className="min">1</div>
                <div className="slider-main">
                  <input
                    type="range"
                    min="1"
                    max="500"
                    value={value}
                    onChange={({ target: { value: radius } }) => {
                      onChange(radius);
                    }}
                  />
                </div>
                <div className="slider-mechanism">{value}</div>
                <div className="slider-mechanism">500</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FindRoom;
