import React,{useState} from 'react';
import './login.css';


import ReCAPTCHA from "react-google-recaptcha";
import { Link } from 'react-router-dom';
import { signin } from '../helper/ApiHelper';
 


function Login() {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  const [value, setValue] = useState({
    email: "",
    password: "",
    err: "",
    didRedirect: false,
    loading: false,
  });

  const { email, password, err, didRedirect, loading } = values;
  // const { user } = isAuthenticated();

  const handleChange = (name) => (event) => {
    setValues({ ...values, err: false, [name]: event.target.value });
  };

  const onSubmit = (event) => {
    console.log(email,password);
    event.preventDefault();
    setValues({ ...values, err: false, loading: false });
    signin({ email, password })
      .then((data) => {
        if (data.err) {
          setValues({ ...values, err: data.err, loading: false });
        } else {
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
      .catch(console.log("Signin request failed!"));
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
   type={values.showPassword ? "text" : "password"}
   className='password'
   id="password"
   value={password}
   onChange={handleChange("password")}
    
 />
 <br/><i class="eye fa-solid fa-eye-slash"></i></div>
 <span><a href='/forget'>Reset password ?</a></span><br/>
 {/* <div className="recaptcha"> */}

 <ReCAPTCHA
    sitekey="I'm not a robot"
    onChange={onChange}
  />
 {/* </div> */}
  <button class="loginbtn" onClick={onSubmit} >Log In</button><br/>
  <div className='registerLink'>Don't have an account?<Link to={`/register`}>Register Now</Link></div>
 </div>

    </div>
    
    </>
  )
}

export default Login