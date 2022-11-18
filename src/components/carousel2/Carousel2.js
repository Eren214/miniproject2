import React, { Component } from "react";
import './Carousel2.css'
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

export default class Carousel2 extends Component {
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
      <div id="carousel2" className="container">
        <h2>Featured Artist</h2>
        <Slider {...settings}>
          <div>
          <Link><img src="./images/Zack_Tabudlo.png"/>
          <h6>Zack Tabudlo</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/arthur_nery.jpg"/>
          <h6>Arthur Nery</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/anji_salvacion.jpeg"/>
          <h6>Anji Salvacion</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/Michael-Pangilinan.jpg"/>
          <h6>Michael Pangilinan</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/Adie-Garcia.jpg"/>
          <h6>Adie Garcia</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/gigi-de-lana.jpg"/>
          <h6>Gigi de Lana</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/paolo_sandejas.jpg"/>
          <h6>Paolo Sandejas</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/janine-berdin.jpg"/>
          <h6>Janine Berdin</h6>
          </Link>
          </div>
        </Slider>
      </div>
    );
  }
}