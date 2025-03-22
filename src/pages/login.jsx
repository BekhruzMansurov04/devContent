import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../context/LanguageContext";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const { theme, toggleTheme } = useTheme(); // ❗ setDarkMode emas!
    const { language, setLanguage, translations } = useLanguage();

  return (
    <div
    className={`min-h-screen flex items-center justify-center transition-all duration-300 
    ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}
  >
    <div
      className={`w-full max-w-md p-8 rounded-lg shadow-lg transition-all duration-300 
      ${theme === "dark" ? "bg-gray-800" : "bg-white border border-gray-300"}`}
    >
      <h1 className="text-4xl font-bold text-center text-teal-600 mb-4">
        {translations[language].signIn}
      </h1>
      <p className="text-center text-lg flex items-center justify-center gap-2">
        <FaUser /> {translations[language].signIntoAccount}
      </p>
      <div className="mt-6 space-y-4">
  <input
    type="text"
    placeholder="email"
    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none 
      ${theme === "dark" ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white text-gray-900 border-gray-300"}
    `}
  />
  <input
    type="password"
    placeholder="password"
    className={`w-full p-3 border rounded-md focus:ring-2 focus:ring-teal-500 focus:outline-none 
      ${theme === "dark" ? "bg-gray-800 text-white border-gray-600 placeholder-gray-400" : "bg-white text-gray-900 border-gray-300"}
    `}
  />
  <button className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold p-3 rounded-md">
    Login
  </button>
</div>
      <p className="mt-4 text-center">
  {translations[language].noAccount}{" "}
 <Link to = "/register"><span className="text-teal-500 hover:underline cursor-pointer">
    {translations[language].signUp}
  </span></Link>
</p>
<div className="mt-4 flex justify-between items-center">
  <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    className={`p-2 border rounded-md cursor-pointer 
      ${theme === "dark" ? "bg-gray-800 text-white border-gray-600" : "bg-white text-gray-900 border-gray-300"}
    `}
  >
    <option value="en">English</option>
    <option value="ru">Русский</option>
    <option value="uz">O'zbek</option>
  </select>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded-md text-white transition-all duration-300 
          ${theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-300 hover:bg-gray-400"}`}
        >
          {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;

