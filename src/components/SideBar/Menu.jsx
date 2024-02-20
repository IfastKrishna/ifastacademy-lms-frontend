// Menu.js
import React from "react";
import { NavLink } from "react-router-dom";

function Menu({ children, className, to }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center text-xl w-full py-2 px-4 rounded duration-200 ${
            isActive ? "bg-black/10" : "hover:bg-black/10"
          } ${className}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default Menu;
