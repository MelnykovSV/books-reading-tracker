import '@mui/material/styles';
// import { ITheme } from './src/interfaces';

declare module '@mui/material/styles' {
  interface ITheme {
    colors: {
      text: {
        primary: string;
        primaryDark: string;
        secondary: string;
        secondaryDark: string;
        placeholder: string;
        google: string;
      };
      bg: {
        primary: string;
        secondary: string;
        decoration: string;
        title: string;
        accent: string;
        accentDark: string;
        accentSecondary: string;
      };
      transparent: {
        overlay: string;
        scroll: string;
        formBg: string;
        decoration: string;
      };
    };
    animation: {
      time: string;
      cubic: string;
    };
    sizes: {
      tablet: string;
      desktop: string;
    };
  }

  // allow configuration using `createTheme`
  interface ITheme extends ThemeOptions {}
  export function createTheme(options?: ITheme): CustomTheme;
}
