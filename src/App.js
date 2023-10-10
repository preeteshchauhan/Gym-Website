import React, { useState } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'; // Import useNavigate
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Signup from './components/Signup';
import Login from './components/Login';
import HeroBanner from './components/HeroBanner';
import BMICalculator from './components/BMICalculator';
import AboutUs from './components/AboutUs';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate(); // Use useNavigate to get the navigation function

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Navigate to the Home page after successful login
    navigate('/Home');
  };

  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/Home" /> : <HeroBanner handleLogin={handleLogin} />} />
        <Route path="/Home" element={isLoggedIn ? <Home /> : <Navigate to="/" />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/calculate-bmi" element={<BMICalculator />} />
        <Route path="/about-us" component={AboutUs} />
      </Routes>
      <Footer />
    </Box>    
  );
}

export default App;
