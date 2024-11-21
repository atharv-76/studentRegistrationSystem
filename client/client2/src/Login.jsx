import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/students/login", { email, password });
      localStorage.setItem("user", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (err) {
      alert("Invalid email or password");
    }
  };

  const handleShowStudents = () => {
    navigate("/ShowStudents");
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Container maxWidth="xs" sx={{ background: "rgba(0, 0, 0, 0.8)", p: 4, borderRadius: 2 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold", textAlign: "center" }}>
          Sign In
        </Typography>
        <TextField
          fullWidth
          label="Email"
          variant="filled"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 3, input: { color: "white" }, label: { color: "gray" } }}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          variant="filled"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ mb: 3, input: { color: "white" }, label: { color: "gray" } }}
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={handleLogin}
          sx={{
            backgroundColor: "#E50914",
            fontWeight: "bold",
            mb: 2,
            "&:hover": { backgroundColor: "#B20710" },
          }}
        >
          Sign In
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          fullWidth
          onClick = {() => navigate("/students")}
          sx={{
            color: "white",
            borderColor: "white",
            "&:hover": { borderColor: "#E50914", color: "#E50914" },
          }}
        >
          Show Students
        </Button>
        <Typography variant="body2" sx={{ mt: 2, textAlign: "center" }}>
          New Student?{" "}
          <span
            style={{ color: "#E50914", cursor: "pointer" }}
            onClick={() => navigate("/register")}
          >
            Sign up now.
          </span>
        </Typography>
      </Container>
    </Box>
  );
};

export default Login;
