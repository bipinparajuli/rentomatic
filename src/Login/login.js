import React from 'react';
import './login.css';

import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
 


function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

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
 <input type="text" className='email' />
 <br/>
 <br />
 <label for="password" >Password</label><br/>
 <div className='password-div'><input type={values.showPassword ? "text" : "password"}
 
 className='password' /><br/><i class="eye fa-solid fa-eye-slash"></i></div>
 <span><a href='/forget'>Reset password ?</a></span><br/>
 {/* <div className="recaptcha"> */}

 <ReCAPTCHA
    sitekey="I'm not a robot"
    onChange={onChange}
  />
 {/* </div> */}
  <button class="loginbtn">Log In</button><br/>
  <div className='registerLink'>Don't have an account?<Link to={`/register`}>Register Now</Link></div>
 </div>

    </div>
    
    </>
  )
}

export default Login