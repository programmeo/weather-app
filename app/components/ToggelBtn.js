"use client";
import React from "react";
import { useState } from "react";

function ToggelBtn() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="sticky top-2 left-2 ">
      <label className="inline-flex items-center cursor-pointer">
        <input
          onClick={() => {
            document.documentElement.classList.toggle(
              theme === "dark" ? "light" : "dark"
            );
          }}
          type="checkbox"
          value=""
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-900 rounded-full peer peer-focus:ring-4  dark:bg-gray peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
      </label>
    </div>
  );
}

export default ToggelBtn;
