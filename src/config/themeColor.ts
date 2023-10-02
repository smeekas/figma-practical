export interface ColorValues {
  primary: string;
  lightPrimary: string;
  disabledBg: string;
  disabledTextColor: string;
  white: string;
  gray10: string;
  gray100: string;
  gray70: string;
  gray60: string;
  backgroundColor: string;
  gray30: string;
  gray40: string;
  cardWidth: string;
  alert: string;
  cardColor: string;
}
export type TypeOfTheme = "Default" | "Dark";
export const CustomTheme: Record<TypeOfTheme, ColorValues> = {
  Default: {
    primary: "#B43FEB",
    gray100: "#171725",
    gray70: "#78828A",
    gray60: "#9CA4AB",
    gray40: "#d1d8dd",
    gray30: "#e3e9ed",
    gray10: "#F9F9F9",
    lightPrimary: "#D6A8EC",
    backgroundColor: "#FFFFFF",

    disabledBg: "#ECF1F6",
    disabledTextColor: "#9CA4AB",
    white: "#fff",

    cardWidth: "264px",
    alert: "#FFCD1A",
    cardColor: "#e3e9ed",
  },
  Dark: {
    primary: "#B43FEB",
    gray100: "#F9F9F9",
    gray70: "#d1d8dd",
    gray60: "#BFC6CC",
    gray40: "#78828A",
    gray30: "#66707A",
    gray10: "#171725",
    lightPrimary: "#D6A8EC",
    backgroundColor: "#0D0C0F",

    disabledBg: "#171725",
    disabledTextColor: "#66707A",
    white: "#fff",

    cardWidth: "264px",
    alert: "#FFCD1A",
    cardColor: "#66707A",
  },
};
