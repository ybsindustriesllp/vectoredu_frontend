// components/Analytics/Analytics.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Select,
  MenuItem,
  FormControl,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  EmojiEvents as TrophyIcon,
  Code as CodeIcon,
  Group as GroupIcon,
  Lock as LockIcon,
  Assignment as TaskIcon,
  Schedule as ClockIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import Navbar from "../../components/Navbar/Navbar";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30');

  const exportAnalytics = () => {
    alert('Exporting analytics data...');
  };

  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Analytics Dashboard
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <FormControl size="small" sx={{ minWidth: 150 }}>
              <Select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
              >
                <MenuItem value="30">Last 30 days</MenuItem>
                <MenuItem value="90">Last 3 months</MenuItem>
                <MenuItem value="180">Last 6 months</MenuItem>
              </Select>
            </FormControl>
            <Button 
              variant="outlined" 
              startIcon={<DownloadIcon />}
              onClick={exportAnalytics}
            >
              Export Report
            </Button>
          </Box>
        </Box>

        <Grid container spacing={3}>
          {/* Performance Metrics Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Performance Metrics
                </Typography>
                <List disablePadding>
                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <TaskIcon color="primary" />
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        85%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Task Completion Rate
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <ClockIcon color="warning" />
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        72h
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Avg. Resolution Time
                      </Typography>
                    </Box>
                  </ListItem>
                  <ListItem sx={{ px: 0, py: 1.5 }}>
                    <ListItemIcon sx={{ minWidth: 40 }}>
                      <CodeIcon color="success" />
                    </ListItemIcon>
                    <Box sx={{ flex: 1 }}>
                      <Typography variant="h5" sx={{ fontWeight: 700 }}>
                        92%
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Code Quality Score
                      </Typography>
                    </Box>
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Grid>

          {/* Skills Progress Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Skills Development
                </Typography>
                <Box>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">React</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>75%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={75} sx={{ height: 8, borderRadius: 1 }} />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Node.js</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>70%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={70} sx={{ height: 8, borderRadius: 1 }} />
                  </Box>
                  <Box sx={{ mb: 2 }}>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">Testing (Jest)</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>65%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={65} sx={{ height: 8, borderRadius: 1 }} />
                  </Box>
                  <Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                      <Typography variant="body2">MongoDB</Typography>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>45%</Typography>
                    </Box>
                    <LinearProgress variant="determinate" value={45} sx={{ height: 8, borderRadius: 1 }} />
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Activity Timeline Card */}
          <Grid item xs={12} md={6} lg={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Activity Timeline
                </Typography>
                <Box>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Box 
                      sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        bgcolor: 'primary.main',
                        mt: 0.5,
                        flexShrink: 0
                      }} 
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Completed Sprint 3 tasks
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Today, 3:30 PM
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2, mb: 2, pb: 2, borderBottom: '1px solid', borderColor: 'divider' }}>
                    <Box 
                      sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        bgcolor: 'success.main',
                        mt: 0.5,
                        flexShrink: 0
                      }} 
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Code review session with mentor
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Yesterday, 2:00 PM
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <Box 
                      sx={{ 
                        width: 12, 
                        height: 12, 
                        borderRadius: '50%', 
                        bgcolor: 'warning.main',
                        mt: 0.5,
                        flexShrink: 0
                      }} 
                    />
                    <Box>
                      <Typography variant="body2" sx={{ fontWeight: 600 }}>
                        Fixed authentication bug
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        Aug 17, 4:15 PM
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Performance Chart Card */}
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Performance Chart
                </Typography>
                <Box sx={{ display: 'flex', height: 300, gap: 2, alignItems: 'flex-end' }}>
                  {/* Y-axis */}
                  <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%', pr: 2 }}>
                    <Typography variant="caption">100%</Typography>
                    <Typography variant="caption">80%</Typography>
                    <Typography variant="caption">60%</Typography>
                    <Typography variant="caption">40%</Typography>
                    <Typography variant="caption">20%</Typography>
                    <Typography variant="caption">0%</Typography>
                  </Box>
                  
                  {/* Bars */}
                  <Box sx={{ display: 'flex', gap: 3, height: '100%', alignItems: 'flex-end', flex: 1, justifyContent: 'space-around' }}>
                    {[
                      { value: 85, label: 'Jan' },
                      { value: 70, label: 'Feb' },
                      { value: 90, label: 'Mar' },
                      { value: 65, label: 'Apr' },
                      { value: 80, label: 'May' },
                      { value: 95, label: 'Jun' },
                      { value: 75, label: 'Jul' },
                      { value: 85, label: 'Aug' },
                    ].map((bar, index) => (
                      <Box 
                        key={index}
                        sx={{ 
                          display: 'flex', 
                          flexDirection: 'column', 
                          alignItems: 'center',
                          height: '100%',
                          flex: 1,
                          maxWidth: 60
                        }}
                      >
                        <Box sx={{ flex: 1, display: 'flex', alignItems: 'flex-end', width: '100%' }}>
                          <Box 
                            sx={{ 
                              width: '100%',
                              height: `${bar.value}%`,
                              bgcolor: 'primary.main',
                              borderRadius: '4px 4px 0 0',
                              display: 'flex',
                              justifyContent: 'center',
                              pt: 1
                            }}
                          >
                            <Typography variant="caption" sx={{ fontWeight: 600, color: 'white' }}>
                              {bar.value}%
                            </Typography>
                          </Box>
                        </Box>
                        <Typography variant="caption" sx={{ mt: 1, fontWeight: 600 }}>
                          {bar.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Box sx={{ width: 16, height: 16, bgcolor: 'primary.main', borderRadius: 1 }} />
                    <Typography variant="caption">Task Completion</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Analytics;
