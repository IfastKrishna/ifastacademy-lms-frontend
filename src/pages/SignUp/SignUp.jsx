import React from "react";
import { Signup, Logo } from "../../components";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="w-full h-screen pt-20">
      <div className="max-w-xl mx-auto rounded-md shadow-md">
        <div className="text-center">
          <Logo />
          <h2 className="text-2xl font-bold text-gray-800">
            Sign Up to your account
          </h2>
          <h3 className=" text-gray-400 font-semibold">
            Already have an account?{" "}
            <Link to="/login" className=" hover:underline">
              Sign in
            </Link>
          </h3>
        </div>
        <Signup />
      </div>
    </div>
  );
}

export default SignUp;
