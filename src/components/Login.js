import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from 'axios';

function Login({ handleLogin }) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

  axios.defaults.withCredentials = true;

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', { email, password })
            .then(res => {
                console.log("login: " + res.data);
                if (res.data.Status === "Success") {
                    handleLogin(); // Call the handleLogin function to set isLoggedIn to true
                    if (res.data.role === "admin") {
                        navigate('/dashboard');
                    } else {
                        navigate('/Home'); // Navigate to the Home page after successful login
                    }
                }
            }).catch(err => console.log(err));
    };

  return (
    <Container maxWidth="sm">
      <Paper elevation={3} sx={{ padding: 5, marginTop: 8, marginBottom:10 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            fullWidth
            margin="normal"
            variant="outlined"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box mt={2} mb={2}>
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: '#FF2625', color: '#fff' }}
              fullWidth
            >
              Login
            </Button>
          </Box>
        </form>
        <Typography variant="body2" align="center" fontSize={20}>
          Don't have an account?{" "}
          <Link to="/signup">Sign Up</Link>
        </Typography>
      </Paper>
    </Container>
  );
}

export default Login;

