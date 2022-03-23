import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import NextNProgress from "nextjs-progressbar";
import "../styles/hljs.css";
import { motion } from "framer-motion";

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <Fragment>
      <NextNProgress height={2} color="#6320EE" />
      <motion.div
        key={router.route}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.6 }}
        variants={{
          initial: {
            opacity: 0,
          },
          animate: {
            opacity: 1,
          },
        }}
      >
        <Component {...pageProps} />
      </motion.div>
    </Fragment>
  );
}

export default MyApp;
