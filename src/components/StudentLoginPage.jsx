import React from "react";
import { useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";

const StudentLogin = () => {
  const [Email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [Password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [displayEmailError, setDisplayEmailError] = useState("");

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
    await axios.post("http://localhost:3005/api/studentLoginDetails", {
      Email,
      Password: hashedPassword,
    });

    const details = await axios.get(
      "http://localhost:3005/api/studentSignUpDetails"
    );
    const details2 = await details.data.find((item) => item.Email == Email);
    console.log(details.data);
    setData(details2);
    console.log(details2);
    console.log(data);
    if (details2) {
      const data = await bcrypt.compare(Password, details2.Password);
      if (data) {
        navigate("/studentDashBoard");
      } else {
        setDisplayEmailError("Enter the Registered Email");
        console.log(displayEmailError);
      }
    } else {
      setDisplayEmailError("Enter the Registered Email and Correct Password ");
      console.log(displayEmailError);
    }

    const token = await axios.get(
      "http://localhost:3005/api/getStudentLoginToken"
    );
    console.log(token);
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

  console.log(displayEmailError);
  return (
    <div className="main-container">
      <header className="header">
        <div className="logo">
          <img src="src/images/logo.svg" alt="Logo" />
        </div>
      </header>

      <section className="content">
        <h1 className="TitleStudentLogin">
          <b>Student Login</b>
        </h1>

        <form className="form space-y-6" onSubmit={studentLoginDetailsPost}>
          <div className="form-group flex items-center space-x-4">
            <label htmlFor="email" className="w-1/4">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              required
              value={Email}
              onChange={handleEmail}
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
            {displayEmailError && (
              <div className="text-red-500">{displayEmailError}</div>
            )}
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="password" className="w-1/4">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              required
              value={Password}
              onChange={handlePassword}
            />
            {passwordError && (
              <div className="text-red-500">{passwordError}</div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button bg-blue-600 text-white px-6 py-2 rounded"
          >
            Login
          </button>
        </form>
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
