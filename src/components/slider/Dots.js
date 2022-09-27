/* eslint-disable react/prop-types */
import React from "react";

function Dots({ activeIndex, onClick, chilies }) {
  return (
    <div className="all-dots">
      {chilies.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onClick(index)}
        ></span>
      ))}
    </div>
  );
}

export default Dots;
