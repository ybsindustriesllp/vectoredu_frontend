import React, { useState } from 'react';
import styles from './styles.module.css';
import Navbar from '../../components/Navbar/Navbar.jsx';
import { FaPlay, FaPowerOff } from 'react-icons/fa';
import Image from './passport.jpg';
import api from '../../services/api';
import { useNavigate } from 'react-router-dom';
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL


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
    <div className={styles.container}>
      <Navbar />
      <div className={styles.container1}>
        <div className={styles.headings}>
          <h1 className={styles.heading}>Project Management</h1>

          <div className={styles.buttons}>
            <button className={styles.exportBtn}>
              ⬇ Export
            </button>
            <button className={styles.newTaskBtn}>
              + New Task
            </button>
          </div>
        </div>

        <div className={styles.projects}>
          {/* ---- E-Learning Platform (keep data + wire Launch VM) ---- */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>E-Learning Platform</h2>
              <span className={`${styles.status} ${styles.running}`}>
                VM Running
              </span>
            </div>
            <p className={styles.desc}>
              A comprehensive online learning management system with video
              streaming, assessments, and progress tracking.
            </p>

            <div className={styles.phase}>
              <span className={`${styles.phaseTag} ${styles.devPhase}`}>
                Development Phase
              </span>
              <span>65% Complete</span>
              <span>Due: Sept 15, 2024</span>
            </div>

            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "65%" }}></div>
            </div>

            <div className={styles.usage}>
              <span>CPU: 25.54%</span>
              <div className={styles.usageBar}>
                <div className={styles.progress} style={{ width: "25%" }}></div>
              </div>
              <span>Memory: 62.17%</span>
              <div className={styles.usageBar}>
                <div className={styles.progress} style={{ width: "62%" }}></div>
              </div>
              <span>Storage: 35%</span>
              <div className={styles.usageBar}>
                <div className={styles.progress} style={{ width: "35%" }}></div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.detailsBtn}>View Details</button>
              <button
                onClick={launchVM}
                disabled={isLoading}
                className={styles.actionBtn}
              >
                {isLoading ? '🚀 Launching...' : <><FaPlay /> Launch VM</>}
              </button>
            </div>
          </div>

          {/* ---- Task Management System (keep static as given) ---- */}
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <h2 className={styles.cardTitle}>Task Management System</h2>
              <span className={`${styles.status} ${styles.stopped}`}>
                VM Stopped
              </span>
            </div>
            <p className={styles.desc}>
              Enterprise-grade task management with team collaboration features.
            </p>

            <div className={styles.phase}>
              <span className={`${styles.phaseTag} ${styles.testPhase}`}>
                Testing Phase
              </span>
              <span>85% Complete</span>
              <span>Due: Aug 20, 2024</span>
            </div>

            <div className={styles.progressBar}>
              <div className={styles.progress} style={{ width: "85%" }}></div>
            </div>

            <div className={styles.usage}>
              <span>CPU: 0%</span>
              <div className={styles.usageBar}></div>
              <span>Memory: 0%</span>
              <div className={styles.usageBar}></div>
              <span>Storage: 42%</span>
              <div className={styles.usageBar}>
                <div className={styles.progress} style={{ width: "42%" }}></div>
              </div>
            </div>

            <div className={styles.actions}>
              <button className={styles.detailsBtn}>View Details</button>
              <button className={styles.actionBtn}>
                <FaPowerOff /> Start VM
              </button>
            </div>
          </div>
        </div>
      </div>

      {error && (
        <div className={styles.errorMessage}>
          ⚠️ {error}
        </div>
      )}

      <div className={styles.container2}>
        <div className={styles.cards}>
          <div className={styles.header}>
            <h3>To Do</h3>
            <span className={styles.count}>2</span>
          </div>
          <div className={styles.task}>
            <h3>Design course catalog UI</h3>
            <p>Create responsive course listing with search and filters</p>
            <div className={styles.footer}>
              <span className={styles.sp}>5 SP</span>
              <img
                className={styles.avatar}
                src={Image}
                alt="User"
              />
            </div>
          </div>

          <div className={styles.task}>
            <h3>Update documentation</h3>
            <p>Review and update API documentation</p>
            <div className={styles.footer}>
              <span className={styles.sp}>3 SP</span>
              <img
                className={styles.avatar}
                src={Image}
                alt="User"
              />
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.header}>
            <h3>In Progress</h3>
            <span className={styles.count}>2</span>
          </div>

          <div className={styles.task}>
            <h3>Implement user authentication</h3>
            <p>Create login/signup functionality with JWT tokens</p>
            <div className={styles.footer}>
              <span className={styles.sp}>8 SP</span>
              <img
                className={styles.avatar}
                src={Image}
                alt="User"
              />
            </div>
          </div>

          <div className={styles.task}>
            <h3>Setup CI/CD pipeline</h3>
            <p>Configure automated deployment with Docker</p>
            <div className={styles.footer}>
              <span className={styles.sp}>10 SP</span>
              <img
                className={styles.avatar}
                src={Image}
                alt="User"
              />
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.header}>
            <h3>Review</h3>
            <span className={styles.count}>1</span>
          </div>

        <div className={styles.task}>
            <h3>Database schema design</h3>
            <p>Design optimized database schema for user data</p>
            <div className={styles.footer}>
              <span className={styles.sp}>6 SP</span>
              <img
                className={styles.avatar}
                src={Image}
                alt="User"
              />
            </div>
          </div>
        </div>

        <div className={styles.cards}>
          <div className={styles.header}>
            <h3>Done</h3>
            <span className={styles.count}>1</span>
          </div>

          <div className={styles.task}>
            <h3>Write API integration tests</h3>
            <p>Create comprehensive test suite for all API endpoints</p>
            <div className={styles.footer}>
              <span className={styles.sp}>6 SP</span>
              <img
                className={styles.avatar}
                src={Image}
                alt="User"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;
