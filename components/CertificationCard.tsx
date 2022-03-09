import Link from "next/link";
import { BiCertification } from "react-icons/bi/index.js";
import { CgChevronRight } from "react-icons/cg/index.js";

interface Props {
  title: string;
  link: string;
}

const CertificationCard = (props: Props) => {
  return (
    <div className="flex flex-col gap-1 items-start sm:items-center md:items-start justify-center px-4 py-2 w-full">
      <Link href={props.link} passHref>
        <a target="_blank">
          {" "}
          <div className="w-full flex flex-row gap-2 text-2xl  tracking-tight mb-1 text-black dark:text-white justify-start items-center hover:text-[#6320EE] hover:dark:text-[#FF6B6B]">
            <div className=" text-[#6320EE] dark:text-[#FF6B6B]">
              <BiCertification />
            </div>{" "}
            {props.title}
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CertificationCard;
