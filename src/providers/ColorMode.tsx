import React, { createContext, useContext, useState } from "react";
import { TypeOfTheme } from "../config/themeColor";
const colorCtx = createContext<{
  mode: TypeOfTheme;
  setMode: (mode: TypeOfTheme) => void;
}>({
  mode: "Default",
  setMode: () => {},
});
function ColorMode({ children }: { children: React.ReactElement }) {
  const [mode, setMode] = useState<TypeOfTheme>("Default");

  const modeChangeHandler = (mode: TypeOfTheme) => {
    setMode(mode);
  };
  return (
    <colorCtx.Provider value={{ mode, setMode: modeChangeHandler }}>
      {children}
    </colorCtx.Provider>
  );
}

export default ColorMode;

export const useColorMode = () => useContext(colorCtx);
