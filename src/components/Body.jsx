import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const Body = () => {
  const { t, i18n } = useTranslation();

  const [studentData, setStudentData] = useState([]);
  const [teacherData, setTeacherData] = useState([]);

  const StudentData = async () => {
    const student = await axios.get("https://generation-global-backend.onrender.com/api/getStudent");
    setStudentData(student.data.data);
    console.log(student.data.data);
  };

  const TeacherData = async () => {
    const teacher = await axios.get("https://generation-global-backend.onrender.com/api/getTeacher");
    setTeacherData(teacher.data.data);
    console.log(teacher.data.data);
  };

  useEffect(() => {
    StudentData();
    TeacherData();
  }, []);

  return (
    <div>
      <main className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          {studentData.map((item, id) => (
            <div key={id} className="p-6 bg-white">
              <div className="mb-4">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                  {t("for_students")}
                </span>
              </div>
              <img
                src="src/images/student-platform.svg"
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
              <button className="text-white px-6 py-2 rounded-lg mt-4 studentButton">
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

          {teacherData.map((item, id) => (
            <div key={id} className="p-6 bg-white">
              <div className="mb-4">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full">
                  {t("for_teachers")}
                </span>
              </div>
              <img
                src="src/images/teacher-platform.svg"
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
              <button className="text-white px-6 py-3 rounded-lg teacherButton">
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
