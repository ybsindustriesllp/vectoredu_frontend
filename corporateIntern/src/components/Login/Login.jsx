// src/components/Login/Login.jsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Tabs,
  Tab,
  Checkbox,
  FormControlLabel,
  Link,
  Grid,
  Card,
  CardContent,
  Alert,
  Modal,
  Paper,
  Divider,
  Avatar,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from '@mui/material';
import {
  Business as BusinessIcon,
  Code as CodeIcon,
  Person as PersonIcon,
  Storage as StorageIcon,
  AccountTree as ProjectIcon,
} from '@mui/icons-material';
import { useAuth } from '../../contexts/AuthContext';
import GoogleOAuth from '../GoogleOAuth/GoogleOAuth';

function Login() {
  const [activeTab, setActiveTab] = useState(0);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    full_name: '',
    phone: '',
    role: 'student',
    confirm_password: ''
  });
  const [otpData, setOtpData] = useState({ email: '', code: '' });
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeUpdates, setAgreeUpdates] = useState(false);
  
  const { register, verifyOTP, login, error, clearError } = useAuth();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    clearError();
  };

  const handleOtpChange = (e) => {
    const { name, value } = e.target;
    setOtpData(prev => ({
      ...prev,
      [name]: value
    }));
    clearError();
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    clearError();
    
    try {
      if (formData.password !== formData.confirm_password) {
        throw new Error('Passwords do not match');
      }

      if (!agreeTerms) {
        throw new Error('You must agree to the Terms of Service and Privacy Policy');
      }

      const userData = {
        email: formData.email,
        password: formData.password,
        first_name: formData.full_name.split(' ')[0],
        last_name: formData.full_name.split(' ').slice(1).join(' ') || '',
        phone: formData.phone,
        role: formData.role
      };

      await register(userData);
      setOtpData(prev => ({ ...prev, email: formData.email }));
      setShowOtpModal(true);
      
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpVerification = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    clearError();
    
    try {
      await verifyOTP(otpData.email, otpData.code);
      setShowOtpModal(false);
      setActiveTab(0);
      alert('Email verified successfully! Please sign in.');
      
      setFormData(prev => ({ ...prev, email: otpData.email }));
    } catch (error) {
      console.error('OTP verification error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log('🔐 Login: Starting login process...', { email: formData.email });
    setIsLoading(true);
    clearError();
    
    try {
      console.log('📡 Login: Calling login function from AuthContext...');
      await login(formData.email, formData.password);
      console.log('✅ Login: Login successful, redirecting to dashboard...');
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('❌ Login: Login failed', error);
    } finally {
      setIsLoading(false);
      console.log('🏁 Login: Login process completed');
    }
  };

  const resendOtp = async () => {
    try {
      console.log('Resending OTP to:', otpData.email);
      alert('OTP has been resent to your email.');
    } catch (error) {
      console.error('Resend OTP error:', error);
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Header Section */}
      <Box sx={{ bgcolor: 'white', py: 3, borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
            <BusinessIcon sx={{ fontSize: 40, color: 'primary.main' }} />
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
              CorporateIntern
            </Typography>
          </Box>
          <Typography variant="h6" color="text.secondary">
            Real-World Corporate Experience for Students
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={4}>
          {/* Left Side - Features */}
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, mb: 3 }}>
              Join the Future of Professional Development
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Experience real-world corporate environments with industry-standard tools,
              agile methodologies, and expert mentorship from leading MNCs.
            </Typography>

            <Grid container spacing={2} sx={{ mb: 4 }}>
              {[
                { icon: <CodeIcon />, text: 'Complete SDLC Experience' },
                { icon: <PersonIcon />, text: 'Industry Mentor Guidance' },
                { icon: <StorageIcon />, text: 'Virtual Machine Environments' },
                { icon: <ProjectIcon />, text: 'Agile Project Management' },
              ].map((feature, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Card variant="outlined">
                    <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ color: 'primary.main' }}>{feature.icon}</Box>
                      <Typography variant="body2">{feature.text}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            <Grid container spacing={3} sx={{ mb: 4 }}>
              {[
                { value: '2,500+', label: 'Students Trained' },
                { value: '150+', label: 'Industry Mentors' },
                { value: '25+', label: 'Partner Companies' },
              ].map((stat, index) => (
                <Grid item xs={4} key={index}>
                  <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {stat.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>

            <Card sx={{ bgcolor: 'grey.50' }}>
              <CardContent>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                  <Avatar src="/profile.jpg" sx={{ width: 56, height: 56 }} />
                  <Box>
                    <Typography variant="body2" sx={{ mb: 1 }}>
                      "This program gave me real-world experience that directly translated to my role at Google."
                    </Typography>
                    <Typography variant="caption" sx={{ fontWeight: 600 }}>
                      Priya Sharma, Software Engineer at Google
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Right Side - Login/Signup Form */}
          <Grid item xs={12} md={6}>
            <Paper elevation={3} sx={{ p: 4 }}>
              <Tabs 
                value={activeTab} 
                onChange={(e, newValue) => setActiveTab(newValue)}
                sx={{ mb: 3 }}
                variant="fullWidth"
              >
                <Tab label="Sign In" />
                <Tab label="Create Account" />
              </Tabs>

              {error && (
                <Alert severity="error" sx={{ mb: 2 }}>
                  {error}
                </Alert>
              )}

              {activeTab === 0 ? (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Welcome Back
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Sign in to continue your professional journey
                  </Typography>

                  <Box component="form" onSubmit={handleLogin}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
                      <FormControlLabel
                        control={
                          <Checkbox 
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            disabled={isLoading}
                          />
                        }
                        label="Remember me"
                      />
                      <Link href="/forgot-password" underline="hover">
                        Forgot Password?
                      </Link>
                    </Box>

                    <Button 
                      type="submit" 
                      variant="contained"
                      fullWidth
                      size="large"
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    >
                      {isLoading ? 'Signing In...' : 'Sign In'}
                    </Button>
                  </Box>

                  <Divider sx={{ my: 3 }}>
                    <Typography variant="caption" color="text.secondary">
                      or continue with
                    </Typography>
                  </Divider>

                  <GoogleOAuth buttonText="Sign in with Google" />
                </>
              ) : (
                <>
                  <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                    Create Your Account
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                    Join thousands of professionals advancing their careers
                  </Typography>

                  <Box component="form" onSubmit={handleRegister}>
                    <TextField
                      fullWidth
                      label="Full Name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={handleInputChange}
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    />

                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel>Role</InputLabel>
                      <Select
                        name="role"
                        value={formData.role}
                        onChange={handleInputChange}
                        label="Role"
                        required
                        disabled={isLoading}
                      >
                        <MenuItem value="student">Student</MenuItem>
                        <MenuItem value="mentor">Mentor</MenuItem>
                        <MenuItem value="partner">Partner</MenuItem>
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth
                      label="Password"
                      name="password"
                      type="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    />

                    <TextField
                      fullWidth
                      label="Confirm Password"
                      name="confirm_password"
                      type="password"
                      value={formData.confirm_password}
                      onChange={handleInputChange}
                      required
                      disabled={isLoading}
                      sx={{ mb: 2 }}
                    />

                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={agreeTerms}
                          onChange={(e) => setAgreeTerms(e.target.checked)}
                          required
                          disabled={isLoading}
                        />
                      }
                      label="I agree to the Terms of Service and Privacy Policy"
                      sx={{ mb: 1 }}
                    />

                    <FormControlLabel
                      control={
                        <Checkbox 
                          checked={agreeUpdates}
                          onChange={(e) => setAgreeUpdates(e.target.checked)}
                          disabled={isLoading}
                        />
                      }
                      label="I'd like to receive updates about new features and opportunities"
                      sx={{ mb: 3 }}
                    />

                    <Button 
                      type="submit" 
                      variant="contained"
                      fullWidth
                      size="large"
                      disabled={isLoading || !agreeTerms}
                      sx={{ mb: 2 }}
                    >
                      {isLoading ? 'Creating Account...' : 'Create Account'}
                    </Button>
                  </Box>

                  <Divider sx={{ my: 3 }}>
                    <Typography variant="caption" color="text.secondary">
                      or continue with
                    </Typography>
                  </Divider>

                  <GoogleOAuth buttonText="Sign up with Google" />
                </>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* OTP Verification Modal */}
      <Modal
        open={showOtpModal}
        onClose={() => !isLoading && setShowOtpModal(false)}
      >
        <Paper
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            p: 4,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
            Verify Your Email
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
            We've sent a verification code to {otpData.email}
          </Typography>
          
          <Box component="form" onSubmit={handleOtpVerification}>
            <TextField
              fullWidth
              label="Enter 6-digit OTP"
              name="code"
              value={otpData.code}
              onChange={handleOtpChange}
              inputProps={{ maxLength: 6 }}
              required
              disabled={isLoading}
              sx={{ mb: 3 }}
            />
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button 
                variant="outlined"
                onClick={() => setShowOtpModal(false)}
                disabled={isLoading}
                fullWidth
              >
                Cancel
              </Button>
              <Button 
                variant="outlined"
                onClick={resendOtp}
                disabled={isLoading}
                fullWidth
              >
                Resend OTP
              </Button>
              <Button 
                type="submit"
                variant="contained"
                disabled={isLoading || otpData.code.length !== 6}
                fullWidth
              >
                {isLoading ? 'Verifying...' : 'Verify'}
              </Button>
            </Box>
          </Box>
        </Paper>
      </Modal>

      {/* Footer */}
      <Box sx={{ bgcolor: 'white', py: 3, borderTop: '1px solid', borderColor: 'divider', mt: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 2 }}>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link href="/support" underline="hover">Support</Link>
              <Link href="/privacy" underline="hover">Privacy Policy</Link>
              <Link href="/terms" underline="hover">Terms of Service</Link>
              <Link href="/contact" underline="hover">Contact Us</Link>
            </Box>
            <Typography variant="body2" color="text.secondary">
              © 2025 CorporateIntern. All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default Login;
