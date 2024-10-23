import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

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
              className="w-full lg:w-1/4 flex items-center justify-center lg:block"
            >
              <img
                src={project.image}
                width={150}
                height={150}
                alt={project.title}
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
              <h6 className="mb-10 lg:mb-5 font-extrabold tracking-wide flex items-center justify-center lg:block">
                {project.title}
              </h6>
              <p className="mb-4 dark:text-neutral-400 text-neutral-800 font-medium">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-5 mb-5 lg:justify-start justify-center">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="rounded bg-black px-2 py-1 text-sm font-medium text-green-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 items-center justify-center lg:items-left lg:justify-start">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white lg:py-2 lg:px-4 py-1 px-2 rounded hover:bg-gray-800 transition"
                >
                  Source Code
                </a>
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:bg-green-500 bg-green-600 text-white  lg:py-2 lg:px-4 py-1 px-2 text-base rounded hover:bg-green-500 dark:hover:bg-green-600 transition"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
