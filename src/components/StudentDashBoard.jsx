import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
const StudentDashboard = () => {
  const navigate = useNavigate();

  let inactivity;

  const resetInactivityTimer = () => {
    clearTimeout(inactivity);
    inactivity = setTimeout(() => {
      handleLogout();
    }, 10000);
  };

  const handleLogout = () => {
    Cookies.remove("studentLoginToken");
    navigate("/studentLogin");
  };

  const triggerevent = () => {
    console.log("hi");
  };

  useEffect(() => {
    window.addEventListener("mousemove", resetInactivityTimer);
    window.addEventListener("keydown", resetInactivityTimer);
    window.addEventListener("touchstart", resetInactivityTimer);
    window.addEventListener("click", triggerevent);

    resetInactivityTimer();

    return () => {
      window.removeEventListener("mousemove", resetInactivityTimer);
      window.removeEventListener("keydown", resetInactivityTimer);
      window.removeEventListener("touchstart", resetInactivityTimer);
      clearTimeout(inactivity);
    };
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <button>Click Here</button>
    </div>
  );
};

export default StudentDashboard;
