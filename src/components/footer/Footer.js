import React from "react";
import './Footer.css';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-3  ">
                    <h2>Useful Links</h2>
                    <p>Privacy Policy</p>
                    <p>Terms of Use</p>
                    <p>Return Policy</p>
                    <p>Discount Coupons</p>
                    </div>
                    <div className="col-md-3 ">
                    <h2>Our Company</h2>
                    <p>About Us</p>
                    <p>Partners</p>
                    <p>Careers</p>
                    <p>Affiliate Programs</p>
                    </div>
                    <div className="col-md-3 ">
                    <h2>Follow Us On</h2>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Youtube</p>
                    <p>LinkedIn</p>
                    </div>
                    <div className="col-md-3 footer-image">
                    <h2>Download App</h2>
                    <img id="playstore" className="img-fluid" src="./images/goggleapp.png"/>
                    <img id="applestore" className="img-fluid" src="./images/apolstore.png"/>
                    </div>
                </div>
                <hr/>
                <p className="copyright text-center">&#169;TicketLab, All rights reserved 2022</p>
            </div>
        </section>   
        );
    }
}
export default Footer;