import { useContext } from "react";
import { ActiveContext } from "./ActiveContext";
import Toggle from "./Toggle";
import { useRouter } from "next/router";
import NextLink from "next/link";
import cn from "classnames";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
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
        <span >{text}</span>
      </a>
    </NextLink>
  );
}

function Header() {
  const { active, setActive } = useContext(ActiveContext);
  return (
    <section className="fixed flex top-0 h-16 items-center py-2 w-full bg-zinc-50 dark:bg-zinc-900 px-8 md:px-24 xl:px-20 z-50 bg-opacity-40 dark:bg-opacity-20 backdrop-filter backdrop-blur-xl">
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
          className="visible lg:hidden text-black dark:text-white text-2xl"
        >
          {!active ? <HiOutlineMenuAlt4 /> : <CgClose />}
        </button>
        <Toggle />
      </nav>
    </section>
  );
}

export default Header;
