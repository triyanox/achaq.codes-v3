import type { NextPage } from "next";
import React from "react";
import FeaturedProjects from "../components/FeaturedProjects";
import Intro from "../components/Intro";
import ToolBox from "../components/ToolBox";
import Layout from "../themes/Layout";
const Home: NextPage = () => {
  return (
    <Layout
      pageTitle="Mohamed Achaq - Developer, Designer, Artist"
      siteName="achaq.codes"
      description="Full Stack Developer"
      preview="home"
    >
      <>
        <Intro />
        <ToolBox />
        <FeaturedProjects />
      </>
    </Layout>
  );
};

export default Home;
