import { BsPersonCircle } from "react-icons/bs";
import AboutMe from "../assets/AboutMe3.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
const About = () => {
  const iconVariants = (duration) => ({
    initial: { y: -9 },
    animate: {
      y: [9, -9],
      transition: {
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  });
  return (
    <div className=" border-white dark:border-neutral-900 pb-4 mb-36">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 flex items-center justify-center
       text-2xl font-semibold"
      >
        <BsPersonCircle className="mr-2" />
        About&nbsp;
        <span className="text-neutral-300 dark:text-black"> Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img src={AboutMe} alt="aboutMe" className="h-64 w-64" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center flex-col text-white dark:text-slate-600">
            <div className="container border-solid font-bold border-2 rounded-full h-14 flex justify-around text-lg p-0.5">
              <button className="bg-rose-300 rounded-full w-full p-2">
                Skills and Technologies
              </button>
              <button className="bg-green-400 rounded-full w-full p-2">
                Personal Information
              </button>
            </div>
            <div className="grid grid-rows-2 grid-cols-4 mt-12 gap-6 ml-10 ">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-2 border-neutral-400 flex justify-center items-center w-20 bg-white"
              >
                <FaHtml5 className="text-5xl text-orange-600" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-2 border-neutral-400 flex justify-center items-center w-20 bg-white"
              >
                <FaCss3Alt className="text-5xl text-blue-600" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-2 border-neutral-400 flex justify-center items-center w-20 bg-white"
              >
                <IoLogoJavascript className="text-5xl text-yellow-400" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-2 border-neutral-400 flex justify-center items-center w-20 bg-white"
              >
                <RiTailwindCssFill className="text-5xl text-sky-300" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-2 border-neutral-400 flex justify-center items-center w-20 bg-white"
              >
                <FaGithub className="text-5xl text-black" />
              </motion.div>
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 p-2 border-neutral-400 flex justify-center items-center w-20 bg-white"
              >
                <FaReact className="text-5xl text-sky-300" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
