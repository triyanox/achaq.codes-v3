import Link from "next/link";
import { BiCertification } from "react-icons/bi/index.js";
import { CgChevronRight } from "react-icons/cg/index.js";

interface Props {
  title: string;
  link: string;
}

const CertificationCard = (props: Props) => {
  return (
    <Link href={props.link} passHref>
      <a target="_blank">
        <div className="flex flex-col gap-1 items-start sm:items-center md:items-start justify-center px-2 md:px-6 py-1 w-full text-black dark:text-white rounded-lg hover:bg-gradient-to-r from-[#6E44FF]  to-[#6EE7B7] dark:from-[#EB5160] dark:to-[#3B82F6] animate-gradient-x hover:shadow-xl dark:shadow-[#EB5160]">
          {" "}
          <div className="w-full flex flex-row gap-2 text-lg md:text-xl tracking-tight mb-1  justify-start items-center bg-opacity-70 dark:bg-opacity-70 backdrop-filter backdrop-blur-xl dark:backdrop-blur-xl">
            <div>
              <BiCertification />
            </div>{" "}
            <h1>{props.title}</h1>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default CertificationCard;
