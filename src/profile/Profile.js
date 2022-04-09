import React, { useState, useEffect } from "react";
// import { getAllCartItems, removeItemFromCart } from '../helper/CartHelper';
import ImageHelper from "../helper/ImageHelper";

import "./Profile.css";

const Profile = () => {
  const [products, setProducts] = useState([
    {
        owner: {
          description: "helper",
          roomAddress: {
            district: "kathmandu",
          },
          roomDetails: {
            rentPerMonth: 100,
          },
        },
        _id: 1,
    },
  ]);
  const [reload, setReload] = useState(true);

  // const loadAllCartProducts = () => {
  //   setProducts(getAllCartItems());
  // };

  const reloadPage = () => {
    setReload(!reload);
  };

  // useEffect(() => {
  //     loadAllCartProducts();
  //   }, [reload]);

  return (
    <>
      <div className="profile-main">
        <div style={{ width: "70%" }}>Profile</div>

        <div style={{ width: "30%" }} className="example">
          <h2 style={{marginBottom:"-.75rem"}}>Book marked:</h2>
          
          {products.map((room) => {
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
                      {room.owner !== undefined
                        ? room.owner.description
                        : "wait . . . "}
                      <i
                        className="heart fa-solid fa-heart"
                        //   onClick={()=>handleBookMark(room)}
                        onClick={() => {
                          // removeItemFromCart(room._id);
                          reloadPage();
                        }}
                      ></i>
                      <br />
                    </span>
                    <span>
                      {" "}
                      {room.owner !== undefined
                        ? room.owner.roomAddress.district
                        : "wait . . . "}
                    </span>
                    {/* <Link to={`/room/${room.owner._id}`}> */}
                    {/* <button>More</button> */}
                    {/* </Link>  */}
                    <br />
                    <span>
                      Rs.{" "}
                      {room.owner !== undefined
                        ? room.owner.roomDetails.rentPerMonth
                        : "wait . . . "}{" "}
                      per Month
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Profile;
