import React from "react";

function ModelBox({ children }) {
  return (
    <div className="fixed inset-1 z-30 bg-gray-500 bg-opacity-50 flex justify-center items-center p-4">
      {children}
    </div>
  );
}

export default ModelBox;
