import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Alert,
} from '@mui/material';
import { PowerSettingsNew as PowerOffIcon } from '@mui/icons-material';
import api from '../../services/api';
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

function VMInstance() {
  const { sessionId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const { guacamole_url, created_at } = location.state || {};

  console.log('🖥️ VMInstance: Component loaded', {
    sessionId,
    hasGuacamoleUrl: !!guacamole_url,
    guacamoleUrl: guacamole_url,
    createdAt: created_at,
    locationState: location.state
  });

  const stopVM = async () => {
    try {
      console.log('🛑 VMInstance: Stopping VM...', { sessionId });
      await api.post(`${API_BASE_URL}/api/vm/stop-vm/${sessionId}/`);
      console.log('✅ VMInstance: VM stopped successfully');
      navigate('/projects');
    } catch (err) {
      console.error('❌ VMInstance: Failed to stop VM', err);
      alert('Failed to stop VM');
    }
  };

  if (!guacamole_url) {
    console.error('❌ VMInstance: No VM data provided');
    return (
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Alert severity="warning">
          ⚠️ No VM data provided. Please launch again.
        </Alert>
      </Container>
    );
  }

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Paper 
        elevation={2}
        sx={{ 
          p: 3, 
          mb: 2,
          borderRadius: 0,
        }}
      >
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Box>
              <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                🖥️ VM Session {sessionId}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Started at: {new Date(created_at).toLocaleString()}
              </Typography>
            </Box>
            <Button 
              variant="contained" 
              color="error"
              startIcon={<PowerOffIcon />}
              onClick={stopVM}
            >
              Stop VM
            </Button>
          </Box>
        </Container>
      </Paper>

      <Container maxWidth="xl">
        <Paper 
          elevation={3}
          sx={{ 
            width: '100%',
            height: 'calc(100vh - 180px)',
            overflow: 'hidden'
          }}
        >
          <Box
            component="iframe"
            src={guacamole_url}
            sx={{
              width: '100%',
              height: '100%',
              border: 'none',
            }}
            title={`VM Session ${sessionId}`}
            onLoad={() => console.log('✅ VMInstance: Iframe loaded successfully')}
            onError={(e) => console.error('❌ VMInstance: Iframe failed to load', e)}
          />
        </Paper>
      </Container>
    </Box>
  );
}

export default VMInstance;
