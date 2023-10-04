/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import "styled-components";
import { ColorValues, CommonVariables, TypeOfTheme } from "./config/themeColor";
type StyledTheme = ColorValues & CommonVariables & { mode: TypeOfTheme };
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends StyledTheme {}
}
