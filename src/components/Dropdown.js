import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Dropdown(props) {
  const [click, setClick] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const handleClick = () => setClick(!click);
  useEffect(() => {
    if (window.innerWidth < 1010) {
      setMobile(true);
    }
  }, []);
  return (
    <ul
      className={`dropdown-menu ${click ? "clicked" : ""}${
        mobile ? "mobile" : ""
      }`}
      onClick={handleClick}
    >
      {mobile ? (
        <div className="arrow-back" onClick={()=> console.log("m")}>
          <i className="fas fa-caret-left" /> Retour
        </div>
      ) : (
        ""
      )}
      {props.items.map((item, index) => {
        return (
          <li key={index} onClick={props.closeMobileMenu}>
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
