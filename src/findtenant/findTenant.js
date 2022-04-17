import React,{useEffect,useState} from "react";


import "./findTenant.css";
import ImageHelper from "../helper/ImageHelper";
import { getAllTenant, searchTenant } from "../helper/ApiHelper";
import { Link,useNavigate } from "react-router-dom";


function FindRoom() {
  const [value, onChange] = useState(1);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  let navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search)
  let location = queryParams.get("location")
  let price = queryParams.get("price")

  console.log(location);

  const api = "https://cors-anywhere.herokuapp.com/localhost:5000/api/v1/users/getphoto/623c5932f9ab201e74deb3dc"
  const preloadProducts = async ()  => {

    if(location){
      await  searchTenant("location",location).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });}
      if(price){
        await  searchTenant("price",price).then((data) => {
          console.log(data);
    
          if (data.err) {
            setError(data.err);
          } else {
            setProducts(data);
          }
        });}
      else{
        await  getAllTenant().then((data) => {
          console.log(data);
    
          if (data.err) {
            setError(data.err);
          } else {
            setProducts(data);
          }
        });
    
      };
      }

  

  useEffect(() => {
    preloadProducts();
  }, []);
    


  // const [value, onChange] = useState(1);
  // useEffect(() => {
  //   const ele = document.querySelector(".slider-mechanism");
  //   if (ele) {
  //     ele.style.left = `${Number(value)}px`;
  //   }
  // });
  return (
    <>
      <div className="findTenant-main-section">
        <div className="title-main-section">
          <h2>Find Your Preferred Room</h2>
        </div>
        <div className="main-section-hero">
          <div className="example">
          {products.map((product)=>{
              console.log(product.tenant.preferredRooms.rentPerMonth);
              return (<>
            <div className="example-card">
              <div className="image">
                <ImageHelper productId={product._id} />
              </div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                
                <i className="heart fa-solid fa-heart"></i><br/>
                </span>
                <span>{product.tenant.profileDescription !== undefined ?product.tenant.profileDescription.bio :"hi" }</span>
               <Link to={`/tenantprofile/${product.tenant._id}`}>
                <button>See Profile</button>
               </Link>

                <br />
                <span>Rs.{product.tenant.preferredRooms.rentPerMonth} per Month</span>
              </div>
            </div>
            </>)})}
            {/* <div className="example-card">
              <div className="image"><img src={tenant}></img></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                
                <i className="heart fa-solid fa-heart"></i><br/>
                </span>
                <span>Baneshwor</span><button>More</button>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
            <div className="example-card">
              <div className="image"><img src={tenant}></img></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                
                <i className="heart fa-solid fa-heart"></i><br/>
                </span>
                <span>Baneshwor</span><button>More</button>
                <br />
                <span>Rs.6000 per Month</span>
              </div>
            </div>
            <div className="example-card">
              <div className="image"><img src={tenant}></img></div>
              <div className="image-description">
                <span className="image-description-title">
                  Single room for rent
                
                <i className="heart fa-solid fa-heart"></i><br/>
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
                <div>
                <button >
                <Link className="tenant-btn" to={`/findtenant`}>

                  Tenant
                </Link>

                  </button>
                <button>
                <Link className="room-btn" to={`/findroom`}>                  
                  Room
                  </Link>
                  
                  </button>
              </div>
                <span>Sort By</span>
                <div>
                <button
                 onClick={()=> {
                  // navigate(`/findtenant/?location=Kathmandu`)
                  // window.location.reload()

                }
              }
                className="recent-btn">Recent</button>
                <button
                 onClick={()=> {
                  navigate(`/findtenant/?price=cheap`)
                  window.location.reload()

                }
              }
                className="cheapest-btn">Cheapest</button>
                <button
                 onClick={()=> {
                  navigate(`/findtenant/?price=exp`)
                  window.location.reload()

                }
              }
                className="expensive">Expensive</button>
              </div>
              <span>Location</span>
              <div>
                <button 
                onClick={()=> {
                  navigate(`/findtenant/?location=Kathmandu`)
                  window.location.reload()

                }
              }
                
                className="kathmandu-btn selected-btn">
                  Kathmandu
                </button>
                <button className="lalitpur-btn"
          onClick={()=> {
            navigate(`/findtenant/?location=Lalitpur`)
            window.location.reload()
            
          }}
                
                >Lalitpur</button>
                <button className="bhaktapur-btn"
          onClick={()=> {
            navigate(`/findtenant/?location=Bhaktapur`)
            window.location.reload()

          }
        }
                
                >Bhaktapur</button>
              </div>
              <span>Room for</span>
              <div>
                <button className="male-btn">Male</button>
                <button className="female-btn">Female</button>
                <button className="family">Family</button>
              </div>
              <span>Stay Duration:</span>
              <div>
                <button className="shortTerm-btn">Short Term</button>
                <button className="longTerm-btn">Long Term</button>
              </div>
              {/* <span>Rent/month</span> */}
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
