import React, { useState } from "react";
import { Login as LoginComponent, Logo } from "../../components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="w-full h-screen pt-20">
      <div className="max-w-xl mx-auto rounded-md shadow-md py-5">
        <div className="text-center leading-10">
          <Logo />
          <h2 className="text-2xl font-bold text-gray-800">
            Sign in to your account
          </h2>
          <h3 className=" text-gray-400 font-semibold">
            Don't have any account?{" "}
            <Link to="/signup" className=" hover:underline">
              Sign Up
            </Link>
          </h3>
        </div>
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
