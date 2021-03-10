import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import { SliderData } from "./SliderData";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div className="slider">
        <h2> Single Item</h2>
        <Slider {...settings}>
          {SliderData.map((photo, key) => {
            return (
              <div>
                <img key={key} width="50%" src={photo.img} alt={photo.name} />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
}
