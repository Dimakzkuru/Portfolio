import blackLogo from "../assets/blackLogo.png";
import whiteLogo from "../assets/whiteLogo.png";
import { MdDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { useState, useEffect, useRef } from "react";
import { HiOutlineHome } from "react-icons/hi";
import { GoPerson } from "react-icons/go";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { BiSolidContact } from "react-icons/bi";
import { motion } from "framer-motion";
const Navbar = () => {
  // Dark Mode
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [isSticky, setIsSticky] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    const currentNav = navRef;
    const observer = new IntersectionObserver(([entry]) => {
      setIsSticky(!entry.isIntersecting);
    });
    if (currentNav.current) {
      observer.observe(currentNav.current);
    }

    return () => {
      if (currentNav.current) {
        observer.unobserve(currentNav.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setIsDark((prevDark) => !prevDark);
  };

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div ref={navRef}></div>
      <nav
        className={`${
          isSticky
            ? "sticky-nav shadow-lg  dark:bg-white dark:text-black backdrop-blur-lg"
            : ""
        } mb-20 flex items-center justify-between  mx-auto px-8 z-10 `}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 2 },
          }}
          className="flex flex-shrink-0 items-center"
        >
          <img
            src={isDark ? blackLogo : whiteLogo}
            alt="Logo"
            className="size-28 mr-10 "
          />
        </motion.div>
        <div className="flex items-center justify-center gap-10 m-1">
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 2 },
            }}
            href="#Home"
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400"
          >
            <HiOutlineHome className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            Home
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 2 },
            }}
            href="#About"
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400"
          >
            <GoPerson className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            About
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 2 },
            }}
            href="#Works"
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400"
          >
            <HiOutlinePresentationChartLine className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            Works
          </motion.a>
          <motion.a
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 2 },
            }}
            href="#Contact"
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400"
          >
            <BiSolidContact className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            Contact
          </motion.a>

          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 2 },
            }}
            onClick={toggleTheme}
          >
            {isDark ? (
              <MdDarkMode className="hover:cursor-pointer text-2xl transition duration-5000 ease-in-out" />
            ) : (
              <LuSun className="hover:cursor-pointer text-2xl " />
            )}
          </motion.button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
