/* eslint-disable react/prop-types */
import React from "react";
import ContainerCol from "../../style/Container.style";
import { useNavigate } from "react-router-dom";

function SliderContent({ activeIndex, chilies }) {
  const navigate = useNavigate();

  return (
    <section className="slider-container">
      <ContainerCol
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {chilies.map((slide, index) => (
          <div
            key={index}
            className={index === activeIndex ? "slides active " : "inactive"}
          >
            <h1 className="slide-title"> {slide.name}</h1>
            <img
              src={slide.imageUrl}
              alt={slide.name}
              className="slide-image"
              onClick={() => navigate(`/detail/${slide?.id}`)}
            />
          </div>
        ))}
      </ContainerCol>
    </section>
  );
}

export default SliderContent;
