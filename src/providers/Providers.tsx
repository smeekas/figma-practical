import { ConfigProvider } from "antd";
import { ThemeProvider } from "styled-components";
import { useColorMode } from "./ColorMode";
import { getAllColors, getAntdGlobal } from "../config/themeSeparator";

export const Providers = ({ children }: { children: React.ReactElement }) => {
  const theme = useColorMode();
  return (
    <ConfigProvider theme={getAntdGlobal(theme.mode)}>
      <ThemeProvider theme={{ mode: theme.mode, ...getAllColors(theme.mode) }}>
        {children}
      </ThemeProvider>
    </ConfigProvider>
  );
};
