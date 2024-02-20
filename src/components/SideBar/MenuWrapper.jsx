// MenuWrapper.js
import React from "react";

function MenuWrapper({ children, className }) {
  return <ul className={`w-full ${className}`}>{children}</ul>;
}

export default MenuWrapper;
