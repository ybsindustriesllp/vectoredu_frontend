// components/Mentorship/Mentorship.jsx
import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import "./styles.modular.css";

const Mentorship = () => {
  // Functions to handle button clicks
  const scheduleSession = () => {
    alert('Schedule session functionality would open here');
  };

  const scheduleWithMentor = (mentorId) => {
    alert(`Scheduling session with mentor: ${mentorId}`);
  };

  const rescheduleSession = (sessionId) => {
    alert(`Rescheduling session: ${sessionId}`);
  };

  const joinSession = (sessionId) => {
    alert(`Joining session: ${sessionId}`);
  };

  return (
    <div className="mentorship-container">
      <Navbar />

      <div className="mentorship-content">
        <div className="view-header">
          <h1>Mentorship Program</h1>
          <button className="btn btn--primary" onClick={scheduleSession}>
            <i className="fas fa-calendar-plus"></i>
            Schedule Session
          </button>
        </div>

        <div className="mentorship-layout">
          {/* First row - 3 cards */}
          <div className="cards-container">
            {/* Mentor Profile */}
            <div className="card mentor-card">
              <div className="card__body">
                <div className="mentor-header">
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face"
                    alt="Dr. Sarah Chen"
                    className="mentor-avatar"
                  />
                  <div className="mentor-info">
                    <h3>Dr. Sarah Chen</h3>
                    <p>Senior Software Architect, Google</p>
                    <div className="mentor-rating">
                      <span className="rating">4.9</span>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mentor-stats">
                  12 years experience • 8 mentees • Software Architecture specialist
                </p>
                <div className="mentor-skills">
                  <span className="skill-tag">System Design</span>
                  <span className="skill-tag">Microservices</span>
                  <span className="skill-tag">Cloud Architecture</span>
                </div>
                <div className="mentor-actions">
                  <button className="btn btn--outline btn--sm">View Profile</button>
                  <button
                    className="btn btn--primary btn--sm"
                    onClick={() => scheduleWithMentor('sarah')}
                  >
                    Schedule Session
                  </button>
                </div>
              </div>
            </div>

            {/* Upcoming Sessions */}
            <div className="card sessions-card">
              <div className="card__body">
                <h3>Upcoming Sessions</h3>
                
                <div className="sessions-scroll-container">
                  <div className="session-item">
                    <div className="session-info">
                      <h4>Code Review & Architecture Discussion</h4>
                      <p>With Dr. Sarah Chen</p>
                    </div>
                    <div className="session-time">
                      <strong>Tomorrow, 2:00 PM</strong>
                      <span>1 hour session</span>
                    </div>
                    <div className="session-actions">
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => joinSession(1)}
                      >
                        Join
                      </button>
                      <button
                        className="btn btn--outline btn--sm"
                        onClick={() => rescheduleSession(1)}
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>

                  <div className="session-item">
                    <div className="session-info">
                      <h4>DevOps Best Practices</h4>
                      <p>With Rajesh Kumar</p>
                    </div>
                    <div className="session-time">
                      <strong>Friday, 10:30 AM</strong>
                      <span>45 min session</span>
                    </div>
                    <div className="session-actions">
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => joinSession(2)}
                      >
                        Join
                      </button>
                      <button
                        className="btn btn--outline btn--sm"
                        onClick={() => rescheduleSession(2)}
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>

                  <div className="session-item">
                    <div className="session-info">
                      <h4>System Design Interview Prep</h4>
                      <p>With Michael Rodriguez</p>
                    </div>
                    <div className="session-time">
                      <strong>Monday, 3:00 PM</strong>
                      <span>1.5 hour session</span>
                    </div>
                    <div className="session-actions">
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => joinSession(3)}
                      >
                        Join
                      </button>
                      <button
                        className="btn btn--outline btn--sm"
                        onClick={() => rescheduleSession(3)}
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>

                  <div className="session-item">
                    <div className="session-info">
                      <h4>React Performance Optimization</h4>
                      <p>With Dr. Sarah Chen</p>
                    </div>
                    <div className="session-time">
                      <strong>Wednesday, 11:00 AM</strong>
                      <span>1 hour session</span>
                    </div>
                    <div className="session-actions">
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => joinSession(4)}
                      >
                        Join
                      </button>
                      <button
                        className="btn btn--outline btn--sm"
                        onClick={() => rescheduleSession(4)}
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>

                  <div className="session-item">
                    <div className="session-info">
                      <h4>Database Design Patterns</h4>
                      <p>With Lisa Wang</p>
                    </div>
                    <div className="session-time">
                      <strong>Next Friday, 2:30 PM</strong>
                      <span>1 hour session</span>
                    </div>
                    <div className="session-actions">
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => joinSession(5)}
                      >
                        Join
                      </button>
                      <button
                        className="btn btn--outline btn--sm"
                        onClick={() => rescheduleSession(5)}
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>

                  <div className="session-item">
                    <div className="session-info">
                      <h4>API Security Best Practices</h4>
                      <p>With David Thompson</p>
                    </div>
                    <div className="session-time">
                      <strong>Next Monday, 10:00 AM</strong>
                      <span>45 min session</span>
                    </div>
                    <div className="session-actions">
                      <button
                        className="btn btn--primary btn--sm"
                        onClick={() => joinSession(6)}
                      >
                        Join
                      </button>
                      <button
                        className="btn btn--outline btn--sm"
                        onClick={() => rescheduleSession(6)}
                      >
                        Reschedule
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Feedback */}
            <div className="card feedback-card">
              <div className="card__body">
                <h3>Recent Feedback</h3>
                <div className="feedback-scroll-container">
                  <div className="feedback-item">
                    <div className="feedback-header">
                      <strong>Authentication Module Review</strong>
                      <span className="feedback-date">Aug 15, 2024</span>
                    </div>
                    <p>
                      "Excellent implementation of JWT tokens. Consider adding rate
                      limiting for enhanced security."
                    </p>
                    <div className="feedback-rating">
                      <span>Rating: </span>
                      <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn--outline btn--sm">View All Feedback</button>
              </div>
            </div>
          </div>

          {/* Second row - Learning Goals card aligned left */}
          <div className="cards-container" style={{gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', justifyItems: 'start'}}>
            {/* Learning Goals */}
            <div className="card goals-card">
              <div className="card__body">
                <h3>Learning Goals</h3>
                <div className="goals-scroll-container">
                  <div className="goal-item">
                    <div className="goal-info">
                      <strong>Master System Design</strong>
                      <span>Progress: 65%</span>
                    </div>
                    <div className="goal-progress">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="goal-item">
                    <div className="goal-info">
                      <strong>Cloud Architecture Certification</strong>
                      <span>Progress: 45%</span>
                    </div>
                    <div className="goal-progress">
                      <div className="progress-bar">
                        <div
                          className="progress-fill"
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn--outline btn--sm">Add New Goal</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mentorship;