import React from 'react';
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Switch,
  FormControlLabel,
  InputBase,
  Menu,
  MenuItem,
  Badge,
  Avatar,
  Paper,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventIcon from '@mui/icons-material/Event';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import StoreIcon from '@mui/icons-material/Store';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import BarChartIcon from '@mui/icons-material/BarChart';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';

// Extended sections with icons for a more complete admin experience
const sections = [
  { id: 'dashboard', label: 'Dashboard', icon: <DashboardIcon /> },
  { id: 'events', label: 'Events', icon: <EventIcon /> },
  { id: 'tickets', label: 'Tickets', icon: <ConfirmationNumberIcon /> },
  { id: 'merch', label: 'Merchandise', icon: <StoreIcon /> },
  { id: 'vouchers', label: 'Vouchers', icon: <CardGiftcardIcon /> },
  { id: 'reports', label: 'Reports', icon: <BarChartIcon /> },
  { id: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

// Styled container for the main content with gradient effects
const MainContainer = styled('div')(({ theme, darkmode }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  minHeight: '100vh',
  transition: 'background-color 0.3s, color 0.3s',
  background: darkmode
    ? 'linear-gradient(135deg, #121212 0%, #1d1d1d 100%)'
    : 'linear-gradient(135deg, #f5f5f5 0%, #ffffff 100%)',
  color: darkmode ? '#fff' : '#000',
}));

// Styled Search component
const Search = styled('div')(({ theme, darkmode }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: darkmode ? alpha('#fff', 0.15) : alpha('#000', 0.15),
  '&:hover': {
    backgroundColor: darkmode ? alpha('#fff', 0.25) : alpha('#000', 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: theme.spacing(2),
  width: '100%',
  maxWidth: 400,
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme, darkmode }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
  },
}));

