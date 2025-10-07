import React from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Avatar, 
  Badge,
  IconButton 
} from '@mui/material'
import { 
  Business as BusinessIcon, 
  Notifications as NotificationsIcon 
} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'  
import Image from './passport.jpg'

function Navbar() {
  return (
    <AppBar 
      position="sticky" 
      elevation={1}
      sx={{ 
        backgroundColor: 'white', 
        color: 'text.primary',
        borderBottom: '1px solid',
        borderColor: 'divider'
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', px: 3 }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <BusinessIcon sx={{ fontSize: 28, color: 'primary.main' }} />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 700, 
              color: 'primary.main',
              letterSpacing: '-0.5px'
            }}
          >
            CorporateIntern
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', gap: 1 }}>
          {[
            { to: '/dashboard', label: 'Dashboard' },
            { to: '/projects', label: 'Projects' },
            { to: '/documents', label: 'Documents' },
            { to: '/chats', label: 'Chats' },
            { to: '/mentorship', label: 'Mentorship' },
            { to: '/analytics', label: 'Analytics' },
          ].map((link) => (
            <Button
              key={link.to}
              component={NavLink}
              to={link.to}
              sx={{
                color: 'text.secondary',
                fontWeight: 500,
                px: 2,
                '&.active': {
                  color: 'primary.main',
                  backgroundColor: 'primary.50',
                  borderBottom: '2px solid',
                  borderColor: 'primary.main',
                },
                '&:hover': {
                  backgroundColor: 'action.hover',
                }
              }}
            >
              {link.label}
            </Button>
          ))}
        </Box>

        {/* User Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="default" size="medium">
            <Badge badgeContent={5} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar 
            src={Image} 
            alt="User"
            sx={{ width: 36, height: 36 }}
          />
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Alex Kumar
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
