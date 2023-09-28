
import React, { useState } from "react";
import image1 from "../image/interior.jpg";
import image from "../image/interior2.jpg";
import image2 from "../image/interior3.jpg";
import image3 from "../image/interior.jpg";
import image4 from "../image/interior2.jpg";
import image5 from "../image/intrior1.jpg";
import { Carousel } from "react-responsive-carousel";

import "./Slider.css";

const Slider1 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div > 
      <Carousel interval={1500} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
          <img className="" src={image1} alt="First slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>


        
        <Carousel.Item>
          <img className="" src={image} alt="First slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={image2} alt="Second slide" style={{maxWidth:'48%'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={image3} alt="Third slide" style={{maxWidth:'42%'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={image4} alt="Fourth slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="" src={image5} alt="Fifth slide" style={{maxWidth:'40%'}} />
        </Carousel.Item>
      </Carousel>
      <br/>
    </div>
  );
};
export default Slider1;