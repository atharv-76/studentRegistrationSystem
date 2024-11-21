import React from "react";
import { Box, Typography, Button, Grid, Card, CardContent } from "@mui/material";

// Assuming you'll replace this with your actual logo URL
const logoUrl = "https://via.placeholder.com/150"; 

const ParentInteraction = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212", // Dark background for Netflix theme
        color: "white", // White text for contrast
        padding: 3,
      }}
    >
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          marginBottom: 4,
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Parent Interaction Portal
      </Typography>

      {/* Parent Interaction Cards Section */}
      <Grid container spacing={3}>
        {/* Communicate with Teachers */}
        <Grid item xs={12} sm={6} md={4}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Communicate with Teachers
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Send messages to teachers about your child's progress or any concerns.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#E50914", // Netflix red color
                  "&:hover": { backgroundColor: "#B20710" },
                }}
              >
                Message Now
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* View Student Reports */}
        <Grid item xs={12} sm={6} md={4}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                View Student Reports
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Check your child's academic reports and track progress over time.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#E50914", // Netflix red color
                  "&:hover": { backgroundColor: "#B20710" },
                }}
              >
                View Reports
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Schedule Parent-Teacher Meeting */}
        <Grid item xs={12} sm={6} md={4}>
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
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Schedule Parent-Teacher Meeting
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Arrange a meeting with the teacher to discuss your child's performance.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  backgroundColor: "#E50914", // Netflix red color
                  "&:hover": { backgroundColor: "#B20710" },
                }}
              >
                Schedule Meeting
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      
    </Box>
  );
};

export default ParentInteraction;
