import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { ThemeContext } from "../themes/ThemeContext";
import { ReactNode, useContext } from "react";
import duotoneSea from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-sea";
import duotoneLight from "react-syntax-highlighter/dist/cjs/styles/prism/duotone-light";

interface Props {
  language: string;
  children: ReactNode;
}

const Highlighter = (props: Props) => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <SyntaxHighlighter
      language={props.language}
      style={theme === "dark" ? duotoneSea : duotoneLight}
    >
      {props.children}
    </SyntaxHighlighter>
  );
};
export default Highlighter;
