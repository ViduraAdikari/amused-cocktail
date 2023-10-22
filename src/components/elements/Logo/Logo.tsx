import React from "react";
import {navItems} from "@/const/values";
import Link from "next/link";
import Box from "@mui/material/Box";
import AppLogo from "@/assets/images/Logo.png";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Box sx={{
      '& a': {
        textDecoration: 'none',
        color: 'inherit'
      }
    }}>
      <Link href={navItems[0].link} title="Home">
        <Box sx={{
          '& .logo': {
            width: "35px",
            height: "auto",
            borderRadius: "7px"
          },
          width: "70px",
          height: "70px",
          display: 'flex',
          alignItems: 'center',
          p: 2,
          border: '1px solid #5e5e5e',
          boxShadow: '2px 3px 5px #57575b',
          borderRadius: '50%',
          bgcolor: 'rgb(128,128,129)',
          background: `linear-gradient(110deg, rgba(128,128,129,1) 0%, rgba(223,223,223,1) 31%, 
          rgba(246,247,247,1) 100%)`,

        }}>
          <Image src={AppLogo} alt="App Logo"
                 className="logo"/>
        </Box>
      </Link>
    </Box>
  );
}

export default Logo;
