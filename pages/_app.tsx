import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import NextNProgress from "nextjs-progressbar";
import "../styles/hljs.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <NextNProgress height={2} color="#6320EE" />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
