import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard = (props: Props) => {
  return (
    <div className="flex justify-start items-center hover:shadow-lg w-full rounded-2xl h-40 gap-4 hover:bg-gradient-to-r from-[#6E44FF]  to-[#6EE7B7] dark:from-[#EB5160] dark:to-[#3B82F6] animate-gradient-xy transition-all duration-300">
      <div className="grid grid-rows-3 justify-start items-center p-4 bg-white dark:bg-black text-black dark:text-white rounded-2xl w-full h-full gap-2 bg-opacity-60 dark:bg-opacity-60 backdrop-filter backdrop-blur-lg dark:backdrop-blur-lg">
        <div className="flex flex-row gap-2">
          <p className="text-xl md:text-3xl">{props.icon}</p>
          <h1 className="text-xl lg:text-2xl">{props.title}</h1>
        </div>
        <h2 className="text-md mt-2 text-gray-700 dark:text-gray-200">
          {props.description}
        </h2>
      </div>
    </div>
  );
};

export default SkillCard;
