import React from "react";
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
const ToolBox = () => {
  return (
    <section className="flex flex-col w-full justify-center px-10 md:px-24 xl:px-20 gap-y-8 mt-16">
      <div className="text-black dark:text-white flex flex-col justify-center items-start">
        <h1 className="text-xl md:text-2xl">My Toolbox</h1>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  justify-between text-2xl gap-16">
        <div className="w-full text-black dark:text-white flex justify-center lg:justify-start">
          <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
            In terms of tools and technologies, software developement never been
            easy than before! And those are tools and technologies I use !
          </h2>
        </div>
        <div className="mx-auto  grid grid-cols-6 md:grid-cols-9 lg:grid-cols-9 gap-8  text-black dark:text-white text-4xl">
          <div className="hover:text-orange-600 hover:scale-125 transition-all duration-150">
            <SiHtml5 />
          </div>
          <div className="hover:text-blue-600 hover:scale-125 transition-all duration-150">
            <SiCss3 />
          </div>
          <div className="hover:text-yellow-500 hover:scale-125 transition-all duration-150">
            <SiJavascript />
          </div>
          <div className="hover:text-blue-800 hover:scale-125 transition-all duration-150">
            <SiTypescript />
          </div>
          <div className="hover:text-blue-700 hover:scale-125 transition-all duration-150">
            <SiPython />
          </div>

          <div className="hover:text-green-600 hover:scale-125 transition-all duration-150">
            <SiNodedotjs />
          </div>
          <div className="hover:text-cyan-600 hover:scale-125 transition-all duration-150">
            <SiReact />
          </div>
          <div className="hover:text-gray-700 hover:scale-125 transition-all duration-150">
            <SiNextdotjs />
          </div>
          <div className="hover:text-pink-600 hover:scale-125 transition-all duration-150">
            <SiSass />
          </div>
          <div className="hover:text-blue-500 hover:scale-125 transition-all duration-150">
            <SiTailwindcss />
          </div>

          <div className="hover:text-gray-600 hover:scale-125 transition-all duration-150">
            <SiExpress />
          </div>
          <div className="hover:text-green-600 hover:scale-125 transition-all duration-150">
            <SiMongodb />
          </div>
          <div className="hover:text-rose-600 hover:scale-125 transition-all duration-150">
            <SiGraphql />
          </div>
          <div className="hover:text-amber-400 hover:scale-125 transition-all duration-150">
            <SiTensorflow />
          </div>
          <div className="hover:text-red-700 hover:scale-125 transition-all duration-150">
            <SiGit />
          </div>
          <div className="hover:text-amber-600 hover:scale-125 transition-all duration-150">
            <SiFirebase />
          </div>
          <div className="hover:text-rose-700 hover:scale-125 transition-all duration-150">
            <SiAdobexd />
          </div>
          <div className="hover:text-blue-800 hover:scale-125 transition-all duration-150">
            <SiAdobephotoshop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBox;
