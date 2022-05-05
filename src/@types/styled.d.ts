import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme extends CustomTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      background: string;
      text: string;
    };
  }
}
