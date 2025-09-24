// Dashboard.jsx
import React from "react";
import styles from "./styles.module.css";
import Navbar from '../../components/Navbar/Navbar.jsx'
import {
  FaTasks,
  FaAward,
  FaCertificate,
  FaCode,
  FaBug,
  FaMedal,
} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div>
      <Navbar />
    <div className={styles.dashboard}>
      <p className={styles.welcome}>
        Welcome back, Alex! Here's your progress overview.
      </p>

      {/* Top Grid */}
      <div className={styles.gridTop}>
        {/* Current Progress */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Current Progress</div>
          <div className={styles.donutWrap}>
            <div className={styles.donut} style={{ "--p": 75 }}></div>
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
              <FaTasks className={styles.icon} /> 1/4 Tasks Completed
            </li>
            <li>
              <FaAward className={styles.icon} /> 3 Badges Earned
            </li>
            <li>
              <FaCertificate className={styles.icon} /> 2 Certificates
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

        {/* Recent Activity */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Recent Activity</div>
          <ul className={styles.activity}>
            <li>
              <FaCode className={`${styles.bullet} ${styles.success}`} />
              <div>
                <div className={styles.link}>
                  Completed authentication module
                </div>
                <div className={styles.time}>2 hours ago</div>
              </div>
            </li>
            <li>
              <FaBug className={`${styles.bullet} ${styles.warning}`} />
              <div>
                <div className={styles.link}>
                  Bug fixed: Mobile responsive login
                </div>
                <div className={styles.time}>Yesterday</div>
              </div>
            </li>
            <li>
              <FaMedal className={`${styles.bullet} ${styles.violet}`} />
              <div>
                <div className={styles.link}>
                  Earned "Sprint Champion" badge
                </div>
                <div className={styles.time}>2 days ago</div>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className={styles.gridBottom}>
        {/* Upcoming Tasks */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Upcoming Tasks</div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>
                Implement user authentication
              </div>
              <div className={styles.muted}>Due: Aug 20</div>
            </div>
            <span className={`${styles.pill} ${styles.pillRed}`}>
              In Progress
            </span>
          </div>
          <div className={styles.task}>
            <div>
              <div className={styles.taskTitle}>
                Design course catalog UI
              </div>
              <div className={styles.muted}>Due: Aug 22</div>
            </div>
            <span className={`${styles.pill} ${styles.pillGray}`}>To Do</span>
          </div>
          <button className={`${styles.btn} ${styles.btnGreen}`}>
            View All Tasks
          </button>
        </div>

        {/* Team Leaderboard */}
        <div className={styles.card}>
          <div className={styles.cardTitle}>Team Leaderboard</div>
          <ul className={styles.leaderboard}>
            <li>
              <div className={`${styles.rank} ${styles.rank1}`}>1</div>
              <div className={styles.circleSm}>P</div>
              <div className={styles.lbName}>Priya Sharma</div>
              <div className={styles.lbPoints}>2,450 points</div>
              <div className={styles.lbBadge}>8</div>
            </li>
            <li>
              <div className={`${styles.rank} ${styles.rank2}`}>2</div>
              <div className={styles.circleSm}>A</div>
              <div className={styles.lbName}>Alex Kumar</div>
              <div className={styles.lbPoints}>2,380 points</div>
              <div className={styles.lbBadge}>7</div>
            </li>
            <li>
              <div className={`${styles.rank} ${styles.rank3}`}>3</div>
              <div className={styles.circleSm}>M</div>
              <div className={styles.lbName}>Maya Singh</div>
              <div className={styles.lbPoints}>2,250 points</div>
              <div className={styles.lbBadge}>6</div>
            </li>
            <li>
              <div className={styles.rank}>4</div>
              <div className={styles.circleSm}>R</div>
              <div className={styles.lbName}>Raj Patel</div>
              <div className={styles.lbPoints}>2,180 points</div>
              <div className={styles.lbBadge}>5</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}