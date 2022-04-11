import Link from "next/link";
import Header from "./Header";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import { AnimatePresence, motion } from "framer-motion";

function MobileMenu() {
  const { active, setActive } = useContext(ActiveContext);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {active && (
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{
              duration: 0.4,
              dump: 0.8,
              ease: "easeOut",
              stiffness: 100,
              elapsed: 1,
            }}
            className="w-full z-50 h-screen fixed bg-zinc-50 dark:bg-zinc-900 pt-12 flex justify-center items-center flex-col m-0 top-0 bottom-0 overflow-hidden"
          >
            <div className="text-center text-2xl w-full  p-3 mb-8  flex flex-col justify-center   text-black dark:text-white   ">
              <Link href="/">
                <a onClick={() => setActive(false)}>Home</a>
              </Link>
            </div>
            <div className="text-center text-2xl  w-full p-3 mb-8   flex flex-col justify-center   text-black dark:text-white">
              <Link href="/projects">
                <a onClick={() => setActive(false)}>Projects</a>
              </Link>
            </div>
            <div className="text-center text-2xl  w-full p-3 mb-8    flex flex-col justify-center   text-black dark:text-white">
              <Link href="/contact">
                <a onClick={() => setActive(false)}>Contact</a>
              </Link>
            </div>
            <div className="text-center text-2xl  w-full p-3 mb-8    flex flex-col justify-center   text-black dark:text-white">
              <Link href="/blog">
                <a onClick={() => setActive(false)}>Blog</a>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Header />
    </>
  );
}

export default MobileMenu;
