// declare module '@emotion/react' {
//   export interface Theme {
//     colors: {
//       text: {
//         primary: string;
//         primaryDark: string;
//         secondary: string;
//         secondaryDark: string;
//         placeholder: string;
//         google: string;
//       };
//       bg: {
//         primary: string;
//         secondary: string;
//         decoration: string;
//         title: string;
//         accent: string;
//         accentDark: string;
//         accentSecondary: string;
//       };
//       transparent: {
//         overlay: string;
//         scroll: string;
//         formBg: string;
//         decoration: string;
//       };
//     };
//     animation: {
//       time: string;
//       cubic: string;
//     };
//   }
// }

import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
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
  }
}
