import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-scroll';
import { useMediaQuery, useTheme } from '@mui/material';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navLinks = [
    { label: 'About', to: 'about' },
    { label: 'Skills', to: 'skills' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ];

  return (
    <>
      <AppBar
        position="static"
        color="primary"
        sx={{
          height: 80,
          justifyContent: 'center',
          paddingX: isMobile ? 2 : 4,
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Bi Bi Hajira
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          ) : (
            <div>
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  color="inherit"
                  sx={{ marginLeft: 2 }}
                >
                  <Link to={link.to} smooth duration={500}>
                    {link.label}
                  </Link>
                </Button>
              ))}
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{ '& .MuiDrawer-paper': { width: 250 } }}
      >
        <List>
          {navLinks.map((link) => (
            <ListItem button key={link.to} onClick={handleDrawerToggle}>
              <ListItemText>
                <Link to={link.to} smooth duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                  {link.label}
                </Link>
              </ListItemText>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
