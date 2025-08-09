import { Outlet } from "react-router-dom";
import Navber from "../components/header/Navbar";
import { useState } from "react";
import Footer from "../components/Footer/Footer";

const Root = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? "dark" : ""} dark:bg-[#0F172A] h-screen`}>

      <Navber setDarkMode={setDarkMode} darkMode={darkMode} />

      <div className="w-full dark:bg-[#0F172A]">
        <Outlet />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Root;