import React, { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogContent } from '@mui/material';
import HeroBannerImage from '../assets/images/banner3.jpg';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const HeroBanner = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add a state variable to track login status

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  // Use useNavigate to get the navigation function
  const navigate = useNavigate();

  // Navigate to the login page when the "Login" button is clicked
  const handleLogin = () => {
    navigate('/login');
    closeDialog(); // Close the dialog
  };

  // Navigate to the BMI Calculator page when the "Calculate BMI" button is clicked
  const handleCalculateBMI = () => {
    navigate('/calculate-bmi');
  };

  return (
    <Box
      sx={{
        mt: { lg: '212px', xs: '70px' },
        ml: { sm: '50px' },
      }}
      position="relative"
      p="10px"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="35px">
        BStrong
      </Typography>
      <Typography
        fontWeight="600"
        sx={{ fontSize: { lg: '30px', xs: '35px' } }}
        mb="23px"
        mt="30px"
      >
        Sweat, Build <br /> and Repeat
      </Typography>
      <Typography color="#212121" fontSize="25px" lineHeight="35px" mb={4}>
        Checkout the most effective exercises
      </Typography>
      {isLoggedIn ? (
        <Button
          variant="contained"
          color="error"
          sx={{ backgroundColor: '#ff2625', padding: '10px' }}
        >
          Explore Exercises
        </Button>
      ) : (
        <Button
          variant="contained"
          color="error"
          onClick={openDialog} // Open the dialog when the button is clicked
          sx={{ backgroundColor: '#ff2625', padding: '10px' }}
        >
          Explore Exercises
        </Button>
      )}

      {/* Calculate BMI button */}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleCalculateBMI} // Navigate to the BMI Calculator page
        sx={{ backgroundColor: '#FF2625', padding: '10px', marginLeft: '10px' }}
      >
        Calculate BMI
      </Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.2,
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize="200px"
        pt="40px"
      >
        Exercise
      </Typography>
      <img
        src={HeroBannerImage}
        alt="banner"
        className="hero-banner-img"
        style={{
          width: '80%',
          maxWidth: '40%',
          maxHeight: '700px',
          margin: '1px auto',
        }}
      />

      {/* Login dialog */}
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogContent>
          <Typography variant="h5" mb={2}>
            Please login to explore the exercises.
          </Typography>
          <Button
            variant="contained"
            color="error"
            onClick={handleLogin} // Navigate to the login page
            sx={{ backgroundColor: '#ff2625', padding: '10px' }}
          >
            Login
          </Button>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default HeroBanner;

