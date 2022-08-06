import React,{useEffect,useState} from "react";


import "./findTenant.css";
import ImageHelper from "../helper/ImageHelper";
import { getAllTenant, searchTenant } from "../helper/ApiHelper";
import { Link,useNavigate } from "react-router-dom";


function FindRoom() {
  const [value, onChange] = useState(1);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
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
  let navigate = useNavigate();

  const queryParams = new URLSearchParams(window.location.search)
  let location = queryParams.get("location")
  let price = queryParams.get("price")
  let preference = queryParams.get("preference")
  let duration = queryParams.get("duration")


  const {bhaktapur,cheapest,expensive,family,female,kathmandu,lalitpur,long,male,recent,short} = active

  console.log(location);

  // const api = "https://cors-anywhere.herokuapp.com/localhost:5000/api/v1/users/getphoto/623c5932f9ab201e74deb3dc"
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
      await  searchTenant("location",location).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });}

      if(price){
        if(price == "cheapest"){
          setActive({cheapest:true})
        }
        if(price == "expensive"){
          setActive({expensive:true})
        }
        await  searchTenant("price",price).then((data) => {
          console.log(data);
    
          if (data.err) {
            setError(data.err);
          } else {
            setProducts(data);
          }
        });}

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
    
          await  searchTenant("preference",preference).then((data) => {
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

      await  searchTenant("duration",duration).then((data) => {
        console.log(data);
  
        if (data.err) {
          setError(data.err);
        } else {
          setProducts(data);
        }
      });
    }

      if(!price && !location && !preference && !duration){
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
          <h2 style={{padding:"32px 0",color:"#183639",fontSize:"40px"}} >Find Your Preferred Tenant</h2>
        </div>
        <div className="main-section-hero">
          <div className="example">
          {products.map((product)=>{
              console.log(product);
              return (<>
                            <div style={{margin:"10px 20px"}} class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <ImageHelper productId={product._id} />
                <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            { product.tenant !== undefined? product.tenant.preferredRooms.roomLocation : "wait . . . " }
              </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        { product.tenant !== undefined? product.tenant.profileDescription.bio : "wait . . . " }
                </p>
            <h6 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Rs. { product.tenant !== undefined? product.tenant.preferredRooms.rentPerMonth : "wait . . . " } per Month
            </h6>
        <i className="heart fa-solid fa-heart"
                  // onClick={()=>handleBookMark(room)}
                  ></i>
                   <Link to={`/tenantprofile/${product.tenant._id}`} class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
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
              <h3 style={{fontWeight:"bold",fontSize:"30px",color:"#183639"}} >Filters</h3>
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
                onClick={()=>setActive({recent:true})} 
                className={`recent-btn ${recent?"active":""}`}
                
                >Recent</button>
                <button
                 onClick={()=> {
                  navigate(`/findtenant/?price=cheap`)
                  window.location.reload()

                }
              }
                c                className={`cheapest-btn ${cheapest?"active":""}`}
                >Cheapest</button>
                <button
                 onClick={()=> {
                  navigate(`/findtenant/?price=exp`)
                  window.location.reload()

                }
              }
              className={`expensive ${expensive?"active":""}`}
                
                >Expensive</button>
              </div>
              <span>Location</span>
              <div>
                <button 
                onClick={()=> {
                  navigate(`/findtenant/?location=Kathmandu`)
                  window.location.reload()

                }
              }
                
              className={`kathmandu-btn selected-btn ${kathmandu?"active":""}`}>
                  Kathmandu
                </button>
                <button className={`lalitpur-btn ${lalitpur?"active":""}`}
          onClick={()=> {
            navigate(`/findtenant/?location=Lalitpur`)
            window.location.reload()
            
          }}
                
                >Lalitpur</button>
                <button className={`bhaktapur-btn ${bhaktapur?"active":""}`}
          onClick={()=> {
            navigate(`/findtenant/?location=Bhaktapur`)
            window.location.reload()

          }
        }
                
                >Bhaktapur</button>
              </div>
              <span>Room for</span>
              <div>
                <button className={`male-btn ${male?"active":""}`}
                onClick={()=> {
                  navigate(`/findtenant/?preference=male`)
                  window.location.reload()
                }}
                >Male</button>
                <button className={`female-btn ${female?"active":""}`}
                onClick={()=> {
                  navigate(`/findtenant/?preference=female`)
                  window.location.reload()
                }}
                >Female</button>
                <button className={`family ${family?"active":""}`}
                 onClick={()=> {
                  navigate(`/findtenant/?preference=family`)
                  window.location.reload()
                }}
                >Family</button>
              </div>
              <span>Stay Duration:</span>
              <div>
                <button
                 onClick={()=> {
                  navigate(`/findtenant/?duration=short`)
                  window.location.reload()
                }}
                className={`shortTerm-btn ${short?"active":""}`}>Short Term</button>
                <button
                 onClick={()=> {
                  navigate(`/findtenant/?duration=long`)
                  window.location.reload()
                }}
                className={`longTerm-btn ${long?"active":""}`}>Long Term</button>
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
