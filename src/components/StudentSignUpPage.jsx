import React, { useEffect, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [textColor, settextColor] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [fieldStudy, setFieldStudy] = useState("");

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    const name = e.target.value;
    setName(name);
    validateName(name);
  };

  const validateName = (name) => {
    const regex = /^[A-Za-z\s]+$/;
    if (!regex.test(name)) {
      setNameError("Name must only contain alphabetic characters and spaces.");
    } else {
      setNameError("");
    }
  };

  const handlePhoneNumber = (e) => {
    const number = e.target.value;
    setPhoneNumber(number);
    validatePhoneNumber(number);
  };

  const validatePhoneNumber = (number) => {
    const regex = /^\d{10}$/;
    if (!regex.test(number)) {
      setPhoneNumberError("Phone number must be exactly 10 digits.");
    } else {
      setPhoneNumberError("");
    }
  };

  const handleEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
    validateEmail(email);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(email)) {
      setEmailError("Please enter a valid email address.");
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
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

  const HandletextColorChange = (e) => {
    const selecttextColor = e.target.value;
    settextColor(selecttextColor);

    const details = selecttextColor.split("-");
    setAge(2024 - details[0]);
  };

  const postSignUpDetails = async (e) => {
    e.preventDefault();

    if (name && textColor && gender && fieldStudy && email && password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const details = await axios.post(
        "http://localhost:3005/api/studentSignUpDetails",
        {
          name,
          textColor,
          age,
          gender,
          fieldStudy,
          phoneNumber,
          email,
          password: hashedPassword,
        }
      );
      console.log(details);

      const token = await axios.get("http://localhost:3005/api/getToken");
      console.log(token.data);
      if (token) {
        Cookies.set("token", token.data, { expires: 7 });
        console.log("Token stored in cookies:", token.data);
      } else {
        console.log("Error occurred in storing the token");
      }
    }
  };

  return (
    <div className="main-container">
      <header className="header flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="logo">
          <img src="src/images/logo.svg" alt="Logo" />
        </div>
        <div className="nav-buttons flex items-center">
          <img src="src/images/SignUp.jpeg" alt="Join Icon" className="mr-2" />
          <a
            href="/join"
            className="btn bg-blue-600 text-white px-4 py-2 rounded mr-4 flex items-center"
          >
            Join for Free
          </a>
          <img src="src/images/Login.jpeg" alt="Login Icon" className="mr-2" />
          <a
            className="btn bg-blue-600 text-white px-4 py-2 rounded flex items-center"
            onClick={() => navigate("/studentLogin")}
          >
            Login
          </a>
        </div>
      </header>

      <section className="content p-4">
        <h1 className="TitleStudentSignUp text-2xl font-bold">
          Student Sign Up
        </h1>

        <form className="form space-y-6" onSubmit={postSignUpDetails}>
          <div className="form-group flex items-center space-x-4">
            <label htmlFor="name" className="w-1/4">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="form-input w-full p-2 border border-gray-300 rounded 
              textColor"
              required
            />
            {nameError && <div className="text-red-500">{nameError}</div>}
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="textColor" className="w-1/4">
              Date of Birth
            </label>
            <input
              type="date"
              id="textColor"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              value={textColor}
              onChange={HandletextColorChange}
              required
            />
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="age" className="w-1/4">
              Age
            </label>
            <input
              type="number"
              id="age"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              value={age}
              readOnly
            />
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="gender" className="w-1/4">
              Gender
            </label>
            <select
              id="gender"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="fieldOfStudy" className="w-1/4">
              Field of Study
            </label>
            <select
              id="fieldOfStudy"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              value={fieldStudy}
              onChange={(e) => setFieldStudy(e.target.value)}
              required
            >
              <option value="">Select Field of Study</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Electrical Engineering">
                Electrical Engineering
              </option>
              <option value="Mechanical Engineering">
                Mechanical Engineering
              </option>
              <option value="Civil Engineering">Civil Engineering</option>
              <option value="Biotechnology">Biotechnology</option>
              <option value="Mathematics">Mathematics</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Economics">Economics</option>
              <option value="Business Administration">
                Business Administration
              </option>
            </select>
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="phone" className="w-1/4">
              Phone
            </label>
            <div className="flex w-full">
              <input
                type="text"
                id="phone"
                className="form-input w-full p-2 border border-gray-300 rounded-l textColor"
                required
                value={phoneNumber}
                onChange={handlePhoneNumber}
              />
              <button
                type="button"
                className="otp-button bg-blue-600 text-white px-4 rounded-r"
              >
                Send OTP
              </button>
              {phoneNumberError && (
                <div className="text-red-500">{phoneNumberError}</div>
              )}
            </div>
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="email" className="w-1/4">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              value={email}
              onChange={handleEmail}
            />
            {emailError && <div className="text-red-500">{emailError}</div>}
          </div>

          <div className="form-group flex items-center space-x-4">
            <label htmlFor="password" className="w-1/4">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              value={password}
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <div className="text-red-500">{passwordError}</div>
            )}
          </div>

          <button
            type="submit"
            className="submit-button bg-blue-600 text-white px-6 py-2 rounded"
          >
            Sign Up
          </button>
        </form>
      </section>

      <footer className="footer mt-8 p-4 text-center">
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

export default SignUpPage;
