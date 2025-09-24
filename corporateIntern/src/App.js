// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AuthProvider } from './contexts/AuthContext';
import Dashboard from './pages/Dashboard/DashBoard.jsx';
import Projects from './pages/Projects/Projects.jsx';
import Documents from './pages/Documents/Documents.jsx';
import { GOOGLE_CLIENT_ID } from './config/googleOAuth';
import Login from './components/Login/Login.jsx';
import TeamChat from './pages/Chats/TeamCommunication.jsx';
import Mentorship from './pages/Mentorship/Mentorship.jsx';
import Tickets from './pages/Tickets/Tickets.jsx';
import './App.css';
import Analytics from './pages/Analytics/Analytics.jsx';
import VMInstance from './pages/Projects/VMInstance';

function App() {
  return (
    <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <div className="App">
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
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;