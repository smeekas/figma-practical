/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

import "styled-components";
import { ColorValues } from "./config/themeColor";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme extends ColorValues {}
}
