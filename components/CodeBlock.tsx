import { useEffect, useRef, useState } from "react";
import { BsCheck2Circle } from "react-icons/bs";
import { HiClipboardCopy } from "react-icons/hi";
interface CodeBlockProps {
  children: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);
  const [isCopied, setIsCopied] = useState<boolean>(false);
  useEffect(() => {
    setIsCopied(false);
  }, []);
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
            <span className=" text-green-600 dark:text-green-500 text-2xl active:text-[#6E44FF] active:dark:text-[#EB5160] transition-all duration-200">
              <BsCheck2Circle />
            </span>
          ) : (
            <span className=" text-black dark:text-white text-2xl active:text-[#6E44FF] active:dark:text-[#EB5160] transition-all duration-200">
              <HiClipboardCopy />
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
