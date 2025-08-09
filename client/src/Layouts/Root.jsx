import { Outlet } from "react-router-dom";
import Navber from "../components/header/Navbar";

import { useState } from "react";

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A] h-screen`}>

      <Navber setDarkMode={setDarkMode} darkMode={darkMode} />

      <div className="w-full h-full dark:bg-[#0F172A]">
        <Outlet />
      </div>
    </div>
  );
};

export default Root;