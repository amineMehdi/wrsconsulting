import React from "react";
import "../style/SlideImage.css";

function SlideImage(props){
    // console.log(props.src);
    return(
        <div className="slide" style={{backgroundImage: `url(${props.src})`}}>
            {/* <img className = "slide-img" src={props.src}/> */}
            <h2 className="slide-section">
                {props.section}
            </h2>
            <p className="slide-details">{props.details}</p>
        </div>
    );
}

export default SlideImage;