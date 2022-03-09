import React from "react";
import { Link } from "react-router-dom";

const items = [
  { value: "about us", href: "/about" },
  { value: "women", href: "/women" },
  { value: "men", href: "/men" },
  { value: "beauty", href: "/beauty" },
  { value: "blog", href: "/blog" },
  { value: "contact", href: "/contact" },
];

function Navigation(props) {
  return (
    <ul
      onClick={() => {
        props.setActive(!props.active);
      }}
      className={props.active ? "main__navigation _active" : "main__navigation"}
    >
      {items.map((item, index) => (
        <li key={index}>
          <Link to={`${item.href}`}
          data-test-id={`menu-link-${item.value}`}
          >
            {item.value}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
