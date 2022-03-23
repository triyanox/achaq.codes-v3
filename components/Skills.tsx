import { MdDesignServices } from "react-icons/md";
import { RiUser4Fill } from "react-icons/ri";
import { BsFront } from "react-icons/bs";
import { FiServer } from "react-icons/fi";
import SkillCard from "./SkillCard";
const Skills = () => {
  return (
    <section className="flex flex-col w-full justify-center px-10 md:px-24 xl:px-20 gap-y-8 mt-16 ">
      <div className="text-black dark:text-white py-4 flex flex-col justify-center items-start">
        <h1 className="text-xl md:text-2xl">My Skills</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <SkillCard
          title="UI"
          description="I design modern user interfaces for Web, Android and IOS and every
              pixel matters!"
          icon={<MdDesignServices />}
        />
        <SkillCard
          title="UX"
          description="I design modern and imersive user experiences with high priority
              to accessibility and performance."
          icon={<RiUser4Fill />}
        />
        <SkillCard
          title="Front End"
          description="I turn my design ideas into stuning and functional applications
              while maintaining clean code."
          icon={<BsFront />}
        />
        <SkillCard
          title="Back End"
          description=" I add more functionalities to my applications with a highly
              optimized back-end servers."
          icon={<FiServer />}
        />
      </div>
    </section>
  );
};

export default Skills;
