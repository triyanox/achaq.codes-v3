import Link from "next/link";
import Image from "next/image";
import achaq from "../assets/achaq-300.png";
const Intro = () => {
  return (
    <section className="lg:h-screen mt-28 lg:mt-0 w-full flex flex-col-reverse lg:flex-row justify-center items-center px-10 md:px-24 xl:px-20 gap-y-8">
      <div className="text-black dark:text-white  flex flex-col justify-center items-start gap-y-2 w-full">
        <h1 className="text-xl md:text-3xl">Hey ! My name is Mohamed Achaq.</h1>
        <h2 className="text-lg md:text-2xl text-gray-800 dark:text-gray-200">
          I&apos;m a Full Stack Developer, UI and UX designer and Artist.
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
          I&apos;m building web applications using the latest technologies and
          libraries.Also I&apos;m passionate about creating beautiful and
          intuitive user interfaces and building backend services.
        </p>
        <Link href="/contact" passHref>
          <a className="mt-2 text-lg md:text-xl text-[#6E44FF] dark:text-[#EB5160] hover:bg-gray-200 dark:hover:bg-zinc-800 hover:scale-105 hover:px-4 py-2  transition-all ease-in duration-200 active:scale-90 rounded-lg">
            Have something to say? Lets talk!
          </a>
        </Link>
      </div>
      <div className=" hidden lg:w-full  lg:flex flex-col justify-center items-center p-2">
        <Image
          src={achaq}
          width={300}
          height={300}
          alt="Mohamed Achaq"
          className="rounded-xl "
        />
      </div>
    </section>
  );
};

export default Intro;
