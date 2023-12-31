export interface ColorValues {
  primary: string;
  disabledBg: string;
  disabledTextColor: string;
  // white: string;
  gray10: string;
  gray100: string;
  gray70: string;
  gray60: string;
  backgroundColor: string;
  gray30: string;
  gray40: string;
  // cardWidth: string;
  alert: string;
  cardColor: string;
}
export interface CommonVariables {
  cardWidth: string;
  white: string;
  lightPrimary: string;
  fontWeightSm: string;
  fontWeightMd: string;
  fontWeightLg: string;
  lineHeightXl: string;
  lineHeightL: string;
  lineHeightXm: string;
  lineHeightM: string;
  lineHeightXs: string;
  lineHeightS: string;

  fontSizeXxl: string;
  fontSizeXl: string;
  fontSizeL: string;
  fontSizeXm: string;
  fontSizeM: string;
  fontSizeXs: string;
  fontSizeS: string;

  lightWhite: string;
  gray: string;
}
const commonVariables: CommonVariables = {
  white: "#fff",
  cardWidth: "264px",
  lightPrimary: "#D6A8EC",
  lightWhite: "#F9F9F9",
  gray: "#78828A",
  fontWeightLg: "700",
  fontWeightMd: "600",
  fontWeightSm: "500",

  lineHeightXl: "64px",
  lineHeightL: "48px",
  lineHeightXm: "40px",
  lineHeightM: "28px",
  lineHeightXs: "24px",
  lineHeightS: "20px",

  fontSizeXxl: "56px",
  fontSizeXl: "40px",
  fontSizeL: "32px",
  fontSizeXm: "20px",
  fontSizeM: "16px",
  fontSizeXs: "14px",
  fontSizeS: "12px",
};
export type TypeOfTheme = "Default" | "Dark";
export const CustomTheme: Record<TypeOfTheme, ColorValues & CommonVariables> = {
  Default: {
    primary: "#B43FEB",
    gray100: "#171725",
    gray70: "#78828A",
    gray60: "#9CA4AB",
    gray40: "#d1d8dd",
    gray30: "#e3e9ed",
    gray10: "#F9F9F9",
    backgroundColor: "#FFFFFF",
    disabledBg: "#ECF1F6",
    disabledTextColor: "#9CA4AB",
    alert: "#FFCD1A",
    cardColor: "#e3e9ed",
    ...commonVariables,
  },
  Dark: {
    primary: "#B43FEB",
    gray100: "#F9F9F9",
    gray70: "#d1d8dd",
    gray60: "#BFC6CC",
    gray40: "#78828A",
    gray30: "#66707A",
    gray10: "#171725",
    backgroundColor: "#0D0C0F",
    disabledBg: "#171725",
    disabledTextColor: "#66707A",
    alert: "#FFCD1A",
    cardColor: "#66707A",
    ...commonVariables,
  },
};
