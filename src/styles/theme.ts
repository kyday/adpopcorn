import { DefaultTheme } from "styled-components";

const colors = {
  black: "#000",
  blue: "#0000ff",
  limeGreen: "#82ca9d",
  lightGray: "#fafafa",
};

export type ColorsTypes = typeof colors;

export const theme: DefaultTheme = {
  colors,
};
