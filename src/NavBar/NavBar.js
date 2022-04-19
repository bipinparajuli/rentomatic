import React, { useState } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { deleteSession, hasToken } from "../helper/session";



console.log(hasToken());
function NavBar() {
  const [screenSize, setScreenSize] = useState("notMobile");

  function handleLogout(){
    deleteSession()
    window.location.reload()
  }

  return (
    <>
      <nav>
        <Link to={"/"}>
          <img src={Logo} />
        </Link>
        <div
          className="hamburger"
          onClick={() =>
            screenSize === "mobile"
              ? setScreenSize("notMobile")
              : setScreenSize("mobile")
              
          }
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <ul className={screenSize}>
          <li className="nav-item">
            <Link to={`/findTenant`}>Tenant</Link>
          </li>
          <li className="nav-item">
            <Link to={`/findRoom`}>Rent</Link>
          </li>
          {hasToken()?
          <>
          <li className="nav-item">
             <Link to={`/profile`}>Profile</Link>
           </li>
           <li className="nav-item">
             <Link
             onClick={handleLogout}
             to={`/register`}>Logout</Link>
           </li>
          </>
           
           :
           <>
            <li className="nav-item">
            <Link to={`/login`}>Login</Link>
          </li>
          <li className="nav-item">
            <Link to={`/register`}>Register</Link>
          </li>
          </>

          }
         
          {/* <li><Link to={'/findRoom'}>Find Room</Link></li> */}
          {/* <li><Link to={'/findTenant'}>Find Tenant</Link></li> */}
          {/* <li><Link to={'/listing'}>Listing</Link></li> */}
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
