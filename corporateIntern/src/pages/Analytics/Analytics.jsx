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
  Chip
} from '@mui/material';
import {
  EmojiEvents as TrophyIcon,
  Code as CodeIcon,
  Group as GroupIcon,
  Assignment as TaskIcon,
  Schedule as ClockIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip as RTooltip, CartesianGrid, BarChart, Bar } from 'recharts'

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30');

  const exportAnalytics = () => {
    alert('Exporting analytics data...');
  };

  const kpi = [
    { label: 'Active Users', value: '1,284', delta: '+8.2%' },
    { label: 'Tasks Done', value: '324', delta: '+2.1%' },
    { label: 'Avg. Resolution', value: '72h', delta: '-5.3%' },
  ]

  const chartData = [
    { name: 'Jan', value: 45 },
    { name: 'Feb', value: 52 },
    { name: 'Mar', value: 61 },
    { name: 'Apr', value: 58 },
    { name: 'May', value: 66 },
    { name: 'Jun', value: 74 },
    { name: 'Jul', value: 70 },
    { name: 'Aug', value: 78 },
  ]

  const barData = [
    { name: 'Design', done: 85 },
    { name: 'Frontend', done: 72 },
    { name: 'Backend', done: 66 },
    { name: 'Testing', done: 59 },
    { name: 'Docs', done: 41 },
  ]

  return (
    <Box>
      <Container maxWidth="xl" sx={{ p: 3 }}>
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

        {/* Top KPI cards */}
        <Grid container spacing={3} sx={{ mb: 1 }}>
          {kpi.map((item) => (
            <Grid item xs={12} md={4} key={item.label}>
              <Card>
                <CardContent>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>{item.label}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography variant="h4" sx={{ fontWeight: 700 }}>{item.value}</Typography>
                    <Chip size="small" label={item.delta} color={item.delta.startsWith('+') ? 'success' : 'error'} />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

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

          {/* Charts */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Task Completion Trend
                </Typography>
                <Box sx={{ height: 320 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={chartData} margin={{ left: 8, right: 8, top: 10, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorPrimary" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6366f1" stopOpacity={0.35}/>
                          <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <RTooltip />
                      <Area type="monotone" dataKey="value" stroke="#6366f1" fill="url(#colorPrimary)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                  Track Progress by Area
                </Typography>
                <Box sx={{ height: 320 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData} layout="vertical" margin={{ left: 16, right: 16 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" domain={[0, 100]} hide />
                      <YAxis type="category" dataKey="name" width={80} />
                      <RTooltip />
                      <Bar dataKey="done" fill="#8b5cf6" radius={[4, 4, 4, 4]} />
                    </BarChart>
                  </ResponsiveContainer>
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
