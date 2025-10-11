import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  MenuItem,
  Select,
  FormControl,
  Chip,
  InputAdornment,
} from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

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

  // Apply filtering logic
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

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'critical': return 'error';
      case 'high': return 'error';
      case 'medium': return 'warning';
      case 'low': return 'info';
      default: return 'default';
    }
  };

  return (
    <Box>
      <Container maxWidth="xl" sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
          <Typography variant="h4" sx={{ fontWeight: 700 }}>
            Support Tickets
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
            <TextField
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              size="small"
              sx={{ width: 300 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" color="primary">
              + Create Ticket
            </Button>
          </Box>
        </Box>

        {/* Filters */}
        <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <MenuItem value="All Tickets">All Tickets</MenuItem>
              <MenuItem value="Open">Open</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Resolved">Resolved</MenuItem>
              <MenuItem value="New">New</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
            >
              <MenuItem value="All Priorities">All Priorities</MenuItem>
              <MenuItem value="Critical">Critical</MenuItem>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>

          <FormControl size="small" sx={{ minWidth: 150 }}>
            <Select
              value={assignee}
              onChange={(e) => setAssignee(e.target.value)}
            >
              <MenuItem value="All Assignees">All Assignees</MenuItem>
              <MenuItem value="Alex Kumar">Alex Kumar</MenuItem>
              <MenuItem value="Priya Sharma">Priya Sharma</MenuItem>
              <MenuItem value="Raj Patel">Raj Patel</MenuItem>
              <MenuItem value="Maya Singh">Maya Singh</MenuItem>
            </Select>
          </FormControl>
        </Box>

        {/* Ticket List */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {filteredTickets.length > 0 ? (
            filteredTickets.map((ticket) => (
              <Card key={ticket.id}>
                <CardContent>
                  <Box sx={{ display: 'flex', gap: 1, mb: 2 }}>
                    <Chip 
                      label={ticket.id} 
                      size="small" 
                      variant="outlined"
                    />
                    <Chip 
                      label={ticket.priority.toUpperCase()} 
                      color={getPriorityColor(ticket.priority)}
                      size="small"
                    />
                    <Chip 
                      label={ticket.status.toUpperCase()} 
                      size="small"
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {ticket.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {ticket.description}
                  </Typography>

                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                    <Typography variant="caption" color="text.secondary">
                      Assigned to: <strong>{ticket.assigned}</strong>
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Reported by: <strong>{ticket.reported}</strong>
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      Created: <strong>{ticket.created}</strong>
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ py: 4 }}>
              No tickets found.
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  );
}
