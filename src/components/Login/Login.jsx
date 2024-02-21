import React, { useState } from "react";
import { Input, Button, Spinner } from "../../components";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login as authLogin } from "../../features/authSlice";
import { conf } from "../../conf/conf";
import axios from "axios";
import toast from "react-hot-toast";
import { handleError } from "../../utils/handleAxiosError";
import Axios from "../../utils/BaseUrl";

function Login() {
  const [loading, setLoading] = useState(false);
  const [passwordShow, setPasswordShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordShow = () => {
    setPasswordShow(!passwordShow);
  };

  const login = async (values) => {
    try {
      setLoading(true);
      const response = await Axios.post("/users/login", values);
      const data = response.data;
      toast.success(data.message);
      dispatch(authLogin(data.data));
      navigate("/profile");
      setLoading(false);
    } catch (error) {
      toast.error(handleError(error.response.data));
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto px-5">
      <form onSubmit={handleSubmit(login)}>
        <div className="w-full mb-3">
          <Input
            label="Username or Email"
            placeholder="Enter your username or email"
            className="pr-10"
            {...register("emailorusername", {
              required: "Username or email is required.",
            })}
          />
          {errors.username && (
            <span className=" text-red-500 text-sm">
              {errors.username.message}
            </span>
          )}
        </div>

        <div className="w-full mb-3">
          <label className=" font-medium text-gray-500">Password</label>
          <div className="w-full mb-3 flex items-center justify-between pr-2 border text-gray-500 border-gray-300 hover:border-gray-400 rounded-md">
            <input
              placeholder="Enter your password"
              type={passwordShow ? "text" : "password"}
              className="py-2 outline-none pl-2 w-full rounded-md"
              {...register("password", { required: "Passwrod is required." })}
            />
            {passwordShow ? (
              <FaRegEye
                onClick={togglePasswordShow}
                className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"
                fontSize={20}
              />
            ) : (
              <FaRegEyeSlash
                onClick={togglePasswordShow}
                className="cursor-pointer text-gray-500 transition-colors duration-300 hover:text-gray-700"
                fontSize={20}
              />
            )}
          </div>
          {errors.password && (
            <span className=" text-red-500 text-sm">
              {errors.password.message}
            </span>
          )}
        </div>

        <div className="w-full mb-3">
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? " loging..." : "Login"}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Login;
