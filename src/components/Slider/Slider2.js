import React from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import "./slider2.css";

export default function Slider2() {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  return (
    <div className="slider2">
      <Carousel breakPoints={breakPoints}>
        <Card number="Curso 1" />
        <Card number="Curso 2" />
        <Card number="Curso 3" />
        <Card number="Curso 4" />
        <Card number="Curso 5" />
        <Card number="Curso 6" />
      </Carousel>
    </div>
  );
}
