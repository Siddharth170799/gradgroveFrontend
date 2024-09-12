import React from "react";
import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import useFetch2 from "../../hooks/useFetch2";

const StudentLogin = () => {
  const [Email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [displayEmailError, setDisplayEmailError] = useState("");

  const [displayError, setDisplayError] = useState("");

  const studentSignUpDetails = useFetch2(
    
    "https://gradgrove-backend2-2.onrender.com/api/studentSignUpDetails"
  );

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    validateEmail(email);
  };

  const handlePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
    validatePassword(password);
  };

  const studentLoginDetailsPost = async (e) => {
    e.preventDefault();

    const hashedPassword = await bcrypt.hash(Password, 10);
    await axios.post("https://gradgrove-backend2-2.onrender.com/api/studentLoginDetails", {
      Email,
      Password: hashedPassword,
    });

    const details2 = await studentSignUpDetails.find(
      (item) => item.Email == Email
    );

    setData(details2);

    if (details2) {
      const data = await bcrypt.compare(Password, details2.Password);
      if (data) {
        navigate("/studentDashBoard");
      } else {
        setDisplayEmailError("Enter the Correct Password");
        console.log(displayEmailError);
      }
    } else {
      setDisplayError("Enter the Registered Email and Correct Password ");
      console.log(displayEmailError);
    }

    const token = await axios.get(
      "https://gradgrove-backend2-2.onrender.com/api/getStudentLoginToken"
    );

    if (token) {
      Cookies.set("studentLoginToken", token.data);
    }
  };

  const validateEmail = (Email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(Email)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!regex.test(password)) {
      setPasswordError(
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character."
      );
    } else {
      setPasswordError("");
    }
  };

  console.log("hi")

  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          <img src="src/images/logo.svg" alt="Logo" />
        </div>
      </header>
      <section style={{ backgroundColor: "rgb(68,86,115)" }}>
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            style={{ marginTop: "-30%", transform: "scale(1.3)" }} // Doubles the size
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                action="#"
                onSubmit={studentLoginDetailsPost}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    value={Email}
                    onChange={handleEmail}
                  />
                  {emailError && (
                    <div className="text-red-500">{emailError}</div>
                  )}
                  {displayEmailError && (
                    <div className="text-red-500">{displayEmailError}</div>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    value={Password}
                    onChange={handlePassword}
                  />
                  {passwordError && (
                    <div className="text-red-500">{passwordError}</div>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                {displayError && (
                  <div className="text-red-500">{displayError}</div>
                )}
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer mt-8">
        <a href="#" className="mr-4">
          About
        </a>
        <a href="#" className="mr-4">
          Privacy Policy
        </a>
        <a href="#">Support</a>
      </footer>
    </div>
  );
};

export default StudentLogin;
