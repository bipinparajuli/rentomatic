import React,{useState} from "react";
import "./createTenantAccount.css";
import {Formik,Form,ErrorMessage} from 'formik'
import ReCAPTCHA from "react-google-recaptcha";
import { useNotifications } from '@mantine/notifications';
import {signup} from '../helper/ApiHelper'


import image from  './img/house.png';

function CreateTenantAccount() {
  const notifications = useNotifications();
  const [activebtn,setActivebtn] = useState({
    captcha:false,
    accept:false
  })
  const [checkedState, setCheckedState] = useState(
    new Array(4).fill(false)
  );
  const {captcha,accept} = activebtn;

  function onChange(value) {
    if(value == "accept"){
      setActivebtn({...activebtn,accept:true})
    }else{
      setActivebtn({...activebtn,captcha:true})

    }
  }

  const facilities = [
    "Internet","Pets Allowed","Parking","Attached Bathroom"
  ]

  const handleOnChange = (position) => {
   
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  }

  console.log(checkedState);

  function handleFormSubmit(values,{resetForm}){
    console.log(values);

    let formData = new FormData()
    for (let value in values) {
      if(value == "tenant" ){
        formData.append(value, JSON.stringify(values[value]));

        // console.log(JSON.stringify(values[value]));
        // formData.append(value,JSON.stringify(values[value]));
      }else{

      formData.append(value, values[value]);
      }
    }
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
      <div className="tenant-account">
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
              tenant:{
                
                preferredRooms:{
                  roomType:"",
                  rentPerMonth:"",
                  rentDuration:"",
                  availableWithin:"",
                  roomLocation:""
                },
               
                
                profileDescription:{
                  bio:"",
                },
               occupation:"",
               iam:"",
               age:"",
               facilities:[]

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
        <img src={image}></img>
        <span style={{position:"relative",top:"112px",left:"192px"}} className="image-area-text">
          <h2>Create an Tenant Account</h2>
          <div>
          <p style={{width:"300px"}}>
            {" "}
            Rentomatic Rooms offers free advertisement of your rooms. Create
            your owner account and list rooms with proper details. Your rooms
            will be rented out to a good tenant in no time.
          </p>
          </div>
        </span>
      </div>
        <div className="user-details-container">
          <div className="user-details">
          <div className="user-details-title">
          <span style={{marginLeft: "2rem",
    fontSize: "20px",
    fontWeight: "bold"}} >My Account Details:</span>
          <hr className="seperater right"></hr>
          <span>My Account Details:</span>
          {/* <hr className="seperater right"></hr> */}
        </div >
        <div className="user-details-content">
          <div className="user-details-content-left">
            <label for="full-name">Full name:</label> <input 
            value={formValues.fullName}
            onChange={(e) =>
                          renderProps.setFieldValue("fullName", e.target.value)
                      }
            type="text" />
            <br />
            <label for="dob">Date of Birth:</label> <input
             value={formValues.dateOfBirth}
             onChange={(e) =>
                           renderProps.setFieldValue("dateOfBirth", e.target.value)
                       }
            type="date" />
            <br />
            <label for="address">Address:</label> <input
             value={formValues.address}
             onChange={(e) =>
                           renderProps.setFieldValue("address", e.target.value)
                       }
            type="text" />
            <br />
            <label for="phone">Phone number:</label> <input
            value={formValues.phoneNumber}
            onChange={(e) =>
                          renderProps.setFieldValue("phoneNumber", e.target.value)
                      }
            type="text" />
            <br />
            <label for="gender">Gender:</label>{" "}
            <select
              value={formValues.gender}
              onChange={(e) =>
                            renderProps.setFieldValue("gender", e.target.value)
                        }
            >
            <option>Select</option>
              <option value="male">Male</option>
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
              value={formValues.password}
             onChange={(e) =>
              renderProps.setFieldValue("password", e.target.value)
          }
            type="password" />
            <br />
          </div>
          <div className="user-details-content-right">
            <h4>Add your room Images:</h4>
            <input 
            id="images"
             name="images"
             accept='image/*'
            type="file"
            //  value={formValues.tenant.profileDescription.images}
             onChange={(e) =>
              // console.log(e.currentTarget.files[0])
                           renderProps.setFieldValue("images", e.currentTarget.files[0])
                       }
            className="file"/>
          </div>
          </div>
        </div>
        </div>
        <div className="profile">
        <div className="profile-details-title">
          <span>My Profile:</span>
          {/* <hr className="seperater right"></hr> */}
        </div >
          <div className="profile-content">
            <label>I am:</label>
            <select
              value={formValues.tenant.iam}
              onChange={(e) =>
                            renderProps.setFieldValue("tenant.iam", e.target.value)
                        }
            >
              <option defaultChecked value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Couple">Couple</option>

            </select>
            <label>Age:</label>
            <input type="number"
             value={formValues.tenant.age}
             onChange={(e) =>
                           renderProps.setFieldValue("tenant.age", e.target.value)
                       }
            
            />
            <label>Occupation:</label>
            <select
              value={formValues.tenant.occupation}
              onChange={(e) =>
                            renderProps.setFieldValue("tenant.occupation", e.target.value)
                        }
            >
              <option defaultChecked value="Student">Student</option>
              <option value="Employeed">Employeed</option>
              <option value="Retired">Retired</option>
              <option value="Other">Other</option>
            </select>
            <br />
            <label>Profile Description:</label>
            <textarea 

            value={formValues.tenant.profileDescription.bio}
        onChange={(e) =>
                      renderProps.setFieldValue("tenant.profileDescription.bio", e.target.value)
                  }
            placeholder="Describe more about you and the type of room you are looking for."></textarea>
          </div>
        </div>
        <div className="preferences">
        <div className="preferences-title">
          <span>Preferred Rooms:</span>
          {/* <hr className="seperater right"></hr> */}
        </div >
        <div className="preferences-content">
          <div className="preferences-content-left">
          <label>Room Location:</label>
          <select
            value={formValues.tenant.preferredRooms.roomLocation}
            onChange={(e) =>
                          renderProps.setFieldValue("tenant.preferredRooms.roomLocation", e.target.value)
                      }
          >
          <option>Select</option>
            <option value="Kathmandu">Kathmandu</option>
            <option value="Bhaktapur">Bhaktapur</option>
            <option value="Lalitpur">Lalitpur</option>

          </select>
          <br/>
          <label>Rent Duration:</label>
          <select
        value={formValues.tenant.preferredRooms.rentDuration}
             onChange={(e) =>
                           renderProps.setFieldValue("tenant.preferredRooms.rentDuration", e.target.value)
                       }
                       >
        <option>Select</option>
            <option value="Under 6 months">Under 6 months</option>
            <option value="More than 6 months">More than 6 months</option>
            <option value="Unlimited">Unlimited</option>

              </select>
              <br/>
              <label>Rent Duration:</label>
              <select
            value={formValues.tenant.preferredRooms.rentDuration}
                onChange={(e) =>
                              renderProps.setFieldValue("tenant.preferredRooms.rentDuration", e.target.value)
                          }
                          >
            <option>Select</option>
                <option value="Under 6 months">Under 6 months</option>
                <option value="More than 6 months">More than 6 months</option>
                <option value="Unlimited">Unlimited</option>

              </select>
              <br />
              <label>Available Within:</label>
              <input type="date" 
              value={formValues.tenant.preferredRooms.availableWithin}
                onChange={(e) =>
                              renderProps.setFieldValue("tenant.preferredRooms.availableWithin", e.target.value)
                          }
                          />
              </div>
              <div className="preferences-content-right">
              <label>Room Type:</label>
              <select
                value={formValues.tenant.preferredRooms.roomType}
                onChange={(e) =>
                              renderProps.setFieldValue("tenant.preferredRooms.roomType", e.target.value)
                          }
              >
                <option>Select</option>
                <option value="Single">Single</option>
                <option value="Double">Double</option>
                
              </select>
              <br />
              <label>Rent per Month:</label>
                <input 
                  type="text"
                  value={formValues.tenant.preferredRooms.rentPerMonth}
                  onChange={(e) =>
                                renderProps.setFieldValue("tenant.preferredRooms.rentPerMonth", e.target.value)
                            }
                />
              </div>
              </div>
          <br />
          <div className="selection-div">
          <div style={{display:"flex"}}>
          {  
          facilities.map((data,index)=>(
             <>
             <input 
         checked={checkedState[index]}
         onChange={() => handleOnChange(index)}
          type="checkbox" />
        <label for="Internet">{data}</label>
        
        <br />
</>

          ))
          
         
}
          </div>
          <div className="rec">
          <ReCAPTCHA 
          sitekey="6LeLC34fAAAAALwYaqseHZhN9VyclngMgBXDy0F_"
          
          onChange={onChange} />
          </div>
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
        style={{opacity:"0.4",position:"relative",left:"300px"}}
        className="create">
        <button
        disabled

        type="submit">Create Owner Account with Ads</button>

    </div>
        }
      
      
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

export default CreateTenantAccount;
