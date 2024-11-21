import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { Box, Typography, useTheme } from "@mui/material";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

// Registering chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StudentAttendance = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    // Fetch attendance data from the backend
    const fetchAttendanceData = async () => {
      try {
        // Example static data, replace with API call
        const data = [
          { date: "2024-11-01", attendance: 85 },
          { date: "2024-11-02", attendance: 90 },
          { date: "2024-11-03", attendance: 95 },
          { date: "2024-11-04", attendance: 80 },
          { date: "2024-11-05", attendance: 88 },
          { date: "2024-11-06", attendance: 92 },
          { date: "2024-11-07", attendance: 85 },
        ];

        setAttendanceData(data);
      } catch (err) {
        console.error("Error fetching attendance data:", err);
      }
    };

    fetchAttendanceData();
  }, []);

  // Preparing data for the Line chart
  const chartData = {
    labels: attendanceData.map(item => item.date),
    datasets: [
      {
        label: "Attendance Percentage",
        data: attendanceData.map(item => item.attendance),
        fill: false,
        borderColor: "#E50914", // Netflix red color
        tension: 0.1,
      },
    ],
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#121212", // Dark background matching Netflix theme
        color: "white", // White text for contrast
        padding: 3,
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 4, textAlign: "center", fontWeight: "bold" }}>
        Student Attendance Chart
      </Typography>

      {/* Render the chart */}
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Line data={chartData} />
      </Box>
    </Box>
  );
};

export default StudentAttendance;
