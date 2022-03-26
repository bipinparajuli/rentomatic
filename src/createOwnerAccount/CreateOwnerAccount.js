import React,{useState} from "react";
import * as Yup from "yup";
import {Formik,Form,ErrorMessage} from 'formik'
import ReCAPTCHA from "react-google-recaptcha";
import { useNotifications } from '@mantine/notifications';


import "./createOwnerAccount.css";
import {signup} from '../helper/ApiHelper'


function CreateUserAccount() {
 
  const [state, setState] = useState({
    loading: false,
    err: "",
    getRedirect: "",
  });
  const notifications = useNotifications();

  function onChange(value) {
    console.log("Captcha value:", value);
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
    let formData = new FormData()
    for (let value in values) {
      if(value == "owner" ){
        formData.append(value, JSON.stringify(values[value]));

        // console.log(JSON.stringify(values[value]));
        // formData.append(value,JSON.stringify(values[value]));
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

  return (
    <>

    <div className="user-account">
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
                  area:"",
                },
                title:'',
                description:"",
                images:null

              },
            }}
            onSubmit={handleFormSubmit}
            // validationSchema={RegisterValidationSchema}
          >
            {(renderProps) => {
              const { values: formValues, touched, errors,setFieldValue } = renderProps;
              // console.log(formValues);
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
          <option value="Kathmandu" >Kathmandu</option>
          <option value="Bhaktapur">Bhaktapur</option>
          <option value="Lalitpur">Lalitpur</option>

        </select>
        <br />
        <label for="area">Area:</label>
        <input
        type="text"
        value={formValues.owner.roomAddress.area}
        onChange={(e) =>
                      renderProps.setFieldValue("owner.roomAddress.area", e.target.value)
                  }
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
          value={formValues.owner.images}
             onChange={(e) =>
                           renderProps.setFieldValue("owner.images", e.target.value)
                       }
          />
        </div>
        </div>
      </div>
      <div>
        
        <ReCAPTCHA className="re" sitekey="I'm not a robot" onChange={onChange} />
        <div className="terms">
          {" "}
          <input type="checkbox" />
          <span>
            I have read and agree the Terms & Privacy Policy of Rentomatic
            Rooms.
          </span>
        </div>
        <div className="create">
            <button type="submit">Create Owner Account with Ads</button>

        </div>
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
