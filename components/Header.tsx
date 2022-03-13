import Link from "next/link";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import Toggle from "./Toggle";
function Header() {
  const { active, setActive } = useContext(ActiveContext);
  return (
    <section className=" mt-0 fixed h-12 w-full z-50 top-0  ">
      <nav className=" bg-white dark:bg-black  py-3  flex items-center justify-between flex-row mx-4 md:mx-8 lg:mx-6 mt-3 px-4 rounded-full firefox:bg-opacity-70 firefox:dark:bg-opacity-70 bg-opacity-40 dark:bg-opacity-40 backdrop-blur-2xl">
        <div className=" w-full lg:inline-flex  hidden lg:visible text-xl">
          <Link href="/">
            <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8 lg:pb-0  text-black dark:text-white    items-center justify-center active:scale-90 duration-500">
              Home
            </a>
          </Link>
          <Link href="/projects">
            <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8 lg:pb-0  text-black dark:text-white    items-center justify-center active:scale-90 duration-500">
              Projects
            </a>
          </Link>
          <Link href="/contact">
            <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8  lg:pb-0  text-black dark:text-white  items-center justify-center active:scale-90 duration-500">
              Contact
            </a>
          </Link>
          <Link href="/blog">
            <a className="lg:inline-flex lg:w-auto w-full px-3 pb-8  lg:pb-0  text-black dark:text-white  items-center justify-center active:scale-90 duration-500">
              Blog
            </a>
          </Link>
        </div>
        <button
          aria-label="Menu Switch"
          onClick={() => setActive(active === false ? true : false)}
          className="visible lg:hidden text-black dark:text-white "
        >
          {!active ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 active:rotate-90 transition-all duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 active:rotate-90 transition-all duration-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          )}
        </button>
        <Toggle />
      </nav>
    </section>
  );
}

export default Header;
