// components/Analytics/Analytics.jsx
import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import { FaTrophy, FaCode, FaUsers, FaLock, FaTasks, FaClock, FaDownload } from 'react-icons/fa';
import './styles.modular.css';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30');

  // Functions to handle actions
  const exportAnalytics = () => {
    alert('Exporting analytics data...');
  };

  return (
    <div className="analytics-container">
      <Navbar />
      
      <div className="analytics-content">
        <div className="view-header">
          <h1>Analytics Dashboard</h1>
          <div className="analytics-filters">
            <select 
              className="form-control" 
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
            >
              <option value="30">Last 30 days</option>
              <option value="90">Last 3 months</option>
              <option value="180">Last 6 months</option>
            </select>
            <button className="btn btn--outline" onClick={exportAnalytics}>
              <FaDownload />
              Export Report
            </button>
          </div>
        </div>

        <div className="analytics-grid">
          {/* Performance Metrics Card */}
          <div className="card metrics-card">
            <div className="card__body">
              <h3>Performance Metrics</h3>
              <div className="metric-item">
                <div className="metric-icon">
                  <FaTasks />
                </div>
                <div className="metric-value">
                  <strong>85%</strong>
                  <span>Task Completion Rate</span>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-icon">
                  <FaClock />
                </div>
                <div className="metric-value">
                  <strong>72h</strong>
                  <span>Avg. Resolution Time</span>
                </div>
              </div>
              <div className="metric-item">
                <div className="metric-icon">
                  <FaCode />
                </div>
                <div className="metric-value">
                  <strong>92%</strong>
                  <span>Code Quality Score</span>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Progress Card */}
          <div className="card skills-progress">
            <div className="card__body">
              <h3>Skills Development</h3>
              <div className="skill-item">
                <div className="skill-info">
                  <span>React</span>
                  <span>75%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress-fill" style={{width: '75%', backgroundColor: '#61DAFB'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Node.js</span>
                  <span>70%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress-fill" style={{width: '70%', backgroundColor: '#68A063'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>Testing (Jest)</span>
                  <span>65%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress-fill" style={{width: '65%', backgroundColor: '#99425B'}}></div>
                </div>
              </div>
              <div className="skill-item">
                <div className="skill-info">
                  <span>MongoDB</span>
                  <span>45%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-progress-fill" style={{width: '45%', backgroundColor: '#4DB33D'}}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Card */}
          <div className="card achievements-card">
            <div className="card__body">
              <h3>Achievements & Badges</h3>
              <div className="badges-grid">
                <div className="badge-item">
                  <FaTrophy className="badge-icon gold" />
                  <span>Sprint Champion</span>
                </div>
                <div className="badge-item">
                  <FaCode className="badge-icon blue" />
                  <span>Code Quality</span>
                </div>
                <div className="badge-item">
                  <FaUsers className="badge-icon green" />
                  <span>Team Player</span>
                </div>
                <div className="badge-item locked">
                  <FaLock className="badge-icon gray" />
                  <span>Bug Hunter</span>
                </div>
              </div>
              <button className="btn btn--outline btn--sm">View All Achievements</button>
            </div>
          </div>

          {/* Activity Timeline Card */}
          <div className="card activity-timeline">
            <div className="card__body">
              <h3>Activity Timeline</h3>
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <strong>Completed Sprint 3 tasks</strong>
                    <span>Today, 3:30 PM</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <strong>Code review session with mentor</strong>
                    <span>Yesterday, 2:00 PM</span>
                  </div>
                </div>
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <strong>Fixed authentication bug</strong>
                    <span>Aug 17, 4:15 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Chart Card */}
          <div className="card chart-container">
            <div className="card__body">
              <h3>Performance Chart</h3>
              <div className="chart-placeholder">
                <div className="chart-y-axis">
                  <span>100%</span>
                  <span>80%</span>
                  <span>60%</span>
                  <span>40%</span>
                  <span>20%</span>
                  <span>0%</span>
                </div>
                <div className="chart-bars">
                  <div className="chart-bar" style={{height: '85%'}}>
                    <span className="bar-value">85%</span>
                    <span className="bar-label">Jan</span>
                  </div>
                  <div className="chart-bar" style={{height: '70%'}}>
                    <span className="bar-value">70%</span>
                    <span className="bar-label">Feb</span>
                  </div>
                  <div className="chart-bar" style={{height: '90%'}}>
                    <span className="bar-value">90%</span>
                    <span className="bar-label">Mar</span>
                  </div>
                  <div className="chart-bar" style={{height: '65%'}}>
                    <span className="bar-value">65%</span>
                    <span className="bar-label">Apr</span>
                  </div>
                  <div className="chart-bar" style={{height: '80%'}}>
                    <span className="bar-value">80%</span>
                    <span className="bar-label">May</span>
                  </div>
                  <div className="chart-bar" style={{height: '95%'}}>
                    <span className="bar-value">95%</span>
                    <span className="bar-label">Jun</span>
                  </div>
                  <div className="chart-bar" style={{height: '75%'}}>
                    <span className="bar-value">75%</span>
                    <span className="bar-label">Jul</span>
                  </div>
                  <div className="chart-bar" style={{height: '85%'}}>
                    <span className="bar-value">85%</span>
                    <span className="bar-label">Aug</span>
                  </div>
                </div>
              </div>
              <div className="chart-legend">
                <span className="legend-item">
                  <div className="legend-color" style={{backgroundColor: '#9d3795'}}></div>
                  Task Completion
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;