import { projectsdata } from "../data/projects";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import FeaturedProjectsCard from "./FeaturedProjectsCard";
import {
  Firebase,
  Adobephotoshop,
  Adobexd,
  Git,
  Graphql,
  Tensorflow,
  Mongodb,
  Express,
  Html5,
  Css3,
  Javascript,
  Typescript,
  Python,
  Nodedotjs,
  Reactdotjs,
  Nextdotjs,
  Sass,
  Tailwindcss,
} from "./Icons";
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
      <div className="w-full text-black dark:text-white pt-28 text-start">
        <h1 className="text-center text-3xl font-semibold animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r from-[#6E44FF] to-[#EB5160]">
          Projects
        </h1>
        <h2 className="text-xl md:text-2xl font-medium  px-8 lg:px-0  text-gray-800 dark:text-gray-200 mt-12">
          Projects I&apos;ve worked on :
        </h2>
      </div>

      <div className="grid grid-cols-1 px-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4 mt-16">
        <FeaturedProjectsCard
          title="Portfolio"
          image="/projects/achaqcodes.png"
          preview="https://achaq.codes"
          source="https://github.com/triyanox/achaq.codes-v3"
          id={1}
          description="My portfolio website built with Next.js, TailwindCSS, and Typescript."
          stack={[
            <Nextdotjs />,
            <Reactdotjs />,
            <Tailwindcss />,
            <Typescript />,
          ]}
        />
        <FeaturedProjectsCard
          title="Shortify"
          image="/projects/shortify.png"
          preview="https://shortify.achaq.codes"
          source="https://github.com/triyanox/shortify-server"
          id={2}
          description="URL shortener service built with Next.js,  Node.js, Express, and MongoDB."
          stack={[
            <Nextdotjs />,
            <Reactdotjs />,
            <Tailwindcss />,
            <Typescript />,
            <Nodedotjs />,
            <Express />,
            <Mongodb />,
          ]}
        />
      </div>
      <div className="w-full mb-20 px-8 lg:px-0 text-black dark:text-white pt-12 text-start">
        <h2 className="text-xl md:text-2xl font-medium   text-gray-800 dark:text-gray-200 ">
          Other Projects and Experiments :
        </h2>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        exit={{ opacity: 0 }}
        className=" mb-12"
      >
        <motion.div
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4 gap-y-4  lg:gap-y-8 "
        >
          {projectsdata.map((project, i) => (
            <motion.div variants={fadeInUp} key={i}>
              <ProjectCard
                key={i}
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
