import React, { useEffect, useState } from "react";
import "../style/SlideShow.css";
import anime from "animejs/lib/anime.es";

let timer;
function SlideShow(props) {
  const slideUpAnimation = (element, toY) =>
    anime({
      targets: "." + element,
      top: ["60%", toY.toString()],
      duration: 2000,
      easing: "easeOutQuad",
    });
  const learnMoreAnimation = () =>
    anime({
      targets: ".learn-more",
      opacity: ["0%", "100%"],
      delay: 500,
      duration: 2000,
      easing: "easeOutExpo",
    });
  const slideImgBlurAnimation = () =>
    anime({
      targets: ".slide-img",
      filter: "blur(3px)",
      duration: 2200,
      easing: "easeOutExpo",
    });

  useEffect(() => {
    if (window.innerWidth <= 1000) {
      document.querySelector(".slide-controllers").style.display = "none";
    }
    slideUpAnimation("slide-section", 25).play();
    slideUpAnimation("slide-details", 50).play();
    learnMoreAnimation().play();
    slideImgBlurAnimation().play();
  }, []);

  const [current, setCurrent] = useState(1);
  useEffect(() => {
    slideUpAnimation("slide-section", 25).play();
    slideUpAnimation("slide-details", 52).play();
    learnMoreAnimation().play();
    slideImgBlurAnimation().play();

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
    updateDots();
  }, [current]);


  const getDots = () => {
    const dots = [];
    for (let i = 0; i < props.children.length; i++) {
      const dotName = "dot-" + i;
      dots.push(
        <span
          key={i.toString()}
          className={dotName}
          onClick={() => {
            setCurrent(i + 1);
            updateDots();
          }}
        ></span>
      );
    }
    return dots;
  };

  const updateDots = () => {
    const allDots = document.querySelectorAll("span[class^='dot-']");
    allDots.forEach((dot, index) => {
      current - 1 !== index
        ? dot.classList.remove("active-dot")
        : dot.classList.add("active-dot");
    });
  };
  return (
    <div className="slideshow-container">
      {props.children}
      <div className="slide-controllers">
        <span className="prev" onClick={() => setCurrent(current - 1)}></span>
        <span className="next" onClick={() => setCurrent(current + 1)}></span>
      </div>
      <div className="dots-container">{getDots()}</div>
    </div>
  );
}

export default SlideShow;
