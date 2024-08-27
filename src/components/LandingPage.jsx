import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mt-[-50%]">
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
