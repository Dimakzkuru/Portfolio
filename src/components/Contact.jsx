import { CONTACT } from "../constants";
import { motion } from "framer-motion";
const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-5">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.9, duration: 1.2 },
        }}
        className="my-10 text-center  text-4xl"
      >
        Get in Touch
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.9, duration: 0.9 },
          }}
          className="my-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.9, duration: 0.9 },
          }}
          className="my-4"
        >
          {CONTACT.email}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.9, duration: 0.9 },
          }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
      </div>
    </div>
  );
};

export default Contact;
