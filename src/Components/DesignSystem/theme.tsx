import * as React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/system';

const theme = createTheme({
  palette: {
    background: {
      paper: '#fff',
    },
    text: {
      primary: '#173A5E',
      secondary: '#46505A',
    },
    action: {
      active: '#001E3C',
    },
    success: {
      dark: '#009688',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 720,
      lg: 960,
      xl: 1920,
    },
  },
});
export default theme
