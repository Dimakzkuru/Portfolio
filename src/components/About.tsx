import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { motion } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { FaHome } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa6";
import AboutMe from "../assets/AboutMe3.png";
import htmlLogo from "../assets/skillimages/htmlLogo.png";
import cssLogo from "../assets/skillimages/cssLogo.png";
import javascriptLogo from "../assets/skillimages/javascriptLogo.png";
import tailwindCssLogo from "../assets/skillimages/tailwindCssLogo.png";
import githubLogo from "../assets/skillimages/githubLogo.png";
import reactLogo from "../assets/skillimages/reactLogo.png";
import { INTRODUCTION } from "../constants/index.ts";
const About = () => {
  const [activeButton, setActiveButton] = useState<string>("introduction");

  const handleClick = (button: string) => {
    setActiveButton(button || "");
  };

  const fadeInAnimationVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 * index, duration: 0.5 },
    }),
  };
  const SKILLS = [
    {
      icon: <img src={htmlLogo} alt="HTML5 Logo" className="bg-transparent" />,
      name: "HTML5",
    },

    {
      icon: <img src={cssLogo} alt="CSS3 Logo" className="bg-transparent" />,
      name: "CSS3",
    },
    {
      icon: (
        <img
          src={javascriptLogo}
          alt="JavaScript Logo"
          className="bg-transparent"
        />
      ),
      name: "JavaScript",
    },
    {
      icon: (
        <img
          src={tailwindCssLogo}
          alt="TailwindCSS Logo"
          className="bg-transparent"
        />
      ),
      name: "TailwindCSS",
    },
    {
      icon: (
        <img src={githubLogo} alt="GitHub Logo" className="bg-transparent" />
      ),
      name: "GitHub",
    },
    {
      icon: <img src={reactLogo} alt="React Logo" className="bg-transparent" />,
      name: "React",
    },
  ];
  return (
    <div className=" border-white dark:border-neutral-900">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 1.6 },
        }}
        viewport={{ once: true }}
        className="mt-20 mb-20 flex items-center justify-center
       lg:text-2xl md:text-xl text-xl font-bold"
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
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.4, duration: 1.2 },
          }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center flex-col text-black dark:text-white items-center ">
            <div className="flex justify-center lg:space-x-8 lg:text-lg text-md font-bold  md:flex-row flex-col text-center gap-5  ">
              <button
                className={`relative link text-black dark:text-white hover:text-green-600 ${
                  activeButton === "introduction"
                    ? "link-active text-green-600"
                    : ""
                }`}
                onClick={() => handleClick("introduction")}
              >
                Introduction
              </button>
              <button
                className={`relative link text-black dark:text-white hover:text-green-600 ${
                  activeButton === "skills" ? "link-active text-green-600" : ""
                }`}
                onClick={() => handleClick("skills")}
              >
                Skills and Technologies
              </button>

              <button
                className={`relative link text-black dark:text-white hover:text-green-600 ${
                  activeButton === "personal"
                    ? "link-active text-green-600"
                    : ""
                }`}
                onClick={() => handleClick("personal")}
              >
                Personal Information
              </button>
            </div>
            {activeButton === "introduction" && (
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { delay: 0.4, duration: 1.2 },
                }}
                viewport={{ once: true }}
                className="flex justify-center items-center lg:p-12 md:p-8 p-1"
              >
                <p className="font-bold space-y-10 lg:text-lg text-sm text-justify lg:mt-0 mt-5">
                  {INTRODUCTION}
                </p>
              </motion.div>
            )}
            {activeButton === "skills" && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-12 ml-0 justify-center justify-items-center">
                {SKILLS.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    custom={index}
                    className="rounded-2xl  p-5 flex flex-col justify-center items-center size-20 bg-transparent"
                  >
                    {skill.icon}
                    <span className="mt-2 text-center text-sm font-medium text-black dark:text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeButton === "personal" && (
              <div className="flex flex-col items-center p-12">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: { delay: 0.4, duration: 0.5 },
                  }}
                  className="flex lg:items-start items-center flex-col font-bold gap-2 lg:text-md text-sm text-center justify-center lg:text-lg"
                >
                  <div className="flex flex-row text-center items-center gap-2 mb-2 ">
                    <GoPerson className="text-green-600 lg:text-lg text-md" />
                    <h3 className="">Michael Dy Dimakiling</h3>
                  </div>
                  <div className="flex flex-row text-center items-center gap-2 mb-2">
                    <FaUserGraduate className="text-green-600 lg:text-lg text-md" />
                    <h3 className="">
                      Bachelors of Science in
                      <br></br>Electronics Engineering
                    </h3>
                  </div>
                  <div className="flex flex-row text-center items-center gap-2 mb-2">
                    <CiMail className="text-green-600 lg:text-lg text-md" />
                    <h3 className="">michaeldimakilingece@gmail.com</h3>
                  </div>
                  <div className="flex flex-row text-center items-center gap-2 mb-2">
                    <FaHome className="text-green-600 lg:text-lg text-md" />
                    <h3 className="">Calbayog City,Samar Philippines</h3>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
