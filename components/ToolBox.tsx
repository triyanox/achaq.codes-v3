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
  SiDocker,
  SiKubernetes,
  SiFigma,
  SiAmazonaws,
  SiPostgresql,
  SiGo,
  SiGooglecloud,
} from "react-icons/si";
const ToolBox = () => {
  return (
    <section className="flex flex-col w-full justify-center px-10 md:px-24 xl:px-20 gap-y-8 mt-16 lg:mt-0">
      <div className="text-black dark:text-white flex flex-col justify-center items-start">
        <h1 className="text-xl md:text-2xl">My Toolbox</h1>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2  justify-between text-2xl gap-16">
        <div className="w-full text-black dark:text-white flex justify-center lg:justify-start">
          <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
            I love using new technologies and among those technologies I love
            using <span className="text-yellow-500">Javascript</span>,{" "}
            <span className="text-blue-700">Typescript</span> and{" "}
            <span className="text-blue-800">Python</span>. And here is a
            collection of other tools and technologies I use .
          </h2>
        </div>
        <div className="px-4 lg:px-0 grid grid-cols-6 sm:grid-cols-9 lg:grid-cols-8 gap-8  text-black dark:text-white text-4xl">
          <div className="hover:text-orange-600 hover:scale-125 transition-all duration-150 group">
            <SiHtml5 />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-6 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              HTML 5
            </span>
          </div>
          <div className="hover:text-blue-600 hover:scale-125 transition-all duration-150 group">
            <SiCss3 />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-3 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              CSS 3
            </span>
          </div>
          <div className="hover:text-yellow-500 hover:scale-125 transition-all duration-150 group">
            <SiJavascript />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-8 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Javascript
            </span>
          </div>
          <div className="hover:text-blue-800 hover:scale-125 transition-all duration-150 group">
            <SiTypescript />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-8 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Typescript
            </span>
          </div>
          <div className="hover:text-blue-700 hover:scale-125 transition-all duration-150 group">
            <SiPython />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-6 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Python
            </span>
          </div>

          <div className="hover:text-green-600 hover:scale-125 transition-all duration-150 group">
            <SiNodedotjs />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-6 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Node.js
            </span>
          </div>
          <div className="hover:text-cyan-600 hover:scale-125 transition-all duration-150 group">
            <SiReact />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-5 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              React
            </span>
          </div>
          <div className="hover:text-gray-700 hover:scale-125 transition-all duration-150 group">
            <SiNextdotjs />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-4 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Next.js
            </span>
          </div>
          <div className="hover:text-pink-600 hover:scale-125 transition-all duration-150 group">
            <SiSass />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-2 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Sass
            </span>
          </div>
          <div className="hover:text-blue-500 hover:scale-125 transition-all duration-150 group">
            <SiTailwindcss />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-10 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Tailwind CSS
            </span>
          </div>

          <div className="hover:text-gray-600 hover:scale-125 transition-all duration-150 group">
            <SiExpress />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-6 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Express
            </span>
          </div>
          <div className="hover:text-green-600 hover:scale-125 transition-all duration-150 group">
            <SiMongodb />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-8 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              MongoDB
            </span>
          </div>
          <div className="hover:text-rose-600 hover:scale-125 transition-all duration-150 group">
            <SiGraphql />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-8 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              GraphQL
            </span>
          </div>
          <div className="hover:text-amber-600 hover:scale-125 transition-all duration-150 group">
            <SiTensorflow />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-8 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Tensorflow
            </span>
          </div>
          <div className="hover:text-red-700 hover:scale-125 transition-all duration-150 group">
            <SiGit />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-3 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Git
            </span>
          </div>
          <div className="hover:text-amber-400 hover:scale-125 transition-all duration-150 group">
            <SiFirebase />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-7 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Firebase
            </span>
          </div>
          <div className="hover:text-rose-700 hover:scale-125 transition-all duration-150 group">
            <SiAdobexd />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-6 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Adobe XD
            </span>
          </div>
          <div className="hover:text-blue-800 hover:scale-125 transition-all duration-150 group">
            <SiAdobephotoshop />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-11 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Adobe Photoshop
            </span>
          </div>
          <div className="hover:text-cyan-600 hover:scale-125 transition-all duration-150 group">
            <SiDocker />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-4 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Docker
            </span>
          </div>
          <div className="hover:text-blue-600 hover:scale-125 transition-all duration-150 group">
            <SiKubernetes />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-7 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Kubernetes
            </span>
          </div>
          <div className="hover:text-orange-600 hover:scale-125 transition-all duration-150 group">
            <SiFigma />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-4 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Figma
            </span>
          </div>
          <div className="hover:text-amber-600 hover:scale-125 transition-all duration-150 group">
            <SiAmazonaws />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-3 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              AWS
            </span>
          </div>
          <div className="hover:text-cyan-700 hover:scale-125 transition-all duration-150 group">
            <SiPostgresql />
            <span
              className="absolute w-auto p-2 m-2 min-w-max -right-7 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Postgresql
            </span>
          </div>
          <div className="hover:text-cyan-600 hover:scale-125 transition-all duration-150 group">
            <SiGo />
            <span
              className="absolute w-auto p-2 m-2 min-w-max  rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
            >
              Go
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolBox;
