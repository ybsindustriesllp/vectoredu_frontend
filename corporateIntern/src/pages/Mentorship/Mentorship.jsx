// components/Mentorship/Mentorship.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Avatar,
  Chip,
  Rating,
  LinearProgress,
} from '@mui/material';
import {
  CalendarToday as CalendarIcon,
  Star as StarIcon,
} from '@mui/icons-material';
import Navbar from "../../components/Navbar/Navbar";

const Mentorship = () => {
  // Functions to handle button clicks
  const scheduleSession = () => {
    alert('Schedule session functionality would open here');
  };

  const scheduleWithMentor = (mentorId) => {
    alert(`Scheduling session with mentor: ${mentorId}`);
  };

  const rescheduleSession = (sessionId) => {
    alert(`Rescheduling session: ${sessionId}`);
  };

  const joinSession = (sessionId) => {
    alert(`Joining session: ${sessionId}`);
  };

  const upcomingSessions = [
    { id: 1, title: "Code Review & Architecture Discussion", mentor: "Dr. Sarah Chen", time: "Tomorrow, 2:00 PM", duration: "1 hour session" },
    { id: 2, title: "DevOps Best Practices", mentor: "Rajesh Kumar", time: "Friday, 10:30 AM", duration: "45 min session" },
    { id: 3, title: "System Design Interview Prep", mentor: "Michael Rodriguez", time: "Monday, 3:00 PM", duration: "1.5 hour session" },
    { id: 4, title: "React Performance Optimization", mentor: "Dr. Sarah Chen", time: "Wednesday, 11:00 AM", duration: "1 hour session" },
    { id: 5, title: "Database Design Patterns", mentor: "Lisa Wang", time: "Next Friday, 2:30 PM", duration: "1 hour session" },
    { id: 6, title: "API Security Best Practices", mentor: "David Thompson", time: "Next Monday, 10:00 AM", duration: "45 min session" },
  ];

  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Mentorship Program
          </Typography>
          <Button 
            variant="contained" 
            startIcon={<CalendarIcon />}
            onClick={scheduleSession}
          >
            Schedule Session
          </Button>
        </Box>

        {/* First Row - 3 Cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
            {/* Mentor Profile */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '300px' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                  <Avatar 
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
                    sx={{ width: 64, height: 64 }}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Dr. Sarah Chen
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Senior Software Architect, Google
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                      <Rating value={4.9} precision={0.1} readOnly size="small" />
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        4.9
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                  12 years experience • 8 mentees • Software Architecture specialist
                </Typography>
                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                  <Chip label="System Design" size="small" color="primary" />
                  <Chip label="Microservices" size="small" color="primary" />
                  <Chip label="Cloud Architecture" size="small" color="primary" />
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Button variant="outlined" size="small" fullWidth>
                    View Profile
                  </Button>
                  <Button 
                    variant="contained" 
                    size="small"
                    onClick={() => scheduleWithMentor('sarah')}
                    fullWidth
                  >
                    Schedule
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

            {/* Upcoming Sessions */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '300px' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Upcoming Sessions
                </Typography>
                <Box sx={{ maxHeight: 400, overflow: 'auto' }}>
                  {upcomingSessions.slice(0, 3).map(session => (
                    <Card key={session.id} variant="outlined" sx={{ mb: 2 }}>
                      <CardContent sx={{ p: 2, '&:last-child': { pb: 2 } }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {session.title}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                          With {session.mentor}
                        </Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
                          {session.time}
                        </Typography>
                        <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 1 }}>
                          {session.duration}
                        </Typography>
                        <Box sx={{ display: 'flex', gap: 1 }}>
                          <Button 
                            variant="contained" 
                            size="small"
                            onClick={() => joinSession(session.id)}
                            fullWidth
                      >
                        Join
                          </Button>
                          <Button 
                            variant="outlined" 
                            size="small"
                            onClick={() => rescheduleSession(session.id)}
                            fullWidth
                      >
                        Reschedule
                          </Button>
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </CardContent>
            </Card>
          </Grid>

            {/* Recent Feedback */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '300px' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Recent Feedback
                </Typography>
                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                        Authentication Module Review
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Aug 15, 2024
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                      "Excellent implementation of JWT tokens. Consider adding rate
                      limiting for enhanced security."
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Typography variant="caption">Rating: </Typography>
                      <Rating value={4} readOnly size="small" />
                    </Box>
                  </CardContent>
                </Card>
                <Button variant="outlined" size="small" fullWidth>
                  View All Feedback
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Second Row - Learning Goals */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '300px' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Learning Goals
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Master System Design
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Progress: 65%
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={65} sx={{ height: 8, borderRadius: 1 }} />
                </Box>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      Cloud Architecture Certification
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Progress: 45%
                    </Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={45} sx={{ height: 8, borderRadius: 1 }} />
                </Box>
                <Button variant="outlined" size="small" fullWidth>
                  Add New Goal
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Mentorship;
