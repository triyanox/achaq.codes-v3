import { useRef, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { HiClipboardCopy } from "react-icons/hi";
interface CodeBlockProps {
  children: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);

  function copy() {
    const content = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(content);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  }

  return (
    <div className="code-block">
      <pre ref={preRef}>
        {children}

        <button
          onClick={copy}
          className="copy hover:scale-125 transition-all duration-200"
        >
          {isCopied ? (
            <span className="group text-green-600 dark:text-green-500 text-2xl active:text-[#6E44FF] active:dark:text-[#EB5160] transition-all duration-200">
              <BsCheck2Circle />
              <span
                className="absolute w-auto p-2 m-2 min-w-max -right-8 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
              >
                Copied 🎉
              </span>
            </span>
          ) : (
            <span className="group text-black dark:text-white text-2xl active:text-[#6E44FF] active:dark:text-[#EB5160] transition-all duration-200">
              <HiClipboardCopy />
              <span
                className="absolute w-auto p-2 m-2 min-w-max -right-8 rounded-md shadow-md
                    text-white bg-black  dark:bg-white dark:text-black 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-top group-hover:scale-100"
              >
                Copy Me 🚀
              </span>
            </span>
          )}
        </button>
      </pre>

      <style jsx>
        {`
          .code-block {
            position: relative;
          }

          .copy {
            cursor: pointer;
            position: absolute;
            top: 15px;
            right: 10px;
            font-size: 1rem;
            background: none;
            border-radius: var(--border-base);
            border: none;
            transition: transform 0.1s ease;
          }

          .copy:active {
            transform: scale(0.9);
          }
        `}
      </style>
    </div>
  );
}
