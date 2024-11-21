import React, { useState } from "react";
import axios from "axios";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Register = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phoneNumber: "", password: "" });

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/students/register", formData);
      alert("Registration Successful!");
    } catch (err) {
      alert("Registration Failed!");
    }
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to top, #000, #434343)",
        color: "white",
      }}
    >
      <Container maxWidth="xs" sx={{ background: "rgba(0, 0, 0, 0.8)", p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          Register
        </Typography>
        <TextField
          fullWidth
          label="Name"
          variant="filled"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          sx={{ mb: 3, input: { color: "white" }, label: { color: "gray" } }}
        />
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          sx={{ mb: 3, input: { color: "white" }, label: { color: "gray" } }}
        />
        <TextField
          fullWidth
          label="Phone Number"
          variant="filled"
          value={formData.phoneNumber}
          onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
          sx={{ mb: 3, input: { color: "white" }, label: { color: "gray" } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="filled"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          sx={{ mb: 3, input: { color: "white" }, label: { color: "gray" } }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleRegister}
          sx={{
            backgroundColor: "#E50914",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "#B20710" },
          }}
        >
          Sign Up
        </Button>
      </Container>
    </Box>
  );
};

export default Register;
