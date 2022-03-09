import {
  SiLinkedin,
  SiInstagram,
  SiGithub,
  SiTwitter,
  SiYoutube,
} from "react-icons/si/index.js";
import Link from "next/link";

const Footer = () => {
  return (
    <section className=" flex flex-col items-center md:flex-row  justify-center mt-8 p-12">
      <div className="md:w-full flex items-center sm:flex-row flex-col">
        <div className="flex text-2xl text-black dark:text-white font-medium items-center md:justify-start justify-center">
          Achaq Codes
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex flex-row justify-center items-center gap-4">
        <Link href="https://www.linkedin.com/in/achaqdev/" passHref>
          <a aria-label="Linkedin" target="_blank">
            <h1 className="text-black dark:text-white text-2xl hover:text-blue-600 hover:dark:text-blue-600 ">
              <SiLinkedin />
            </h1>
          </a>
        </Link>
        <Link href="https://instagram.com/ac.haq/" passHref>
          <a aria-label="Instagram" target="_blank">
            <h1 className="text-black dark:text-white text-2xl hover:text-pink-700 hover:dark:text-pink-700">
              <SiInstagram />
            </h1>
          </a>
        </Link>
        <Link href="https://youtube.com/c/triyanox/" passHref>
          <a aria-label="YouTube" target="_blank">
            <h1 className="text-black dark:text-white text-2xl hover:text-red-700 hover:dark:text-red-700">
              <SiYoutube />
            </h1>
          </a>
        </Link>
        <Link href="https://github.com/triyanox" passHref>
          <a aria-label="Github" target="_blank">
            <h1 className="text-black dark:text-white text-2xl hover:text-gray-900 hover:dark:text-gray-300">
              <SiGithub />
            </h1>
          </a>
        </Link>
        <Link href="https://twitter.com/ac__haq" passHref>
          <a aria-label="Twitter" target="_blank">
            <h1 className="text-black dark:text-white text-2xl hover:text-blue-500 hover:dark:text-blue-500">
              <SiTwitter />
            </h1>
          </a>
        </Link>
      </div>
    </section>
  );
};

export default Footer;
