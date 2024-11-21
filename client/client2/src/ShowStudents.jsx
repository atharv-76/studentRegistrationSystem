import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, CircularProgress, Grid, Card, CardContent } from "@mui/material";

function ShowStudents() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/students");
        console.log("Fetched Students:", response.data);
        setStudents(response.data);
      } catch (err) {
        console.error("Error fetching students:", err);
        setError("Failed to fetch students.");
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        padding: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{ marginBottom: 4, textAlign: "center", fontWeight: "bold", color: "#E50914" }}
      >
        Registered Students
      </Typography>
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "50vh" }}>
          <CircularProgress color="primary" />
        </Box>
      ) : error ? (
        <Typography variant="h6" color="error" sx={{ textAlign: "center" }}>
          {error}
        </Typography>
      ) : students.length === 0 ? (
        <Typography
          variant="h6"
          sx={{
            textAlign: "center",
            color: "gray",
            marginTop: 4,
            fontStyle: "italic",
          }}
        >
          No students found. Please add some students to view here.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {students.map((student) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={student.id}>
              <Card
                sx={{
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.5)",
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 25px rgba(0, 0, 0, 0.7)",
                  },
                  borderRadius: 2,
                }}
              >
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: "bold", color: "#E50914" }}>
                    {student.name}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    <strong>Email:</strong> {student.email}
                  </Typography>
                  <Typography variant="body2" sx={{ marginTop: 1 }}>
                    <strong>Phone:</strong> {student.phonenumber}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default ShowStudents;
