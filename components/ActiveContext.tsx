import { useState, createContext, ReactNode } from "react";

type ActiveContext = { active: boolean; setActive: (active: boolean) => void };

export const ActiveContext = createContext<ActiveContext>({} as ActiveContext);
interface Props {
  children: ReactNode;
}
export const ActiveProvider = ({ children }: Props) => {
  const [active, setActive] = useState(false);
  return (
    <ActiveContext.Provider value={{ active, setActive }}>
      {children}
    </ActiveContext.Provider>
  );
};
