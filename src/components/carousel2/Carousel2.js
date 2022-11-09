import React from "react";
import Slider from "react-slick";
import "./Carousel2.css";
import BasicCard from "./Card";

export default function Carousel2() {
  const slider = React.useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 200,
    slidesToShow: 4,
    slidesToScroll: 1,

    // customPaging: function (i) {
    //   return <p>{i + 1}</p>;
    // },

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],

    
  };

  return (
    <div className="container-fluid py-2">
      <h4>Concerts</h4>
      <Slider ref={slider} {...settings}>
        {products?.map((item, index) => {
          return <BasicCard item={item} />;
        })}
      </Slider>
    </div>
  );
}

const products = [
  {
    id: 1,
    image: "./images/spongecola.jpg",
  },
  {
    id: 2,
    image: "./images/spongecola.jpg",
  },
  {
    id: 3,
    image: "./images/spongecola.jpg",
  },
  {
    id: 4,
    image: "./images/spongecola.jpg",
  },

  {
    id: 5,
    image: "./images/spongecola.jpg",
  },
  {
    id: 6,
    image: "./images/spongecola.jpg",
  },
];