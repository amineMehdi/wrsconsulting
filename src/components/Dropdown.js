import React, { useState } from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <ul
      className={`dropdown-menu ${click ? "clicked" : ""}`}
      onClick={handleClick}
    >
      {props.items.map((item, index) => {
        return (
          <li key={index}>
            <Link
              to={item.path}
              onClick={() => setClick(false)}
              className="dropdown-link"
            >
              {item.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default Dropdown;
