import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
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
import Profile from './components/Profile';
import ViewProfile from './components/ViewProfile'; // Import the ViewProfile component

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null); // User data for profile page
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    // Navigate to the Home page after successful login
    navigate('/Home');
  };

  useEffect(() => {
    // Fetch user data when the component mounts
    const fetchUserData = async () => {
      try {
        // Send a request to your server to get user data
        const response = await fetch('/api/user/data'); // Replace with the actual endpoint
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, []);

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
        <Route
          path="/profile"
          element={isLoggedIn ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route path="/view-profile/:userId" element={<ViewProfile />} /> {/* Add ViewProfile route */}
      </Routes>
      <Footer />
    </Box>    
  );
}

export default App;
