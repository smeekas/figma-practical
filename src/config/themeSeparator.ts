import { ThemeConfig } from "antd";
import { CustomTheme, TypeOfTheme } from "./themeColor";

//for styled component
export const getAllColors = (theme: TypeOfTheme) => {
  return CustomTheme[theme];
};

//for antd
export const getAntdGlobal = (theme: TypeOfTheme): ThemeConfig => {
  const themeData = CustomTheme[theme];
  return {
    token: {
      fontFamily: `'Inter', sans-serif`,
      colorPrimary: themeData.primary,
      colorPrimaryBg: themeData.primary,
      //   fontSize: 14,
    },
    components: {
      Button: {
        // borderRadius: 8,
        // controlHeight: 48,
        // controlHeightSM: 36,
        // controlHeightLG: 56,
        fontWeight: 600,
        colorBorder: themeData.primary,
        colorTextDisabled: themeData.disabledTextColor,
        borderColorDisabled: themeData.disabledBg,
        borderRadius: 20,
        borderRadiusSM: 12,
        borderRadiusLG: 24,
        colorText: themeData.primary,
      },
    },
  };
};
