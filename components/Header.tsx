import Link from "next/link";
import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import Toggle from "./Toggle";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";

interface NavItems {
  href: string;
  text: string;
}

function NavItem({ href, text }: NavItems) {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NextLink href={href}>
      <a
        className={cn(
          isActive
            ? "font-semibold text-[#6E44FF] dark:text-[#EB5160]"
            : "font-normal text-black dark:text-white",
          "hidden md:inline-block p-1 sm:px-3 sm:py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-zinc-800 transition-all"
        )}
      >
        <span className="capsize">{text}</span>
      </a>
    </NextLink>
  );
}

function Header() {
  const { active, setActive } = useContext(ActiveContext);
  return (
    <section className="fixed flex top-0 h-16 items-center py-2 w-full bg-white dark:bg-black px-8 md:px-24 xl:px-20 z-50">
      <nav className=" w-full  flex items-center justify-between flex-row ">
        <div className=" w-full lg:inline-flex  hidden lg:visible text-xl ">
          <NavItem href="/" text="Home" />
          <NavItem href="/projects" text="Projects" />
          <NavItem href="/contact" text="Contact" />
          <NavItem href="/blog" text="Blog" />
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
