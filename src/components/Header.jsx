import React, { useEffect, useState } from "react";

import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <img src="src/images/logo.svg" className="mainImage" />

          <nav className="space-x-6">
            <a href="#" className="text-gray-800">
              {t("about_us")}
            </a>
            <a href="#" className="text-gray-800">
              {t("our_work")}
            </a>
            <a href="#" className="text-gray-800">
              {t("news")}
            </a>
            <a href="#" className="text-gray-800">
              {t("resources")}
            </a>
            <a href="#" className="text-gray-800">
              {t("events")}
            </a>
          </nav>

          <div>
            <select
              className="border border-gray-300 rounded p-2"
              onChange={(e) => changeLanguage(e.target.value)}
            >
              <option value="en">English</option>
              <option value="fr">Français</option>
              <option value="es">Español</option>
            </select>
          </div>

          <button
            className="text-white px-4 py-2 rounded-lg"
            style={{ backgroundColor: "rgb(0,118,129)" }}
          >
            {t("login_join_free")}
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
