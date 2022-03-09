import CertificationCard from "./CertificationCard";

const Certifications = () => {
  return (
    <section className="flex flex-col w-full justify-center px-8 md:px-16 xl:px-12 gap-y-8 pb-8">
      <div className="text-black dark:text-white py-8 flex flex-col justify-center items-center lg:items-start">
        <h1 className="text-3xl bg-gradient-to-r from-[#FF6B6B] to-[#6320EE] text-transparent bg-clip-text animate-gradient-x">
          Certifications
        </h1>
        <h2 className="text-xl mt-4">My online certificats </h2>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  justify-between text-2xl gap-16">
        <div className="w-full text-black dark:text-white flex justify-center lg:justify-start">
          <h2 className="text-xl md:text-2xl">
            I&apos;m always exited to build new projects, and during this
            process I&apos;ve managed to collect these certifications and
            experiences !
          </h2>
        </div>
        <div className="grid grid-cols-1  gap-2 justify-center items-center w-full">
          <CertificationCard
            title="Responsive Web Design"
            link="https://www.freecodecamp.org/certification/achaq/responsive-web-design"
          />
          <CertificationCard
            title="JavaScript Algorithms and Data Structures"
            link="https://www.freecodecamp.org/certification/achaq/javascript-algorithms-and-data-structures"
          />
          <CertificationCard
            title="Front End Development Libraries"
            link="https://www.freecodecamp.org/certification/achaq/front-end-development-libraries"
          />
          <CertificationCard
            title="Scientific Computing with Python"
            link="https://www.freecodecamp.org/certification/achaq/scientific-computing-with-python-v7"
          />
        </div>{" "}
      </div>
    </section>
  );
};

export default Certifications;
