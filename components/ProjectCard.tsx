import { BsFolderFill } from "react-icons/bs/index.js";
import { FiGithub } from "react-icons/fi/index.js";
import { BiLinkExternal } from "react-icons/bi/index.js";
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
    <div className="flex w-full flex-col gap-4 h-48 justify-center p-8 hover:bg-gray-200 dark:hover:bg-gray-900 rounded-lg shadow-sm  hover:scale-110 transition-all duration-300">
      <div className="grid grid-cols-2 justify-between items-start mt-2">
        <div className="text-2xl text-[#6E44FF] dark:text-[#EB5160]">
          <BsFolderFill />
        </div>
        <div className="w-full flex flex-row gap-4 justify-end text-2xl text-black dark:text-white">
          <Link key={props.id} href={`${props.source}`} passHref>
            <a target="_blank">
              <button
                aria-label="Source Code"
                className="hover:text-[#6E44FF] hover:dark:text-[#EB5160] active:scale-90 active:skew-y-3 transition duration-300"
              >
                <FiGithub />
              </button>
            </a>
          </Link>
          <Link key={props.id} href={`${props.preview}`} passHref>
            <a target="_blank">
              <button
                aria-label="Preview"
                className="hover:text-[#6E44FF] hover:dark:text-[#EB5160] active:scale-90 active:skew-y-3 transition duration-300"
              >
                <BiLinkExternal />
              </button>
            </a>
          </Link>
        </div>
      </div>
      <div className="w-full grid grid-rows-3 gap-2 items-start justify-start">
        <h1 className="text-lg text-black dark:text-white font-semibold">
          {props.title}
        </h1>

        <div className="flex flex-row items-center text-sm gap-2 text-gray-500 dark:text-gray-500">
          {props.stack.map((tech, i) => (
            <p key={i}>{tech}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
