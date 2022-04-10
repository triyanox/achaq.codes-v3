import React from "react";
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
          description="My portfolio website built with Next.js, TailwindCSS, and Typescript."
          stack={[
            <Nextdotjs />,
            <Reactdotjs />,
            <Tailwindcss />,
            <Typescript />,
            <Reactdotjs />,
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
    </section>
  );
};

export default FeaturedProjects;
