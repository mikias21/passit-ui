// src/ThemeSwitcher.jsx
import React, { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeSwitcher = () => {
  const [isDarkMode, setDarkMode] = useState(() => {
    // Initialize dark mode state based on localStorage or system preferences
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    return storedDarkMode;
  });

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem("darkMode", String(newDarkMode));

    // Toggle the 'dark' class on the body element
    document.body.classList.toggle("dark", newDarkMode);
  };

  useEffect(() => {
    // Set the 'dark' class on the body element based on the initial dark mode state
    document.body.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="fixed top-4 right-4">
      <button
        onClick={toggleDarkMode}
        className="p-2 text-gray-800 dark:text-white"
      >
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
