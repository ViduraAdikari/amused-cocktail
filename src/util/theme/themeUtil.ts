import {Theme} from "@mui/material/styles";
import {blueGrey, grey} from "@mui/material/colors";

const makeResponsive = (theme: Theme): Theme => {
  theme.typography.h1 = {
    fontSize: '2.2rem',
    [theme.breakpoints.down("lg")]: {
      fontSize: '2rem'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: '1.8rem'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.5rem',
      fontWeight: 500
    },
    fontWeight: 600
  }

  theme.typography.h2 = {
    fontSize: '1.8rem',
    fontWeight: 400,
    [theme.breakpoints.down("lg")]: {
      fontSize: '1.6rem'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: '1.3rem'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.1rem',
    },
    color: theme.palette.mode === 'light' ? blueGrey[400] : grey[500],
  }

  theme.typography.h3 = {
    fontSize: '1.5rem',
    [theme.breakpoints.down("lg")]: {
      fontSize: '1.4rem'
    },
    [theme.breakpoints.down("md")]: {
      fontSize: '1.3rem'
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '1.1rem',
    },
    fontWeight: 600,
    marginTop: '2rem',
    color: theme.palette.mode === 'light' ? grey[800] : grey[50],
  }

  theme.typography.body1 = {
    fontSize: '1rem',
    [theme.breakpoints.down("lg")]: {
      fontSize: '1rem',
    },
    [theme.breakpoints.down("md")]: {
      fontSize: '.9rem',
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: '.7rem',
    },
    fontWeight: 400,
  }

  theme.typography.body2 = {
    fontWeight: 400,
    color: theme.palette.mode === 'light' ? grey[900]: grey[200],
    lineHeight: 1,
    fontSize: '.9rem',
  }

  return theme;
}

export {makeResponsive};
