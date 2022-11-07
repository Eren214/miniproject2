import React, { useState } from "react";
import './SignIn.css';
import { FaFacebookF } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";;

const SignIn = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
return (
<section className="vh-100">
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
          <h2 id="form-title">Sign in to Ticketlab</h2>
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
          <form onSubmit={handleSubmit}>
          <div className="form-outline mb-4">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="form1Example13" className="form-control form-control-lg" placeholder="Email"/>
          </div>

          <div className="form-outline mb-4">
            <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" id="form1Example23" className="form-control form-control-lg" placeholder="Password"/>
          </div>

          <div className="d-flex justify-content-around align-items-center mb-4">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="form1Example3"  />
              <label className="form-check-label" for="form1Example3"> Remember me </label>
            </div>
              <a href="#!">Forgot password?</a>
          </div>

          
          <button onClick={() => props.onFormSwitch('register')} type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

          <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
          </div>

          <a id="fbook" className="btn btn-lg " href="#!"
            role="button"><FaFacebookF/>
            <i className="fab  me-2"></i>Continue with Facebook
          </a>
          <a id="twitter" className="btn btn-lg"  href="#!"
            role="button"><FaGooglePlusG/>
            <i className="fab fa-twitter me-2"></i>Continue with Google</a>
            <p className="mb-5 pb-lg-2" >Don't have an account? <a href="#!">Register here</a></p>
        </form>
      </div>
    </div>
  </div>
</section>
)
}
export default SignIn;