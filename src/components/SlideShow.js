import React, { useEffect, useState } from "react";
import "../style/SlideShow.css";

function SlideShow(props) {
  const slideLength = props.children.length;
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    for (let slide of slides) {
      slide.style.display = "none";
    }
    if (current > slideLength) {
      setCurrent(1);
      return;
    }
    else if (current < 1) {
      setCurrent(slideLength);
      return;
    }
    console.log(current);
    slides[current - 1].style.display = "block";
  }, [current]);
  return (
    <div className="slideshow-container">
      {props.children}
      <div className="slide-controllers">
        <a className="prev" onClick={() => setCurrent(current - 1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => setCurrent(current + 1)}>
          &#10095;
        </a>
      </div>
    </div>
  );
}

export default SlideShow;
