import blackLogo from "../assets/blackLogo.png";
import whiteLogo from "../assets/whiteLogo.png";
import { MdDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { useState } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BiSolidContact } from "react-icons/bi";

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
          src={isDark ? blackLogo : whiteLogo}
          alt="Logo"
          className="size-28 mr-10 animate-fadeRight"
        />
      </div>
      <div className="flex items-center justify-center gap-10 m-1">
        <a
          href="#Home"
          className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400 animate-fadeLeft"
        >
          <HiOutlineHome className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
          Home
        </a>
        <a
          href="#About"
          className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400 animate-fadeLeft"
        >
          <GoPerson className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
          About
        </a>
        <a
          href="#Works"
          className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400 animate-fadeLeft"
        >
          <HiOutlinePresentationChartLine className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
          Works
        </a>
        <a
          href="#Contact"
          className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400 animate-fadeLeft"
        >
          <BiSolidContact className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
          Contact
        </a>

        <button
          onClick={toggleTheme}
          className="transition duration-0.5 ease-in-out animate-fadeDown"
        >
          {isDark ? (
            <MdDarkMode className="hover:cursor-pointer text-2xl transition duration-5000 ease-in-out" />
          ) : (
            <LuSun className="hover:cursor-pointer text-2xl " />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
