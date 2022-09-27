import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import SliderContent from "./SliderContent";
import Dots from "./Dots";
import Arrows from "./Arrows";
import "./slider.css";
import { selectLastChilies } from "../../redux/selectors/chiliSelector";

function Slider() {
  const chilies = useSelector(selectLastChilies);
  const length = chilies.length - 1;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} chilies={chilies} />
      <Arrows
        prevSlide={() =>
          setActiveIndex(activeIndex < 1 ? length : activeIndex - 1)
        }
        nextSlide={() =>
          setActiveIndex(activeIndex === length ? 0 : activeIndex + 1)
        }
      />
      <Dots
        activeIndex={activeIndex}
        chilies={chilies}
        onClick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
