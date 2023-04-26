import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import logo from '../images/logo.png';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isDefault = useMediaQuery({ query: '(min-width: 768px)' });

  return (
  <Stack
    direction="row"
    sx={{
      gap: { sm: '123px', xs: '40px' },
      mt: { sm: '32px', xs: '20px' },
      px: { sm: '40px', xs: '20px' },
      justifyContent: 'space-between',
    }}
  >
    
    <Link to="/">
    {isMobile && <img src={logo} alt="logo" height={40} />}
    {isDefault && <img src={logo} alt="logo" height={60} />}
    </Link>
    <Stack
      direction="row"
      sx={{ gap: { sm: '40px', xs: '20px' }, fontSize: { sm: '36px', xs: '24px' } }}
      fontFamily="Alegreya"
      alignItems="center"
    >
      <Link
        to="/"
        className="navbar__link"
      >
        Home
      </Link>
      <a href="#exercises" className="navbar__link">
        Exercises
      </a>
    </Stack>
  </Stack>)
};

export default Navbar;
