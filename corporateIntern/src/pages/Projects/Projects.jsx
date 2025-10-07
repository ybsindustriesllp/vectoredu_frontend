import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  Chip,
  LinearProgress,
  Alert,
  Avatar,
} from '@mui/material';
import {
  PlayArrow as PlayIcon,
  PowerSettingsNew as PowerIcon,
  Download as DownloadIcon,
} from '@mui/icons-material';
import Navbar from '../../components/Navbar/Navbar.jsx';
import Image from './passport.jpg';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

function Projects() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const launchVM = async () => {
    console.log('🚀 Projects: Starting VM launch process...');
    setIsLoading(true);
    setError(null);
    
    try {
      console.log('📡 Projects: Making API call to launch VM...', {
        url: `${API_BASE_URL}/api/vm/launch-vm/`,
        hasToken: !!localStorage.getItem('access_token')
      });
      
      const response = await api.post(`${API_BASE_URL}/api/vm/launch-vm/`);
      
      console.log('✅ Projects: VM launch API response received', response.data);
      
      if (response.data.success) {
        console.log('🎯 Projects: VM launched successfully, navigating to VM instance...', {
          sessionId: response.data.session_id,
          guacamoleUrl: response.data.guacamole_url
        });
        
        navigate(`/vm/${response.data.session_id}`, {
          state: {
            guacamole_url: response.data.guacamole_url,
            created_at: new Date().toISOString(),
          },
        });
      } else {
        console.error('❌ Projects: VM launch failed with error from API', response.data.error);
        setError(response.data.error);
      }
    } catch (err) {
      console.error('❌ Projects: VM launch failed with exception', {
        error: err,
        response: err.response?.data,
        status: err.response?.status,
        message: err.message
      });
      setError(err.response?.data?.error || 'Failed to launch VM');
    } finally {
      setIsLoading(false);
      console.log('🏁 Projects: VM launch process completed');
    }
  };

  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Project Management
          </Typography>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button 
              variant="outlined" 
              startIcon={<DownloadIcon />}
            >
              Export
            </Button>
            <Button 
              variant="contained" 
              color="primary"
            >
              + New Task
            </Button>
          </Box>
        </Box>

        {/* Project Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {/* E-Learning Platform */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    E-Learning Platform
                  </Typography>
                  <Chip 
                    label="VM Running" 
                    color="success" 
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  A comprehensive online learning management system with video
                  streaming, assessments, and progress tracking.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                  <Chip label="Development Phase" color="primary" size="small" />
                  <Typography variant="caption">65% Complete</Typography>
                  <Typography variant="caption">Due: Sept 15, 2024</Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <LinearProgress variant="determinate" value={65} sx={{ height: 8, borderRadius: 1 }} />
                </Box>

                {/* Usage Stats */}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">CPU: 25.54%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={25} sx={{ mb: 2, height: 6, borderRadius: 1 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">Memory: 62.17%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={62} sx={{ mb: 2, height: 6, borderRadius: 1 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">Storage: 35%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={35} sx={{ height: 6, borderRadius: 1 }} />
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="outlined" fullWidth>
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={isLoading ? null : <PlayIcon />}
                    onClick={launchVM}
                    disabled={isLoading}
                    fullWidth
                  >
                    {isLoading ? '🚀 Launching...' : 'Launch VM'}
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Task Management System */}
          <Grid item xs={12} md={6}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Task Management System
                  </Typography>
                  <Chip 
                    label="VM Stopped" 
                    color="default" 
                    size="small"
                  />
                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Enterprise-grade task management with team collaboration features.
                </Typography>

                <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2 }}>
                  <Chip label="Testing Phase" color="warning" size="small" />
                  <Typography variant="caption">85% Complete</Typography>
                  <Typography variant="caption">Due: Aug 20, 2024</Typography>
                </Box>

                <Box sx={{ mb: 2 }}>
                  <LinearProgress variant="determinate" value={85} sx={{ height: 8, borderRadius: 1 }} />
                </Box>

                {/* Usage Stats */}
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">CPU: 0%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={0} sx={{ mb: 2, height: 6, borderRadius: 1 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">Memory: 0%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={0} sx={{ mb: 2, height: 6, borderRadius: 1 }} />
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="caption">Storage: 42%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={42} sx={{ height: 6, borderRadius: 1 }} />
                </Box>

                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="outlined" fullWidth>
                    View Details
                  </Button>
                  <Button
                    variant="contained"
                    startIcon={<PowerIcon />}
                    fullWidth
                  >
                    Start VM
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {error && (
          <Alert severity="error" sx={{ mb: 4 }}>
            ⚠️ {error}
          </Alert>
        )}

        {/* Task Board */}
        <Grid container spacing={3}>
          {/* To Do */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    To Do
                  </Typography>
                  <Chip label="2" size="small" />
                </Box>

                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Design course catalog UI
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                      Create responsive course listing with search and filters
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label="5 SP" size="small" color="primary" />
                      <Avatar src={Image} sx={{ width: 28, height: 28 }} />
                    </Box>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Update documentation
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                      Review and update API documentation
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label="3 SP" size="small" color="primary" />
                      <Avatar src={Image} sx={{ width: 28, height: 28 }} />
                    </Box>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>

          {/* In Progress */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    In Progress
                  </Typography>
                  <Chip label="2" size="small" />
                </Box>

                <Card variant="outlined" sx={{ mb: 2 }}>
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Implement user authentication
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                      Create login/signup functionality with JWT tokens
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label="8 SP" size="small" color="primary" />
                      <Avatar src={Image} sx={{ width: 28, height: 28 }} />
                    </Box>
                  </CardContent>
                </Card>

                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Setup CI/CD pipeline
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                      Configure automated deployment with Docker
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label="10 SP" size="small" color="primary" />
                      <Avatar src={Image} sx={{ width: 28, height: 28 }} />
                    </Box>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>

          {/* Review */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Review
                  </Typography>
                  <Chip label="1" size="small" />
                </Box>

                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Database schema design
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                      Design optimized database schema for user data
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label="6 SP" size="small" color="primary" />
                      <Avatar src={Image} sx={{ width: 28, height: 28 }} />
                    </Box>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>

          {/* Done */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: '100%' }}>
              <CardContent sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
                  <Typography variant="h6" sx={{ fontWeight: 600 }}>
                    Done
                  </Typography>
                  <Chip label="1" size="small" />
                </Box>

                <Card variant="outlined">
                  <CardContent>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1 }}>
                      Write API integration tests
                    </Typography>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 2 }}>
                      Create comprehensive test suite for all API endpoints
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Chip label="6 SP" size="small" color="primary" />
                      <Avatar src={Image} sx={{ width: 28, height: 28 }} />
                    </Box>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Projects;
