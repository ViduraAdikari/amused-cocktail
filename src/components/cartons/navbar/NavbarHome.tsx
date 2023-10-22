import React, {PropsWithChildren} from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from '@mui/icons-material/Menu';
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import ThemeSwitch from "@/components/elements/switch/ThemeSwitch";
import {Theme} from "@mui/material/styles";
import Link from "next/link";
import Logo from "@/components/elements/Logo/Logo";
import {isRoundedBorders, navItems} from "@/const/values";
import {usePathname} from "next/navigation";
import Stack from "@mui/material/Stack";
import {NavItemData} from "@/components/cartons/navbar/nav-item";

const drawerWidth = 240;

type NavbarHomeProps = {
  onThemeChange: (isDarkTheme: boolean) => void
  prefersDarkMode: boolean
}

const NavbarHome: React.FC<NavbarHomeProps> = (props: PropsWithChildren<NavbarHomeProps>) => {
  const {prefersDarkMode} = props;

  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign: 'left'}}>

      <Box sx={{py: 1, px: 2}}>
        <Logo/>
      </Box>

      <Divider/>
      <List sx={{
        px: 1,
        '& a': {
          textDecoration: 'none',
          color: 'inherit',
          '&.active li': {
            bgcolor: (theme: Theme) => theme.palette.secondary.main,
            borderRadius: isRoundedBorders ? '7px' : 0,
            color: (theme: Theme) => theme.palette.common.white,
          },
          '& li span': {
            fontSize: '1.2rem',
            textAlign: 'left',
          }
        }
      }}>
        {navItems.map((item: NavItemData) => (
          <Link key={item.link} href={item.link} className={pathname === item.link ? 'active' : ''} title={item.label}>
            <ListItem disablePadding>
              <ListItemButton sx={{textAlign: 'center'}}>
                <ListItemText primary={item.label}/>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider/>

    </Box>
  );

  return (
    <Box sx={{display: 'flex'}}>
      <AppBar component="nav" position="relative" elevation={0}
              sx={{
                borderRadius: {xs: 0, sm: "25px"},
                bgcolor: 'transparent',
                color: (theme: Theme) => theme.palette.text.primary
              }}>
        <Toolbar sx={{px: {md: 0, sm: 2}}}>

          <Stack direction="row" justifyContent="space-between" alignItems="center"
                 sx={{width: '100%'}}>
            <Stack direction="row" alignItems="center" spacing={5}>
              <Box>
                <Logo/>
              </Box>
              <Box sx={{
                display: {xs: 'none', sm: 'block'},
                mr: 2,
                '& a.active button': {
                  bgcolor: (theme: Theme) => theme.palette.secondary.main,
                  borderRadius: isRoundedBorders ? '7px' : 0,
                  color: (theme: Theme) => theme.palette.common.white,
                },
              }}>
                {navItems.map((item: NavItemData) => (
                  <Link key={item.label} href={item.link} title={item.label}
                        className={pathname === item.link ? 'active' : ''}>
                    <Button
                      sx={{
                        color: (theme: Theme) => theme.palette.text.primary,
                        fontWeight: 500,
                      }}
                    >
                      {item.label}
                    </Button>
                  </Link>
                ))}
              </Box>
            </Stack>

            <Box>
              <ThemeSwitch onChange={props.onThemeChange} defaultChecked={prefersDarkMode}/>
            </Box>

          </Stack>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ml: 0, display: {sm: 'none'}}}
            title="open drawer"
          >
            <MenuIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: {xs: 'block', sm: 'none'},
            '& .MuiDrawer-paper': {boxSizing: 'border-box', width: drawerWidth},
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};


export default NavbarHome;
