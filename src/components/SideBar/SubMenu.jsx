// SubMenu.js
import React, { useState } from "react";
import MenuWrapper from "./MenuWrapper";

function SubMenu({ menuName, isActiveIcons, isDeActiveIcons, children }) {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  return (
    <li>
      <button
        className="flex items-center justify-between text-xl w-full py-2 px-4 hover:bg-black/10 rounded duration-200 focus:outline-none"
        onClick={() => setIsActiveMenu(!isActiveMenu)}
      >
        {menuName} {isActiveMenu ? isActiveIcons : isDeActiveIcons}
      </button>
      {isActiveMenu && (
        <MenuWrapper>
          {React.Children.map(children, (child) =>
            React.cloneElement(child, {
              className: "pl-8", // Adjust submenu indentation as needed
            })
          )}
        </MenuWrapper>
      )}
    </li>
  );
}

export default SubMenu;
