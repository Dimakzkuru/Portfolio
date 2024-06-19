import blackLogo from "../assets/blackLogo.png";
import whiteLogo from "../assets/whiteLogo.png";
import { MdDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((prevDark) => !prevDark);
  };

  return (
    <nav className="mb-20 flex items-center justify-between py-6 ">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={isDark ? whiteLogo : blackLogo}
          alt="Logo"
          className="size-28 mr-10"
        />
      </div>
      <div className="flex items-center justify-center gap-10 m-8">
        <a
          href="#"
          className=" text-lg font-semibold justify-center px-5 items-center flex"
        >
          <HiOutlineHome className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
          Home
        </a>
        <a
          href="#"
          className=" text-lg font-semibold justify-center px-5 items-center flex"
        >
          <GoPerson className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
          About
        </a>
        <a
          href="#"
          className="text-lg font-semibold justify-center px-5 items-center flex"
        >
          Works
        </a>
        <a
          href="#"
          className="text-lg font-semibold justify-center px-5 items-center flex"
        >
          Contact
        </a>

        <button
          onClick={toggleTheme}
          className="transition duration-0.5 ease-in-out"
        >
          {isDark ? (
            <MdDarkMode className="hover:cursor-pointer text-2xl transition duration-5000 ease-in-out" />
          ) : (
            <LuSun className="text-2xl hover:cursor-pointer" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
