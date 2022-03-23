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
        <div className="flex flex-col gap-1 items-start sm:items-center md:items-start justify-center px-6 py-1 w-full hover:bg-gray-200 dark:hover:bg-zinc-900 text-black dark:text-white hover:text-[#6E44FF] dark:hover:text-[#EB5160] rounded-lg hover:scale-110 transition-all duration-200">
          {" "}
          <div className="w-full flex flex-row gap-2 text-lg md:text-xl tracking-tight mb-1  justify-start items-center ">
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
