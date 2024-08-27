import "./App.css";
import i18n from "./components/I18n";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import SignUpPage from "./components/StudentSignUpPage";
import StudentLogin from "./components/StudentLoginPage";
import StudentDashBoard from "./components/StudentDashBoard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/SignUpOptions" element={<SignUpPage />} />
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/studentDashBoard" element={<StudentDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
