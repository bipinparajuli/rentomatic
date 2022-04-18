import React,{useState} from "react";
import * as Yup from "yup";
import {Formik,Form,ErrorMessage} from 'formik'
import ReCAPTCHA from "react-google-recaptcha";
import { useNotifications } from '@mantine/notifications';


import "./createOwnerAccount.css";
import {signup} from '../helper/ApiHelper'



import image from './img/house.png';


function CreateUserAccount() {
 const [activebtn,setActivebtn] = useState({
   captcha:false,
   accept:false
 })
  const [state, setState] = useState({
    loading: false,
    err: "",
    getRedirect: "",
  });
  const notifications = useNotifications();
  const {captcha,accept} = activebtn;

  function onChange(value) {
    if(value == "accept"){
      setActivebtn({...activebtn,accept:true})
    }else{
      setActivebtn({...activebtn,captcha:true})

    }
  }

  const {loading,err} = state;

  const RegisterValidationSchema = Yup.object().shape({
    fullName: Yup.string().required("Please enter fullname").max(50),
    dateOfBirth: Yup.date().required("Please enter date").max(50),
    address: Yup.string().required("Please enter address").max(50),
    phoneNumber: Yup.string().required("Please enter address").max(50),
    gender: Yup.string().required("Please enter address").max(50),
    email: Yup.string().required("Please enter email").email().max(255),
    password: Yup.string().required("Please enter a password").min(8).max(255),

  });

  function handleFormSubmit(values,{resetForm}){
    console.log(values);
    let formData = new FormData()
    for (let value in values) {
      if(value == "owner" ){
        formData.append(value, JSON.stringify(values[value]));

        // console.log(JSON.stringify(values[value]));
      }else{

      formData.append(value, values[value]);
      }
    }
    console.log(formData.getAll("gender"));
    signup(formData).then(data=>{
console.log(data);
if(data.error){
  notifications.showNotification({
    color:"red",
    title: 'Error',
    message: "failed to register",
  })
}else{
  notifications.showNotification({
    color:"green",
    title: 'Success',
    message: "Successfully registered",
  })
  resetForm()
}
    }).catch(err=>console.log(err))
    // props.handleJobRequestAction(formData,user._id)
  }

  const area = [

  {name:"Tengal",lat: 27.71023679894223,lan: 85.30579194672158 },

{name:"Naghal",lat: 27.710198805528908,lan: 85.30918225857671 },

{name:"Jyatha" ,lat: 27.711832510352643,lan: 85.3121863323724 },

{name:"Jamal", lat: 27.709514921826212,lan: 85.31514749082815 },

{name:"Kamaladi",  lat: 27.709400940792275,lan: 85.31956777084181 },

{name:"Kalikasthan", lat: 27.704005702295955,lan: 85.32536134173348 },

{name:"Bhadrakali", lat: 27.697128286193333, lan: 85.31716451180526 },

{name:"Tripureshowr", lat: 27.695266369718787,lan: 85.31523332150803 },

{name:"Kupondole",lat: 27.686696674237105,lan: 85.31463365006898 },

{name:"Thapathali", lat: 27.689679290708103,lan: 85.32300342739498 },

{name:"Buddhanagar", lat: 27.686877441191,lan: 85.32994421834823 },

{name:"Gairigaon", lat: 27.688142801488954,lan: 85.34882725255929 },

{name:"New Baneshowr" ,lat: 27.691803225494645,lan: 85.34173335592325 },

{name:"Koteshowr", lat: 27.675985697874747, lan: 85.34622445727618 },

{name:"Balkumari", lat: 27.669929238134397, lan: 85.34061058224046 },

{name:"Gwarko", lat: 27.666629682011138,lan: 85.33270012133903 },

{name:"Kusinti", lat:27.6556907155722,lan: 85.31631781290697 },

{name:"Ekantakuna", lat: 27.66757887941739,lan: 85.31044876165144 },

{name:"Kalanki", lat: 27.693655985802092,lan: 85.28028693890967 },

{name:"Jadibutti", lat: 27.675220340943337,lan:85.35349376695548 },

{name:"Lokanthali", lat:27.673728845448956, lan:85.35910764199119 },

{name:"Narephate",lat: 27.672282527342304,lan: 85.34987026579606 },

{name:"Kaushaltar",lat: 27.675627108907886,lan: 85.36518083407529 },

{name:"Sagbari",  lat:27.673819239694918,lan: 85.36768156022757 },

{name:"Gatthaghar", lat: 27.676892599590417,lan: 85.37293818970305 },

{name:"Madhyapur Thimi",lat: 27.678474442278116,lan: 85.38038933367886 },

{name:"Sallaghari", lat: 27.671785350954636,lan: 85.40751455954009 },

{name:"Katunje", lat: 27.66437263645023,lan: 85.40930079250602 },

{name:"Balkot", lat: 27.663739820252644,lan: 85.37776102223424 },

{name:"Bhaktapur",lat: 27.671016983049867,lan: 85.42951074577422 }

  ]
  return (
    <>

    <div className="owner-account">
    <Formik
            enableReinitialize
            initialValues={{
              fullName: "",
              dateOfBirth:"",
              address: "",
              phoneNumber:"",
              gender:"",
              email:"",
              password:"",
              images:null,
              owner:{
                roomDetails:{
                  roomType:"",
                  rentPerMonth:"",
                  rentDuration:""
                },
                workPreference:"",
                tenantPreference:"",
                roomAddress:{
                  district:"",
                  area:{},
                },
                title:'',
                description:"",

              },
            }}
            onSubmit={handleFormSubmit}
            // validationSchema={RegisterValidationSchema}
          >
            {(renderProps) => {
              const { values: formValues, touched, errors,setFieldValue } = renderProps;
              console.log(formValues);
              return (
                <>
                  <Form encType="multipart-formdata">
      <div className="image-area">
        <span className="image-area-text">
          <h2>Create an Owner Account</h2>
          <div>
          <span>
            {" "}
            Rentomatic Rooms offers free advertisement of your rooms. Create
            your owner account and list rooms with proper details. Your rooms
            will be rented out to a good tenant in no time.
          </span>
          </div>
        </span>
      </div>
      <div className="user-details">
      <div className="user-details-title">
          <span>My Account Details:</span>
          <hr className="seperater right"></hr>
        </div>

        <div className="user-details-description">
      <label for="full-name">Full name:</label> 
      <input 
        type="text"
        value={formValues.fullName}
              onChange={(e) =>
                            renderProps.setFieldValue("fullName", e.target.value)
                        }
        />
        <br />
        <label for="dob">Date of Birth:</label>
         <input 
         type="date"
         value={formValues.dateOfBirth}
              onChange={(e) =>
                            renderProps.setFieldValue("dateOfBirth", e.target.value)
                        }
         />
        <br />
        <label for="address">Address:</label>
         <input 
         type="text"
         value={formValues.address}
              onChange={(e) =>
                            renderProps.setFieldValue("address", e.target.value)
                        }
         />
        <br />
        <label for="phone">Phone number:</label>
         <input 
         type="text"
         value={formValues.phoneNumber}
              onChange={(e) =>
                            renderProps.setFieldValue("phoneNumber", e.target.value)
                        }
         />
        <br />
        <label for="gender">Gender:</label>{" "}
        <select
         value={formValues.gender}
         onChange={(e) =>
                       renderProps.setFieldValue("gender", e.target.value)
                   }
        >
                      <option>Select</option>
                      <option value="male" >Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
        </select>
        <br />
        <label for="email">Email:</label>
        <input 
        type="email"
        value={formValues.email}
        onChange={(e) =>
                      renderProps.setFieldValue("email", e.target.value)
                  }
        />
        <br />
        <label for="password">Password:</label>
        <input 
        type="password"
        value={formValues.password}
        onChange={(e) =>
                      renderProps.setFieldValue("password", e.target.value)
                  }
        />
        <br />
        </div>
      </div>
      <div className="room-details">
      <div className="room-details-title">
          <span>Room Details:</span>
          <hr className="seperater right"></hr>
        </div>
        <div className="room-details-content">
        <label for="room-types">Room types:</label>{" "}
        <select className="xyz"
        value={formValues.owner.roomDetails.roomType}
        onChange={(e) =>
                      renderProps.setFieldValue("owner.roomDetails.roomType", e.target.value)
                  }
                  >
                      <option>Select</option>

          <option value="Single">Single</option>
          <option value="Double">Double</option>
        </select>
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
        value={formValues.owner.roomDetails.rentDuration}
        onChange={(e) =>
                      renderProps.setFieldValue("owner.roomDetails.rentDuration", e.target.value)
                  }
        >
                      <option>Select</option>
          <option value="Under 6 months">Under 6 months</option>
          <option value="More than 6 months" >More than 6 months</option>
          <option value="Unlimited">Unlimited</option>

        </select>
        <label for="rent-per-month">Rent per Month:</label>{" "}
        <input type="text"
        value={formValues.owner.roomDetails.rentPerMonth}
        onChange={(e) =>
                      renderProps.setFieldValue("owner.roomDetails.rentPerMonth", e.target.value)
                  }
        />
        <br />
        <label for="work-preference">Tenant preference:</label>{" "}
        <select 
        className="xyz"
        value={formValues.owner.tenantPreference}
        onChange={(e) =>
                      renderProps.setFieldValue("owner.tenantPreference", e.target.value)
                  }
        >
                      <option>Select</option>

          <option value="Male" >Male</option>
          <option value="Female">Female</option>
          <option value="Couple">Couple</option>
          <option value="Others">Others</option>
        </select>
        <label for="work-preference">Work preference:</label>{" "}
        <select 
        className="xyz"
        value={formValues.owner.workPreference}
        onChange={(e) =>
                      renderProps.setFieldValue("owner.workPreference", e.target.value)
                  }
        >
                      <option>Select</option>

          <option value="Student">Student</option>
          <option value="Employeed">Employeed</option>
          <option value="Retired">Retired</option>
          <option value="Other">Other</option>

        </select>
        <br />
        <div className="rooms-checkbox">
        <input type="checkbox" />
        <span>Internet</span>
        <input type="checkbox" />
        <span>Pets Allowed</span>
        <input type="checkbox" />
        <span>Parking</span>
        <input type="checkbox" />
        <span>Attached Bathroom</span>
        </div>
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
          value={formValues.owner.roomAddress.district}
          onChange={(e) =>
                        renderProps.setFieldValue("owner.roomAddress.district", e.target.value)
                    }
        >
                      <option>Select</option>
          <option value="Kathmandu" >Kathmandu</option>
          <option value="Bhaktapur">Bhaktapur</option>
          <option value="Lalitpur">Lalitpur</option>

        </select>
        <br />
        <label for="area">Area:</label>
        <select
        className="xyz"
        value={formValues.owner.roomAddress.area}
        onChange={(e) =>
                      renderProps.setFieldValue("owner.roomAddress.area", e.target.value)
                  }>
                      <option>Select</option>
                      {
                        area.map(area=>(
                          <option value={JSON.stringify(area)}>{area.name}</option>
                        ))
                      }

                  </select>
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
             value={formValues.owner.title}
             onChange={(e) =>
                           renderProps.setFieldValue("owner.title", e.target.value)
                       }
          />
          <br />
          <label for="ad-description">Ad Description:</label>
          <textarea
             value={formValues.owner.description}
             onChange={(e) =>
                           renderProps.setFieldValue("owner.description", e.target.value)
                       }
          />
          <br />
        </div>
        <div className="title-and-description-image">
          <h4>Add your room Images:</h4>
          <input 
          type="file"
          // value={formValues.owner.images}
          name="images"
          accept='image/*'
             onChange={(e) =>
              renderProps.setFieldValue("images", e.currentTarget.files[0])

                       }
          />
        </div>
        </div>
      </div>
      <div>
        
        <ReCAPTCHA className="re" 
        sitekey="6LeLC34fAAAAALwYaqseHZhN9VyclngMgBXDy0F_"
        onChange={onChange} />
        <div className="terms">
          {" "}
          <input
          onClick={()=>onChange("accept")}
          type="checkbox" />
          <span>
            I have read and agree the Terms & Privacy Policy of Rentomatic
            Rooms.
          </span>
        </div>
        {
          accept && captcha ? 
          <div className="create">
            <button
            type="submit">Create Owner Account with Ads</button>

        </div>:
        <div
        style={{opacity:"0.4"}}
        className="create">
        <button
        disabled

        type="submit">Create Owner Account with Ads</button>

    </div>
        }
        
      </div>
      </Form>
    </>
              )
            }
            }
            </Formik>
     
      </div>
    </>
  );
}

export default CreateUserAccount;
