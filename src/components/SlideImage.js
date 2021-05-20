import React, { useEffect } from "react";

function SlideImage(props) {
  return (
    <div className="slide">
      <div
        className="slide-img"
        style={{ backgroundImage: `url(${props.src})` }}
      ></div>
      <div className="slide-section">{props.section}</div>
      <p className="slide-details">{props.details}</p>
      <div className="learn-more">
        <button onClick={()=>window.location.href=`/${props.link}`}>En savoir plus</button>
      </div>
    </div>
  );
}

export default SlideImage;
