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
    <section className="flex flex-col w-full justify-center px-8 md:px-16 xl:px-12 gap-y-8 pb-8">
      <div className="text-black dark:text-white py-8 flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-3xl bg-gradient-to-r from-[#FF6B6B] to-[#6320EE] text-transparent bg-clip-text animate-gradient-x">
          My Toolbox
        </h1>
        <h2 className="text-xl mt-4">Tools and Tecnologies I use </h2>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  justify-between text-2xl gap-16">
        <div className="w-full text-black dark:text-white flex justify-center lg:justify-start">
          <h2 className="text-xl md:text-2xl">
            In terms of tools and technologies, software developement never been
            easy than before! And those are tools and technologies I use !
          </h2>
        </div>
        <div className="mx-auto  grid grid-cols-6 md:grid-cols-9 lg:grid-cols-9 gap-8  text-black dark:text-white text-4xl">
          <div className="text-orange-600 transition-all duration-500">
            <SiHtml5 />
          </div>
          <div className="text-blue-600 transition-all duration-500">
            <SiCss3 />
          </div>
          <div className="text-yellow-500 transition-all duration-500">
            <SiJavascript />
          </div>
          <div className="text-blue-700 transition-all duration-500">
            <SiTypescript />
          </div>
          <div className="text-yellow-600 transition-all duration-500">
            <SiPython />
          </div>

          <div className="text-green-600 transition-all duration-500">
            <SiNodedotjs />
          </div>
          <div className="text-cyan-600 transition-all duration-500">
            <SiReact />
          </div>
          <div className="text-gray-700 transition-all duration-500">
            <SiNextdotjs />
          </div>
          <div className="text-pink-600 transition-all duration-500">
            <SiSass />
          </div>
          <div className="text-blue-500 transition-all duration-500">
            <SiTailwindcss />
          </div>

          <div className="text-gray-600 transition-all duration-500">
            <SiExpress />
          </div>
          <div className="text-green-600 transition-all duration-500">
            <SiMongodb />
          </div>
          <div className="text-rose-600 transition-all duration-500">
            <SiGraphql />
          </div>
          <div className="text-yellow-600 transition-all duration-500">
            <SiTensorflow />
          </div>
          <div className="text-red-700 transition-all duration-500">
            <SiGit />
          </div>
          <div className="text-amber-500 transition-all duration-500">
            <SiFirebase />
          </div>
          <div className="text-rose-600 transition-all duration-500">
            <SiAdobexd />
          </div>
          <div className="text-blue-600 transition-all duration-500">
            <SiAdobephotoshop />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBox;
