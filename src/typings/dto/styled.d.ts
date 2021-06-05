import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    borderColor: string;
    colors: {
      primary: string;
      secondary: string;
      black: string;
      white: string;
    };
    fonts: {
      sm: string;
      md: string;
      lg: string;
    };
    spacing: {
      sm: string;
      md: string;
      lg: string;
    };
  }
}
