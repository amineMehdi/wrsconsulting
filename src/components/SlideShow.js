import React, { useEffect, useState } from "react";
import "../style/SlideShow.css";

function SlideShow(props) {
  useEffect(() => {
    console.log(window.screen.width);
    if (window.screen.width <= 900) {
      setMobileSize(true);
    }
  }, []);
  const [current, setCurrent] = useState(1);
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    for (let slide of slides) {
      slide.style.display = "none";
    }
    if (current > props.children.length) {
      setCurrent(1);
      return;
    } else if (current < 1) {
      setCurrent(props.children.length);
      return;
    }
    slides[current - 1].style.display = "block";
  }, [current]);
  const [mobileSize, setMobileSize] = useState(false);
  useEffect(() => {
    if (mobileSize){
      document.querySelector(".slide-controllers").style.display="none";
    }
  }, [mobileSize]);

  const getDots = () => {
    const dots = [];
    for(let i = 0; i < props.children.length; i++){
      const dotName = "dot-"+i;
      dots.push(
      <span key={i.toString()} className={dotName} onClick={()=>{
        setCurrent(i);
        const thisDot = document.querySelector("." + dotName);
        thisDot.classList.contains("active-dot") ? thisDot.classList.remove("active-dot") : thisDot.classList.add("active-dot"); 
        }}>
      </span>);
    }
    return dots;
  };

  return (
    <div className="slideshow-container">
      {props.children}
      <div className="slide-controllers">
        <span className="prev" onClick={() => setCurrent(current - 1)}>
        </span>
        <span className="next" onClick={() => setCurrent(current + 1)}>
        </span>
      </div>
      <div className="learn-more">
        <button>
          En Savoir Plus
        </button>
      </div>
      <div className="dots-container">
        {getDots()}
      </div>
    </div>
  );
}

export default SlideShow;
