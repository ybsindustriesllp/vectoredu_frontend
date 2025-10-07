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

// Create custom MUI theme
const theme = createTheme({
  palette: {
    primary: {
      main: '#6366f1', // Indigo color
      light: '#818cf8',
      dark: '#4f46e5',
    },
    secondary: {
      main: '#8b5cf6', // Violet color
      light: '#a78bfa',
      dark: '#7c3aed',
    },
    success: {
      main: '#10b981',
    },
    warning: {
      main: '#f59e0b',
    },
    error: {
      main: '#ef4444',
    },
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          padding: '10px 20px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        },
      },
    },
  },
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
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/chats" element={<TeamChat />} />
              <Route path="/mentorship" element={<Mentorship />} />
              <Route path="/tickets" element={<Tickets />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/vm/:sessionId" element={<VMInstance />} />
            </Routes>
          </Router>
        </AuthProvider>
      </GoogleOAuthProvider>
    </ThemeProvider>
  );
}

export default App;