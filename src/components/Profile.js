import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import { fetchData } from '../utils/fetchData'; 

const Profile = () => {
  const [user, setUser] = useState({});
  const [goals, setGoals] = useState([]);
  const [updatedUser, setUpdatedUser] = useState({});
  const [exercises, setExercises] = useState([]);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetchData(`/api/user/profile/${userId}`);
        setUser(response.data);
        setGoals(response.data.goals || []);
        setUpdatedUser({ ...response.data });
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserData();
  }, [userId]);

  const handleGoalChange = (goal) => {
    const updatedGoals = goals.includes(goal)
      ? goals.filter((g) => g !== goal)
      : [...goals, goal];
    setGoals(updatedGoals);
    setUpdatedUser({ ...updatedUser, goals: updatedGoals });
  };

  const handleUpdateProfile = async () => {
    try {
      // Send updated user data to the server
      await fetchData(`/api/user/profile/${userId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedUser),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      // Optionally, show a success message or redirect to another page
    } catch (error) {
      console.error(error);
    }
  };

  const handleGetExercises = async () => {
    try {
      // Fetch exercises based on user details and goals using a Rapid API endpoint
      const exerciseData = await fetchData(
        // Replace 'YOUR_RAPID_API_ENDPOINT' with the actual Rapid API endpoint URL
        `https://api.example.com/exercises?gender=${updatedUser.gender}&age=${updatedUser.age}&weight=${updatedUser.weight}&height=${updatedUser.height}&goals=${goals.join(',')}`
      );
      setExercises(exerciseData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box p={4}>
      <Typography variant="h4">User Profile</Typography>
      <Box mt={2} mb={2}>
        <TextField
          fullWidth
          label="Name"
          value={updatedUser.name || ''}
          onChange={(e) => setUpdatedUser({ ...updatedUser, name: e.target.value })}
        />
      </Box>
      <Box mt={2} mb={2}>
        <TextField
          fullWidth
          label="Age"
          type="number"
          value={updatedUser.age || ''}
          onChange={(e) => setUpdatedUser({ ...updatedUser, age: e.target.value })}
        />
      </Box>
      <Box mt={2} mb={2}>
        <FormControl fullWidth>
          <InputLabel>Gender</InputLabel>
          <Select
            value={updatedUser.gender || ''}
            onChange={(e) => setUpdatedUser({ ...updatedUser, gender: e.target.value })}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box mt={2} mb={2}>
        <TextField
          fullWidth
          label="Height (cm)"
          type="number"
          value={updatedUser.height || ''}
          onChange={(e) => setUpdatedUser({ ...updatedUser, height: e.target.value })}
        />
      </Box>
      <Box mt={2} mb={2}>
        <TextField
          fullWidth
          label="Weight (kg)"
          type="number"
          value={updatedUser.weight || ''}
          onChange={(e) => setUpdatedUser({ ...updatedUser, weight: e.target.value })}
        />
      </Box>
      <Box mt={2} mb={2}>
        <Typography variant="h6">Select Your Goals:</Typography>
        <FormControlLabel
          control={
            <Checkbox
              checked={goals.includes('Weight Loss')}
              onChange={() => handleGoalChange('Weight Loss')}
            />
          }
          label="Weight Loss"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={goals.includes('Muscle Gain')}
              onChange={() => handleGoalChange('Muscle Gain')}
            />
          }
          label="Muscle Gain"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={goals.includes('Strength Training')}
              onChange={() => handleGoalChange('Strength Training')}
            />
          }
          label="Strength Training"
        />
      </Box>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleUpdateProfile}>
          Update Profile
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: '16px' }}
          component={Link} // Use Link to navigate
          to={`/view-profile/${userId}`} // Navigate to the View Profile page
        >
          View Profile
        </Button>
      </Box>
      {exercises.length > 0 && (
        <Box mt={4}>
          <Typography variant="h5">Recommended Exercises:</Typography>
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise.id}>{exercise.name}</li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Profile;