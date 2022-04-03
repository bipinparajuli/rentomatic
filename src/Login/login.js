import React,{useState} from 'react';
import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import { useNotifications } from '@mantine/notifications';
import { Loader } from '@mantine/core';
import {useNavigate} from 'react-router-dom'

import { signin } from '../helper/ApiHelper';
import './login.css';
 


function Login() {
  const [hidepassword, setHidepassword] = React.useState({
    password: "",
    showPassword: false,
  });
  let navigate = useNavigate();
  const notifications = useNotifications();


  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [values, setValues] = useState({
    email: "",
    password: "",
    err: "",
    didRedirect: false,
    loading: false,
  });
  const { showPassword } = hidepassword;

  const { email, password, err, didRedirect, loading } = values;
  // const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, err: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    console.log(email,password);
    event.preventDefault();
    setValues({ ...values, err: false, loading: true });
    signin({ email, password })
      .then((data) => {
        if (data.error) {
          setValues({ ...values, err: data.err, loading: false });
          notifications.showNotification({
            color:"red",
            title: 'Error',
            message: data.message,
          }) 
        } else {
          notifications.showNotification({
            color:"green",
            title: 'Success',
            message: "Successfully login",
          })
          setTimeout(()=>{
            navigate("/")
          },1000)


          // authenticate(data, () => {
          //   setValues({
          //     email: "",
          //     password: "",
          //     err: "",
          //     didRedirect: true,
          //     loading: true,
          //   });
          // });
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
    <div className="login-container">

<div id="form">
  
   <div className='form-title'> <h2>
        Log In
    </h2>
    <i className='x fa-solid fa-x'></i>
    </div>
    <label for="email">Email</label><br/>
 <input
  type="email"
  className='email'
  name="email"
  id="email"
  value={email}
  onChange={handleChange("email")}
  />
 <br/>
 <br />
 <label for="password" >Password</label><br/>
 <div className='password-div'>
   <input 
   type={hidepassword.showPassword ? "text" : "password"}
   className='password'
   id="password"
   value={password}
   onChange={handleChange("password")}
    
 />
 <i onClick={()=>setHidepassword({...hidepassword,showPassword:!showPassword})} class="eye fa-solid fa-eye-slash"></i></div>
 <span><a href='/forget'>Reset password ?</a></span><br/>
 {/* <div className="recaptcha"> */}

 <ReCAPTCHA
    sitekey="I'm not a robot"
    onChange={onChange}
  />
 {/* </div> */}
  
   <button class="loginbtn" onClick={onSubmit} >{loading ? <Loader /> :"Log In"}</button><br/>
  
  
  <div className='registerLink'>Don't have an account?<Link to={`/register`}>Register Now</Link></div>
 </div>

    </div>
    
    </>
  )
}

export default Login