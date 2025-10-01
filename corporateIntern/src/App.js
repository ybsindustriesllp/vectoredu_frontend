// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard/DashBoard.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Documents from './pages/Documents/Documents.jsx';
import { GOOGLE_CLIENT_ID } from './config/googleOAuth';
import Login from './Auth/Login.jsx';
import TeamChat from './pages/Chats/TeamCommunication.jsx';
import Mentorship from './pages/Mentorship/Mentorship.jsx';
import Tickets from './pages/Tickets/Tickets.jsx';
import Analytics from './pages/Analytics/Analytics.jsx';
import VMInstance from './pages/Projects/VMInstance';
import AuthGuard from './Auth/AuthGuard.jsx';
import './App.css';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <div className="App">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route
                path="/dashboard"
                element={
                  <AuthGuard>
                    <Dashboard />
                  </AuthGuard>
                }
              />
              <Route
                path="/projects"
                element={
                  <AuthGuard>
                    <Projects />
                  </AuthGuard>
                }
              />
              <Route
                path="/documents"
                element={
                  <AuthGuard>
                    <Documents />
                  </AuthGuard>
                }
              />
              <Route
                path="/chats"
                element={
                  <AuthGuard>
                    <TeamChat />
                  </AuthGuard>
                }
              />
              <Route
                path="/mentorship"
                element={
                  <AuthGuard>
                    <Mentorship />
                  </AuthGuard>
                }
              />
              <Route
                path="/tickets"
                element={
                  <AuthGuard>
                    <Tickets />
                  </AuthGuard>
                }
              />
              <Route
                path="/analytics"
                element={
                  <AuthGuard>
                    <Analytics />
                  </AuthGuard>
                }
              />
              <Route
                path="/vm/:sessionId"
                element={
                  <AuthGuard>
                    <VMInstance />
                  </AuthGuard>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
