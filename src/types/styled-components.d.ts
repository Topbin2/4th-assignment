import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      black100: string;
      black200: string;
      black300: string;
      black400: string;

      white: string;

      blue: string;

      boxShadow: string;
    };
  }
}
