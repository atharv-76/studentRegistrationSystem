import React, { useState } from "react";
import { Box, Typography, Grid, Card, CardContent, Button } from "@mui/material";

const LiveClass = () => {
  const [subjects, setSubjects] = useState([
    { name: "Mathematics", homework: true },
    { name: "Science", homework: false },
    { name: "English", homework: true },
    { name: "Hindi", homework: false },
    { name: "Marathi", homework: true },
    { name: "History", homework: false },
    { name: "Geography", homework: true },
  ]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212",
        color: "white",
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: "center", fontWeight: "bold" }}>
        Live Classes and Homework
      </Typography>

      <Grid container spacing={3}>
        {subjects.map((subject, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card
              sx={{
                backgroundColor: "#1e1e1e",
                color: "white",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold", textAlign: "center" }}>
                  {subject.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginTop: 2,
                    textAlign: "center",
                    color: subject.homework ? "#E50914" : "lightgreen",
                    fontWeight: "bold",
                  }}
                >
                  {subject.homework ? "Homework Assigned" : "No Homework"}
                </Typography>
                <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#E50914",
                      "&:hover": { backgroundColor: "#B20710" },
                    }}
                  >
                    Join Live Class
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LiveClass;
