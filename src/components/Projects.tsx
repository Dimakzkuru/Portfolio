import React from "react";
import { PROJECTS } from "../constants/index.ts";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: { delay: 0.4, duration: 1.5 },
        }}
        viewport={{ once: true }}
        className="mb-28 text-center text-xl lg:text-2xl font-bold"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-28 flex flex-wrap justify-center items-center"
          >
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.2, duration: 1.2 },
              }}
              viewport={{ once: true }}
              className="w-full lg:block lg:w-1/4 flex items-center justify-center"
            >
              <img
                src={project.image}
                alt={project.title}
                width={150}
                height={150}
                className="mb-6 rounded"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{
                opacity: 1,
                x: 0,
                transition: { delay: 0.4, duration: 1.2 },
              }}
              viewport={{ once: true }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="lg:block lg:mb-5 mb-10  font-extrabold tracking-wide flex items-center justify-center ">
                {project.title}
              </h6>
              <p className="mb-4 dark:text-neutral-400 text-neutral-800 font-medium text-justify text-sm">
                {project.description}
              </p>
              <div className="lg:justify-start flex flex-wrap gap-5 mb-5  justify-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-slate-900 px-2 py-1 text-sm  text-green-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="lg:items-left lg:justify-start flex gap-4 items-center justify-center ">
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                  className="lg:py-2 lg:px-4 bg-black text-white py-1 px-2 rounded transition flex flex-row items-center gap-2"
                >
                  <FaGithub className="size-5" />
                  GitHub
                </motion.a>
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.1 }}
                  className="lg:py-2 lg:px-2 dark:bg-green-500 bg-green-600 text-white  py-1 px-1 text-base rounded hover:bg-green-500 dark:hover:bg-green-600 transition flex flex-row items-center gap-2"
                >
                  <CgWebsite className="size-5" />
                  Preview
                </motion.a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
