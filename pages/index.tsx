import type { NextPage } from "next";
import React from "react";
import Certifications from "../components/Certifications";
import Intro from "../components/Intro";
import Skills from "../components/Skills";
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
        <Skills />
        <ToolBox />
        <Certifications />
      </>
    </Layout>
  );
};

export default Home;
