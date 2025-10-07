// components/TeamChat/TeamChat.jsx
import React, { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  TextField,
  Button,
  Badge,
  Avatar,
  Divider,
} from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import Navbar from "../../components/Navbar/Navbar";

const TeamChat = () => {
  // Sample data for channels and team members
  const channels = [
    { id: 1, name: "team-alpha-general", unread: 0 },
    { id: 2, name: "development", unread: 3 },
    { id: 3, name: "announcements", unread: 1 }
  ];

  const teamMembers = [
    { id: 1, name: "Priya Sharma", online: true },
    { id: 2, name: "Alex Kumar", online: true },
    { id: 3, name: "Jordan Smith", online: false },
    { id: 4, name: "Morgan Lee", online: true }
  ];

  // Sample messages for each channel and team member
  const allMessages = {
    "team-alpha-general": [
      { id: 1, sender: "Priya Sharma", time: "10:45 PM", content: "Great job on the API tests everyone! All endpoints are now fully covered.", isSender: false },
      { id: 2, sender: "Alex Kumar", time: "00:00 PM", content: "Authentication module is ready for code review. Please check the PR when you get a chance.", isSender: false },
      { id: 3, sender: "You", time: "00:05 PM", content: "I'll review it right away!", isSender: true }
    ],
    "development": [
      { id: 1, sender: "Jordan Smith", time: "09:30 AM", content: "I've pushed the new UI components to the development branch.", isSender: false },
      { id: 2, sender: "You", time: "10:15 AM", content: "Looks good! I noticed a small alignment issue on mobile.", isSender: true },
      { id: 3, sender: "Jordan Smith", time: "10:45 AM", content: "Thanks for catching that! I'll fix it now.", isSender: false },
      { id: 4, sender: "Alex Kumar", time: "11:30 AM", content: "The backend is ready for the new components. Let me know when you're done.", isSender: false }
    ],
    "announcements": [
      { id: 1, sender: "Morgan Lee", time: "09:00 AM", content: "Team meeting moved to 3 PM today in Conference Room B.", isSender: false },
      { id: 2, sender: "Morgan Lee", time: "02:30 PM", content: "Reminder: Client demo tomorrow at 10 AM. Please have your parts ready.", isSender: false }
    ],
    "Priya Sharma": [
      { id: 1, sender: "Priya Sharma", time: "10:00 AM", content: "Hey, could you help me with the database schema?", isSender: false },
      { id: 2, sender: "You", time: "10:05 AM", content: "Sure, what do you need help with?", isSender: true },
      { id: 3, sender: "Priya Sharma", time: "10:10 AM", content: "I'm not sure about the relationships between users and projects tables.", isSender: false }
    ],
    "Alex Kumar": [
      { id: 1, sender: "Alex Kumar", time: "11:00 AM", content: "I've reviewed your code. Nice work!", isSender: false },
      { id: 2, sender: "You", time: "11:05 AM", content: "Thanks! Any suggestions for improvement?", isSender: true },
      { id: 3, sender: "Alex Kumar", time: "11:10 AM", content: "Just some minor style issues. I left comments in the PR.", isSender: false }
    ],
    "Jordan Smith": [
      { id: 1, sender: "You", time: "01:00 PM", content: "Are we still on for pair programming today?", isSender: true },
      { id: 2, sender: "Jordan Smith", time: "01:05 PM", content: "Yes, 2 PM works for me. I'll set up the environment.", isSender: false }
    ],
    "Morgan Lee": [
      { id: 1, sender: "Morgan Lee", time: "03:00 PM", content: "Don't forget to submit your weekly reports by EOD.", isSender: false },
      { id: 2, sender: "You", time: "03:05 PM", content: "Just submitted mine. Thanks for the reminder!", isSender: true }
    ]
  };

  const [activeChat, setActiveChat] = useState("team-alpha-general");
  const [messages, setMessages] = useState(allMessages["team-alpha-general"]);
  const [newMessage, setNewMessage] = useState("");

  const handleChatSelect = (chatName) => {
    setActiveChat(chatName);
    setMessages(allMessages[chatName] || []);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: "You",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: newMessage,
      isSender: true
    };
    
    const updatedMessages = [...messages, newMsg];
    setMessages(updatedMessages);
    
    // Update the allMessages object to persist the new message
    allMessages[activeChat] = updatedMessages;
    
    setNewMessage("");
  };

  return (
    <Box>
      <Navbar />
      <Box sx={{ display: 'flex', height: 'calc(100vh - 64px)' }}>
        {/* Sidebar */}
        <Paper 
          elevation={2}
          sx={{ 
            width: 280, 
            borderRadius: 0,
            overflow: 'auto',
            borderRight: '1px solid',
            borderColor: 'divider'
          }}
        >
          <Box sx={{ p: 2, bgcolor: 'primary.main', color: 'white' }}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              #CorporateIntern
            </Typography>
          </Box>
          
          {/* Channels Section */}
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', mb: 1, display: 'block' }}>
              CHANNELS
            </Typography>
            <List disablePadding>
              {channels.map(channel => (
                <ListItem key={channel.id} disablePadding>
                  <ListItemButton
                    selected={activeChat === channel.name}
                    onClick={() => handleChatSelect(channel.name)}
                    sx={{ borderRadius: 1 }}
                  >
                    <ListItemText 
                      primary={`#${channel.name}`}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                    {channel.unread > 0 && (
                      <Badge badgeContent={channel.unread} color="error" />
                    )}
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>

          <Divider />

          {/* Team Members Section */}
          <Box sx={{ p: 2 }}>
            <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.secondary', mb: 1, display: 'block' }}>
              TEAM MEMBERS
            </Typography>
            <List disablePadding>
              {teamMembers.map(member => (
                <ListItem key={member.id} disablePadding>
                  <ListItemButton
                    selected={activeChat === member.name}
                    onClick={() => handleChatSelect(member.name)}
                    sx={{ borderRadius: 1 }}
                  >
                    <Badge
                      overlap="circular"
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                      variant="dot"
                      sx={{
                        '& .MuiBadge-badge': {
                          backgroundColor: member.online ? 'success.main' : 'grey.400',
                          width: 10,
                          height: 10,
                          borderRadius: '50%',
                        }
                      }}
                    >
                      <Avatar sx={{ width: 28, height: 28, mr: 1.5, fontSize: '0.875rem' }}>
                        {member.name.charAt(0)}
                      </Avatar>
                    </Badge>
                    <ListItemText 
                      primary={member.name}
                      primaryTypographyProps={{ variant: 'body2' }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Paper>

        {/* Main Chat Area */}
        <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Chat Header */}
          <Paper 
            elevation={1}
            sx={{ 
              p: 2, 
              borderRadius: 0,
              borderBottom: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              {activeChat.startsWith('#') ? activeChat : `@${activeChat}`}
            </Typography>
          </Paper>

          {/* Messages Container */}
          <Box 
            sx={{ 
              flex: 1, 
              overflow: 'auto', 
              p: 3,
              bgcolor: 'background.default'
            }}
          >
            {messages.length > 0 ? (
              messages.map((message) => (
                <Box 
                  key={message.id} 
                  sx={{ 
                    display: 'flex',
                    justifyContent: message.isSender ? 'flex-end' : 'flex-start',
                    mb: 2
                  }}
                >
                  <Paper
                    elevation={1}
                    sx={{
                      p: 2,
                      maxWidth: '70%',
                      bgcolor: message.isSender ? 'primary.main' : 'background.paper',
                      color: message.isSender ? 'white' : 'text.primary'
                    }}
                  >
                    {!message.isSender && (
                      <Box sx={{ mb: 0.5 }}>
                        <Typography variant="caption" sx={{ fontWeight: 600, display: 'block' }}>
                          {message.sender}
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                          {message.time}
                        </Typography>
                      </Box>
                    )}
                    <Typography variant="body2">
                      {message.content}
                    </Typography>
                  </Paper>
                </Box>
              ))
            ) : (
              <Box sx={{ textAlign: 'center', py: 4 }}>
                <Typography variant="body1" color="text.secondary">
                  No messages yet. Start a conversation!
                </Typography>
              </Box>
            )}
          </Box>

          {/* Message Input */}
          <Paper 
            elevation={3}
            sx={{ 
              p: 2,
              borderRadius: 0,
              borderTop: '1px solid',
              borderColor: 'divider'
            }}
          >
            <Box 
              component="form" 
              onSubmit={handleSendMessage}
              sx={{ display: 'flex', gap: 1 }}
            >
              <TextField
                fullWidth
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                size="small"
                variant="outlined"
              />
              <Button 
                type="submit" 
                variant="contained"
                endIcon={<SendIcon />}
                sx={{ minWidth: 100 }}
              >
                Send
              </Button>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Box>
  );
};

export default TeamChat;
