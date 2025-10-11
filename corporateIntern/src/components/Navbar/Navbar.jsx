import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Avatar,
  Badge,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery
} from '@mui/material'
import {
  Business as BusinessIcon,
  Notifications as NotificationsIcon,
  Menu as MenuIcon
} from '@mui/icons-material'
import { NavLink } from 'react-router-dom'
import { useTheme } from '@mui/material/styles'
import Image from './passport.jpg'

const navLinks = [
  { to: '/dashboard', label: 'Dashboard' },
  { to: '/projects', label: 'Projects' },
  { to: '/documents', label: 'Documents' },
  { to: '/chats', label: 'Chats' },
  { to: '/mentorship', label: 'Mentorship' },
  { to: '/analytics', label: 'Analytics' },
]

function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <>
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
          {/* Left Section: Logo + MenuIcon */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {isMobile && (
              <IconButton onClick={() => setDrawerOpen(true)} edge="start">
                <MenuIcon />
              </IconButton>
            )}
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

          {/* Center Section: Navigation Links (desktop only) */}
          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 1 }}>
              {navLinks.map((link) => (
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
          )}

          {/* Right Section: Notifications + Avatar + Name */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <IconButton color="default" size="medium">
              <Badge badgeContent={5} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Avatar src={Image} alt="User" sx={{ width: 36, height: 36 }} />
            {!isMobile && (
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                Alex Kumar
              </Typography>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile navigation */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem
                button
                key={link.to}
                component={NavLink}
                to={link.to}
                onClick={() => setDrawerOpen(false)}
              >
                <ListItemText primary={link.label} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Navbar
