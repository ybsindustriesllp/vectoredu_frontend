import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Alert,
  Modal,
} from "@mui/material";
import {
  FaTasks,
  FaAward,
  FaCertificate,
  FaCode,
  FaBug,
  FaMedal,
} from "react-icons/fa";
import CircularProgressGauge from "../../components/Shared/CircularProgressGauge.jsx";

export default function Dashboard() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [openTeamModal, setOpenTeamModal] = useState(false);

  useEffect(() => {
    const isAuth = localStorage.getItem("auth");
    if (!isAuth) {
      window.location.href = "/login";
    }
  }, []);


  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <Navbar />
      <Box sx={{ p: 2 }}>
        {showWelcome && (
          <div style={{ paddingBottom: "1rem" }}>
            <Alert severity="success">
              Welcome back, Alex! Here's your progress overview.
            </Alert>
          </div>
        )}

        {/* 🧩 Top Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 3,
            mb: 4,
          }}
        >
          {/* Current Progress */}
          <Card elevation={4} sx={{ flex: "1 1 0", minWidth: 300 }}>
            <CardHeader title="Current Progress" />
            <CardContent>
              <Box sx={{ textAlign: "center", my: 1 }}>
                <CircularProgressGauge value={75} color="#f44336" />
              </Box>
              <Typography variant="body2" color="text.secondary">
                Sprint 3 - Development Phase
              </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
              <Button variant="contained" color="secondary">
                View Details
              </Button>
            </CardActions>
          </Card>

          {/* Quick Stats */}
          <Card elevation={4} sx={{ flex: "1 1 0", minWidth: 300 }}>
            <CardHeader title="Quick Stats" />
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon><FaTasks /></ListItemIcon>
                  <ListItemText primary="11/14 Tasks Completed" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FaAward /></ListItemIcon>
                  <ListItemText primary="3 Badges Earned" />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FaCertificate /></ListItemIcon>
                  <ListItemText primary="2 Certificates" />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Team Alpha */}
          <Card elevation={4} sx={{ flex: "1 1 0", minWidth: 300, display: "flex", justifyContent: "space-between", alignItems: "center", flexDirection: "column" }}>
            <CardHeader title="Team Alpha" subheader="E-Learning Platform" />
            <CardContent>
              <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                {["P", "A", "M", "R", "D"].map((name, i) => (
                  <Avatar key={i}>{name}</Avatar>
                ))}
                <Chip label="+3" variant="outlined" />
              </Box>
              <Typography>6 team members</Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", py: 2 }}>
              <Button variant="outlined" onClick={() => setOpenTeamModal(true)}>
                View Team
              </Button>
            </CardActions>
          </Card>
        </Box>

        {/* 👥 Team Modal */}
        <Modal
          open={openTeamModal}
          onClose={() => setOpenTeamModal(false)}
          aria-labelledby="team-modal-title"
          aria-describedby="team-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              borderRadius: 2,
              boxShadow: 24,
              p: 4,
            }}
          >
            <Typography id="team-modal-title" variant="h6" component="h2" gutterBottom>
              Team Alpha
            </Typography>
            <Typography id="team-modal-description" sx={{ mb: 2 }}>
              E-Learning Platform – 6 Members
            </Typography>
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
              {[
                "Priya Sharma",
                "Alex Kumar",
                "Maya Singh",
                "Raj Patel",
                "Deepak Rao",
                "Anjali Mehta",
              ].map((name, i) => (
                <Chip key={i} avatar={<Avatar>{name[0]}</Avatar>} label={name} />
              ))}
            </Box>
            <Box sx={{ textAlign: "right", mt: 3 }}>
              <Button onClick={() => setOpenTeamModal(false)} variant="contained">
                Close
              </Button>
            </Box>
          </Box>
        </Modal>


        {/* 📋 Bottom Section */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 3,
          }}
        >
          {/* Recent Activity */}
          <Card elevation={4} sx={{ flex: "1 1 0", minWidth: 300 }}>
            <CardHeader title="Recent Activity" />
            <CardContent>
              <List>
                <ListItem sx={{ backgroundColor: "#f5f5f5", borderRadius: "1rem" }}>
                  <ListItemIcon><FaCode color="green" /></ListItemIcon>
                  <ListItemText
                    primary="Completed authentication module"
                    secondary="2 hours ago"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FaBug color="orange" /></ListItemIcon>
                  <ListItemText
                    primary="Bug fixed: Mobile responsive login"
                    secondary="Yesterday"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon><FaMedal color="#673ab7" /></ListItemIcon>
                  <ListItemText
                    primary='Earned "Sprint Champion" badge'
                    secondary="2 days ago"
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>

          {/* Upcoming Tasks */}
          <Card elevation={4} sx={{ flex: "1 1 0", minWidth: 300 }}>
            <CardHeader title="Upcoming Tasks" />
            <CardContent>
              <Box
                sx={{
                  borderLeft: "4px solid #f44336",
                  backgroundColor: "#fff8f6",
                  p: 2,
                  mb: 2,
                  borderRadius: 1,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ flexGrow: 1, minWidth: 0, textAlign: "left" }}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ wordWrap: "break-word" }}>
                      Implement user authentication
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Due: Aug 20
                    </Typography>
                  </Box>
                  <Chip label="In Progress" color="error" size="small" sx={{ mt: 0.5 }} />
                </Box>
              </Box>

              <Box
                sx={{
                  borderLeft: "4px solid #9e9e9e",
                  backgroundColor: "#f5f5f5",
                  p: 2,
                  mb: 2,
                  borderRadius: 1,
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
                  <Box sx={{ flexGrow: 1, minWidth: 0, textAlign: "left" }}>
                    <Typography variant="subtitle1" fontWeight="bold" sx={{ wordWrap: "break-word" }}>
                      Design course catalog UI
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Due: Aug 22
                    </Typography>
                  </Box>
                  <Chip label="To Do" size="small" sx={{ mt: 0.5 }} />
                </Box>
              </Box>
            </CardContent>
            <CardActions sx={{ justifyContent: "center", pb: 2 }}>
              <Button variant="contained" color="success">
                View All Tasks
              </Button>
            </CardActions>
          </Card>

          {/* Team Leaderboard */}
          <Card elevation={4} sx={{ flex: "1 1 0", minWidth: 300 }}>
            <CardHeader title="Team Leaderboard" />
            <CardContent>
              <List>
                {[
                  { name: "Priya Sharma", points: "2,450", badge: 8 },
                  { name: "Alex Kumar", points: "2,400", badge: 7 },
                  { name: "Maya Singh", points: "2,250", badge: 6 },
                  { name: "Raj Patel", points: "2,180", badge: 5 },
                ].map((user, i) => (
                  <ListItem key={i} sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 2, backgroundColor: "#f5f5f5", borderRadius: "1rem", mb: 0.3 }}>
                    <Chip label={i + 1} color={i === 0 ? "primary" : "default"} />
                    <Avatar>{user.name[0]}</Avatar>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography>{user.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {user.points} points
                      </Typography>
                    </Box>
                    <Chip label={user.badge} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  )
}
