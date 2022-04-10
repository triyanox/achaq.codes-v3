import Image from "next/image";
import { SiGithub, SiOpenlayers } from "react-icons/si";
import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  source: string;
  id: number;
  preview: string;
  title: string;
  image: string;
  stack: ReactNode[];
  description: string;
};
const FeaturedProjectsCard = (props: Props) => {
  return (
    <div className="flex justify-start items-center rounded-[30px] w-full gap-4 bg-white dark:bg-black  select-none">
      <div className="relative flex justify-center flex-col  p-2 bg-white dark:bg-black rounded-[12px] w-full h-full gap-2  ">
        <div className="flex flex-col gap-2 p-2">
          <div>
            <Image
              src={props.image}
              width={1920}
              height={1080}
              alt={props.title}
              className="rounded-xl "
              property="cover"
            />
          </div>
          <div className=" grid grid-cols-2 justify-between items-start mt-2">
            <h1 className="text-lg md:text-2xl text-black dark:text-white font-medium  p-1 ">
              {props.title}
            </h1>

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
          <div className="flex flex-col justify-start  mb-1 text-sm md:text-lg  text-gray-800 dark:text-gray-200 p-1">
            {props.description}
          </div>
          <ul className="flex flex-row justify-start text-2xl md:text-3xl gap-3 text-gray-700 dark:text-gray-300 p-1">
            {props.stack.map((item) => {
              <li>{item}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectsCard;
