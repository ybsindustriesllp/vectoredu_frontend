// src/components/GoogleOAuth/GoogleOAuth.jsx
import React from 'react';
import { Box } from '@mui/material';
import { GoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../contexts/AuthContext';

const GoogleOAuth = ({ buttonText = "Continue with Google", variant = "default" }) => {
  const { googleLogin, error, clearError } = useAuth();

  const handleGoogleSuccess = async (credentialResponse) => {
    try {
      clearError();
      const { credential } = credentialResponse;
      
      if (!credential) {
        throw new Error('No credential received from Google');
      }

      console.log('Google OAuth successful, credential received');
      
      // Use the googleLogin function from auth context instead of direct API call
      await googleLogin(credential);
      
    } catch (error) {
      console.error('Google OAuth error:', error);
      alert('Google login failed. Please try again or use email login.');
    }
  };

  const handleGoogleError = () => {
    console.error('Google OAuth failed');
    alert('Google login failed. Please try again or use email login.');
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <GoogleLogin
        onSuccess={handleGoogleSuccess}
        onError={handleGoogleError}
        useOneTap={false}
        shape="rectangular"
        theme={variant === "outlined" ? "outline" : "filled_blue"}
        text={buttonText.toLowerCase().includes('sign up') ? "signup_with" : "signin_with"}
        size="large"
        width={variant === "outlined" ? "300" : "350"}
        ux_mode="popup"
      />
    </Box>
  );
};

export default GoogleOAuth;