import React, { useState } from "react";
import { Button, Login, Signup } from "../../components/index.js";
import toast from "react-hot-toast";
import { useMediaQuery } from "react-responsive";

function Dev() {
  const isSmallDivise = useMediaQuery({ query: "(max-width:1024px)" });
  const notify = () =>
    toast.success("Register is successfully", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });

  return (
    <div
      className={`w-full ${
        isSmallDivise ? "overflow-x-hidden" : "h-screen"
      } overflow-auto`}
    >
      <Signup />
      <Login />
      <div className="flex mb-5">
        <Button className="mx-auto" onClick={notify}>
          Alert
        </Button>
      </div>
    </div>
  );
}

export default Dev;
