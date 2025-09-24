import React from 'react'
import styles from './styles.module.css'
import { FaBuilding, FaBell } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'  
import Image from './passport.jpg'

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <FaBuilding className={styles.icon} />
        <h2 className={styles.title}>CorporateIntern</h2>
      </div>
      <div className={styles.links}>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
        >
          Dashboard
        </NavLink>
        <NavLink 
          to="/projects" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
        >
          Projects
        </NavLink>
        {/* <NavLink 
          to="/tickets" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
        >
          Tickets
        </NavLink> */}
        <NavLink 
          to="/documents" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
        >
          Documents
        </NavLink>
        <NavLink 
          to="/chats" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
        >
          Chats
        </NavLink>
        <NavLink 
          to="/mentorship" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
        >
          Mentorship
        </NavLink>
        <NavLink 
          to="/analytics" 
          className={({ isActive }) => `${styles.link} ${isActive ? styles.active : ""}`}
        >
          Analytics
        </NavLink>
      </div>
      <div className={styles.user}>
        <div className={styles.notification}>
          <span className={styles.badge}>5</span>
          <FaBell />
        </div>
        <img
          src={Image}
          alt="User"
          className={styles.avatar}
        />
        <span className={styles.username}>Alex Kumar</span>
      </div>
    </div>
  )
}

export default Navbar
