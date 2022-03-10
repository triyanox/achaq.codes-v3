import { projectsdata } from "../data/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Projects() {
  return (
    <section
      id="projects"
      className=" px-4 lg:px-12 justify-center items-center  "
    >
      <div className="w-full text-black dark:text-white pt-24 text-center">
        <h1 className="text-3xl mb-4 bg-gradient-to-r from-[#FF6B6B] to-[#6320EE] text-transparent bg-clip-text animate-gradient-x">
          Projects
        </h1>
        <h2 className="text-xl">Those are my current Projects</h2>
      </div>
      <motion.div initial="initial" animate="animate" exit={{ opacity: 0 }}>
        <motion.div
          variants={stagger}
          className="grid grid-cols-1  lg:grid-cols-4 2xl:grid-cols-4 gap-y-4 mt-16 mb-12 lg:gap-y-8 "
        >
          {projectsdata.map((project) => (
            <motion.div variants={fadeInUp} key={project.id}>
              
                <ProjectCard
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  stack={project.stack}
                  source={project.source}
                  preview={project.preview}
                />
              
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Projects;
