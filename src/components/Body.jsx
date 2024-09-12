import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Body = () => {
  const { t, i18n } = useTranslation();

  const studentData = useFetch("https://gradgrove-backend2-2.onrender.com/api/getStudent");
  const teacherData = useFetch("https://gradgrove-backend2-2.onrender.com/api/getTeacher");

  const navigate = useNavigate();

  return (
    <div className="bodyarea">
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentData?.map((item, id) => (
            <div key={id} className="p-6 bg-white cardColor">
              <div className="mb-4">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                  {t("for_students")}
                </span>
              </div>
              <img
                src="src/images/Screenshot 2024-09-12 at 12.29.52 PM.png"
                alt="For Students"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="studentTitle">{t("student_title")}</h2>
              <p className="studentDescription">{t("student_description")}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 studentFeatures">
                <li>{t("student_feature1")}</li>
                <li>{t("student_feature2")}</li>
                <li>{t("student_feature3")}</li>
                <li>{t("student_feature4")}</li>
              </ul>
              <button
                className="text-white px-6 py-2 rounded-lg mt-4 studentButton"
                onClick={() => navigate("/SignUpOptions")}
              >
                {t("start_adventure")}
              </button>
              <div className="mt-4 flex justify-center space-x-4">
                <div>
                  <a href="#" className="text-teal-600">
                    {t("login")}
                  </a>
                </div>
                <div>
                  <a href="#" className="text-teal-600">
                    {t("student_companion")}
                  </a>
                </div>
              </div>
            </div>
          ))}
          {teacherData?.map((item, id) => (
            <div key={id} className="p-6 bg-white cardColor">
              <div className="mb-4">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                  {t("for_teachers")}
                </span>
              </div>
              <img
                src="src/images/Screenshot 2024-09-12 at 12.30.09 PM.png"
                alt="For Teachers"
                className="w-full h-48 object-cover mb-4"
              />
              <h2 className="teacherTitle">{t("teacher_title")}</h2>
              <p className="teacherDescription">{t("teacher_description")}</p>
              <ul className="list-disc pl-6 text-gray-700 mb-4 teacherFeatures">
                <li>{t("teacher_feature1")}</li>
                <li>{t("teacher_feature2")}</li>
                <li>{t("teacher_feature3")}</li>
                <li>{t("teacher_feature4")}</li>
              </ul>
              <button
                className="text-white px-6 py-3 rounded-lg teacherButton"
                onClick={() => navigate("/SignUpOptions")}
              >
                {t("start_adventure")}
              </button>
              <div className="mt-4 flex justify-center space-x-4">
                <div>
                  <a href="#" className="text-teal-600">
                    {t("login")}
                  </a>
                </div>
                <div>
                  <a href="#" className="text-teal-600">
                    {t("teacher_companion")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Body;
