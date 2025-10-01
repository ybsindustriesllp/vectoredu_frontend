// Dashboard.jsx
import React from "react";
import styles from "./styles.module.css";
import Navbar from '../../components/Navbar/Navbar.jsx'
import { FaTasks, FaCertificate, FaCode, FaBug, FaAward, FaMedal } from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
    <div className={styles.dashboard}>
      {/* Main Heading */}
      <h1 className={styles.mainHeading}>Welcome back, Alex! Here's your progress overview.</h1>
      
      {/* Tasks first: parallel three-card layout */}
      <div className={styles.tasksRow}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Tasks</div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>Implement user authentication</div>
              <div className={styles.muted}>Due: Aug 20</div>
            </div>
            <span className={`${styles.pill} ${styles.pillRed}`}>In Progress</span>
          </div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>Setup CI/CD pipeline</div>
              <div className={styles.muted}>Due: Aug 21</div>
            </div>
            <span className={`${styles.pill} ${styles.pillRed}`}>In Progress</span>
          </div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>Design course catalog UI</div>
              <div className={styles.muted}>Queued</div>
            </div>
            <span className={`${styles.pill} ${styles.pillGray}`}>To Do</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Tasks</div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>Update documentation</div>
              <div className={styles.muted}>Due: Aug 22</div>
            </div>
            <span className={`${styles.pill} ${styles.pillRed}`}>In Progress</span>
          </div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>Write integration tests</div>
              <div className={styles.muted}>Queued</div>
            </div>
            <span className={`${styles.pill} ${styles.pillGray}`}>To Do</span>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Tasks</div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>Optimize dashboard performance</div>
              <div className={styles.muted}>Queued</div>
            </div>
            <span className={`${styles.pill} ${styles.pillGray}`}>To Do</span>
          </div>
        </div>
      </div>

      {/* Top Grid - 3 cards max */}
      <div className={styles.gridTop}>
        {/* Current Progress */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Current Progress</div>
          <div className={styles.donutWrap}>
            <div className={styles.donut}></div>
            <div className={styles.donutCenter}>75%</div>
          </div>
          <p className={styles.muted}>Sprint 3 - Development Phase</p>
          <button className={`${styles.btn} ${styles.btnViolet}`}>
            View Details
          </button>
        </div>

        {/* Quick Stats */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Quick Stats</div>
          <ul className={styles.statList}>
            <li>
              <FaTasks className={styles.icon} />
              <span>1/4 Tasks Completed</span>
            </li>
            <li>
              <FaAward className={styles.icon} />
              <span>3 Badges Earned</span>
            </li>
            <li>
              <FaCertificate className={styles.icon} />
              <span>2 Certificates</span>
            </li>
          </ul>
        </div>

        {/* Team Alpha */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Team Alpha</div>
          <p className={styles.muted}>E-Learning Platform</p>
          <div className={styles.avatars}>
            <div className={`${styles.circle} ${styles.user1}`}>P</div>
            <div className={`${styles.circle} ${styles.user2}`}>A</div>
            <div className={`${styles.circle} ${styles.user3}`}>M</div>
            <div className={`${styles.circle} ${styles.user4}`}>R</div>
            <div className={styles.more}>+3</div>
          </div>
          <p>6 team members</p>
          <button className={`${styles.btn} ${styles.btnOutline}`}>
            View Team
          </button>
        </div>
      </div>

      {/* Second Row - Recent Activity and Analytics Summary side by side */}
      <div className={styles.gridTop}>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Recent Activity</div>
          <ul className={styles.activity}>
            <li>
              <FaCode className={`${styles.bullet} ${styles.success}`} />
              <div className={styles.activityContent}>
                <div className={styles.link}>
                  Completed authentication module
                </div>
                <div className={styles.time}>2 hours ago</div>
              </div>
            </li>
            <li>
              <FaBug className={`${styles.bullet} ${styles.warning}`} />
              <div className={styles.activityContent}>
                <div className={styles.link}>
                  Bug fixed: Mobile responsive login
                </div>
                <div className={styles.time}>Yesterday</div>
              </div>
            </li>
            <li>
              <FaMedal className={`${styles.bullet} ${styles.violet}`} />
              <div className={styles.activityContent}>
                <div className={styles.link}>
                  Earned "Sprint Champion" badge
                </div>
                <div className={styles.time}>2 days ago</div>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.card}>
          <div className={styles.cardTitle}>Analytics Summary</div>
          <ul className={styles.statList}>
            <li>
              <FaTasks className={styles.icon} />
              <span>Task Completion Rate: 85%</span>
            </li>
            <li>
              <FaCode className={styles.icon} />
              <span>Code Quality Score: 92%</span>
            </li>
            <li>
              <FaCertificate className={styles.icon} />
              <span>Certifications in Progress: 2</span>
            </li>
          </ul>
        </div>
        <div></div>
      </div>
    </div>
    </div>
  );
}