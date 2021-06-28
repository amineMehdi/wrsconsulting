import React, { useEffect, useRef, useState } from "react";
import "../style/components/SlideShow.css";
import { Link } from "react-router-dom";
import img1 from "../images/img-1.jpg";
import img2 from "../images/img-2.jpg";
import img3 from "../images/img-3.jpg";
import img4 from "../images/img-4.jpg";

const images = [
  {
    img: img1,
    header: "Reseaux & Infrastructure",
    details:
      "Maîtrisez l’évolution de votre Datacenter, vos Clouds et vos applications Saas.",
    link: "infrastructure-reseaux",
  },
  {
    img: img2,
    header: "Développement logiciel",
    details:
      "Maîtrisez vos développements et garantissez la meilleure expérience utilisateur à vos clients.",
    link: "developpement-logiciel",
  },
  {
    img: img3,
    header: "Gestion de projet",
    details:
      "Bordez vos budgets, prévenez vos risques, en garantissant vos coûts, vos délais, et votre qualité logicielle.",
    link: "gestion-de-projet",
  },
  {
    img: img4,
    header: "Consulting en stratégie IT",
    details:
      "Ayez toujours un coup d’avance en garantissant l’efficacité de votre veille stratégique.",
    link: "consulting-en-strategie-it",
  },
];
const delay = 2500;
function SlideShow1() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div
            className="slide"
            key={index}
            style={{ backgroundImage: `url(${image.img})` }}
          >
            <header>{image.header}</header>
            <div className="slide-details">
              <p>{image.details}</p>
            </div>
            <div className="learn-more">
              <button>
                <Link to={`/${image.link}`}>
                  <span>En savoir plus</span>
                </Link>
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
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
// const images = ["#0088FE", "#00C49F", "#FFBB28"];
// const delay = 2500;

// function Slideshow() {
//   const [index, setIndex] = React.useState(0);
//   const timeoutRef = React.useRef(null);

//   function resetTimeout() {
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//   }

//   React.useEffect(() => {
//     resetTimeout();
//     timeoutRef.current = setTimeout(
//       () =>
//         setIndex((prevIndex) =>
//           prevIndex === images.length - 1 ? 0 : prevIndex + 1
//         ),
//       delay
//     );

//     return () => {
//       resetTimeout();
//     };
//   }, [index]);

//   return (
//     <div className="slideshow">
//       <div
//         className="slideshowSlider"
//         style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
//       >
//         {images.map((backgroundColor, index) => (
//           <div className="slide" key={index} style={{ backgroundColor }}></div>
//         ))}
//       </div>

//       <div className="slideshowDots">
//         {images.map((_, idx) => (
//           <div
//             key={idx}
//             className={`slideshowDot${index === idx ? " active" : ""}`}
//             onClick={() => {
//               setIndex(idx);
//             }}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// }

// ReactDOM.render(<Slideshow />, document.getElementById("App"));
