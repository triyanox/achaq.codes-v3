import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard = (props: Props) => {
  return (
    <div className="flex justify-start items-center w-full rounded-xl h-40 gap-4 bg-gradient-to-r from-[#6E44FF]  to-[#6EE7B7] dark:from-[#EB5160] dark:to-[#3B82F6] animate-gradient-x shadow-xl dark:shadow-[#EB5160]">
      <div className="grid grid-rows-3 justify-start items-center p-4 bg-white dark:bg-black text-black dark:text-white rounded-xl w-full h-full gap-2 bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-xl dark:backdrop-blur-xl">
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
