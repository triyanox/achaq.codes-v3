import CertificationCard from "./CertificationCard";

const Certifications = () => {
  return (
    <section className="flex flex-col w-full justify-center px-10 md:px-24 xl:px-20 gap-y-8 mt-16">
      <div className="text-black dark:text-white flex flex-col justify-center items-start">
        <h1 className="text-xl md:text-2xl">My Certifications</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2  justify-between text-2xl gap-16">
        <div className="w-full text-black dark:text-white flex justify-center lg:justify-start">
          <h2 className="text-lg md:text-xl text-gray-700 dark:text-gray-200">
            I&apos;m always exited to build new projects, and during this
            process I&apos;ve managed to collect these certifications and
            experiences !
          </h2>
        </div>
        <div className="grid grid-cols-1  gap-2 justify-center items-center w-full">
          <CertificationCard
            title="Responsive Web Design"
            link="https://www.freecodecamp.org/certification/achaq/responsive-web-design"
            provider="FreeCodeCamp"
          />
          <CertificationCard
            title="JavaScript Algorithms and Data Structures"
            link="https://www.freecodecamp.org/certification/achaq/javascript-algorithms-and-data-structures"
            provider="FreeCodeCamp"
          />
          <CertificationCard
            title="Front End Development Libraries"
            link="https://www.freecodecamp.org/certification/achaq/front-end-development-libraries"
            provider="FreeCodeCamp"
          />
          <CertificationCard
            title="Scientific Computing with Python"
            link="https://www.freecodecamp.org/certification/achaq/scientific-computing-with-python-v7"
            provider="FreeCodeCamp"
          />
          <CertificationCard
            title="Back End Development and APIs"
            link="https://www.freecodecamp.org/certification/achaq/back-end-development-and-apis"
            provider="FreeCodeCamp"
          />
        </div>{" "}
      </div>
    </section>
  );
};

export default Certifications;
