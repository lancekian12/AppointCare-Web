// src/components/Login.tsx
import React, { useState } from "react";
import axios, { AxiosError } from "axios";
import WelcomeDesign from "@/components/reusecomponent/WelcomeDesign";
import {
  LoginForm,
  AuthResponse,
  HomeResponseData,
  SetUserData,
} from "@/types/auth.types";

interface LoginProps {
  setUserData: SetUserData;
}

const Login: React.FC<LoginProps> = ({ setUserData }) => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post<AuthResponse>(
        "https://appointment-care-api.vercel.app/api/v1/auth/login",
        loginForm
      );

      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userData", JSON.stringify(response.data.user));

      const token = response.data.token;
      const homeResponse = await axios.get<HomeResponseData>(
        "https://appointment-care-api.vercel.app/api/v1/home",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      // decide redirect & set user data
      if (
        response.data.user.role === "Doctor" &&
        response.data.user.status === "Accepted"
      ) {
        setErrorMessage("Login Successfully");
        setUserData({ response: response.data, homeResponse: homeResponse.data });
        window.location.href = "/doctorpage";
      } else if (response.data.user.role === "Patient") {
        setErrorMessage("Login Successfully");
        setUserData({ response: response.data, homeResponse: homeResponse.data });
        window.location.href = "/";
      } else if (
        response.data.user.role === "Doctor" &&
        response.data.user.status === "Pending"
      ) {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setErrorMessage("Your Application is on Pending ");
      } else if (
        response.data.user.role === "Doctor" &&
        response.data.user.status === "Rejected"
      ) {
        localStorage.removeItem("token");
        localStorage.removeItem("userData");
        setErrorMessage("Your Application is Rejected ");
      } else {
        // Fallback
        setErrorMessage("Login Successfully");
        setUserData({ response: response.data, homeResponse: homeResponse.data });
      }
    } catch (err) {
      const axiosErr = err as AxiosError;
      if (axiosErr.response && axiosErr.response.status === 401) {
        setErrorMessage("Incorrect email or password");
      } else {
        console.error("Login Error:", err);
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    }
  };

  const isSuccess = errorMessage === "Login Successfully";

  return (
    <section className="mt-12 mb-24 px-4">
      <div className="max-w-6xl mx-auto">
        <WelcomeDesign />
        <hr className="my-6 w-full border-t-2 border-gray-300" />

        <div className="flex justify-center text-center">
          <form
            onSubmit={handleSubmit}
            className="w-full sm:w-[500px] bg-transparent"
            aria-labelledby="login-heading"
          >
            <h2
              id="login-heading"
              className="text-2xl font-bold text-[#6EAB36] mb-1 ml-2"
            >
              Log In
            </h2>
            <h4 className="ml-2 text-sm mb-4">
              Please complete the following details to proceed
            </h4>

            <label
              className="block font-medium py-2 text-left ml-0"
              htmlFor="emailLogin"
            >
              Email *
            </label>
            <input
              id="emailLogin"
              name="email"
              type="email"
              placeholder="Enter your Email"
              required
              value={loginForm.email}
              onChange={handleChange}
              className="w-full sm:w-[500px] border-2 border-[#E6E6E6] rounded-lg h-[50px] pl-5 mb-2 focus:outline-none focus:ring-2 focus:ring-[#007E85]"
            />

            <label
              className="block font-medium py-2 text-left ml-0"
              htmlFor="passwordLogin"
            >
              Password *
            </label>
            <input
              id="passwordLogin"
              name="password"
              type="password"
              placeholder="Enter your Password"
              required
              value={loginForm.password}
              onChange={handleChange}
              className="w-full sm:w-[500px] border-2 border-[#E6E6E6] rounded-lg h-[50px] pl-5 mb-2 focus:outline-none focus:ring-2 focus:ring-[#007E85]"
            />

            {errorMessage && (
              <span
                className={`block text-[18px] mt-2 mb-0 text-left ${
                  isSuccess ? "text-green-600" : "text-red-600"
                }`}
                role={isSuccess ? "status" : "alert"}
              >
                {errorMessage}
              </span>
            )}

            <button
              type="submit"
              className="mt-8 w-full sm:w-[500px] rounded-md py-2 px-4 bg-[#007E85] text-white border-0 hover:opacity-95"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
