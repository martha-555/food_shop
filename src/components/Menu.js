/** @format */
import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
export default function Menu() {
  const [index, setIndex] = useState(0);
  function ControlledCarousel() {}
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className="menu">
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="carousel"
      >
        <Carousel.Item>
          <Link to="/pizza">
            <img
              className="d-block w-100"
              src="../images/Fone2.png"
              alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h2>ПІЦА</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/burger">
            <img
              className="d-block w-100"
              src="../images/burger.jpg"
              alt="Second slide"
            />
          </Link>

          <Carousel.Caption>
            <h2>БУРГЕРИ</h2>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/sushi">
            <img
              className="d-block w-100 carousel-item"
              src="../images/Sushi_fone.png"
              alt="Third slide"
            />
          </Link>

          <Carousel.Caption>
            <h2>СУШІ ТА РОЛИ</h2>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
