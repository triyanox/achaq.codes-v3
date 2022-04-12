import Link from "next/link";
import Image from "next/image";
import achaq from "../assets/achaq.png";
const Intro = () => {
  return (
    <section className="lg:h-screen mt-28 lg:mt-0 w-full flex flex-col-reverse  justify-center items-center px-10 md:px-24 xl:px-20 gap-y-8">
      <div className="text-black dark:text-white   flex flex-col justify-center items-center gap-y-4 w-full">
        <h1 className="text-xl md:text-3xl font-semibold  animate-gradient-x text-transparent bg-clip-text bg-gradient-to-r from-[#6E44FF] to-[#EB5160]">
          Hey ! My name is Mohamed Achaq.
        </h1>
        <h2 className="text-lg md:text-2xl font-medium  text-center text-gray-800 dark:text-gray-200 ">
          I&apos;m a Full Stack Developer, UI and UX designer and Artist.
        </h2>

        <Link href="/contact" passHref>
          <button className="select-none mt-4 text-2xl px-6 py-2 rounded-lg shadow-md hover:scale-110 transition-all duration-200  active:scale-95 text-white    hover:bg-[#6E44FF] hover:dark:bg-[#EB5160] dark:text-black  bg-black dark:bg-white broder flex justify-center items-center">
            Lets talk!
          </button>
        </Link>
      </div>
      <div className="  w-full  flex flex-col justify-center items-center p-2">
        <Image
          src={achaq}
          width={200}
          height={200}
          alt="Mohamed Achaq"
          className="rounded-full  "
          quality={100}
        />
      </div>
    </section>
  );
};

export default Intro;
