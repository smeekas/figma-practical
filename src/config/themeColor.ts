export interface ColorValues {
  primary: string;
  disabledBg: string;
  disabledTextColor: string;
  white: string;
  gray10: string;
  gray100: string;
  gray70: string;
  gray60: string;
  backgroundColor: string;
  gray30: string;
}
export type TypeOfTheme = "Default" | "Dark";
export const CustomTheme: Record<TypeOfTheme, ColorValues> = {
  Default: {
    primary: "#B43FEB",
    disabledBg: "#ECF1F6",
    disabledTextColor: "#9CA4AB",
    white: "#fff",
    gray10: "#F9F9F9",
    gray100: "#171725",
    gray70: "#78828A",
    gray60: "#9CA4AB",
    gray30: "#e3e9ed",
    backgroundColor: "#0D0C0F",
  },
  Dark: {
    primary: "black",
  },
};
