import React from 'react';
import { Box, Stack, Typography, Link, IconButton, Grid } from '@mui/material';


const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ffa9a9" py="40px">
      <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px">
        <Link href="/about-us">
          <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }}>
            About Us
          </Typography>
        </Link>
        <Link href="/contact-us">
          <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }}>
            Contact Us
          </Typography>
        </Link>
        <Link href="/support">
          <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }}>
            Support
          </Typography>
        </Link>
        <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }}>
          
        </Typography>
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="20px" textAlign="center" pt='10px'>
        Copyright &copy; BStrong
      </Typography>
     
    </Box>
  );
}

export default Footer;

