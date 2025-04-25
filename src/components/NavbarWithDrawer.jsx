import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import logoImage from '../assets/images/logo.png';

export default function NavbarWithDrawer() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [activeLink, setActiveLink] = useState('تواصل معنا');
  const isMediumUp = useMediaQuery(theme.breakpoints.up('md'));

  const toggleDrawer = (state) => () => {
    setOpen(state);
  };

  const navLinks = ['الصفحة الرئيسية', 'اعمالنا', 'خدماتنا', 'نبذة عنا', 'تواصل معنا'];

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {navLinks.map((text) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box>
        <AppBar position="static" sx={{ backgroundColor: 'white', color: 'black', boxShadow: 'none', }}>
          <Toolbar sx={{ justifyContent: 'space-between', gap: 2, paddingBlock: '15px' }}>

            {/* logo */}
            <img src={logoImage} alt="Logo" style={{ height: '57px', width: '47px' }} />

            {/* Center links */}
            {isMediumUp && (
              <Box sx={{ display: 'flex', gap: 3 }}>
                {navLinks.map((text) => (
                  <Button
                    key={text}
                    onClick={() => setActiveLink(text)}
                    sx={{
                      color: 'black',
                      fontWeight: "bold",
                      fontSize: '16px',
                      backgroundColor: activeLink === text ? '#E7D8F380' : 'transparent',
                      border: activeLink === text ? '1px solid #59287F' : 'none',
                      borderRadius: '8px',
                    }}
                  >
                    {text}
                  </Button>
                ))}
              </Box>
            )}

            {/* Left side buttons */}
            {isMediumUp ? (
              <Box sx={{ display: 'flex', gap: '8px' }}>
                <Button variant="text" sx={{ color: '#59287F', backgroundColor: '#E7D8F3', padding: '12px 4px', border: '1px solid #59287F', width: "61px", height: "56px", fontSize: '18px', borderRadius: '12px' }}>EN</Button>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: '#59287F',
                    color: 'white',
                    padding: '12px 4px',
                    width: '164px',
                    height: '56px',
                    fontSize: '18px',
                    borderRadius: '12px',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span>اتصل بنا</span>
                    <ArrowBackIcon sx={{ fontSize: 24, color: 'white' }} />
                  </Box>
                </Button>
              </Box>
            ) : (
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            )}
          </Toolbar>
        </AppBar>

        {/* Drawer */}
        <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Box >
    </>
  );
}
