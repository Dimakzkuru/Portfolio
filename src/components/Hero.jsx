import { HERO_CONTENT } from "../constants/index.js";
import Type from "./Type.jsx";
import heroPhoto from "../assets/HeroPhoto.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="pb-28 lg:mb-60">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col">
            <motion.span
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 1 },
              }}
            >
              <Type className="text-green-600" />
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 1 },
              }}
              className="pb-2 text-5xl font-bold tracking-tight lg:text-5xl"
            >
              Hello, My Name is
              <br />
              <span className="bg-gradient-to-r from-green-600 via-slate-700 to-green-600 text-transparent bg-clip-text">
                Michael Dimakiling
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.8, duration: 1 },
              }}
              className="mt-16 text-lg"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 1, duration: 1 },
            }}
            className="flex justify-center"
          >
            <img src={heroPhoto} alt="profilePic" className="size-9/12 top-2" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
