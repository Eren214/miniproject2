import React from "react";
import './Footer.css';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
    return(
        <section className="footer">
            <div className="container justify-content-evenly">
                <div className="row">
                    <div className="col-md-3  ">
                    <h2>Useful Links</h2>
                    <Link><p>Privacy Policy</p></Link>
                    <Link><p>Terms of Use</p></Link>
                    <Link><p>Return Policy</p></Link>
                    <Link><p>Discount Coupons</p></Link>
                    </div>
                    <div className="col-md-3 ">
                    <h2>Our Company</h2>
                    <Link><p>About Us</p></Link>
                    <Link><p>Partners</p></Link>
                    <Link><p>Careers</p></Link>
                    <Link><p>Affiliate Programs</p></Link>
                    </div>
                    <div className="col-md-3 ">
                    <h2>Follow Us On</h2>
                    <a href=""><p>Facebook</p></a>
                    <a href=""><p>Instagram</p></a>
                    <a href=""><p>Youtube</p></a>
                    <a href=""><p>LinkedIn</p></a>
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