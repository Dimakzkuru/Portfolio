import React from "react";
import { useState, useEffect } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { motion } from "framer-motion";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ y: -10 }}
          animate={{
            y: [10, -10],
            transition: {
              duration: 0.8,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          className="fixed lg:bottom-20 lg:right-20 bottom-10 right-5"
        >
          <IoIosArrowDropupCircle className="text-3xl text-black dark:text-white lg:size-9 md:size-7" />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
