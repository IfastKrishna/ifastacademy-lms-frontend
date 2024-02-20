import React from "react";

function FlexBtween({ children, className, ...props }) {
  return (
    <div
      className={`w-full flex justify-between items-center ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default FlexBtween;
