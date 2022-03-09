import type { NextPage } from "next";
import React from "react";
import ContactForm from "../components/Contact";
import Layout from "../themes/Layout";
const ContactPage: NextPage = () => {
  return (
    <Layout
      pageTitle="Contact - Mohamed Achaq"
      siteName="achaq.codes"
      description="Full Stack Developer"
      preview="contact"
    >
      <ContactForm />
    </Layout>
  );
};

export default ContactPage;
