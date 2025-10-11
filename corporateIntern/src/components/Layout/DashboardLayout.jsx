import React, { useState } from 'react'
import { Outlet, NavLink, useLocation } from 'react-router-dom'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Badge,
  Avatar,
  useMediaQuery,
  Tooltip,
  InputBase,
  Paper
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  Folder as ProjectsIcon,
  Description as DocumentsIcon,
  Forum as ChatsIcon,
  School as MentorshipIcon,
  QueryStats as AnalyticsIcon,
  ConfirmationNumber as TicketsIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon
} from '@mui/icons-material'

const drawerWidth = 260

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { to: '/projects', label: 'Projects', icon: <ProjectsIcon /> },
  { to: '/documents', label: 'Documents', icon: <DocumentsIcon /> },
  { to: '/chats', label: 'Chats', icon: <ChatsIcon /> },
  { to: '/mentorship', label: 'Mentorship', icon: <MentorshipIcon /> },
  { to: '/analytics', label: 'Analytics', icon: <AnalyticsIcon /> },
  { to: '/tickets', label: 'Tickets', icon: <TicketsIcon /> },
]

function DashboardLayout() {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'))
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  const toggleDrawer = () => setMobileOpen((prev) => !prev)

  const drawerContent = (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 2.5, py: 2 }}>
        <Box sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: 'primary.main' }} />
        <Typography variant="h6" sx={{ fontWeight: 700 }}>CorporateIntern</Typography>
      </Box>
      <Divider />
      <List sx={{ py: 1 }}>
        {navItems.map((item) => {
          const active = location.pathname === item.to
          return (
            <ListItemButton
              key={item.to}
              component={NavLink}
              to={item.to}
              sx={{
                mx: 1,
                mb: 0.5,
                borderRadius: 1.5,
                color: active ? 'primary.main' : 'text.secondary',
                backgroundColor: active ? 'rgba(99,102,241,0.08)' : 'transparent',
                '&.active': {
                  color: 'primary.main',
                  backgroundColor: 'rgba(99,102,241,0.08)'
                }
              }}
              onClick={() => setMobileOpen(false)}
            >
              <ListItemIcon sx={{ minWidth: 40, color: active ? 'primary.main' : 'text.disabled' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.label} primaryTypographyProps={{ fontWeight: active ? 700 : 500 }} />
            </ListItemButton>
          )
        })}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Box sx={{ px: 2, py: 2 }}>
        <Paper variant="outlined" sx={{ p: 1.5, borderRadius: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Tips: Use the analytics page to monitor progress.
          </Typography>
        </Paper>
      </Box>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', bgcolor: 'background.default' }}>
      <AppBar
        position="fixed"
        elevation={0}
        color="inherit"
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          ml: isDesktop ? `${drawerWidth}px` : 0,
          width: isDesktop ? `calc(100% - ${drawerWidth}px)` : '100%'
        }}
      >
        <Toolbar sx={{ gap: 2, px: 3 }}>
          {!isDesktop && (
            <IconButton edge="start" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          )}
          <Paper
            elevation={0}
            sx={{
              px: 1.5,
              py: 0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              flex: 1,
              maxWidth: 560
            }}
          >
            <SearchIcon fontSize="small" sx={{ color: 'text.disabled' }} />
            <InputBase placeholder="Search…" sx={{ flex: 1 }} />
          </Paper>
          <Box sx={{ flex: 1 }} />
          <Tooltip title="Notifications">
            <IconButton>
              <Badge color="error" badgeContent={3}>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Tooltip>
          <Avatar sx={{ width: 32, height: 32 }}>A</Avatar>
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { lg: drawerWidth }, flexShrink: { lg: 0 } }}>
        {isDesktop ? (
          <Drawer
            variant="permanent"
            open
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
                borderRight: '1px solid',
                borderColor: 'divider'
              }
            }}
          >
            {drawerContent}
          </Drawer>
        ) : (
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={toggleDrawer}
            ModalProps={{ keepMounted: true }}
            sx={{
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth
              }
            }}
          >
            {drawerContent}
          </Drawer>
        )}
      </Box>

      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  )
}

export default DashboardLayout