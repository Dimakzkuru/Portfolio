import blackLogo from "../assets/blackLogo.png";
import whiteLogo from "../assets/whiteLogo.png";
import { MdDarkMode } from "react-icons/md";
import { LuSun } from "react-icons/lu";
import { useState, useEffect, useRef, useMemo } from "react";
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
  console.log(isDark);
  const [activeSection, setActiveSection] = useState("");
  //
  const [isManualScroll, setIsManualScroll] = useState(false);
  // Section Array for setting active button
  const sections = useMemo(() => ["home", "about", "projects", "contact"], []);
  // Mobile Menu Toggle
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleTheme = () => {
    const newTheme = !isDark ? "dark" : "light";
    document.documentElement.classList.toggle("dark", !isDark);
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
      setIsDark(savedTheme === "dark");
    } else {
      // If no saved theme, default to light mode
      document.documentElement.classList.remove("dark");
      setIsDark(false); // light mode is the default
      localStorage.setItem("theme", "light"); // Save default as 'light'
    }
  }, []);
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

  // Detect which section is in view while manually scrolling using scroll bar
  useEffect(() => {
    const sectionRefs = sections.map((id) => document.getElementById(id));

    const observer = new IntersectionObserver(
      (entries) => {
        if (!isManualScroll) {
          // Only update active section if it's not a manual scroll
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(entry.target.id); // Update active section
            }
          });
        }
      },
      {
        threshold: [0.4, 0.7],
      }
    );

    sectionRefs.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionRefs.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, [sections, isManualScroll]);
  // ScrollintoView
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      setIsManualScroll(true);

      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(id);
    }
    setMenuOpen(false);
    //
    const scrollTimeout = setTimeout(() => {
      setIsManualScroll(false);
    }, 1000);

    return () => clearTimeout(scrollTimeout);
  };

  return (
    <>
      <div ref={navRef}></div>
      <nav
        className={`${
          isSticky
            ? "sticky-nav shadow-lg  dark:text-white backdrop-blur-3xl backdrop-brightness-125 h-16"
            : ""
        } flex items-center justify-between mx-auto px-8 z-10 h-16 `}
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
            src={isDark ? whiteLogo : blackLogo}
            alt="Logo"
            className="lg:size-28 mr-10  size-24"
          />
        </motion.div>
        <div className="hidden items-center justify-center gap-10 m-1 lg:flex">
          {sections.map((section) => (
            <motion.button
              key={section}
              initial={{ opacity: 0, y: -100 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: { delay: 0.4, duration: 1.5 },
              }}
              onClick={() => handleScroll(section)}
              className={`relative link text-lg font-semibold justify-center px-5 items-center flex ${
                activeSection === section
                  ? "dark:text-green-600 text-green-400 link-active"
                  : "dark:hover:text-green-600 hover:text-green-400"
              }`}
            >
              {section === "home" && (
                <HiOutlineHome className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
              )}
              {section === "about" && (
                <GoPerson className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
              )}
              {section === "projects" && (
                <HiOutlinePresentationChartLine className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
              )}
              {section === "contact" && (
                <BiSolidContact className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
              )}
              {section.charAt(0).toUpperCase() + section.slice(1)}{" "}
            </motion.button>
          ))}
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
              <LuSun className="hover:cursor-pointer text-2xl" />
            ) : (
              <MdDarkMode className="hover:cursor-pointer text-2xl transition duration-5000 ease-in-out" />
            )}
          </motion.button>
        </div>
        <div className="lg:hidden flex items-center z-100">
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
              ""
            ) : (
              <GiHamburgerMenu className="md:text-3xl text-2xl cursor-pointer lg:hidden" />
            )}
          </motion.button>
        </div>
      </nav>
      {menuOpen && (
        <motion.div
          mode="wait"
          initial={{ opacity: 0, x: -100 }}
          animate={{
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeInOut" },
          }}
          exit={{
            opacity: 0,
            x: -100,
            transition: { duration: 1, ease: "easeInOut" },
          }}
          className="lg:hidden fixed lg:absolute h-full w-full z-50 top-0 left-0"
        >
          <div className="text-xl font-bold dark:text-black text-white">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{
                opacity: 0,
                x: -100,
                transition: { duration: 0.2, ease: "easeInOut" },
              }}
              className="flex flex-col items-left gap-6 bg-gray-900 dark:bg-white p-5 w-36 h-full z-50 absolute"
            >
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleScroll(section)}
                  className={`relative link flex flex-row items-center lg:text-lg text-sm font-bold ${
                    activeSection === section
                      ? "dark:text-green-600 text-green-400 link-active"
                      : "dark:hover:text-green-600 hover:text-green-400"
                  }`}
                >
                  {section === "home" && (
                    <HiOutlineHome className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                  )}
                  {section === "about" && (
                    <GoPerson className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                  )}
                  {section === "projects" && (
                    <HiOutlinePresentationChartLine className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                  )}
                  {section === "contact" && (
                    <BiSolidContact className="text-lg font-semibold flex items-center justify-center mr-1 mb-0.5" />
                  )}
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
              <button onClick={toggleTheme}>
                {isDark ? (
                  <MdDarkMode className="hover:cursor-pointer lg:text-2xl text-xl" />
                ) : (
                  <LuSun className="hover:cursor-pointer lg:text-2xl text-xl" />
                )}
              </button>
            </motion.div>
            <motion.div
              className="w-full h-full fixed top-0 left-0 backdrop-blur-md -z-10"
              onClick={() => setMenuOpen(false)}
            >
              <button
                className="absolute top-7 right-9 md:text-2xl text-xl dark:text-white text-black"
                onClick={() => setMenuOpen(false)}
              >
                <RiCloseLargeFill />
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
