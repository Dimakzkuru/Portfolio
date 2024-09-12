import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import AboutMe from "../assets/AboutMe3.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
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

  return (
    <div className=" border-white dark:border-neutral-900 pb-4 lg:mb-36">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: -100, y: -100 }}
        transition={{ duration: 2, delay: 0.2 }}
        className="mt-20 mb-40 flex items-center justify-center
       text-3xl font-bold"
      >
        <BsPersonCircle className="mr-2" />
        About&nbsp;
        <span className="text-neutral-300 dark:text-black"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={AboutMe} alt="aboutMe" className="h-64 w-64" />
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2">
          <div className="flex justify-center flex-col text-white dark:text-slate-700 ">
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: -100, y: -100 }}
              transition={{ duration: 2.5, delay: 0.5 }}
              className="container border-solid font-semibold border-2 rounded-full flex justify-around text-lg p-0.5 bg-gray-300 border-gray-300"
            >
              <button
                className={`rounded-full w-full p-2 transition-colors duration-300 ease-in-out ${
                  activeButton === "skills" ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => handleClick("skills")}
              >
                Skills and Technologies
              </button>
              <button
                className={`rounded-full w-full p-2 transition-colors duration-300 ease-in-out ${
                  activeButton === "personal" ? "bg-green-500" : "bg-gray-300"
                }`}
                onClick={() => handleClick("personal")}
              >
                Personal Information
              </button>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 100 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <div
                className={`grid grid-rows-2 grid-cols-4 mt-12 gap-6 ml-10 ${
                  activeButton === "skills" ? "block" : "hidden"
                }`}
              >
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="rounded-2xl  p-2  flex justify-center items-center w-20 bg-white shadow-md shadow-green-500"
                >
                  <FaHtml5 className="text-5xl text-orange-600" />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.3, delay: 0.2 }}
                  className="rounded-2xl  p-2  flex justify-center items-center w-20 bg-white shadow-md shadow-green-500"
                >
                  <FaCss3Alt className="text-5xl text-blue-600" />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.4, delay: 0.2 }}
                  className="rounded-2xl  p-2  flex justify-center items-center w-20 bg-white shadow-md shadow-green-500"
                >
                  <IoLogoJavascript className="text-5xl text-yellow-400" />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="rounded-2xl  p-2  flex justify-center items-center w-20 bg-white shadow-md shadow-green-500"
                >
                  <RiTailwindCssFill className="text-5xl text-sky-300" />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="rounded-2xl  p-2  flex justify-center items-center w-20 bg-white shadow-md shadow-green-500"
                >
                  <FaGithub className="text-5xl text-black" />
                </motion.div>
                <motion.div
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 100 }}
                  transition={{ duration: 1.2, delay: 0.2 }}
                  className="rounded-2xl  p-2  flex justify-center items-center w-20 bg-white shadow-md shadow-green-500"
                >
                  <FaReact className="text-5xl text-sky-300" />
                </motion.div>
              </div>
            </motion.div>
            <motion.div className="flex flex-col items-left p-12">
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.2 }}
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
