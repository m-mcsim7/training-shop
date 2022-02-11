import React from "react";
import { Link } from "react-router-dom";

function Navigation({ items, onClick }) {
  return (
    <ul className="main__navigation">
      {items.map((name_navigation, index) => (
        <li key={index}>
          <Link to={name_navigation} onClick={() => onClick(name_navigation)}>
            {name_navigation}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
