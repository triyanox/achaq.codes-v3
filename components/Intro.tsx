import React from "react";
import Image from "next/image";
import hero from "../assets/hero.svg";
import Link from "next/link";
const Intro = () => {
  return (
    <section className=" w-full flex flex-col-reverse lg:flex-row justify-center items-center px-10 md:px-24 xl:px-20 gap-y-8 mt-36">
      <div className="text-black dark:text-white  flex flex-col justify-center items-start gap-y-2 w-full">
        <h1 className="text-xl md:text-3xl">Hey ! My name is Mohamed Achaq.</h1>
        <h2 className="text-lg md:text-2xl text-gray-700 dark:text-gray-200">
          I&apos;m a Full Stack Developer, UI and UX designer and Artist.
        </h2>
        <p className="text-md text-gray-600 dark:text-gray-400">
          I&apos;ve got into coding to unleash my creativity and bring my ideas
          to life by developing great product. My favourites programming
          languages are Python, Javascript and Typescript and I love
          contrubuting to open source projects .
        </p>
        <Link href="/contact" passHref>
          <a className="mt-2 text-2xl text-[#6E44FF] dark:text-[#EB5160] hover:bg-gray-200 dark:hover:bg-zinc-800 px-3 py-2  transition duration-200 active:scale-90 rounded-lg">
            Have something to say? Lets talk!
          </a>
        </Link>
      </div>
      <div className=" lg:w-full flex justify-center items-center">
        <Image
          className="rounded-full"
          src={hero}
          alt="Mohamed Achaq - Full Stack Developer"
          width={300}
          height={300}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Intro;
