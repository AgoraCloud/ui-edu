import { createTheme } from '@material-ui/core/styles';

// https://material-ui.com/customization/default-theme/
// https://www.youtube.com/watch?v=bDkB3LoQKxs
// https://github.com/bmvantunes/youtube-2020-june-material-ui-themes/blob/master/src/theme.tsx

export const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#4dabf5',
      dark: '#1769aa',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff9100',
      light: '#ffa733',
      dark: '#b26500',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiAvatar: {
      root: {
        backgroundColor: '#ff9100',
      },
    },
    MuiButton: {
      root: {
        margin: '20px',
      },
    },
  },
});
