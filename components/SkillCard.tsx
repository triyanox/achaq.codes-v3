import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

interface Props {
  icon: ReactNode;
  title: string;
  description: string;
}

const SkillCard = (props: Props) => {
  return (
    <div className="flex justify-center items-center p-1 w-full rounded-xl h-40 gap-4">
      <div className="grid grid-rows-3 justify-center items-center p-4 bg-white dark:bg-black text-black dark:text-white rounded-xl w-full h-full gap-2">
        <div className="flex flex-row gap-2">
          <p className="text-xl md:text-3xl">{props.icon}</p>
          <h1 className="text-xl lg:text-2xl">{props.title}</h1>
        </div>
        <h2 className="text-md mt-2">{props.description}</h2>
      </div>
    </div>
  );
};

export default SkillCard;
