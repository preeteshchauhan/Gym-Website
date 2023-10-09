import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import './BMICalculator.css'; // Import the CSS file

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiResult, setBMIResult] = useState(null);

  const calculateBMI = () => {
    // Perform BMI calculation logic
    const weightInKg = parseFloat(weight);
    const heightInM = parseFloat(height) / 100; // Convert height to meters
    const bmi = weightInKg / (heightInM * heightInM);
    setBMIResult(bmi.toFixed(2)); // Round BMI to 2 decimal places
  };

  return (
    <Box className="bmi-container">
      <Typography variant="h4" sx={{ marginBottom: '20px', color: '#FF2625' }}>
        BMI Calculator
      </Typography>
      <TextField
        label="Weight (kg)"
        variant="outlined"
        type="number"
        value={weight}
        onChange={(e) => setWeight(e.target.value)}
        sx={{ marginBottom: '10px' }}
      />
      <TextField
        label="Height (cm)"
        variant="outlined"
        type="number"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
        sx={{ marginBottom: '10px' }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={calculateBMI}
        sx={{ backgroundColor: '#FF2625', color: '#fff', marginBottom: '10px' }}
      >
        Calculate BMI
      </Button>
      {bmiResult !== null && (
        <Typography variant="h5" className="bmi-result" sx={{ color: '#FF2625' }}>
          Your BMI: {bmiResult}
        </Typography>
      )}
    </Box>
  );
};

export default BMICalculator;
