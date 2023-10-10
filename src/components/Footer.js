import React from 'react';
import { Box, Stack, Typography, Link, IconButton, Grid } from '@mui/material';

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#ffa9a9" py="40px">
      <Stack
        direction="row" // Set the direction to "row" for horizontal alignment
        gap="40px"
        sx={{ alignItems: 'center' }}
        flexWrap="wrap"
        justifyContent="center" // Center the items horizontally
        // px="40px"
        // display= "400px"
        margin-left="0px"
      >
        <Link href="/aboutus">
          <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" color={'black'}>
            About Us
          </Typography>
        </Link>
        <Link href="/contact-us">
          <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" color={'black'}>
            Contact Us
          </Typography>
        </Link>
        <Link href="/support">
          <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' } }} textAlign="center" color={'black'}>
            Support
          </Typography>
        </Link>
      </Stack>
      <Typography variant="h5" sx={{ fontSize: { lg: '18px', xs: '20px' } }} mt="20px" textAlign="center" pt="10px">
        Copyright &copy; BStrong
      </Typography>
    </Box>
  );
};

export default Footer;