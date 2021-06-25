import React, { useEffect, useRef, useState } from "react";
import "../style/components/SlideShow1.css";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";

const colors = ["#0088FE", "#00C49F", "#FFBB28"];

function SlideShow1() {
  return (
    <div className="slideshow">
      <div className="slideshowSlider">
        {colors.map((backgroundColor, index) => (
          <div className="slide" key={index} style={{backgroundColor}}></div>
        ))}
      </div>

      <div className="slideshowDots">
            {
                colors.map((_,idx) =>(
                    <div key={idx} className="slideshowDot"></div>
                ))
            }
      </div>
    </div>
  );
}
export default SlideShow1;
// const images = [img1, img2, img3, img4];
// const delay = 2500;

// function SlideShow1() {
//   const [index, setIndex] = useState(0);
//   const timeOutRef = useRef(null);

//   const resetTimeout = () => {
//     if (timeOutRef.current) {
//       clearTimeout(timeOutRef.current);
//     }
//   };
//   useEffect(() => {
//     resetTimeout();
//     timeOutRef.current = setTimeout(() => {
//       setIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, delay);
//     return () => {
//       resetTimeout();
//     };
//   }, [index]);
//   return (
//     <div className="slideshow-container">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%), 0, 0)` }}
//       >
//         {images.map((image, idx) => (
//           <div
//             className="slide"
//             key={idx}
//             style={{ backgroundImage: `url(${image})` }}
//           ></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {images.map((_, ind) => (
//           <div
//             key={ind}
//             className={`slideshow${index == ind ? " active" : ""}`}
//             onClick={() => setIndex(ind)}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default SlideShow1;
