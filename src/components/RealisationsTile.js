import React, { useEffect } from "react";
import anime from "animejs/lib/anime.es";

function RealisationsTile(props) {
  const getDetails = (data) => {
    const liList = [];
    data.forEach((el, ind) => {
      liList.push(<li key={ind}>{el}</li>);
    });
    return liList;
  };

  return (
    <div className="realisations-tile">
      <div
        className="realisations-tile-img"
        style={{ backgroundImage: `url(${props.data.src})` }}
      ></div>
      <div className="realisations-tile-header">
        <header>{props.data.header}</header>
      </div>
      <ul className="realisations-tile-details">
        {getDetails(props.data.details)}
      </ul>
    </div>
  );
}

export default RealisationsTile;
