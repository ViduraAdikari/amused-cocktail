import React, {PropsWithChildren} from 'react';
import Stack from "@mui/material/Stack";
import Image from "next/image";
import Logo from "@/assets/images/Logo.png";
import Link from "next/link";
import ThemeSwitch from "@/components/elements/switch/ThemeSwitch";
import Box from "@mui/material/Box";
import {Paper} from "@mui/material";

type CustomProviderNavBarProps = {
  onThemeChange: (isDarkTheme: boolean) => void
  prefersDarkMode: boolean
}

const CustomProviderNavBar: React.FC<CustomProviderNavBarProps> =
  (props: PropsWithChildren<CustomProviderNavBarProps>) => {

    const {prefersDarkMode} = props;

    return (
      <Paper elevation={5} sx={{
        borderRadius: "15px",
      }}>
        <Stack direction='row'
               sx={{
                 justifyContent: 'space-between',
                 paddingBottom: '.5em',
                 // backgroundColor: grey[300],

               }}>

          <Stack sx={{
            pl: {md: 4, xs: 3},
            justifyContent: 'center',
            '& a': {
              lineHeight: 1
            }
          }}>
            <Link href="/">
              <Box sx={{
                '& .logo': {
                  width: "120px",
                  height: "auto",
                  mt: 1,
                  borderRadius: "7px"
                }
              }}>
                <Image src={Logo} alt="App Logo" className="logo"/>
              </Box>
            </Link>
          </Stack>
          <ThemeSwitch onChange={props.onThemeChange} defaultChecked={prefersDarkMode}/>
        </Stack>
      </Paper>
    )
  };

export default CustomProviderNavBar;
