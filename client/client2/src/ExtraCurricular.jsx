import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ExtraCurricular = () => {
  // Data for the graphs
  const activitiesData = [
    {
      name: "Drawing",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Participation",
            data: [10, 15, 20, 18, 22],
            backgroundColor: "rgba(229, 9, 20, 0.8)",
          },
        ],
      },
    },
    {
      name: "Sports",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Participation",
            data: [25, 30, 28, 35, 40],
            backgroundColor: "rgba(34, 139, 34, 0.8)",
          },
        ],
      },
    },
    {
      name: "Public Speaking",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Participation",
            data: [5, 10, 8, 12, 15],
            backgroundColor: "rgba(30, 144, 255, 0.8)",
          },
        ],
      },
    },
  ];

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
        Extra-Curricular Activities
      </Typography>

      <Grid container spacing={3}>
        {activitiesData.map((activity, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                backgroundColor: "#1e1e1e",
                padding: 2,
                borderRadius: 2,
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
              }}
            >
              <Typography variant="h6" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}>
                {activity.name}
              </Typography>
              <Bar data={activity.data} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExtraCurricular;
