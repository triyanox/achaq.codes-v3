import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { RiMoonClearFill } from "react-icons/ri";
import { IoMdSunny } from "react-icons/io";

const Toggle = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  return (
    <motion.div whileTap={{ scale: 0.7 }} transition={{ duration: 0.3 }}>
      {mounted && (
        <button
          aria-label="Light Theme"
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="text-black dark:text-white text-xl cursor-pointer active:rotate-90 transition-all duration-500"
        >
          {resolvedTheme === "dark" ? <IoMdSunny /> : <RiMoonClearFill />}
        </button>
      )}
    </motion.div>
  );
};

export default Toggle;
