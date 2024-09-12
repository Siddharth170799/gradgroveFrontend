import React, { useEffect, useState } from "react";
import axios from "axios";
import bcrypt from "bcryptjs";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [dob, setDob] = useState("");
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

  const HandleDobChange = (e) => {
    const birthDetails = e.target.value;
    setDob(birthDetails);

    const details = birthDetails.split("-");
    setAge(2024 - details[0]);
  };

  const postSignUpDetails = async (e) => {
    e.preventDefault();

    if (name && dob && gender && fieldStudy && email && password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      const details = await axios.post(
        "https://gradgrove-backend2-2.onrender.com/api/studentSignUpDetails",
        {
          name,
          dob,
          age,
          gender,
          fieldStudy,
          phoneNumber,
          email,
          password: hashedPassword,
        }
      );
      console.log(details);

      const token = await axios.get("https://gradgrove-backend2-2.onrender.com/api/getToken");
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
      <header className="header flex justify-between items-center p-4 text-white navbar">
        <div className="logo">
          <img src="src/images/Screenshot 2024-09-12 at 12.29.24 PM.png" alt="Logo" />
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
          <div className="form-group">
            <label htmlFor="name" className="block font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              required
            />
            {nameError && (
              <div className="text-red-500 text-sm">{nameError}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="dob" className="block font-semibold">
              Date of Birth
            </label>
            <input
              type="date"
              id="dob"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              value={dob}
              onChange={HandleDobChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="age" className="block font-semibold">
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

          <div className="form-group">
            <label htmlFor="gender" className="block font-semibold">
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

          <div className="form-group">
            <label htmlFor="fieldOfStudy" className="block font-semibold">
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

          <div className="form-group">
            <label htmlFor="phone" className="block font-semibold">
              Phone
            </label>
            <div className="flex">
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
            </div>
            {phoneNumberError && (
              <div className="text-red-500 text-sm">{phoneNumberError}</div>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="block font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input w-full p-2 border border-gray-300 rounded textColor"
              required
              value={email}
              onChange={handleEmail}
            />
            {emailError && (
              <div className="text-red-500 text-sm">{emailError}</div>
            )}
          </div>

          <div className="form-group flex items-center">
            <div className="flex-1">
              <label htmlFor="password" className="block font-semibold mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                className={`form-input w-full p-2 border rounded ${
                  passwordError ? "border-red-500" : "border-gray-300"
                } textColor`}
                required
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
          </div>
          {passwordError && (
            <div
              className="text-red-500 text-sm ml-2"
              style={{ width: "300px" }}
            >
              {passwordError}
            </div>
          )}

          <button
            type="submit"
            className="btn bg-blue-600 text-white px-4 py-2 rounded"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default SignUpPage;
