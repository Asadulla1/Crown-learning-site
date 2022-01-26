import React from "react";
import { Carousel } from "react-bootstrap";
import img from "../../Image/pexels-julia-m-cameron-4145153.jpg";
import img1 from "../../Image/pexels-mentatdgt-2173508.jpg";
import img2 from "../../Image/pexels-vanessa-garcia-6325959.jpg";
const Slider = () => {
  return (
    <div className="mx-auto">
      <Carousel>
        <Carousel.Item>
          <img className="d-block img-fluid" src={img} alt="First slide" />
          <Carousel.Caption className="text-dark fw-bolder">
            <h3>Crown Learning</h3>
            <p>First Ever Full Online Based Learning Platform </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img-fluid" src={img1} alt="Second slide" />

          <Carousel.Caption>
            <h3>Crown Learning</h3>
            <p>Best Teacher , Best Environemt</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block img-fluid" src={img2} alt="Third slide" />

          <Carousel.Caption>
            <h3>Crown Learning</h3>
            <p>
              We Are Ready To Give You a Lovesome Learning Environment. Are You
              Ready?
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
