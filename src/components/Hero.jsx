import { HERO_CONTENT } from "../constants/index.js";
import Type from "./Type.jsx";
import heroPhoto from "../assets/HeroPhoto.png";
import { motion } from "framer-motion";
const Hero = () => {
  const container = (delay) => ({
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: delay },
    },
  });
  return (
    <div className="border-b dark:border-neutral-900 border-white pb-28 lg:mb-60">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0)}
              initial="hidden"
              animate="visible"
            >
              <Type className="text-red-800" />
            </motion.span>
            <motion.h1
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-2 text-5xl font-bold tracking-tight lg:text-5xl"
            >
              Hello, My Name is
              <br />
              <span className="bg-gradient-to-r from-red via-slate-700 to-red text-transparent bg-clip-text">
                Michael Dimakiling
              </span>
            </motion.h1>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="mt-16 text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={heroPhoto}
              alt="profilePic"
              className="size-9/12 top-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
