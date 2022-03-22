import { MdDesignServices } from "react-icons/md";
import { RiUser4Fill } from "react-icons/ri";
import { BsFront } from "react-icons/bs";
import { FiServer } from "react-icons/fi";

const Skills = () => {
  return (
    <section className="flex flex-col w-full justify-center px-8 md:px-16 xl:px-12 gap-y-8 sm:mt-16 lg:mt-0 ">
      <div className="text-black dark:text-white py-8 flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-3xl bg-gradient-to-r from-[#FF6B6B] to-[#6320EE] text-transparent bg-clip-text animate-gradient-x">
          My Skills
        </h1>
        <h2 className="text-xl mt-4">I can provide </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          <div className="grid grid-rows-3 justify-start items-center p-2 px-6 bg-gradient-to-br from-[#FF6B6B] to-[#8C271E] hover:animate-gradient-x w-full rounded-xl h-64 gap-y-2 ">
            <div className="flex flex-row gap-8">
              <p className="text-2xl md:text-4xl">
                <MdDesignServices />
              </p>
              <h1 className="text-2xl lg:text-3xl">UI</h1>
            </div>
            <div>
              <h2 className="text-xl ">
                I design modern user interfaces for Web, Android and IOS and
                every pixel matters!
              </h2>
            </div>
          </div>
          <div className="grid grid-rows-3 justify-start items-center p-2 px-6 bg-gradient-to-br from-[#FFCDBC] to-[#FF6B6B] hover:animate-gradient-x w-full rounded-xl h-64 gap-y-2 ">
            <div className="flex flex-row gap-8">
              <p className="text-2xl md:text-4xl">
                <RiUser4Fill />
              </p>
              <h1 className="text-2xl lg:text-3xl">UX</h1>
            </div>
            <div>
              <h2 className="text-xl ">
                I design modern and imersive user experiences with high priority
                to accessibility and performance.
              </h2>
            </div>
          </div>
          <div className="grid grid-rows-3 justify-start items-center p-2 px-6 bg-gradient-to-br from-[#FBAF00] to-[#F2F79E] hover:animate-gradient-x w-full rounded-xl h-64 gap-y-2 ">
            <div className="flex flex-row gap-8">
              <p className="text-2xl md:text-4xl">
                <BsFront />
              </p>
              <h1 className="text-2xl lg:text-3xl">Front End</h1>
            </div>
            <div>
              <h2 className="text-xl">
                I turn my design ideas into stuning and functional applications
                while maintaining clean code.
              </h2>
            </div>
          </div>
          <div className="grid grid-rows-3 justify-start items-center p-2 px-6 bg-gradient-to-br from-[#17BEBB] to-[#7F96FF] hover:animate-gradient-x w-full rounded-xl h-64 gap-y-2">
            <div className="flex flex-row gap-8">
              <p className="text-2xl md:text-4xl">
                <FiServer />
              </p>
              <h1 className="text-2xl lg:text-3xl">Back End</h1>
            </div>
            <div>
              <h2 className="text-xl">
                I add more functionalities to my applications with a highly
                optimized back-end servers.
              </h2>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Skills;
