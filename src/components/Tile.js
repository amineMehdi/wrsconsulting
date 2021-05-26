import React from "react";

function Tile(props){
    return (
        <div className="tile">
            <div className="tile-logo">
                <img src={props.logo} alt="p"/>
            </div>
            <div className="tile-header">
                {props.header}
            </div>
            <div className="tile-details">
                <p>
                    {props.details}
                </p>
            </div>
            <div className="tile-arrow">
            </div>
            <div className="tile-learn-more">
                <button>
                    En savoir plus
                </button>
            </div>
        </div>
    );
}

export default Tile;