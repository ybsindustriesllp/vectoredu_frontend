// src/components/Login/Login.jsx
import React, { useState } from 'react';
import styles from './styles.module.css';
import { FaBuilding, FaUserTie, FaCode, FaServer, FaProjectDiagram } from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import GoogleOAuth from '../GoogleOAuth/GoogleOAuth';

function Login() {
  const [activeTab, setActiveTab] = useState("signin");
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

  const handleCheckboxChange = (setter) => (e) => {
    setter(e.target.checked);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    clearError();
    
    try {
      // Basic validation
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
      setActiveTab("signin");
      alert('Email verified successfully! Please sign in.');
      
      // Pre-fill email in login form
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
      // Redirect to dashboard or home page
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
      // Implement resend OTP functionality
      console.log('Resending OTP to:', otpData.email);
      alert('OTP has been resent to your email.');
    } catch (error) {
      console.error('Resend OTP error:', error);
    }
  };

  return (
    <div className={styles.container}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.topRow}>
          <FaBuilding className={styles.icon} />
          <h1 className={styles.title}>CorporateIntern</h1>
        </div>
        <div className={styles.bottomRow}>
          <p className={styles.subtitle}>
            Real-World Corporate Experience for Students
          </p>
        </div>
      </div>

      <hr className={styles.divider} />

      <div className={styles.mainContent}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Join the Future of Professional Development</h2>
          <p className={styles.description}>
            Experience real-world corporate environments with industry-standard tools,
            agile methodologies, and expert mentorship from leading MNCs.
          </p>

          <div className={styles.features}>
            <div className={styles.featureBox}><FaCode /> Complete SDLC Experience</div>
            <div className={styles.featureBox}><FaUserTie /> Industry Mentor Guidance</div>
            <div className={styles.featureBox}><FaServer /> Virtual Machine Environments</div>
            <div className={styles.featureBox}><FaProjectDiagram /> Agile Project Management</div>
          </div>

          <div className={styles.stats}>
            <div><h3>2,500+</h3><p>Students Trained</p></div>
            <div><h3>150+</h3><p>Industry Mentors</p></div>
            <div><h3>25+</h3><p>Partner Companies</p></div>
          </div>

          <div className={styles.testimonial}>
            <img src="/profile.jpg" alt="Priya Sharma" className={styles.avatar} />
            <p className={styles.quote}>
              "This program gave me real-world experience that directly translated to my role at Google."
            </p>
            <p className={styles.author}>Priya Sharma, Software Engineer at Google</p>
          </div>
        </div>

        <div className={styles.right}>
          <div className={styles.tabs}>
            <button
              className={activeTab === "signin" ? styles.activeTab : styles.inactiveTab}
              onClick={() => setActiveTab("signin")}
            >
              Sign In
            </button>
            <button
              className={activeTab === "signup" ? styles.activeTab : styles.inactiveTab}
              onClick={() => setActiveTab("signup")}
            >
              Create Account
            </button>
          </div>

          {error && (
            <div className={styles.errorMessage}>
              {error}
            </div>
          )}

          {activeTab === "signin" ? (
            <>
              <h2 className={styles.formTitle}>Welcome Back</h2>
              <p className={styles.formSubtitle}>Sign in to continue your professional journey</p>

              <form className={styles.form} onSubmit={handleLogin}>
                <label>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />

                <label>Password</label>
                <input 
                  type="password" 
                  name="password"
                  placeholder="Enter your password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />

                <div className={styles.rememberRow}>
                  <div>
                    <input 
                      type="checkbox" 
                      checked={rememberMe}
                      onChange={handleCheckboxChange(setRememberMe)}
                      disabled={isLoading}
                    /> 
                    <span>Remember me</span>
                  </div>
                  <a href="/forgot-password" className={styles.forgot}>Forgot Password?</a>
                </div>

                <button 
                  type="submit" 
                  className={styles.signInBtn}
                  disabled={isLoading}
                >
                  {isLoading ? 'Signing In...' : 'Sign In'}
                </button>
              </form>

              <div className={styles.orLine}>
                <span></span> or continue with <span></span>
              </div>

              <GoogleOAuth buttonText="Sign in with Google" />
            </>
          ) : (
            <>
              <h2 className={styles.formTitle}>Create Your Account</h2>
              <p className={styles.formSubtitle}>
                Join thousands of professionals advancing their careers
              </p>

              <form className={styles.form} onSubmit={handleRegister}>
                <label>Full Name *</label>
                <input 
                  type="text" 
                  name="full_name"
                  placeholder="Enter your full name" 
                  value={formData.full_name}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />

                <label>Email Address *</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="Enter your email address" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />

                <label>Phone Number</label>
                <input 
                  type="tel" 
                  name="phone"
                  placeholder="+1 (555) 123-4567" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  disabled={isLoading}
                />

                <label>Role *</label>
                <select 
                  name="role"
                  value={formData.role}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                >
                  <option value="student">Student</option>
                  <option value="mentor">Mentor</option>
                  <option value="partner">Partner</option>
                </select>

                <label>Password *</label>
                <input 
                  type="password" 
                  name="password"
                  placeholder="Create a strong password" 
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />

                <label>Confirm Password *</label>
                <input 
                  type="password" 
                  name="confirm_password"
                  placeholder="Confirm your password" 
                  value={formData.confirm_password}
                  onChange={handleInputChange}
                  required
                  disabled={isLoading}
                />

                <div className={styles.checkRow}>
                  <input 
                    type="checkbox" 
                    checked={agreeTerms}
                    onChange={handleCheckboxChange(setAgreeTerms)}
                    required
                    disabled={isLoading}
                  /> 
                  <span>I agree to the Terms of Service and Privacy Policy</span>
                </div>
                <div className={styles.checkRow}>
                  <input 
                    type="checkbox" 
                    checked={agreeUpdates}
                    onChange={handleCheckboxChange(setAgreeUpdates)}
                    disabled={isLoading}
                  /> 
                  <span>I'd like to receive updates about new features and opportunities</span>
                </div>

                <button 
                  type="submit" 
                  className={styles.signInBtn}
                  disabled={isLoading || !agreeTerms}
                >
                  {isLoading ? 'Creating Account...' : 'Create Account'}
                </button>
              </form>

              <div className={styles.orLine}>
                <span></span> or continue with <span></span>
              </div>

              <GoogleOAuth buttonText="Sign up with Google" />
            </>
          )}

          {/* OTP Verification Modal */}
          {showOtpModal && (
            <div className={styles.modalOverlay}>
              <div className={styles.modal}>
                <h3>Verify Your Email</h3>
                <p>We've sent a verification code to {otpData.email}</p>
                
                <form onSubmit={handleOtpVerification}>
                  <input
                    type="text"
                    name="code"
                    placeholder="Enter 6-digit OTP"
                    value={otpData.code}
                    onChange={handleOtpChange}
                    maxLength="6"
                    required
                    disabled={isLoading}
                  />
                  
                  <div className={styles.modalButtons}>
                    <button 
                      type="button" 
                      onClick={() => setShowOtpModal(false)}
                      disabled={isLoading}
                    >
                      Cancel
                    </button>
                    <button 
                      type="button"
                      onClick={resendOtp}
                      disabled={isLoading}
                      className={styles.resendBtn}
                    >
                      Resend OTP
                    </button>
                    <button 
                      type="submit"
                      disabled={isLoading || otpData.code.length !== 6}
                    >
                      {isLoading ? 'Verifying...' : 'Verify'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerLeft}>
          <a href="/support">Support</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/contact">Contact Us</a>
        </div>
        <div className={styles.footerRight}>
          <p>© 2025 CorporateIntern. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default Login;