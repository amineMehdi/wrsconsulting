import React, { useEffect } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";
function NavItemDropdown(props) {
  let dropdown = (
    <Dropdown
      items={props.dropdownItems}
      closeMobileMenu={props.closeMobileMenu}
      dropDownActive={props.dropdownMenu}
      setDropDownActive={props.setDropdownMenu}
      menuIcon={props.menuIconClick}
    />
  );
  return (
    <li
      className="nav-item"
      onMouseEnter={() => (props.mobile ? "" : props.setDropdownMenu(true))}
      onMouseLeave={() => (props.mobile ? "" : props.setDropdownMenu(false))}
      onClick={() => {
        if (props.mobile) {
          props.setDropdownMenu(!props.dropdownMenu);
          console.log(props.dropdownMenu);
        }
      }}
    >
      <Link
        to={`/${props.path}`}
        className="nav-links"
        onClick={props.closeMobileMenu}
      >
        {props.title}
      </Link>

      {props.mobile ? <i className="mobile-arrow fas fa-caret-right" /> : ""}

      {(props.mobile || props.dropdownMenu) ? dropdown : ""}
    </li>
  );
}

export default NavItemDropdown;
