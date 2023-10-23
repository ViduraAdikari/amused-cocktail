"use client"

import {Montserrat} from 'next/font/google'
import {NextFont} from "next/dist/compiled/@next/font";
import {Theme, ThemeProvider} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import React, {useState} from "react";
import {getTheme} from "@/util/theme/Theme";
import NavbarHome from "@/components/cartons/navbar/NavbarHome";
import {Provider} from "react-redux";
import {store} from "@/store";

const roboto: NextFont = Montserrat({
  subsets: ["latin"],
  weight: ['300', "400", "500", "600", "700"],
})

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {

  const [isDark, setIsDark] = useState(true);

  const handleOnThemeChange = (isDarkTheme: boolean) => {
    setIsDark(isDarkTheme);
  }

  const theme: Theme = React.useMemo(() => {
    return getTheme(isDark ? 'dark' : 'light');
  }, [isDark]);

  return (
    <html lang="en">
    <body className={roboto.className}>

    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Container maxWidth="lg" sx={{
          px: {xs: 2, sm: 2, lg: 1}
        }}>

          <header>
            <Box sx={{
              mt: {xs: 0, sm: 4},
            }}>
              <NavbarHome onThemeChange={handleOnThemeChange} prefersDarkMode={isDark}/>
            </Box>
          </header>
          <main>{children}</main>
        </Container>
      </ThemeProvider>
    </Provider>

    </body>
    </html>
  )
}
