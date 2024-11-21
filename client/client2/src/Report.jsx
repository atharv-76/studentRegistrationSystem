import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Report = () => {
  const [marksData, setMarksData] = useState([]);
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    // Demo marks data for four semesters
    const data = [
      { semester: "Semester 1", marks: 65 },
      { semester: "Semester 2", marks: 70 },
      { semester: "Semester 3", marks: 75 },
      { semester: "Semester 4", marks: 85 },
    ];

    setMarksData(data);

    // Analyze progress and provide feedback
    const marksArray = data.map(item => item.marks);
    const progress = marksArray[marksArray.length - 1] - marksArray[0];

    if (progress > 10) {
      setFeedback("The student is showing significant improvement. Keep up the good work!");
    } else if (progress > 0) {
      setFeedback("The student is progressing steadily. A bit more effort can yield excellent results!");
    } else {
      setFeedback("The student needs to focus more on studies to improve performance.");
    }
  }, []);

  // Preparing data for the Line chart
  const chartData = {
    labels: marksData.map(item => item.semester),
    datasets: [
      {
        label: "Marks",
        data: marksData.map(item => item.marks),
        fill: false,
        borderColor: "rgba(229, 9, 20, 1)",
        backgroundColor: "rgba(229, 9, 20, 0.2)",
        tension: 0.2,
      },
    ],
  };

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
        Student Performance Report
      </Typography>

      {/* Chart Section */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", marginBottom: 5 }}>
        <Line data={chartData} />
      </Box>

      {/* Feedback Section */}
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8}>
          <Card
            sx={{
              backgroundColor: "#1e1e1e",
              color: "white",
              padding: 2,
              borderRadius: 2,
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.8)",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ textAlign: "center", fontWeight: "bold", marginBottom: 2 }}>
                Feedback
              </Typography>
              <Typography variant="body1" sx={{ textAlign: "center" }}>
                {feedback}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Report;
