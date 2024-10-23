import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import AboutMe from "../assets/AboutMe3.png";
import { motion } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import htmlLogo from "../assets/skillimages/htmlLogo.png";
import cssLogo from "../assets/skillimages/cssLogo.png";
import javascriptLogo from "../assets/skillimages/javascriptLogo.png";
import tailwindCssLogo from "../assets/skillimages/tailwindCssLogo.png";
import githubLogo from "../assets/skillimages/githubLogo.png";
import reactLogo from "../assets/skillimages/reactLogo.png";
const About = () => {
  const [activeButton, setActiveButton] = useState("skills");

  const handleClick = (button) => {
    setActiveButton(button);
  };
  const skills = [
    {
      icon: <img src={htmlLogo} alt="htmlLogo" className="bg-transparent" />,
      name: "HTML5",
    },
    {
      icon: <img src={cssLogo} alt="cssLogo" className="bg-transparent" />,
      name: "CSS3",
    },
    {
      icon: (
        <img
          src={javascriptLogo}
          alt="javascriptLogo"
          className="bg-transparent"
        />
      ),
      name: "JavaScript",
    },
    {
      icon: (
        <img
          src={tailwindCssLogo}
          alt="tailwindcssLogo"
          className="bg-transparent"
        />
      ),
      name: "TailwindCSS",
    },
    {
      icon: (
        <img src={githubLogo} alt="githubLogo" className="bg-transparent" />
      ),
      name: "GitHub",
    },
    {
      icon: <img src={reactLogo} alt="reactLogo" className="bg-transparent" />,
      name: "React",
    },
  ];

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * index, duration: 1 },
    }),
  };
  return (
    <div className=" border-white dark:border-neutral-900">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 2 },
        }}
        viewport={{ once: true }}
        className="mt-20 mb-20 flex items-center justify-center
       lg:text-2xl text-lg font-bold"
      >
        <BsPersonCircle className="mr-2" />
        About&nbsp;
        <span className="dark:text-white text-black"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 2 },
            }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <img
              src={AboutMe}
              alt="aboutMe"
              className="size-52 lg:mb-0 mb-10 lg:size-64"
            />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 2 },
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center flex-col text-black dark:text-white ">
            <motion.div className="lg:container flex flex-wrap lg:justify-around items-center lg:flex-row flex-col p-2 gap-5">
              <button
                className={`transition-all duration-300 ease-in-out lg:px-6 p-2 text-md lg:text-lg font-bold tracking-widest rounded-lg shadow-lg transform ${
                  activeButton === "skills"
                    ? "text-white border-b-4 border-green-500 bg-green-500 scale-110" // Active state with background
                    : "text-black dark:text-green-500 hover:text-green-500 hover:border-b-4 hover:border-neutral-700 hover:border-r-4 hover:scale-105  bg-white dark:bg-slate-950" // Default/hover state
                }`}
                onClick={() => handleClick("skills")}
              >
                Skills and Technologies
              </button>
              <button
                className={`transition-all duration-300 ease-in-out lg:px-6 p-2 text-md lg:text-lg font-bold tracking-widest rounded-lg shadow-lg transform  ${
                  activeButton === "personal"
                    ? "text-white border-b-4 border-green-500 bg-green-500 scale-110" // Active state with background
                    : "text-black dark:text-green-500 hover:text-green-500 hover:border-b-4 hover:border-neutral-700 hover:border-r-4 hover:scale-105 dark:hover:border-white bg-white dark:bg-slate-950 " // Default/hover state
                }`}
                onClick={() => handleClick("personal")}
              >
                Personal Information
              </button>
            </motion.div>

            <div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 ml-0 justify-center justify-items-center ${
                activeButton === "skills" ? "block" : "hidden"
              }`}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeInAnimationVariants}
                  initial="initial"
                  whileInView="animate"
                  custom={index}
                  className="rounded-2xl p-2 flex justify-center items-center size-14 bg-white bg-opacity-10 backdrop-blur-md border border-gray-400 border-opacity-30 shadow-lg"
                >
                  {skill.icon}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center p-12">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 1 },
                }}
                className={`flex items-start text-left flex-col font-bold  gap-2 ${
                  activeButton === "personal" ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <GoPerson className="text-green-600 text-lg" />
                  <h3 className="text-sm lg:text-lg">Michael Dy Dimakiling</h3>
                </div>
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <FaUserGraduate className="text-green-600 text-lg" />
                  <h3 className="text-sm lg:text-lg">
                    Bachelors of Science in
                    <br></br>Electronics Engineering
                  </h3>
                </div>
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <CiMail className="text-green-600 text-lg" />
                  <h3 className="text-sm lg:text-lg">
                    michaeldimakilingece@gmail.com
                  </h3>
                </div>
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <FaHome className="text-green-600 text-lg" />
                  <h3 className="text-sm lg:text-lg">
                    Calbayog City,Samar Philippines
                  </h3>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
