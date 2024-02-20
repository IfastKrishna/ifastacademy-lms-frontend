import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "../index.js";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm();
  const password = React.useRef({});
  password.current = watch("password", "");

  const create = (values) => {
    console.log(values);
  };

  return (
    <div
      className="max-w-xl mx-auto my-14
     lg:my-0 rounded-md py-4 px-5"
    >
      <form onSubmit={handleSubmit(create)}>
        <div className="w-full mb-3">
          <Input
            label="Name"
            placeholder="Enter your name"
            {...register("name", { required: true })}
          />
          {errors.name && (
            <span className="text-red-500">Name is Required</span>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email", {
              required: true,
              pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            })}
          />
          {errors.email && (
            <span className="text-red-500">Email is Required</span>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            label="Phone Number"
            type="tel"
            placeholder="Enter your phone number"
            {...register("phoneNo", {
              required: true,
              pattern: /^\d{10}$/,
            })}
          />
          {errors.phoneNo && (
            <span className="text-red-500">Phone Number is Required</span>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            label="Password"
            type="password"
            placeholder="Enter your password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-red-500">Password is Required</span>
          )}
        </div>
        <div className="w-full mb-3">
          <Input
            label="Confirm Password"
            type="password"
            placeholder="Enter your password"
            {...register("confpassword", {
              required: true,
              validate: (value) =>
                value === password.current || "The password do not match",
            })}
          />
          {errors.confpassword && (
            <span className="text-red-500">{errors.confpassword.message}</span>
          )}
        </div>
        <Button type="submit" className="w-full disabled:cursor-not-allowed">
          Create Account
        </Button>
      </form>
    </div>
  );
}

export default Signup;
