// SocialMedia.js
import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; // Example icons
import { motion } from "framer-motion";
const SocialMedia = () => {
  return (
    <div className=" left-10 top-1/2 flex flex-row items-center lg:justify-end justify-center lg:gap-5 gap-3 p-4 z-50">
      <motion.a
        href="https://facebook.com/Dimakzkuru"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 20 }}
        whileTap={{
          scale: 0.8,
          rotate: -20,
          borderRadius: "100%",
        }}
        className="text-slate-950 dark:text-white"
      >
        <FaFacebook className="lg:size-8 size-7 hover:text-blue-600" />
      </motion.a>

      <motion.a
        href="https://www.linkedin.com/in/michael-dimakiling-5773bb251/"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 20 }}
        whileTap={{
          scale: 0.8,
          rotate: -20,
          borderRadius: "100%",
        }}
        className="text-slate-950 dark:text-white"
      >
        <FaLinkedin className="lg:size-8 size-7 hover:text-blue-400" />
      </motion.a>
      <motion.a
        href="https://github.com/Dimakzkuru"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.2, rotate: 20 }}
        whileTap={{
          scale: 0.8,
          rotate: -20,
          borderRadius: "100%",
        }}
        className="text-slate-950 dark:text-white   "
      >
        <FaGithub className="lg:size-8 size-7 hover:text-black" />
      </motion.a>
    </div>
  );
};

export default SocialMedia;
