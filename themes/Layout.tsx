import Head from "next/head";
import Header from "../components/Header";
import Background from "./Background";
import { ThemeProvider } from "./ThemeContext";
import { ActiveProvider } from "../components/ActiveContext";
import { ParallaxProvider } from "react-scroll-parallax";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";
import { ReactNode } from "react";
const Layout = (props: {
  pageTitle: string;
  siteName: string;
  description: string;
  children: ReactNode;
  preview: string;
}) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="robots" content="follow, index" />
        <title>{props.pageTitle}</title>
        <meta
          name="description"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta name="author" content="Mohamed Achaq" />
        <meta
          property="og:site_name"
          content={props.siteName}
          key="ogsitename"
        />
        <meta property="og:title" content={props.pageTitle} key="ogtitle" />
        <meta
          property="og:description"
          content={props.description}
          key="ogdesc"
        />
        <meta
          name="keywords"
          content="Mohamed Achaq, HTML, CSS, JavaScript, React, Typescript, NodeJs, Python"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://achaq.codes/" />
        <meta
          property="og:title"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta
          property="og:description"
          content="Full Stack Developer Based In Morocco"
        />
        <meta
          property="og:image"
          content={`https://achaq.codes/previews/${props.preview}.png`}
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://achaq.codes/" />
        <meta
          property="twitter:title"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta property="twitter:site" content="@ac__haq" />
        <meta
          property="twitter:description"
          content="Mohamed Achaq - Developer, UI/UX designer and Artist"
        />
        <meta
          property="twitter:image"
          content={`https://achaq.codes/previews/${props.preview}.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicons/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
       
      </Head>

      <ThemeProvider>
        <Background>
          <ActiveProvider>
            <ParallaxProvider>
              <Header />
              {props.children}
              <MobileMenu />
              <Footer />
            </ParallaxProvider>
          </ActiveProvider>
        </Background>
      </ThemeProvider>
    </>
  );
};
export default Layout;
