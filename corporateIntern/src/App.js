// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard/DashBoard.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Documents from './pages/Documents/Documents.jsx';
import { GOOGLE_CLIENT_ID } from './config/googleOAuth';
import Login from './components/Login/Login.jsx';
import TeamChat from './pages/Chats/TeamCommunication.jsx';
import Mentorship from './pages/Mentorship/Mentorship.jsx';
import Tickets from './pages/Tickets/Tickets.jsx';
import Analytics from './pages/Analytics/Analytics.jsx';
import VMInstance from './pages/Projects/VMInstance';
import DashboardLayout from './components/Layout/DashboardLayout.jsx';

// Simplified MUI theme matching Mira analytics
const theme = createTheme({
  palette: {
    primary: { main: '#6366F1' },
    secondary: { main: '#8B5CF6' },
    success: { main: '#10B981' },
    warning: { main: '#F59E0B' },
    error: { main: '#EF4444' },
    background: {
      default: '#F8FAFC',
      paper: '#FFFFFF'
    },
    text: {
      primary: '#1E293B',
      secondary: '#64748B'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    button: { fontWeight: 600 }
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { textTransform: 'none' }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
        }
      }
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route element={<DashboardLayout />}>
                <Route path="/" element={<Navigate to="/dashboard" replace />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/chats" element={<TeamChat />} />
                <Route path="/mentorship" element={<Mentorship />} />
                <Route path="/tickets" element={<Tickets />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/vm/:sessionId" element={<VMInstance />} />
              </Route>
            </Routes>
          </Router>
        </AuthProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;