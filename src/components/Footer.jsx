import React from "react";

function Footer() {
  return (
    <>
      <div
        style={{
          backgroundColor: "rgb(34,48,56)",
          color: "rgb(179,184,187)",
          padding: "35px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img
            className="footerImage"
            src="https://generation.global/assets/img/geng-lettering-footer.svg"
            alt="Generation Global"
          />

          <div style={{ display: "flex", gap: "15px" }}>
            <img
              className="footerImage2"
              src="https://generation.global/assets/img/twitter.svg"
              alt="Twitter"
            />
            <img
              className="footerImage3"
              src="https://generation.global/assets/img/youtube.svg"
              alt="YouTube"
            />
            <img
              className="footerImage4"
              src="https://generation.global/assets/img/instagram-icon.svg"
              alt="Instagram"
            />
          </div>
        </div>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="w-full md:w-3/5 mx-auto space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:space-x-8 space-y-8 md:space-y-0">
              <div className="flex flex-col" style={{ marginRight: "10%" }}>
                <h3 className="text-lg font-bold mb-4 supportColor">Support</h3>
                <ul className="flex flex-wrap space-x-4 p-0 m-0 supportFeatures">
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Support Centre
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Safeguarding Space
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Cookies
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Privacy Policy
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Platform Rules
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Service Status
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col" style={{ marginRight: "10%" }}>
                <h3 className="text-lg font-bold mb-4 learnMoreColor">
                  Learn More
                </h3>
                <ul className="flex flex-wrap space-x-4 p-0 m-0 learnMoreFeatures">
                  <li className="my-2">
                    {" "}
                    <a href="#" className="hover:text-gray-300">
                      Who we are
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      What we do
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      News
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Get involved
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Educator resources
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Educator awards
                    </a>
                  </li>
                  <li className="my-2">
                    <a href="#" className="hover:text-gray-300">
                      Partner with us
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="flex flex-col items-center md:items-start space-y-4"
                style={{ marginRight: "10%" }}
              >
                <div className="flex items-center">
                  <h3 className="text-lg font-bold mb-4 searchOnTheSiteColor">
                    Search on the Site
                  </h3>{" "}
                  <button className="bg-gray-200 text-gray-800 p-2 rounded ml-2">
                    Q
                  </button>
                </div>
                <div className="text-center md:text-left space-y-4">
                  <p className="text-sm">
                    Copyright © 2016-2024 by the Tony Blair Institute for Global
                    Change
                  </p>
                  <p className="text-sm">
                    All rights reserved. Copies and reproduction of this
                    publication, in whole or in part, for educational or other
                    non-commercial purposes is authorised provided the source is
                    fully acknowledged.
                  </p>
                  <p className="text-sm">
                    Generation Global is part of the Tony Blair Institute for
                    Global Change. The Tony Blair Institute for Global Change,
                    is a company limited by guarantee registered in England and
                    Wales (registered company number 10505963) whose registered
                    office is One Bartholomew Close, London, EC1A 7BL.
                  </p>
                </div>
                <div className="flex justify-center md:justify-start space-x-4 mt-4">
                  <img
                    src="https://generation.global/assets/img/internal-pages/download-app-store.svg"
                    alt="Download on the App Store"
                    className="h-8"
                  />
                  <img
                    src="https://generation.global/assets/img/internal-pages/download-play-store.svg"
                    alt="Get it on Google Play"
                    className="h-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
