import { useRef } from "react";
import { HiClipboardCopy } from "react-icons/hi";
interface CodeBlockProps {
  children: React.ReactNode;
}

export default function CodeBlock({ children }: CodeBlockProps) {
  const preRef = useRef<HTMLPreElement>(null);

  function copy() {
    const content = preRef.current?.textContent ?? "";
    navigator.clipboard.writeText(content);
  }

  return (
    <div className="code-block">
      <pre ref={preRef}>
        {children}

        <button
          onClick={copy}
          className="copy hover:scale-125 transition-all duration-200"
        >
          <span className=" text-black dark:text-white text-2xl active:text-[#6E44FF] active:dark:text-[#EB5160] transition-all duration-200">
            <HiClipboardCopy />
          </span>
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
