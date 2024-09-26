'use client';
import { createTheme } from '@mui/material/styles';
// import { Roboto } from 'next/font/google';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// const roboto=Roboto({
//   weight:['300','400','500','700'],
//   subsets:['latin'],
//   display:'swap'
  
// })

const theme = createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ffff00',
    },
  },
});

export default theme;
