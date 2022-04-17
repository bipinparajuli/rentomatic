import React,{useState} from "react";
import { Link } from "react-router-dom";
import { useNotifications } from '@mantine/notifications';
import { Loader } from '@mantine/core';


import "./forget.css";
import { sendresetokenmail } from "../helper/ApiHelper";

function Forget() {
  const [values, setValues] = useState({
    email: "",
    err: "",
    didRedirect: false,
    loading: false,
  });
  const notifications = useNotifications();

  const { email, err, didRedirect, loading } = values;
  // const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, err: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, err: false, loading: true });
    sendresetokenmail({ email})
      .then((data) => {
        console.log(data);
        if (data.error) {
          setValues({ ...values, err: data.err, loading: false });
          notifications.showNotification({
            color:"red",
            title: 'Error',
            message: data.message,
          }) 
        } else {
          setValues({ ...values, err: false, loading: false });

          notifications.showNotification({
            color:"green",
            title: 'Success',
            message: "Successfully login",
          })
         


        
        }
      })
      .catch((e)=>{
        console.log("Signin request failed!",);
        notifications.showNotification({
          color:"red",
          title: 'Error',
          message: "failed to register",
        }) 
      })
  };

  return (
    <>
      <div className="forget-password-container">
        <div id="form">
          <div className="form-title">
            {" "}
            <h2>Forgot Your Password?</h2>
          </div>
          <div>Your Email:</div>
          <input
  type="email"
  className='email'
  name="email"
  id="email"
  value={email}
  onChange={handleChange("email")}
  />
          <br />
          <br />
          <button class="loginbtn" onClick={onSubmit} >{loading ? <Loader /> :"Send"}</button><br/>
  
          <br />
          <span id="or">OR</span>
          <p><Link to={`/login`}>Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Forget;
