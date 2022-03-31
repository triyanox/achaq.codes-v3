import { BsFolderFill } from "react-icons/bs/index.js";
import { SiGithub } from "react-icons/si/index.js";
import { SiOpenlayers } from "react-icons/si/index.js";
import Link from "next/link";

interface Props {
  title: string;
  id: string;
  source: string;
  preview: string;
  stack: string[];
  description: string;
}

const ProjectCard = (props: Props) => {
  return (
    <div className="flex justify-start items-center w-full rounded-xl h-48 gap-4 hover:bg-gradient-to-r from-[#6E44FF]  to-[#6EE7B7] dark:from-[#EB5160] dark:to-[#3B82F6] animate-gradient-x hover:shadow-xl dark:shadow-[#EB5160] transition-all duration-300 ease-in-out select-none">
      <div className=" flex w-full flex-col gap-4 h-48 justify-center p-8 bg-white dark:bg-black rounded-xl bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-3xl dark:backdrop-blur-3xl transition-all duration-300 ease-in-out">
        <div className=" grid grid-cols-2 justify-between items-start mt-2">
          <div className="text-2xl ">
            <BsFolderFill />
          </div>
          <div className="w-full flex flex-row gap-4 justify-end text-2xl text-black dark:text-white">
            <Link key={props.id} href={`${props.source}`} passHref>
              <a target="_blank">
                <button
                  aria-label="Source Code"
                  className="group relative hover:text-[#6E44FF] hover:dark:text-[#EB5160] active:scale-90 active:skew-y-3 transition duration-300"
                >
                  <SiGithub />
                  <span
                    className="absolute w-auto p-2 m-2 min-w-max -right-9 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
                  >
                    Source Code
                  </span>
                </button>
              </a>
            </Link>
            <Link key={props.id} href={`${props.preview}`} passHref>
              <a target="_blank">
                <button
                  aria-label="Preview"
                  className="group relative hover:text-[#6E44FF] hover:dark:text-[#EB5160] active:scale-90 active:skew-y-3 transition duration-300"
                >
                  <SiOpenlayers />
                  <span
                    className="absolute w-auto p-2 m-2 min-w-max -right-6 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
                  >
                    Preview
                  </span>
                </button>
              </a>
            </Link>
          </div>
        </div>
        <div className="w-full grid grid-rows-3 gap-4 items-start justify-start">
          <h1 className="text-md text-black dark:text-white font-medium">
            {props.title}
          </h1>
          <div className="flex flex-row items-center text-sm gap-2 text-gray-700 dark:text-gray-300">
            {props.stack.map((tech, i) => (
              <p key={i}>{tech}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
