import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Button, Box } from '@mui/material';
import logo from '../assets/images/logo.png';

const Navbar = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px="29px"
      mt={{ sm: '32px', xs: '20px' }}
      bgcolor="#ffa9a9"
      py="1px"
      borderRadius={10}
    >
      <Link to="/">
        <img
          src={logo}
          alt="logo"
          style={{
            width: '120px',
            height: '120px',
            margin: '0 10px',
            mixBlendMode: 'multiply',
          }}
        />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        margin="20px 0px"
        fontSize="26px"
        alignItems="flex-end"
        fontFamily={{ lg: 'sans-serif', xs: 'sans-serif' }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: 'none',
            color: 'black',
          }}
        >
          Exercises
        </a>
      </Stack>
      <Stack direction="row" gap="20px">
        <Button
          variant="outlined"
          color="secondary"
          component={Link}
          to="/login"
          style={{ color: '#FF2625' }}
        >
          Login
        </Button>
        <Button
          variant="contained"
          color="secondary"
          component={Link}
          to="/signup" 
          style={{ backgroundColor: '#FF2625', color: '#fff' }}
        >
          Signup
        </Button>
      </Stack>
    </Box>
  );
};

export default Navbar;

