import React from "react";
import "./FindRoom.css";
import { useState, useEffect } from "react";

function FindRoom() {
  const [value, onChange] = useState(1);
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
            <div className="example-card">
              <div className="image"></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span>Baneshwor</span>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
            <div className="example-card">
              <div className="image"></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span>Baneshwor</span>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
            <div className="example-card">
              <div className="image"></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span>Baneshwor</span>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
            <div className="example-card">
              <div className="image"></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                  <i className="heart fa-solid fa-heart"></i>
                  <br />
                </span>
                <span>Baneshwor</span>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
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
                <button className="kathmandu-btn selected-btn">Kathmandu</button>
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
