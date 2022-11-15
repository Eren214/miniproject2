import React, { Component } from "react";
import './Carousel1.css'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Link} from 'react-router-dom';


export default class Carousel1 extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 4,
      initialSlide: 0,
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
          <Link><img src="./images/december-avenue.jpg"/>
          <h6>December Avenue</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/sponge_cola.jpg"/>
            <h6>Spongecola</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/cueshe.jpg"/>
          <h6>Cueshe</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/ben&ben.jpg"/>
          <h6>Ben&Ben</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/rocksteddy.jpg"/>
          <h6>Rocksteddy</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/silent_sanctuary.jpg"/>
          <h6>Silent Sanctuary</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/itchyworms.jpg"/>
          <h6>Itchyworms</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/parokya.jpg"/>
          <h6>Parokya ni Edgar</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/callalily.jpg"/>
          <h6>Callalily</h6>
          </Link>
          </div>
          <div>
          <Link><img src="./images/sandwich.jpg"/>
          <h6>Sandwich</h6>
          </Link>
          </div>
        </Slider>
      </div>
    );
  }
}