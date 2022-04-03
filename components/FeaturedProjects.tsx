import React from "react";
import FeaturedProjectsCard from "./FeaturedProjectsCard";
import {
  SiFirebase,
  SiAdobephotoshop,
  SiAdobexd,
  SiGit,
  SiGraphql,
  SiTensorflow,
  SiMongodb,
  SiExpress,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNodedotjs,
  SiReact,
  SiNextdotjs,
  SiSass,
  SiTailwindcss,
} from "react-icons/si";
import { Nextdotjs } from "./Icons";
const FeaturedProjects = () => {
  return (
    <section className="flex flex-col w-full justify-center px-10 md:px-24 xl:px-20 gap-y-8 mt-16 ">
      <div className="text-black dark:text-white py-4 flex flex-col justify-center items-start">
        <h1 className="text-xl md:text-2xl">Featured Projects</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <FeaturedProjectsCard
          title="Portfolio"
          image="/projects/achaqcodes.png"
          preview="https://achaq.codes"
          source="https://github.com/triyanox/achaq.codes-v3"
          id={1}
          stack={["React.js", "Next.js", "Tailwindcss", "MDX", "Firebase"]}
        />
      </div>
    </section>
  );
};

export default FeaturedProjects;
