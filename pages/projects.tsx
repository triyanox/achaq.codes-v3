import type { NextPage } from "next";
import React from "react";
import Projects from "../components/Projects";
import Layout from "../themes/Layout";
const ProjectsPage: NextPage = () => {
  return (
    <Layout
      pageTitle="Projects - Mohamed Achaq"
      siteName="achaq.codes"
      description="Full Stack Developer"
      preview="projects"
    >
      <Projects />
    </Layout>
  );
};

export default ProjectsPage;
