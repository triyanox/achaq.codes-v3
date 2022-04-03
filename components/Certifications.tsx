import CertificationCard from "./CertificationCard";

const Certifications = () => {
  return (
    <section className="flex flex-col w-full justify-center px-10 md:px-24 xl:px-20 gap-16 mt-16">
      <div className="text-black dark:text-white flex flex-col justify-center items-start">
        <h1 className="text-xl md:text-2xl">My Certifications</h1>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  justify-center items-center gap-2">
        <CertificationCard
          title="Mastering Responsive Web Design"
          link="https://www.freecodecamp.org/certification/achaq/responsive-web-design"
          provider="FreeCodeCamp"
        />
        <CertificationCard
          title="JS Algorithms and Data Structures"
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
    </section>
  );
};

export default Certifications;
