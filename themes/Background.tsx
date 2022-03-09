import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Background = (props: Props) => {
  return <div className="bg-white dark:bg-black">{props.children}</div>;
};

export default Background;
