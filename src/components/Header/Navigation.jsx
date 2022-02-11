import React from "react";

function Navigation({ items, onClick }) {
  return (
    <ul className="main__navigation">
      {items.map((name_navigation, index) => (
        <li key={index}>
          <a href={name_navigation} onClick={() => onClick(name_navigation)}>
            {name_navigation}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default Navigation;
