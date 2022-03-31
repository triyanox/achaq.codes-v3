import { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard = (props: Props) => {
  return (
    <div className="flex justify-start items-center w-full rounded-xl h-40 gap-4 hover:bg-gradient-to-r from-[#6E44FF]  to-[#6EE7B7] dark:from-[#EB5160] dark:to-[#3B82F6] animate-gradient-x hover:shadow-xl dark:shadow-[#EB5160] transition-all duration-300 ease-in-out select-none">
      <div className="grid grid-rows-3 justify-start items-center p-4 bg-white dark:bg-black rounded-xl w-full h-full gap-2 bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-3xl dark:backdrop-blur-3xl transition-all duration-300 ease-in-out">
        <div className="flex flex-row gap-6">
          <p className="text-xl md:text-3xl">{props.icon}</p>
          <h1 className="text-xl lg:text-2xl font-medium">{props.title}</h1>
        </div>
        <h2 className="text-md mt-2 text-gray-700 dark:text-gray-200">
          {props.description}
        </h2>
      </div>
    </div>
  );
};

export default SkillCard;
