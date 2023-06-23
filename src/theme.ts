import { createTheme } from '@mui/material/styles';

// export const theme = {
//   colors: {
//     text: {
//       primary: '#242A37',
//       primaryDark: '#091E3F',
//       secondary: '#F6F7FB',
//       secondaryDark: '#898F9F',
//       placeholder: '#A6ABB9',
//       google: '#707375',
//     },
//     bg: {
//       primary: '#FFFFFF',
//       secondary: '#F5F7FA',
//       decoration: '#E0E5EB',
//       title: '#B1B5C2',
//       accent: '#FF6B08',
//       accentDark: '#F25137',
//       accentSecondary: '#6D7A8D',
//     },
//     transparent: {
//       overlay: 'rgba(43, 43, 43, 0.1)',
//       scroll: 'rgba(177, 181, 194, 0.25)',
//       formBg: 'rgba(9, 30, 63, 0.8)',
//       decoration: 'rgba(36, 42, 55, 0.5)',
//     },
//   },
//   animation: {
//     time: '0.3s',
//     cubic: 'linear',
//   },
//   sizes: {
//     tablet: '768px',
//     desktop: '1280px',
//   },
// };

export const theme = createTheme({
  colors: {
    text: {
      primary: '#242A37',
      primaryDark: '#091E3F',
      secondary: '#F6F7FB',
      secondaryDark: '#898F9F',
      placeholder: '#A6ABB9',
      google: '#707375',
    },
    bg: {
      primary: '#FFFFFF',
      secondary: '#F5F7FA',
      decoration: '#E0E5EB',
      title: '#B1B5C2',
      accent: '#FF6B08',
      accentDark: '#F25137',
      accentSecondary: '#6D7A8D',
    },
    transparent: {
      overlay: 'rgba(43, 43, 43, 0.1)',
      scroll: 'rgba(177, 181, 194, 0.25)',
      formBg: 'rgba(9, 30, 63, 0.8)',
      decoration: 'rgba(36, 42, 55, 0.5)',
    },
  },
  animation: {
    time: '0.3s',
    cubic: 'linear',
  },
  sizes: {
    tablet: '768px',
    desktop: '1280px',
  },
});
