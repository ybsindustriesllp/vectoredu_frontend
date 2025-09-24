// components/TeamChat/TeamChat.jsx
import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './styles.modular.css';

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
    <div className="team-chat-container">
      <Navbar />
      
      <div className="chat-app-container">
        <div className="chat-sidebar">
          <div className="corporate-header">
            <h2>#CorporateIntern</h2>
          </div>
          
          <div className="channels-section">
            <h3 className="section-title">CHANNELS</h3>
            {channels.map(channel => (
              <div 
                key={channel.id} 
                className={`channel-item ${activeChat === channel.name ? 'active' : ''}`}
                onClick={() => handleChatSelect(channel.name)}
              >
                #{channel.name}
                {channel.unread > 0 && <span className="unread-count">{channel.unread}</span>}
              </div>
            ))}
          </div>
          
          <div className="members-section">
            <h3 className="section-title">TEAM MEMBERS</h3>
            {teamMembers.map(member => (
              <div 
                key={member.id} 
                className={`member-item ${activeChat === member.name ? 'selected' : ''}`}
                onClick={() => handleChatSelect(member.name)}
              >
                <div className={`member-avatar ${member.online ? 'online' : ''}`}></div>
                <span>{member.name}</span>
                {member.online && <span className="online-indicator"></span>}
              </div>
            ))}
          </div>
        </div>
        
        <div className="chat-main">
          <div className="chat-header">
            <h2>{activeChat.startsWith('#') ? activeChat : `@${activeChat}`}</h2>
          </div>
          
          <div className="messages-container">
            {messages.length > 0 ? (
              messages.map((message) => (
                <div key={message.id} className={`message ${message.isSender ? 'sender' : 'receiver'}`}>
                  {!message.isSender && (
                    <div className="message-info">
                      <span className="sender-name">{message.sender}</span>
                      <span className="message-time">{message.time}</span>
                    </div>
                  )}
                  <div className="message-content">
                    {message.content}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-messages">
                No messages yet. Start a conversation!
              </div>
            )}
          </div>
          
          <div className="message-input-container">
            <form onSubmit={handleSendMessage} className="message-form">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="message-input"
              />
              <button type="submit" className="send-button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamChat;