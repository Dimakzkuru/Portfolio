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
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeFill } from "react-icons/ri";

const Navbar = () => {
  // Dark Mode
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

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
  // Sticky Navigation Bar
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

  // ScrollintoView
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "nearest",
      });
    }
    setMenuOpen(false);
  };
  // Mobile Menu Toggle
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div ref={navRef}></div>
      <nav
        className={`${
          isSticky
            ? "sticky-nav shadow-lg  dark:text-black backdrop-blur-lg"
            : ""
        } flex items-center justify-between mx-auto px-8 z-10 h-20 `}
      >
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 1.5 },
          }}
          className="flex flex-shrink-0 items-center"
        >
          <img
            src={isDark ? blackLogo : whiteLogo}
            alt="Logo"
            className="size-28 mr-10 "
          />
        </motion.div>
        <div className="hidden items-center justify-center gap-10 m-1 lg:flex">
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1.5 },
            }}
            onClick={() => handleScroll("home")}
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400 "
          >
            <HiOutlineHome className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            Home
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1.5 },
            }}
            onClick={() => handleScroll("about")}
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400"
          >
            <GoPerson className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            About
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1.5 },
            }}
            onClick={() => handleScroll("projects")}
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400"
          >
            <HiOutlinePresentationChartLine className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            Works
          </motion.button>
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1.5 },
            }}
            onClick={() => handleScroll("contact")}
            className="relative link text-lg font-semibold justify-center px-5 items-center flex dark:hover:text-green-600 hover:text-green-400"
          >
            <BiSolidContact className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
            Contact
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1.5 },
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
        <div className="lg:hidden flex items-center">
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: { delay: 0.4, duration: 1.5 },
            }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <RiCloseLargeFill className="text-4xl cursor-pointer lg:hidden" />
            ) : (
              <GiHamburgerMenu className="text-4xl cursor-pointer lg:hidden" />
            )}
          </motion.button>
        </div>
      </nav>
      {menuOpen && (
        <motion.div
          mode="wait"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className="text-xl font-bold  dark:text-white text-black py-10 m-6 ">
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden flex flex-col items-center gap-6 bg-white dark:bg-gray-900 p-5 w-full rounded-3xl"
            >
              <button
                onClick={() => handleScroll("home")}
                className="relative link flex flex-row items-center text-lg font-semibold dark:hover:text-green-600 hover:text-green-400"
              >
                <HiOutlineHome className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                Home
              </button>
              <button
                onClick={() => handleScroll("about")}
                className="relative link  flex flex-row items-center text-lg font-semibold dark:hover:text-green-600 hover:text-green-400"
              >
                <GoPerson className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                About
              </button>
              <button
                onClick={() => handleScroll("projects")}
                className="relative link flex flex-row items-center text-lg font-semibold dark:hover:text-green-600 hover:text-green-400"
              >
                <HiOutlinePresentationChartLine className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                Works
              </button>
              <button
                onClick={() => handleScroll("contact")}
                className="relative link flex flex-row items-center text-lg font-semibold dark:hover:text-green-600 hover:text-green-400"
              >
                <BiSolidContact className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                Contact
              </button>
              <button onClick={toggleTheme}>
                {isDark ? (
                  <MdDarkMode className="hover:cursor-pointer text-2xl" />
                ) : (
                  <LuSun className="hover:cursor-pointer text-2xl" />
                )}
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
