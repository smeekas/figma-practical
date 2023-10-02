/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import "styled-components";
import { ColorValues, CommonVariables } from "./config/themeColor";
type StyledTheme = ColorValues & CommonVariables;
// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends StyledTheme {}
}
