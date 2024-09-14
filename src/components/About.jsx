import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import AboutMe from "../assets/AboutMe3.png";

import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub, FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoPerson } from "react-icons/go";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaHome } from "react-icons/fa";

const About = () => {
  const [activeButton, setActiveButton] = useState("skills");

  const handleClick = (button) => {
    setActiveButton(button);
  };
  const skills = [
    { icon: <FaHtml5 className="text-5xl text-orange-600" />, name: "HTML5" },
    { icon: <FaCss3Alt className="text-5xl text-blue-600" />, name: "CSS3" },
    {
      icon: <IoLogoJavascript className="text-5xl text-yellow-400" />,
      name: "JavaScript",
    },
    {
      icon: <RiTailwindCssFill className="text-5xl text-sky-300" />,
      name: "TailwindCSS",
    },
    { icon: <FaGithub className="text-5xl text-black" />, name: "GitHub" },
    { icon: <FaReact className="text-5xl text-sky-300" />, name: "React" },
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
    <div className=" border-white dark:border-neutral-900 pb-4 lg:mb-36">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 2 },
        }}
        className="mt-20 mb-40 flex items-center justify-center
       text-2xl font-bold"
      >
        <BsPersonCircle className="mr-2" />
        About&nbsp;
        <span className="text-neutral-300 dark:text-black"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 2 },
          }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={AboutMe} alt="aboutMe" className="h-64 w-64" />
          </div>
        </motion.div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center flex-col text-white dark:text-black ">
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 1 },
              }}
              className="container border-solid font-semibold border-2 rounded-full flex justify-around text-lg p-0.5 bg-none border-gray-300"
            >
              <button
                className={`rounded-full w-full p-2 transition-colors duration-300 ease-in-out ${
                  activeButton === "skills" ? "bg-green-500" : "bg-none"
                }`}
                onClick={() => handleClick("skills")}
              >
                Skills and Technologies
              </button>
              <button
                className={`rounded-full w-full p-2 transition-colors duration-300 ease-in-out ${
                  activeButton === "personal" ? "bg-green-500" : "bg-none"
                }`}
                onClick={() => handleClick("personal")}
              >
                Personal Information
              </button>
            </motion.div>

            <div
              className={`grid grid-rows-2 grid-cols-4 mt-12 gap-6 ml-10 ${
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
                  className="rounded-2xl p-2 flex justify-center items-center w-20 bg-white bg-opacity-10 backdrop-blur-md border border-gray-400 border-opacity-30 shadow-lg"
                >
                  {skill.icon}
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-left p-12">
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  transition: { delay: 0.4, duration: 1 },
                }}
                className={`flex items-start text-left flex-col font-bold text-xl gap-2 ${
                  activeButton === "personal" ? "block" : "hidden"
                }`}
              >
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <GoPerson className="text-green-600 text-lg" />
                  <h3>Michael Dy Dimakiling</h3>
                </div>
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <FaPhoneVolume className="text-green-600 text-lg" />
                  <h3>09971441145</h3>
                </div>
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <CiMail className="text-green-600 text-lg" />
                  <h3>michaeldimakilingece@gmail.com</h3>
                </div>
                <div className="flex flex-row text-center items-center gap-2 mb-2">
                  <FaHome className="text-green-600 text-lg" />
                  <h3>Calbayog City,Samar Philippines</h3>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
