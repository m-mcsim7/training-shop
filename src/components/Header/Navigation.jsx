import React from "react";
import { Link } from "react-router-dom";

const items = [
  { value: "About Us", href: "/about" },
  { value: "Women", href: "/women" },
  { value: "Men", href: "/men" },
  { value: "Beauty", href: "/beauty" },
  { value: "Blog", href: "/blog" },
  { value: "Contact", href: "/contact" },
];

function Navigation(props) {
  return (
    <ul
      onClick={() => {
        props.setActive(!props.active);
      }}
      className={props.active ? "main__navigation _active" : "main__navigation"}
      data-test-id="menu"
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link to={`${item.href}`} data-test-id={`menu-link-${item.href}`}>
            {item.value}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
