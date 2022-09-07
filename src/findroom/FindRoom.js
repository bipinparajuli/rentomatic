import React from "react";
import "./FindRoom.css";
import { useState, useEffect } from "react";

import room from "./img/1.png";
import ImageHelper from '../helper/ImageHelper'
import {getAllRooms, searchRoom} from '../helper/ApiHelper'
import { Link,useNavigate} from "react-router-dom";
import { addItemToCart } from "../helper/CartHelper";

function FindRoom() {
  let navigate = useNavigate();

  const [value, onChange] = useState(1);
  const [active, setActive] = useState({
    recent:false,
    cheapest:false,
    expensive:false,
    kathmandu:false,
    lalitpur:false,
    bhaktapur:false,
    male:false,
    female:false,
    family:false,
    short:false,
    long:false
  });
  const [products, setProducts] = useState([
    // {
    //   owner:{
    //     description:"helper",
    //     roomAddress:{
    //       district:"kathmandu"
    //     },
    //     roomDetails:{
    //       rentPerMonth:100
    //     }
    //   },
    //   _id:1,

    // }
  ]);
  const [error, setError] = useState(false);
  const queryParams = new URLSearchParams(window.location.search)
  // const term = queryParams.get("term")
  const location = queryParams.get("location")
  let price = queryParams.get("price")
  let preference = queryParams.get("preference")
  let duration = queryParams.get("duration")

const {bhaktapur,cheapest,expensive,family,female,kathmandu,lalitpur,long,male,recent,short} = active

  console.log(duration);
  
  const preloadProducts = async ()  => {
    if(location){
 
      if(location == "Kathmandu"){
        setActive({kathmandu:true})
      }
      if(location == "Lalitpur"){
        setActive({lalitpur:true})
      }
      if(location == "Bhaktapur"){
        setActive({bhaktapur:true})
      }
      
      await  searchRoom("location",location).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });
    }
    if(price){
      if(price == "cheapest"){
        setActive({cheapest:true})
      }
      if(price == "expensive"){
        setActive({expensive:true})
      }
      await  searchRoom("price",price).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });
    }
    if(preference){

      if(preference == "male"){
        setActive({male:true})
      }
      if(preference == "female"){
        setActive({female:true})
      }
      if(preference == "family"){
        setActive({family:true})
      }

      await  searchRoom("preference",preference).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });
    }
    //Duration
    if(duration){
      if(duration == "short"){
        setActive({short:true})
      }
      if(duration == "long"){
        setActive({long:true})
      }

      await  searchRoom("duration",duration).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });
    }
    if(!price && !location && !preference && !duration ){
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

  function handleBookMark(room){
    addItemToCart(room)
  }

  useEffect(() => {
    preloadProducts();
  }, []);
  useEffect(() => {
    const ele = document.querySelector(".slider-mechanism");
    if (ele) {
      ele.style.left = `${Number(value)}px`;
    }
  });
  console.log(active);
  return (
    <>
      <div className="findroom-main-section">
        <div className="title-main-section">
          <h2 style={{padding:"32px 0",color:"#183639",fontSize:"40px"}}>Find Your Preferred Room</h2>
        </div>
        <div className="main-section-hero">
          <div className="example">
            {products.map((room)=>{
              console.log(room.owner.images);
              return (
                <>
                <div style={{margin:"10px 20px"}} class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    {/* <a href="#"> */}
        {/* <ImageHelper  productId={room._id} className="rounded-t-lg" /> */}
        <img src={room.owner.images} />

    {/* </a> */}
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            { room.owner !== undefined? room.owner.roomAddress.district : "wait . . . " }
              </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        { room.owner !== undefined? room.owner.description : "wait . . . " }
                </p>
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rs. { room.owner !== undefined? room.owner.roomDetails.rentPerMonth : "wait . . . " } per Month
            </h6>
        <i className="heart fa-solid fa-heart"
                  onClick={()=>{
                    handleBookMark(room)
                  
                  }}
                  ></i>
                   <Link to={`/room/${room.owner._id}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
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
              <h3 style={{fontWeight:"bold",fontSize:"30px"}}>Filters</h3>
            </div>
            <div className="filter-content">
              <span>What are you looking for?</span>
              <br />
              <div>
                <button onClick={()=>setActive(true)} className={active?"active":""} >
                <Link className="tenant-btn" to={`/findtenant`}>

                  Tenant
                </Link>

                  </button>
                <button onClick={()=>setActive(true)} className={active?"active":""} >
                <Link className="room-btn" to={`/findroom`}>
                  
                  Room
                  </Link>
                  
                  </button>
              </div>
              <span>Sort By</span>
              <br />
              <div>
                <button 
                onClick={()=>setActive({recent:true})} 
                className={`recent-btn ${recent?"active":""}`}
                
                >Recent</button>
                <button 
                 onClick={()=> {
                  navigate(`/findroom/?price=cheapest`)
                  window.location.reload()
                  setActive({cheapest:true})


                }
              }
                className={`cheapest-btn ${cheapest?"active":""}`}
                >Cheapest</button>
                <button 
                onClick={()=> {
                  navigate(`/findroom/?price=expensive`)
                  window.location.reload()
                  setActive({expensive:true})

                }
              } 
                className={`expensive ${expensive?"active":""}`}
                
                >Expensive</button>
              </div>
              <span>Location:</span>
              <br />
              <div>
                <button 
                onClick={()=> {
                  navigate(`/findroom/?location=Kathmandu`)
                  window.location.reload()

                }
              }
                
                className={`kathmandu-btn selected-btn ${kathmandu?"active":""}`}>
                  Kathmandu
                </button>
                <button className={`lalitpur-btn ${lalitpur?"active":""}`}
          onClick={()=> {
            navigate(`/findroom/?location=Lalitpur`)
            window.location.reload()
            
          }}
                
                >Lalitpur</button>
                <button className={`bhaktapur-btn ${bhaktapur?"active":""}`}
          onClick={()=> {
            navigate(`/findroom/?location=Bhaktapur`)
            window.location.reload()

          }
        }
                
                >Bhaktapur</button>
              </div>
              <span>Room For:</span>
              <br />
              <div>
                <button
                onClick={()=> {
                  navigate(`/findroom/?preference=male`)
                  window.location.reload()
                }}
                className={`male-btn ${male?"active":""}`}>Male</button>
                
                <button 
                onClick={()=> {
                  navigate(`/findroom/?preference=female`)
                  window.location.reload()
                }}
                className={`female-btn ${female?"active":""}`}>Female</button>
                <button
                onClick={()=> {
                  navigate(`/findroom/?preference=family`)
                  window.location.reload()
                }}
                className={`family ${family?"active":""}`}>Family</button>
              </div>
              <span>Stay Duration:</span>
              <br />
              <div>
                <button 
                  onClick={()=> {
                    navigate(`/findroom/?duration=short`)
                    window.location.reload()
                  }}
                className={`shortTerm-btn ${short?"active":""}`}>Short Term</button>
                <button 
                  onClick={()=> {
                    navigate(`/findroom/?duration=long`)
                    window.location.reload()
                  }}
                className={`longTerm-btn ${long?"active":""}`}>Long Term</button>
              </div>
              {/* <span>Rent for Month</span> */}
              <br />
            </div>
            {/* <div className="slider-div">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default FindRoom;
