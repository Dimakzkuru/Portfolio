import { useState, useEffect } from "react";
import { PiArrowFatLineUpFill } from "react-icons/pi";
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
          className="fixed bottom-20 right-20 p-1.5 rounded-full shadow-lg"
        >
          <PiArrowFatLineUpFill className="text-3xl text-green-500 hover:text-green-600  size-10 " />
        </motion.button>
      )}
    </div>
  );
};

export default ScrollToTop;
