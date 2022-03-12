import React from "react";
import "./Hero.css";
import Bouddha from './img/bouddha.png'

function Hero() {
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
            ></input>
            <img className="searchicon" src={require("./img/searchicon.png")} />
          </div>
        </div>
      </div>

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
              <button className="btns">List Your Rooms</button>
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
              <button className="btns">Find Your Room</button>
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
         Boudha
        </div>
        <img src={Bouddha} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Boudha
        </div>
        <img src={Bouddha} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Boudha
        </div>
        <img src={Bouddha} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Boudha
        </div>
        <img src={Bouddha} />

        </div>
        <div className="hero-section-3-card">
        <div className="title-hero-section-3-card">
         Boudha
        </div>
        <img src={Bouddha} />

        </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
