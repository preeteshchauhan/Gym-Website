import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import axios from "axios";

function Signup({ handleLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  axios.defaults.withCredentials = true;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((res) => {
        if (res.data.Status === "Success") {
          handleLogin();
          navigate("/Home");
        }
      })
      .catch((err) => {
        setErrorMessage("Registration failed. Please try again.");
        console.error(err);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="80vh"
  
    >
      <Box
        bgcolor="white"
        p={3}
        borderRadius={0}
        width="40%"
        textAlign="center"
        boxShadow={3}
      >
        <Typography variant="h4" gutterBottom>
          Register
        </Typography>
        {errorMessage && (
          <Typography variant="body2" color="error" gutterBottom>
            {errorMessage}
          </Typography>
        )}
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: "16px",  backgroundColor: '#FF2625', color: '#fff' }}
          >
            Register
          </Button>
        </form>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            variant="outlined"
            color="primary"
            fullWidth
            style={{ marginTop: "16px" }}
          >
            Login
          </Button>
        </Link>
      </Box>
    </Box>
  );
}

export default Signup;
