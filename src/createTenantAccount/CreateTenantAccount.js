import React, { useState } from "react";
import "./createTenantAccount.css";
import { Formik, Form, ErrorMessage } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import { useNotifications } from "@mantine/notifications";
import { signup } from "../helper/ApiHelper";

import image from "./img/house.png";

function CreateTenantAccount() {
  const notifications = useNotifications();
  const [activebtn, setActivebtn] = useState({
    captcha: false,
    accept: false,
  });
  const [checkedState, setCheckedState] = useState(new Array(4).fill(false));
  const { captcha, accept } = activebtn;
  const [state, setState] = useState({
    loading: false,
    err: "",
    getRedirect: "",
  });

  const {loading,err} = state;

  function onChange(value) {
    if (value == "accept") {
      setActivebtn({ ...activebtn, accept: true });
    } else {
      setActivebtn({ ...activebtn, captcha: true });
    }
  }

  const facilities = [
    "Internet",
    "Pets Allowed",
    "Parking",
    "Attached Bathroom",
  ];

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };

  console.log(checkedState);

  function handleFormSubmit(values, { resetForm }) {
    setState({loading:true})
    
    values.tenant.facilities = checkedState;

    console.log(values);

    let formData = new FormData();
    for (let value in values) {
      if (value == "tenant") {
        formData.append(value, JSON.stringify(values[value]));

        // console.log(JSON.stringify(values[value]));
        // formData.append(value,JSON.stringify(values[value]));
      } else {
        formData.append(value, values[value]);
      }
    }
    signup(formData)
      .then((data) => {
        console.log(data);
  setState({loading:false})

        if (data.error) {
          notifications.showNotification({
            color: "red",
            title: "Error",
            message: "failed to register",
          });
        } else {
          notifications.showNotification({
            color: "green",
            title: "Success",
            message: "Successfully registered",
          });
          resetForm();
        }
      })
      .catch((err) => console.log(err));
    // props.handleJobRequestAction(formData,user._id)
  }
  return (
    <>
      <div className="tenant-account">
        <Formik
          enableReinitialize
          initialValues={{
            fullName: "",
            dateOfBirth: "",
            address: "",
            phoneNumber: "",
            gender: "",
            email: "",
            password: "",
            role:"tenant",
            images: null,
            tenant: {
              preferredRooms: {
                roomType: "",
                rentPerMonth: "",
                rentDuration: "",
                availableWithin: "",
                roomLocation: "",
              },

              profileDescription: {
                bio: "",
              },
              occupation: "Student",
              iam: "Male",
              age: "",
              facilities: [],
              name:"",
              tenantemail:""
            },
          }}
          onSubmit={handleFormSubmit}
          // validationSchema={RegisterValidationSchema}
        >
          {(renderProps) => {
            const {
              values: formValues,
              touched,
              errors,
              setFieldValue,
            } = renderProps;
            // console.log(formValues);
            return (
              <>
                <Form encType="multipart-formdata">
                  <div className="image-area">

                    <h2 style={{padding:"25px 0",color:"#183639",fontSize:"40px"}}>Create an Tenant Account</h2>

                    <span>
                      {" "}
                      Rentomatic Rooms offers free advertisement of your rooms.
                      Create your owner account and list rooms with proper
                      details. Your rooms will be rented out to a good tenant in
                      no time.
                    </span>
                  </div>

                  <div className="user-details-container">
                    <div className="user-details">
                      <div className="user-details-title">
                        <span
                          style={{
                            marginLeft: "2rem",
                            fontSize: "20px",
                            fontWeight: "bold",
                          }}
                        >
                          My Account Details:
                        </span>
                        {/* <hr className="seperater right"></hr> */}
                      </div>
                      <div className="user-details-content">
                        <div className="user-details-content-left">
                          <label for="full-name">Full name:</label>{" "}
                          <input
                            value={formValues.fullName}
                            onChange={(e) =>{
                              renderProps.setFieldValue(
                                "fullName",
                                e.target.value
                              )
                              renderProps.setFieldValue(
                                "tenant.name",
                                e.target.value
                              )
                            }
                            }
                            type="text"
                          />
                          <br />
                          <label for="dob">Date of Birth:</label>{" "}
                          <input
                            value={formValues.dateOfBirth}
                            onChange={(e) =>
                              renderProps.setFieldValue(
                                "dateOfBirth",
                                e.target.value
                              )
                            }
                            type="date"
                          />
                          <br />
                          <label for="address">Address:</label>{" "}
                          <input
                            value={formValues.address}
                            onChange={(e) =>
                              renderProps.setFieldValue(
                                "address",
                                e.target.value
                              )
                            }
                            type="text"
                          />
                          <br />
                          <label for="phone">Phone number:</label>{" "}
                          <input
                            value={formValues.phoneNumber}
                            onChange={(e) =>
                              renderProps.setFieldValue(
                                "phoneNumber",
                                e.target.value
                              )
                            }
                            type="text"
                          />
                          <br />
                          <label for="gender">Gender:</label>{" "}
                          <select
                            value={formValues.gender}
                            onChange={(e) =>
                              renderProps.setFieldValue(
                                "gender",
                                e.target.value
                              )
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
                            onChange={(e) =>{
                              renderProps.setFieldValue("email", e.target.value)
                              renderProps.setFieldValue("tenant.tenantemail", e.target.value)
                            
                            }
                            }
                          />
                          <br />
                          <label for="password">Password:</label>
                          <input
                            value={formValues.password}
                            onChange={(e) =>
                              renderProps.setFieldValue(
                                "password",
                                e.target.value
                              )
                            }
                            type="password"
                          />
                          <br />
                        </div>
                        <div className="user-details-content-right">
                          <h4>Add your room Images:</h4>
                          <input
                            id="images"
                            name="images"
                            accept="image/*"
                            type="file"
                            //  value={formValues.tenant.profileDescription.images}
                            onChange={(e) =>
                              // console.log(e.currentTarget.files[0])
                              renderProps.setFieldValue(
                                "images",
                                e.currentTarget.files[0]
                              )
                            }
                            className="file"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="profile">
                    <div className="profile-details-title">
                      <span>My Profile:</span>
                      {/* <hr className="seperater right"></hr> */}
                    </div>
                    <div className="profile-content">
                      <label>I am:</label>
                      <select
                        value={formValues.tenant.iam}
                        onChange={(e) =>
                          renderProps.setFieldValue(
                            "tenant.iam",
                            e.target.value
                          )
                        }
                      >
                        <option defaultChecked value="Male">
                          Male
                        </option>
                        <option value="Female">Female</option>
                        <option value="Couple">Couple</option>
                      </select>
                      <label>Age:</label>
                      <input
                        type="number"
                        value={formValues.tenant.age}
                        onChange={(e) =>
                          renderProps.setFieldValue(
                            "tenant.age",
                            e.target.value
                          )
                        }
                      />
                      <label>Occupation:</label>
                      <select
                        value={formValues.tenant.occupation}
                        onChange={(e) =>
                          renderProps.setFieldValue(
                            "tenant.occupation",
                            e.target.value
                          )
                        }
                      >
                        <option defaultChecked value="Student">
                          Student
                        </option>
                        <option value="Employeed">Employeed</option>
                        <option value="Retired">Retired</option>
                        <option value="Other">Other</option>
                      </select>
                      <br />
                      <label>Profile Description:</label>
                      <textarea
                        value={formValues.tenant.profileDescription.bio}
                        onChange={(e) =>
                          renderProps.setFieldValue(
                            "tenant.profileDescription.bio",
                            e.target.value
                          )
                        }
                        placeholder="Describe more about you and the type of room you are looking for."
                      ></textarea>
                    </div>
                  </div>
                  <div className="preferences">
                    <div className="preferences-title">
                      <span>Preferred Rooms:</span>
                      {/* <hr className="seperater right"></hr> */}
                    </div>
                    <div className="preferences-content">
                      <div className="preferences-content-left">
                        <label>Room Location:</label>
                        <select
                          value={formValues.tenant.preferredRooms.roomLocation}
                          onChange={(e) =>
                            renderProps.setFieldValue(
                              "tenant.preferredRooms.roomLocation",
                              e.target.value
                            )
                          }
                        >
                          <option>Select</option>
                          <option value="Kathmandu">Kathmandu</option>
                          <option value="Bhaktapur">Bhaktapur</option>
                          <option value="Lalitpur">Lalitpur</option>
                        </select>
                        <br />
                        <label>Rent Duration:</label>
                        <select
                          value={formValues.tenant.preferredRooms.rentDuration}
                          onChange={(e) =>
                            renderProps.setFieldValue(
                              "tenant.preferredRooms.rentDuration",
                              e.target.value
                            )
                          }
                        >
                          <option>Select</option>
                          <option value="Under 6 months">Under 6 months</option>
                          <option value="More than 6 months">
                            More than 6 months
                          </option>
                          <option value="Unlimited">Unlimited</option>
                        </select>
                        <br />
                        <label>Rent Duration:</label>
                        <select
                          value={formValues.tenant.preferredRooms.rentDuration}
                          onChange={(e) =>
                            renderProps.setFieldValue(
                              "tenant.preferredRooms.rentDuration",
                              e.target.value
                            )
                          }
                        >
                          <option>Select</option>
                          <option value="Under 6 months">Under 6 months</option>
                          <option value="More than 6 months">
                            More than 6 months
                          </option>
                          <option value="Unlimited">Unlimited</option>
                        </select>
                        <br />
                        <label>Available Within:</label>
                        <input
                          type="date"
                          value={
                            formValues.tenant.preferredRooms.availableWithin
                          }
                          onChange={(e) =>
                            renderProps.setFieldValue(
                              "tenant.preferredRooms.availableWithin",
                              e.target.value
                            )
                          }
                        />
                      </div>
                      <div className="preferences-content-right">
                        <label>Room Type:</label>
                        <select
                          value={formValues.tenant.preferredRooms.roomType}
                          onChange={(e) =>
                            renderProps.setFieldValue(
                              "tenant.preferredRooms.roomType",
                              e.target.value
                            )
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
                            renderProps.setFieldValue(
                              "tenant.preferredRooms.rentPerMonth",
                              e.target.value
                            )
                          }
                        />
                      </div>
                    </div>
                    <br />
                    <div className="selection-div">
                      <div style={{ display: "flex" }}>
                        {facilities.map((data, index) => (
                          <>
                            <input
                              checked={checkedState[index]}
                              onChange={() => {
                                handleOnChange(index)
                              }}
                              type="checkbox"
                            />
                            <label for="Internet">{data}</label>

                            <br />
                          </>
                        ))}
                      </div>
                      <div className="rec">
                        <ReCAPTCHA
                          sitekey="6LeLC34fAAAAALwYaqseHZhN9VyclngMgBXDy0F_"
                          onChange={onChange}
                        />
                      </div>
                      <div className="terms">
                        {" "}
                        <input
                          onClick={() => onChange("accept")}
                          type="checkbox"
                        />
                        <span>
                          I have read and agree the Terms & Privacy Policy of
                          Rentomatic Rooms.
                        </span>
                      </div>
                      {accept && captcha ? (

                              !loading? <div className="create">
                              <button
                              type="submit">Create Owner Account with Ads</button>

                              </div>
                              :
                              <div className="create">
                              <button disabled type="button" class="py-2.5 px-5 mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
                              <svg role="status" class="inline w-4 h-4 mr-2 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                              </svg>
                              Loading...
                              </button>
                              </div>
                      ) : (
                        <div
                          style={{ opacity: "0.4", position: "relative" }}
                          className="create"
                        >
                          <button disabled type="submit">
                            Create Owner Account with Ads
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </Form>
              </>
            );
          }}
        </Formik>
      </div>
    </>
  );
}

export default CreateTenantAccount;
