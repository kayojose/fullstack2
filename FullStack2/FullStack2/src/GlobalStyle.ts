import { createGlobalStyle } from "styled-components";

export const colors = {
  primary: "#eb6625",
  secondary: "#D5CCFF",
  white: "#FFFFFF",
  black: "#000",
  lightBlack: "#202020",
  grey: "#999999",
  lightGrey: "#F6F6F6",
  lightGrey2: "#FAFAFA",
  darkGrey: "#808080",
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  body {
    background-color: ${ colors.lightGrey };
  }
`;