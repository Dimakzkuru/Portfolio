import { HERO_CONTENT } from "../constants/index.js";
import Type from "./Type.jsx";
import heroPhoto from "../assets/HeroPhoto.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="border-b dark:border-neutral-900 border-white pb-28 lg:mb-60">
      <div className="flex flex-wrap">
        <motion.div className="w-full lg:w-1/2">
          <div className="flex flex-col">
            <motion.span>
              <Type className="text-green-600" />
            </motion.span>
            <motion.h1
              variants={{}}
              initial="hidden"
              animate="visible"
              className="pb-2 text-5xl font-bold tracking-tight lg:text-5xl"
            >
              Hello, My Name is
              <br />
              <span className="bg-gradient-to-r from-green-600 via-slate-700 to-green-600 text-transparent bg-clip-text">
                Michael Dimakiling
              </span>
            </motion.h1>

            <motion.p
              variants={{}}
              initial="hidden"
              animate="visible"
              className="mt-16 text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </motion.div>
        <motion.div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={heroPhoto} alt="profilePic" className="size-9/12 top-2" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
