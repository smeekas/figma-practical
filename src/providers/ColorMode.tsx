import React, { createContext, useContext, useState } from "react";
import { TypeOfTheme } from "../config/themeColor";
const colorCtx = createContext<{
  mode: TypeOfTheme;
  setMode: () => void;
}>({
  mode: "Default",
  setMode: () => {},
});
function ColorMode({ children }: { children: React.ReactElement }) {
  const [mode, setMode] = useState<TypeOfTheme>("Default");

  const modeChangeHandler = () => {
    setMode((prevMode) => {
      if (prevMode == "Dark") {
        return "Default";
      }
      return "Dark";
    });
  };
  return (
    <colorCtx.Provider value={{ mode, setMode: modeChangeHandler }}>
      {children}
    </colorCtx.Provider>
  );
}

export default ColorMode;

export const useColorMode = () => useContext(colorCtx);
