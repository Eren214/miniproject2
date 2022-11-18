import React, { Component } from "react";
import './Carousel1.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from 'react-router-dom';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue", marginRight:"42px",borderRadius:"20px"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue",borderRadius:"20px"}}
      onClick={onClick}
    />
  );
}


export default class Carousel1 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div id="carousel1" className="container">
        <h2>Concerts</h2>
        <Slider {...settings}>
          <div>
          <Link to='/decave'><img src="./images/december-avenue.jpg" alt="december avenue"/>
          <h6>December Avenue</h6>
          </Link>
          </div>
          <div>
          <Link to='/sponcol'><img src="./images/sponge_cola.jpg" alt="sponge cola"/>
            <h6>Spongecola</h6>
          </Link>
          </div>
          <div>
          <Link to='/cueshe'><img src="./images/cueshe.jpg" alt="cueshe"/>
          <h6>Cueshe</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/ben&ben.jpg" alt="ben and ben"/>
          <h6>Ben&Ben</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/rocksteddy.jpg" alt="rocksteddy"/>
          <h6>Rocksteddy</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/silent_sanctuary.jpg" alt="silent sanctuary"/>
          <h6>Silent Sanctuary</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/itchyworms.jpg" alt="itchyworms"/>
          <h6>Itchyworms</h6>
          </Link>
          </div>
          <div>
          <img src="./images/parokya.jpg" alt="parokya ni edgar"/>
          <Link to='/concert'><h6>Parokya ni Edgar</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/callalily.jpg" alt="callalily"/>
          <h6>Callalily</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/sandwich.jpg" alt="sandwich"/>
          <h6>Sandwich</h6>
          </Link>
          </div>
        </Slider>
      </div>
    );
  }
}