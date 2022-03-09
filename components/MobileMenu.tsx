import Link from "next/link";
import Header from "./Header";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import { motion } from "framer-motion";

function MobileMenu() {
  const { active, setActive } = useContext(ActiveContext);
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={
          active
            ? `w-full z-50 h-screen fixed bg-white dark:bg-black pt-12 flex justify-center items-center flex-col m-0 top-0 bottom-0 overflow-hidden`
            : ` hidden`
        }
      >
        <div className="text-center text-2xl w-full  p-3 mb-8  flex flex-col justify-center   text-black dark:text-white   ">
          <Link href="/">
            <a onClick={() => setActive(active === false ? true : false)}>
              Home
            </a>
          </Link>
        </div>
        <div className="text-center text-2xl  w-full p-3 mb-8   flex flex-col justify-center   text-black dark:text-white">
          <Link href="/projects">
            <a onClick={() => setActive(active === false ? true : false)}>
              Projects
            </a>
          </Link>
        </div>
        <div className="text-center text-2xl  w-full p-3 mb-8    flex flex-col justify-center   text-black dark:text-white">
          <Link href="/contact">
            <a onClick={() => setActive(active === false ? true : false)}>
              Contact
            </a>
          </Link>
        </div>
        <div className="text-center text-2xl  w-full p-3 mb-8    flex flex-col justify-center   text-black dark:text-white">
          <Link href="/blog">
            <a onClick={() => setActive(active === false ? true : false)}>
              Blog
            </a>
          </Link>
        </div>
      </motion.div>
      <Header />
    </>
  );
}

export default MobileMenu;
