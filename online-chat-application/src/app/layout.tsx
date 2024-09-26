import type { Metadata } from "next";
// import localFont from "next/font/local";


import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';

import ThemeRegistry from "@/components/ThemeRegistry";


import { Roboto } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../app/theme/theme';
// import "./globals.css";

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-roboto',
  });

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "TheJunction",
  description: "A simple Online chat App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        
      <body className={` ${roboto.variable}`}>
        <AppRouterCacheProvider>
        <ThemeProvider theme={theme}>
        {children}
        </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
      </ThemeRegistry>
    </html>
  );
}
