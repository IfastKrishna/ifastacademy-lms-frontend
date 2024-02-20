import React from "react";

function Textarea({ label, className = "", ...props }, ref) {
  return (
    <div>
      {label && <label className=" font-medium text-gray-500">{label}</label>}
      <textarea
        ref={ref}
        className={`py-2 px-2 border border-gray-300 text-gray-500 rounded-md w-full outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
        {...props}
      ></textarea>
    </div>
  );
}

export default React.forwardRef(Textarea);
