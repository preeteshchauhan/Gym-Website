import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ExerciseDetail from './pages/ExerciseDetail';
import Footer from './components/Footer';
import Signup from './components/Signup'; // Import the Signup component
import Login from './components/Login';   // Import the Login component

const App = () => {
  return (
    <Box width="400px" sx={{ width: { xl: '1488px' }}} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetail />} />
        <Route path="/signup" element={<Signup />} /> {/* Route for Signup */}
        <Route path="/login" element={<Login />} />     {/* Route for Login */}
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
