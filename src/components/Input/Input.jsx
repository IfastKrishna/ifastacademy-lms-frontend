import React from "react";

function Input({ label, type = "text", className = "", ...props }, ref) {
  return (
    <div>
      {label && <label className=" font-medium text-gray-500">{label}</label>}
      <input
        type={type}
        ref={ref}
        className={`py-2 px-2 border border-gray-300 text-gray-500 rounded-md w-full outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
        {...props}
      />
    </div>
  );
}

export default React.forwardRef(Input);