export default function Admin() {
  // Dark/Light theme state
  const [darkMode, setDarkMode] = React.useState(true);

  // State for controlling mobile drawer
  const [mobileOpen, setMobileOpen] = React.useState(false);

  // Active section for rendering main content
  const [activeSection, setActiveSection] = React.useState('dashboard');

  // For notifications
  const [anchorNotif, setAnchorNotif] = React.useState(null);
  const openNotif = Boolean(anchorNotif);
  const handleNotifClick = (event) => {
    setAnchorNotif(event.currentTarget);
  };
  const handleNotifClose = () => {
    setAnchorNotif(null);
  };

  // User menu state
  const [anchorUser, setAnchorUser] = React.useState(null);
  const openUser = Boolean(anchorUser);
  const handleUserClick = (event) => {
    setAnchorUser(event.currentTarget);
  };
  const handleUserClose = () => {
    setAnchorUser(null);
  };

  // Toggle the drawer on mobile
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Select a section from the side nav
  const handleSectionSelect = (id) => {
    setActiveSection(id);
    setMobileOpen(false);
  };

  // INTERACTIVE EVENTS
  const initialEvents = [
    { id: 1, title: 'Summer Fest 2025', date: '2025-07-15', location: 'Central Park' },
    { id: 2, title: 'Winter Gala 2025', date: '2025-12-05', location: 'Downtown Hall' },
    { id: 3, title: 'Spring Jam 2025', date: '2025-04-22', location: 'City Square' },
  ];
  const [events, setEvents] = React.useState(initialEvents);

  const handleCreateEvent = () => {
    const title = prompt("Enter event title:");
    const date = prompt("Enter event date (YYYY-MM-DD):");
    const location = prompt("Enter event location:");
    if (title && date && location) {
      const newEvent = { id: Date.now(), title, date, location };
      setEvents([...events, newEvent]);
    }
  };

  const handleEditEvent = (id) => {
    const eventToEdit = events.find(e => e.id === id);
    if (!eventToEdit) return;
    const title = prompt("Enter new event title:", eventToEdit.title);
    const date = prompt("Enter new event date (YYYY-MM-DD):", eventToEdit.date);
    const location = prompt("Enter new event location:", eventToEdit.location);
    if (title && date && location) {
      const updatedEvents = events.map(e =>
        e.id === id ? { ...e, title, date, location } : e
      );
      setEvents(updatedEvents);
    }
  };

  const handleDeleteEvent = (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      setEvents(events.filter(e => e.id !== id));
    }
  };

  // INTERACTIVE TICKETS
  const initialTickets = [
    { id: 1, event: 'Summer Fest 2025', price: '$50', status: 'Active' },
    { id: 2, event: 'Winter Gala 2025', price: '$80', status: 'Sold Out' },
    { id: 3, event: 'Spring Jam 2025', price: '$40', status: 'Active' },
  ];
  const [tickets, setTickets] = React.useState(initialTickets);

  const handleCreateTicket = () => {
    const eventName = prompt("Enter event name:");
    const price = prompt("Enter ticket price:");
    const status = prompt("Enter ticket status (Active/Sold Out):");
    if (eventName && price && status) {
      const newTicket = { id: Date.now(), event: eventName, price, status };
      setTickets([...tickets, newTicket]);
    }
  };

  const handleEditTicket = (id) => {
    const ticketToEdit = tickets.find(t => t.id === id);
    if (!ticketToEdit) return;
    const eventName = prompt("Enter new event name:", ticketToEdit.event);
    const price = prompt("Enter new ticket price:", ticketToEdit.price);
    const status = prompt("Enter new ticket status (Active/Sold Out):", ticketToEdit.status);
    if (eventName && price && status) {
      const updatedTickets = tickets.map(t =>
        t.id === id ? { ...t, event: eventName, price, status } : t
      );
      setTickets(updatedTickets);
    }
  };

  const handleDeleteTicket = (id) => {
    if (window.confirm("Are you sure you want to delete this ticket?")) {
      setTickets(tickets.filter(t => t.id !== id));
    }
  };

  // INTERACTIVE MERCHANDISE
  const initialMerch = [
    { id: 1, item: 'Band T-Shirt', price: '$25', stock: 120 },
    { id: 2, item: 'Event Cap', price: '$15', stock: 200 },
    { id: 3, item: 'Poster', price: '$10', stock: 300 },
  ];
  const [merch, setMerch] = React.useState(initialMerch);

  const handleCreateMerch = () => {
    const item = prompt("Enter merchandise item name:");
    const price = prompt("Enter price:");
    const stock = prompt("Enter stock quantity:");
    if (item && price && stock) {
      const newMerch = { id: Date.now(), item, price, stock };
      setMerch([...merch, newMerch]);
    }
  };

  const handleEditMerch = (id) => {
    const merchToEdit = merch.find(m => m.id === id);
    if (!merchToEdit) return;
    const item = prompt("Enter new item name:", merchToEdit.item);
    const price = prompt("Enter new price:", merchToEdit.price);
    const stock = prompt("Enter new stock quantity:", merchToEdit.stock);
    if (item && price && stock) {
      const updatedMerch = merch.map(m =>
        m.id === id ? { ...m, item, price, stock } : m
      );
      setMerch(updatedMerch);
    }
  };

  const handleDeleteMerch = (id) => {
    if (window.confirm("Are you sure you want to delete this merchandise item?")) {
      setMerch(merch.filter(m => m.id !== id));
    }
  };

  // INTERACTIVE VOUCHERS
  const initialVouchers = [
    { id: 1, code: 'SAVE20', discount: '20%', description: 'Save 20% on all items' },
    { id: 2, code: 'EARLYBIRD', discount: '15%', description: 'Early bird discount for events' },
  ];
  const [vouchers, setVouchers] = React.useState(initialVouchers);

  const handleCreateVoucher = () => {
    const code = prompt("Enter voucher code:");
    const discount = prompt("Enter discount percentage (e.g., 20%):");
    const description = prompt("Enter voucher description:");
    if (code && discount && description) {
      const newVoucher = { id: Date.now(), code, discount, description };
      setVouchers([...vouchers, newVoucher]);
    }
  };

  const handleEditVoucher = (id) => {
    const voucherToEdit = vouchers.find(v => v.id === id);
    if (!voucherToEdit) return;
    const code = prompt("Enter new voucher code:", voucherToEdit.code);
    const discount = prompt("Enter new discount percentage:", voucherToEdit.discount);
    const description = prompt("Enter new voucher description:", voucherToEdit.description);
    if (code && discount && description) {
      const updatedVouchers = vouchers.map(v =>
        v.id === id ? { ...v, code, discount, description } : v
      );
      setVouchers(updatedVouchers);
    }
  };

  const handleDeleteVoucher = (id) => {
    if (window.confirm("Are you sure you want to delete this voucher?")) {
      setVouchers(vouchers.filter(v => v.id !== id));
    }
  };

  // Sidebar drawer content
  const drawer = (
    <Box sx={{ width: 260, display: 'flex', flexDirection: 'column', height: '100%' }}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
          FRINGE ADMIN
        </Typography>
      </Box>
      <Divider />
      <List>
        {sections.map((sec) => (
          <ListItem key={sec.id} disablePadding>
            <ListItemButton 
              onClick={() => handleSectionSelect(sec.id)}
              sx={{
                backgroundColor: activeSection === sec.id ? (darkMode ? '#30FF99' : '#009688') : 'transparent',
                color: activeSection === sec.id ? '#fff' : 'inherit',
                '&:hover': {
                  backgroundColor: activeSection === sec.id ? (darkMode ? '#1DEB6B' : '#4DB6AC') : (darkMode ? '#333' : '#f5f5f5'),
                },
              }}
            >
              <ListItemIcon sx={{ color: activeSection === sec.id ? '#fff' : (darkMode ? '#30FF99' : '#009688') }}>
                {sec.icon}
              </ListItemIcon>
              <ListItemText primary={sec.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2, textAlign: 'center' }}>
        <Typography variant="caption" sx={{ color: darkMode ? '#30FF99' : '#009688' }}>
          Admin Tools v2.0
        </Typography>
      </Box>
    </Box>
  );

  // Renders content for each admin section
  const renderSectionContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
              Dashboard Overview
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Quick summary of your system metrics.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Paper sx={{ p: 2, flex: '1 0 200px', textAlign: 'center', borderRadius: '12px', backgroundColor: darkMode ? '#1d1d1d' : '#fff' }} elevation={3}>
                <Typography variant="subtitle1" sx={{ color: darkMode ? '#30FF99' : '#009688' }}>Total Events</Typography>
                <Typography variant="h4">{events.length}</Typography>
              </Paper>
              <Paper sx={{ p: 2, flex: '1 0 200px', textAlign: 'center', borderRadius: '12px', backgroundColor: darkMode ? '#1d1d1d' : '#fff' }} elevation={3}>
                <Typography variant="subtitle1" sx={{ color: darkMode ? '#30FF99' : '#009688' }}>Tickets Sold</Typography>
                <Typography variant="h4">1,352</Typography>
              </Paper>
              <Paper sx={{ p: 2, flex: '1 0 200px', textAlign: 'center', borderRadius: '12px', backgroundColor: darkMode ? '#1d1d1d' : '#fff' }} elevation={3}>
                <Typography variant="subtitle1" sx={{ color: darkMode ? '#30FF99' : '#009688' }}>Merch Items</Typography>
                <Typography variant="h4">78</Typography>
              </Paper>
            </Box>
          </Box>
        );
      case 'events':
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
              Manage Events
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Create, update, or delete events with a modern interface.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                mr: 1, 
                borderRadius: '12px',
                backgroundColor: darkMode ? '#30FF99' : '#009688',
                '&:hover': {
                  backgroundColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                },
              }} 
              onClick={handleCreateEvent}
            >
              Create Event
            </Button>
            <Box sx={{ mt: 3 }}>
              <Typography variant="subtitle1" sx={{ mb: 1, color: darkMode ? '#30FF99' : '#009688' }}>Upcoming Events</Typography>
              {events.map((event) => (
                <Paper 
                  key={event.id} 
                  sx={{ 
                    p: 2, 
                    mb: 1, 
                    borderRadius: '12px',
                    backgroundColor: darkMode ? '#1d1d1d' : '#fff',
                  }} 
                  elevation={2}
                >
                  <Typography variant="h6">{event.title}</Typography>
                  <Typography variant="body2">Date: {event.date}</Typography>
                  <Typography variant="body2">Location: {event.location}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: '12px',
                        borderColor: darkMode ? '#30FF99' : '#009688',
                        color: darkMode ? '#30FF99' : '#009688',
                        '&:hover': {
                          borderColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                          backgroundColor: darkMode ? 'rgba(48, 255, 153, 0.1)' : 'rgba(0, 150, 136, 0.1)',
                        },
                      }} 
                      onClick={() => handleEditEvent(event.id)}
                    >
                      Edit Event
                    </Button>
                    <Button 
                      variant="text" 
                      color="error" 
                      sx={{ borderRadius: '12px' }} 
                      onClick={() => handleDeleteEvent(event.id)}
                    >
                      Delete Event
                    </Button>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        );
      case 'tickets':
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
              Manage Tickets
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Create, update, or delete tickets.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                mr: 1, 
                borderRadius: '12px',
                backgroundColor: darkMode ? '#30FF99' : '#009688',
                '&:hover': {
                  backgroundColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                },
              }} 
              onClick={handleCreateTicket}
            >
              Create Ticket
            </Button>
            <Box sx={{ mt: 3 }}>
              {tickets.map((ticket) => (
                <Paper 
                  key={ticket.id} 
                  sx={{ 
                    p: 2, 
                    mb: 1, 
                    borderRadius: '12px',
                    backgroundColor: darkMode ? '#1d1d1d' : '#fff',
                  }} 
                  elevation={2}
                >
                  <Typography variant="h6">{ticket.event}</Typography>
                  <Typography variant="body2">Price: {ticket.price}</Typography>
                  <Typography variant="body2">Status: {ticket.status}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: '12px',
                        borderColor: darkMode ? '#30FF99' : '#009688',
                        color: darkMode ? '#30FF99' : '#009688',
                        '&:hover': {
                          borderColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                          backgroundColor: darkMode ? 'rgba(48, 255, 153, 0.1)' : 'rgba(0, 150, 136, 0.1)',
                        },
                      }} 
                      onClick={() => handleEditTicket(ticket.id)}
                    >
                      Edit Ticket
                    </Button>
                    <Button 
                      variant="text" 
                      color="error" 
                      sx={{ borderRadius: '12px' }} 
                      onClick={() => handleDeleteTicket(ticket.id)}
                    >
                      Delete Ticket
                    </Button>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        );
      case 'merch':
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
              Manage Merchandise
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Create, update, or delete merchandise items.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                mr: 1, 
                borderRadius: '12px',
                backgroundColor: darkMode ? '#30FF99' : '#009688',
                '&:hover': {
                  backgroundColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                },
              }} 
              onClick={handleCreateMerch}
            >
              Create Item
            </Button>
            <Box sx={{ mt: 3 }}>
              {merch.map((item) => (
                <Paper 
                  key={item.id} 
                  sx={{ 
                    p: 2, 
                    mb: 1, 
                    borderRadius: '12px',
                    backgroundColor: darkMode ? '#1d1d1d' : '#fff',
                  }} 
                  elevation={2}
                >
                  <Typography variant="h6">{item.item}</Typography>
                  <Typography variant="body2">Price: {item.price}</Typography>
                  <Typography variant="body2">Stock: {item.stock}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: '12px',
                        borderColor: darkMode ? '#30FF99' : '#009688',
                        color: darkMode ? '#30FF99' : '#009688',
                        '&:hover': {
                          borderColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                          backgroundColor: darkMode ? 'rgba(48, 255, 153, 0.1)' : 'rgba(0, 150, 136, 0.1)',
                        },
                      }} 
                      onClick={() => handleEditMerch(item.id)}
                    >
                      Edit Item
                    </Button>
                    <Button 
                      variant="text" 
                      color="error" 
                      sx={{ borderRadius: '12px' }} 
                      onClick={() => handleDeleteMerch(item.id)}
                    >
                      Delete Item
                    </Button>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        );
      case 'vouchers':
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
              Manage Vouchers
            </Typography>
            <Typography variant="body1" sx={{ mb: 2 }}>
              Create, update, or delete discount vouchers.
            </Typography>
            <Button 
              variant="contained" 
              sx={{ 
                mr: 1, 
                borderRadius: '12px',
                backgroundColor: darkMode ? '#30FF99' : '#009688',
                '&:hover': {
                  backgroundColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                },
              }} 
              onClick={handleCreateVoucher}
            >
              Create Voucher
            </Button>
            <Box sx={{ mt: 3 }}>
              {vouchers.map((voucher) => (
                <Paper 
                  key={voucher.id} 
                  sx={{ 
                    p: 2, 
                    mb: 1, 
                    borderRadius: '12px',
                    backgroundColor: darkMode ? '#1d1d1d' : '#fff',
                  }} 
                  elevation={2}
                >
                  <Typography variant="h6">Code: {voucher.code}</Typography>
                  <Typography variant="body2">Discount: {voucher.discount}</Typography>
                  <Typography variant="body2">{voucher.description}</Typography>
                  <Box sx={{ mt: 1, display: 'flex', gap: 1 }}>
                    <Button 
                      variant="outlined" 
                      sx={{ 
                        borderRadius: '12px',
                        borderColor: darkMode ? '#30FF99' : '#009688',
                        color: darkMode ? '#30FF99' : '#009688',
                        '&:hover': {
                          borderColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                          backgroundColor: darkMode ? 'rgba(48, 255, 153, 0.1)' : 'rgba(0, 150, 136, 0.1)',
                        },
                      }} 
                      onClick={() => handleEditVoucher(voucher.id)}
                    >
                      Edit Voucher
                    </Button>
                    <Button 
                      variant="text" 
                      color="error" 
                      sx={{ borderRadius: '12px' }} 
                      onClick={() => handleDeleteVoucher(voucher.id)}
                    >
                      Delete Voucher
                    </Button>
                  </Box>
                </Paper>
              ))}
            </Box>
          </Box>
        );
      case 'reports':
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
              Reports & Analytics
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              View detailed analytics and system reports.
            </Typography>
            <Paper 
              sx={{ 
                p: 3, 
                borderRadius: '12px',
                backgroundColor: darkMode ? '#1d1d1d' : '#fff',
              }} 
              elevation={3}
            >
              <Typography variant="subtitle1" sx={{ color: darkMode ? '#30FF99' : '#009688' }}>Sales Report</Typography>
              <Typography variant="body2">Total Revenue: $12,345</Typography>
              <Typography variant="body2">Growth: 15% increase from last month</Typography>
            </Paper>
          </Box>
        );
      case 'settings':
        return (
          <Box>
            <Typography variant="h5" sx={{ mb: 2, fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
              Settings & Profile
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Update your account settings and preferences.
            </Typography>
            <Box component="form" sx={{ mt: 2 }}>
              <FormControlLabel
                control={
                  <Switch 
                    checked={darkMode} 
                    onChange={() => setDarkMode(!darkMode)} 
                    color="secondary"
                    sx={{
                      '& .MuiSwitch-thumb': {
                        backgroundColor: darkMode ? '#30FF99' : '#009688',
                      },
                      '& .MuiSwitch-track': {
                        backgroundColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                      },
                    }}
                  />
                }
                label="Enable Dark Mode"
              />
              <Box sx={{ mt: 3 }}>
                <Typography variant="subtitle1" sx={{ mb: 1, color: darkMode ? '#30FF99' : '#009688' }}>Profile Information</Typography>
                <Paper 
                  sx={{ 
                    p: 2, 
                    borderRadius: '12px',
                    backgroundColor: darkMode ? '#1d1d1d' : '#fff',
                  }} 
                  elevation={2}
                >
                  <Typography variant="body2">Name: Admin User</Typography>
                  <Typography variant="body2">Email: admin@example.com</Typography>
                </Paper>
              </Box>
            </Box>
          </Box>
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: 'flex',
        backgroundColor: darkMode ? '#121212' : '#fafafa',
        color: darkMode ? '#fff' : '#000',
        transition: 'background-color 0.3s, color 0.3s',
      }}
    >
      {/* TOP NAVIGATION */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: 'calc(100% - 260px)' },
          ml: { sm: '260px' },
          backgroundColor: darkMode ? '#1d1d1d' : '#fff',
          color: darkMode ? '#fff' : '#000',
          borderBottom: darkMode ? '1px solid #333' : '1px solid #e0e0e0',
          transition: 'background-color 0.3s, color 0.3s',
          boxShadow: 'none',
        }}
      >
        <Toolbar>
          {/* Mobile menu toggle */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {/* Title and Home Button */}
          <Typography variant="h6" sx={{ fontWeight: 'bold', color: darkMode ? '#30FF99' : '#009688' }}>
            FRINGE ADMIN
          </Typography>
          <Button
            variant="text"
            component={RouterLink}
            to="/"
            sx={{
              ml: 2,
              textTransform: 'none',
              color: darkMode ? '#fff' : '#000',
              border: darkMode ? '1.5px solid #30FF99' : '1.5px solid #009688',
              borderRadius: '12px',
              px: 2,
              '&:hover': {
                backgroundColor: darkMode ? 'rgba(48, 255, 153, 0.1)' : 'rgba(0, 150, 136, 0.1)',
              },
            }}
          >
            Home
          </Button>
          {/* Search Bar */}
          <Search darkmode={darkMode}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase placeholder="Search…" inputProps={{ 'aria-label': 'search' }} darkmode={darkMode} />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          {/* Notification Icon */}
          <IconButton color="inherit" onClick={handleNotifClick}>
            <Badge badgeContent={3} color="error">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Menu
            anchorEl={anchorNotif}
            open={openNotif}
            onClose={handleNotifClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleNotifClose}>New event created</MenuItem>
            <MenuItem onClick={handleNotifClose}>Ticket sale report ready</MenuItem>
            <MenuItem onClick={handleNotifClose}>Merch inventory low</MenuItem>
          </Menu>
          {/* User Profile Menu */}
          <IconButton color="inherit" onClick={handleUserClick}>
            <Avatar sx={{ width: 32, height: 32, backgroundColor: darkMode ? '#30FF99' : '#009688' }}>A</Avatar>
          </IconButton>
          <Menu
            anchorEl={anchorUser}
            open={openUser}
            onClose={handleUserClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleUserClose}>Profile</MenuItem>
            <MenuItem onClick={handleUserClose}>My Account</MenuItem>
            <MenuItem onClick={handleUserClose}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      
      {/* SIDE DRAWER */}
      <Box
        component="nav"
        sx={{
          width: { sm: 260 },
          flexShrink: { sm: 0 },
        }}
      >
        {/* Mobile Drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              width: 260, 
              borderRadius: '0 8px 8px 0',
              backgroundColor: darkMode ? '#1d1d1d' : '#fff',
            },
          }}
        >
          {drawer}
        </Drawer>
        {/* Permanent Desktop Drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              width: 260,
              boxSizing: 'border-box',
              backgroundColor: darkMode ? '#1d1d1d' : '#fff',
              color: darkMode ? '#fff' : '#000',
              transition: 'background-color 0.3s, color 0.3s',
              borderRadius: '0 8px 8px 0',
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* MAIN CONTENT AREA */}
      <MainContainer darkmode={darkMode}>
        <Toolbar />
        {renderSectionContent()}
      </MainContainer>

      {/* THEME TOGGLE SWITCH */}
      <Box
        sx={{
          position: 'fixed',
          bottom: 16,
          right: 16,
          backgroundColor: darkMode ? '#1d1d1d' : '#fff',
          borderRadius: '20px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
          p: '4px 8px',
          display: 'flex',
          alignItems: 'center',
          gap: 1,
          transition: 'background-color 0.3s',
        }}
      >
        {darkMode ? (
          <DarkModeIcon sx={{ color: '#30FF99' }} />
        ) : (
          <LightModeIcon sx={{ color: '#009688' }} />
        )}
        <FormControlLabel
          label=""
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
              color="secondary"
              sx={{
                '& .MuiSwitch-thumb': {
                  backgroundColor: darkMode ? '#30FF99' : '#009688',
                },
                '& .MuiSwitch-track': {
                  backgroundColor: darkMode ? '#1DEB6B' : '#4DB6AC',
                },
              }}
            />
          }
          sx={{ m: 0 }}
        />
      </Box>
    </Box>
  );
} 