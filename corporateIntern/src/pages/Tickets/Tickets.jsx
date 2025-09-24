import React, { useState } from "react";
import styles from "./styles.module.css";
import Navbar from "../../components/Navbar/Navbar.jsx";

export default function Tickets() {
  const [status, setStatus] = useState("All Tickets");
  const [priority, setPriority] = useState("All Priorities");
  const [assignee, setAssignee] = useState("All Assignees");
  const [searchTerm, setSearchTerm] = useState("");

  const tickets = [
    {
      id: "#001",
      priority: "High",
      status: "In Progress",
      title: "Login page not responsive on mobile",
      description:
        "The login form breaks on mobile devices below 768px width. Users cannot access the submit button and input fields overlap.",
      assigned: "Raj Patel",
      reported: "Priya Sharma",
      created: "Aug 18, 2024",
    },
    {
      id: "#002",
      priority: "Medium",
      status: "New",
      title: "Add dark mode toggle",
      description:
        "Users have requested a dark mode option for better viewing experience during late hours.",
      assigned: "Alex Kumar",
      reported: "User Feedback",
      created: "Aug 19, 2024",
    },
  ];

  // 🔎 Apply filtering logic
  const filteredTickets = tickets.filter((ticket) => {
    const statusMatch =
      status === "All Tickets" || ticket.status === status;
    const priorityMatch =
      priority === "All Priorities" || ticket.priority === priority;
    const assigneeMatch =
      assignee === "All Assignees" || ticket.assigned === assignee;
    const searchMatch =
      searchTerm === "" ||
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase());

    return statusMatch && priorityMatch && assigneeMatch && searchMatch;
  });

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Support Tickets</h2>
          <div className={styles.actions}>
            <input
              type="text"
              placeholder="Search tickets..."
              className={styles.search}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className={styles.createBtn}>+ Create Ticket</button>
          </div>
        </div>

        <div className={styles.filters}>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>All Tickets</option>
            <option>Open</option>
            <option>In Progress</option>
            <option>Resolved</option>
            <option>New</option>
          </select>

          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option>All Priorities</option>
            <option>Critical</option>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>

          <select value={assignee} onChange={(e) => setAssignee(e.target.value)}>
            <option>All Assignees</option>
            <option>Alex Kumar</option>
            <option>Priya Sharma</option>
            <option>Raj Patel</option>
            <option>Maya Singh</option>
          </select>
        </div>

        <div className={styles.ticketList}>
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <div key={ticket.id} className={styles.ticketCard}>
                <div className={styles.badges}>
                  <span className={styles.id}>{ticket.id}</span>
                  <span
                    className={`${styles.priority} ${
                      styles[ticket.priority.toLowerCase()]
                    }`}
                  >
                    {ticket.priority.toUpperCase()}
                  </span>
                  <span className={styles.status}>
                    {ticket.status.toUpperCase()}
                  </span>
                </div>

                <h3 className={styles.title}>{ticket.title}</h3>
                <p className={styles.description}>{ticket.description}</p>

                <div className={styles.footer}>
                  <span>Assigned to: {ticket.assigned}</span>
                  <span>Reported by: {ticket.reported}</span>
                  <span>Created: {ticket.created}</span>
                </div>
              </div>
            ))
          ) : (
            <p className={styles.noResults}>No tickets found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
