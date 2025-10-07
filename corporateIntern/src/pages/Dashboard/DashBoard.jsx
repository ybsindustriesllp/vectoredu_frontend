// Dashboard.jsx
import React from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  AvatarGroup,
  CircularProgress,
} from '@mui/material';
import {
  Assignment as AssignmentIcon,
  EmojiEvents as TrophyIcon,
  Code as CodeIcon,
  BugReport as BugIcon,
  EmojiEvents as AwardIcon,
  WorkspacePremium as MedalIcon,
  CardGiftcard as CertificateIcon,
} from '@mui/icons-material';
import Navbar from '../../components/Navbar/Navbar.jsx';

export default function Dashboard() {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
      {/* Main Heading */}
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 700 }}>
          Welcome back, Alex! Here's your progress overview.
        </Typography>
        
        {/* Tasks Row - 3 Cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* Card 1 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Tasks
                </Typography>
                <List disablePadding>
                  <ListItem 
                    sx={{ 
                      px: 0, 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      mb: 2,
                      pb: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Implement user authentication
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Due: Aug 20
                      </Typography>
                    </Box>
                    <Chip label="In Progress" color="error" size="small" />
                  </ListItem>
                  <ListItem 
                    sx={{ 
                      px: 0, 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      mb: 2,
                      pb: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Setup CI/CD pipeline
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Due: Aug 21
                      </Typography>
                    </Box>
                    <Chip label="In Progress" color="error" size="small" />
                  </ListItem>
                  <ListItem 
                    sx={{ 
                      px: 0, 
                      display: 'flex', 
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Design course catalog UI
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Queued
                      </Typography>
                    </Box>
                    <Chip label="To Do" size="small" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 2 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Tasks
                </Typography>
                <List disablePadding>
                  <ListItem 
                    sx={{ 
                      px: 0, 
                      display: 'flex', 
                      justifyContent: 'space-between',
                      mb: 2,
                      pb: 2,
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Update documentation
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Due: Aug 22
                      </Typography>
                    </Box>
                    <Chip label="In Progress" color="error" size="small" />
                  </ListItem>
                  <ListItem 
                    sx={{ 
                      px: 0, 
                      display: 'flex', 
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Write integration tests
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Queued
                      </Typography>
                    </Box>
                    <Chip label="To Do" size="small" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Card 3 */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Tasks
                </Typography>
                <List disablePadding>
                  <ListItem 
                    sx={{ 
                      px: 0, 
                      display: 'flex', 
                      justifyContent: 'space-between'
                    }}
                  >
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                        Optimize dashboard performance
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Queued
                      </Typography>
                    </Box>
                    <Chip label="To Do" size="small" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Top Grid - 3 Cards */}
        <Grid container spacing={3} sx={{ mb: 3 }}>
          {/* Current Progress */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                    Current Progress
                  </Typography>
                  <Box sx={{ position: 'relative', display: 'inline-flex', mb: 3 }}>
                    <CircularProgress 
                      variant="determinate" 
                      value={75} 
                      size={140}
                      thickness={6}
                      sx={{ color: 'secondary.main' }}
                    />
                    <Box
                      sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: 'text.primary' }}>
                        75%
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Sprint 3 - Development Phase
                  </Typography>
                </Box>
                <Button variant="contained" color="secondary" fullWidth>
                  View Details
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Quick Stats */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Quick Stats
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <AssignmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="1/4 Tasks Completed" />
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <AwardIcon color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="3 Badges Earned" />
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CertificateIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="2 Certificates" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Team Alpha */}
          <Grid item xs={12} md={4}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                  Team Alpha
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  E-Learning Platform
                </Typography>
                <AvatarGroup max={4} sx={{ mb: 2, justifyContent: 'flex-start' }}>
                  <Avatar sx={{ bgcolor: '#6366f1', width: 36, height: 36 }}>P</Avatar>
                  <Avatar sx={{ bgcolor: '#8b5cf6', width: 36, height: 36 }}>A</Avatar>
                  <Avatar sx={{ bgcolor: '#10b981', width: 36, height: 36 }}>M</Avatar>
                  <Avatar sx={{ bgcolor: '#f59e0b', width: 36, height: 36 }}>R</Avatar>
                  <Avatar sx={{ width: 36, height: 36 }}>+3</Avatar>
                </AvatarGroup>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  6 team members
                </Typography>
                <Button variant="outlined" fullWidth>
            View Team
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Second Row - Recent Activity and Analytics Summary */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Recent Activity
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ px: 0, alignItems: 'flex-start', mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <CodeIcon sx={{ color: 'success.main' }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Completed authentication module
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        2 hours ago
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem sx={{ px: 0, alignItems: 'flex-start', mb: 2 }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <BugIcon sx={{ color: 'warning.main' }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Bug fixed: Mobile responsive login
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Yesterday
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem sx={{ px: 0, alignItems: 'flex-start' }}>
                    <ListItemIcon sx={{ minWidth: 36, mt: 0.5 }}>
                      <MedalIcon sx={{ color: 'secondary.main' }} />
                    </ListItemIcon>
                    <Box>
                      <Typography variant="body1" sx={{ fontWeight: 600 }}>
                  Earned "Sprint Champion" badge
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        2 days ago
                      </Typography>
                    </Box>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Analytics Summary
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <AssignmentIcon color="primary" />
                    </ListItemIcon>
                    <ListItemText primary="Task Completion Rate: 85%" />
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CodeIcon color="success" />
                    </ListItemIcon>
                    <ListItemText primary="Code Quality Score: 92%" />
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1 }}>
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <CertificateIcon color="warning" />
                    </ListItemIcon>
                    <ListItemText primary="Certifications in Progress: 2" />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
