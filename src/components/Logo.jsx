import React from "react";

function Logo({ size }) {
  return (
    <span>
      <h1
        className={`bg-clip-text text-3xl font-extrabold text-transparent bg-gradient-to-r from-slate-900 to-slate-600 ${size}`}
      >
        LMS
      </h1>
    </span>
  );
}

export default Logo;
