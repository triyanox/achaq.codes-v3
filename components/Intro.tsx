import React from "react";
import Image from "next/image";
import hero from "../assets/hero-satatic.svg";
import Link from "next/link";
const Intro = () => {
  return (
    <section className=" w-full h-screen flex flex-col-reverse lg:flex-row justify-center items-center px-2 md:px-16 xl:px-12 gap-y-8">
      <div className="text-black dark:text-white text-xl md:text-3xl xl:text-4xl flex flex-col justify-center items-center lg:items-start gap-y-2 w-full">
        <h1>Hey ! My name is Mohamed Achaq.</h1>
        <h1>I&apos;m a Full Stack Developer, </h1>
        <h1>UI and UX designer and Artist.</h1>
        <Link href="/contact" passHref>
          <a className="mt-6 bg-gradient-to-r from-[#FF6B6B] to-[#6320EE] text-transparent bg-clip-text animate-gradient-x hover:-skew-y-3  transition duration-200 hover:scale-110 active:scale-90 hover:translate-x-5">
            Have something to say? Lets talk!
          </a>
        </Link>
      </div>
      <div className="w-2/3 mt-12 md:mt-32 lg:mt-0 lg:w-full flex justify-center items-center">
        <Image
          className="rounded-xl"
          src={hero}
          alt="Mohamed Achaq - Full Stack Developer"
          width={400}
          height={400}
          placeholder="blur"
        />
      </div>
    </section>
  );
};

export default Intro;
