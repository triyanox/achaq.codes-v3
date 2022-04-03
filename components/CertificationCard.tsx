import Link from "next/link";
import { BiCertification } from "react-icons/bi/index.js";

interface Props {
  title: string;
  link: string;
  provider: string;
}

const CertificationCard = (props: Props) => {
  return (
    <div className="flex justify-start items-center w-full rounded-xl h-48 gap-4 bg-white dark:bg-black transition-all duration-300 ease-in-out select-none hover:scale-110">
      <Link href={props.link} passHref>
        <a target="_blank">
          <div className=" flex w-full flex-col gap-4 h-48 justify-center p-8  rounded-xl ">
            <div className=" grid grid-cols-2 justify-between items-start mt-2">
              <div className="text-2xl ">
                <BiCertification />
              </div>
            </div>
            <div className="w-full grid grid-rows-3 gap-2 items-start justify-start">
              <h1 className="text-md text-black dark:text-white font-medium">
                {props.title}
              </h1>
              <div className="flex flex-row items-center text-sm gap-2 text-gray-700 dark:text-gray-300">
                {props.provider}
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CertificationCard;
