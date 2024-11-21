import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Box, Button, Grid, Card, CardContent, Menu, MenuItem } from "@mui/material";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (!loggedUser) {
      navigate("/");
    } else {
      setUser(loggedUser);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const navigateToAttendance = () => {
    navigate("/studentAttendance");  // Adjusted the path to /studentAttendance
  };

  return (
    <Box
      sx={{
        backgroundColor: "#121212", // Dark background
        minHeight: "100vh",
        color: "white",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* App Bar */}
      <AppBar position="static" sx={{ backgroundColor: "#E50914" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: "bold" }}>
            Dashboard
          </Typography>
          <Button color="inherit" onClick={handleMenuOpen}>
            Hello, {user ? user.name : "Guest"}
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Welcome Section */}
      <Box
        sx={{
          textAlign: "center",
          mt: 4,
          backgroundColor: "#1e1e1e",
          py: 3,
          borderRadius: 2,
          mx: 3,
        }}
      >
        {user && (
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Hello, {user.name}!
          </Typography>
        )}
        <Typography variant="body1">Welcome to your personalized dashboard.</Typography>
      </Box>

      {/* Features Section */}
      <Box sx={{ mt: 5, px: 3 }}>
        <Grid container spacing={3}>
          {/* View Attendance */}
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
                  View Attendance
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Check your attendance records and ensure regularity.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#E50914",
                    "&:hover": { backgroundColor: "#B20710" },
                  }}
                  onClick={navigateToAttendance}
                >
                  View Now
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Reports */}
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
                  Reports
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Access detailed reports of your performance.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#E50914",
                    "&:hover": { backgroundColor: "#B20710" },
                  }}
                  onClick={() => navigate("/reports")}
                >
                  View Reports
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Extra-Curricular Activities */}
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
                  Extra-Curricular Activities
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Explore and join various clubs and activities.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#E50914",
                    "&:hover": { backgroundColor: "#B20710" },
                  }}
                  onClick={() => navigate("/extra-curricular")}
                >
                  Explore Activities
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Live Classes */}
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
                  Live Classes
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Join live sessions and interact with your instructors.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#E50914",
                    "&:hover": { backgroundColor: "#B20710" },
                  }}
                  onClick={() => navigate("/live-classes")}
                >
                  Join Now
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Parent Interaction */}
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
                  Parent Interaction
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Communicate and share updates with parents.
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    mt: 2,
                    backgroundColor: "#E50914",
                    "&:hover": { backgroundColor: "#B20710" },
                  }}
                  onClick={() => navigate("/parent-interaction")}
                >
                  Interact Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Dashboard;
