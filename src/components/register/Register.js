import React, { useState } from "react";
import './Register.css';
import {Link} from 'react-router-dom';

const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
<section id="create-account" className="vh-100">
  <div id="register-form" className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
        <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <div id="branding"><Link to='/' style={{textDecoration:"none",textAlign:"center"}}><img id="Logo" src="./images/ticket.png" /><h3>ticketlab</h3></Link></div>
        <h2 id="form-title">Create Account</h2> 
        <form onSubmit={handleSubmit}>
            <div className="d-flex ">
                <div className="form-outline mb-10">
                <input value={firstname} onChange={(e) => setFirstName(e.target.value)} type="text" id="fname" className="form-control form-control-lg" placeholder="First name"/>
                </div>
                <div className="form-outline mb-10">
                <input value={lastname} onChange={(e) => setLastName(e.target.value)} type="text" id="lname" className="form-control form-control-lg" placeholder="Last name"/>
                </div>
            </div>
            
          <div className="form-outline my-4">
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" className="form-control form-control-lg" placeholder="Email"/>
          </div>

          <div className="form-outline mb-4">
            <input value={pass} onChange={(e) => setPass(e.target.value)}  type="password" id="password" className="form-control form-control-lg" placeholder="Password"/>
          </div>

    
          <button onClick={() => props.onFormSwitch('register')} type="submit" className="btn btn-primary btn-lg btn-block">Register</button>
          <p id="terms" className=" pb-lg-2" >By signing in or creating an account, you acknowledge and accept our  <Link id="privacy" to='/signin'>privacy policy</Link></p>
           
            <p id="already" className="mb-5 pb-lg-2" >Already have an account? <Link id="login" to='/signin'>Sign In</Link></p>
        </form>
      </div>
    </div>
  </div>
</section>
)
}
export default Register;