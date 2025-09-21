import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';

import { useRef, useEffect } from 'react';

import './navbar.scss'
import Logo from '../Logo';
import { Link } from 'react-router-dom';

const drawerWidth = 240;
const navItems = ['Wholesale Dealers', 'Auto Spares', 'Other Businesses', 'Contact Us'];
const jothiBrands = ['Jothi car world']
const actualWindow = window

function NavBar({ window, onHeightChange }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const navRef = useRef(null);
  const [openDrawer, setOpenDrawer] = React.useState(true);

  const handleDrawerClick = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    console.log(navRef.current);
    if (!navRef.current) return;

    onHeightChange(navRef.current.offsetHeight);
    const resizeObserver = new ResizeObserver(() => {
      onHeightChange(navRef.current.offsetHeight);
    });

    resizeObserver.observe(navRef.current);

    return () => resizeObserver.disconnect();
  }, [onHeightChange]);

  const handleDrawerToggle = (event) => {
    console.log('closing', event.currentTarget, event.target, event.delegateTarget);
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Jothi Motors
      </Typography>
      <Divider />
      <List>
        {
          navItems.map((item) => {
            let href = item.toLowerCase().replace(/\s+/g, '-')

            if (item === 'Other Businesses') {
              return (
                <>
                  <ListItem key={item} disablePadding >
                    <ListItemButton onClick={handleDrawerClick}>
                      <ListItemText primary={item} />
                      {openDrawer ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                  </ListItem>
                  <Collapse in={openDrawer} timeout="auto" unmountOnExit >
                    <List component="div" disablePadding>
                      {
                        jothiBrands.map((brand) => {

                          let href = brand.toLowerCase().replace(/\s+/g, '-')
                          return (
                            <ListItemButton href={href} key={brand} sx={{ p: 0, pl: 4 }}>
                              <ListItemText primary={brand} />
                            </ListItemButton>
                          )
                        })
                      }
                    </List>
                  </Collapse></>
              )
            } else {
              return (
                <ListItem key={item} disablePadding >
                  <ListItemButton href={`/${href}`} sx={{ textAlign: 'center' }}>
                    <ListItemText primary={item} />
                  </ListItemButton>
                </ListItem>
              )
            }
          })
        }
      </List>
    </Box >
  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget.children[1]);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRedirect = (to) => {
    console.log('redirecting to', to);
    actualWindow.location.href = to;
  }

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" ref={navRef}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textAlign: 'left' }}
          >
            <Link to="/">
              <Logo />
            </Link>
          </IconButton>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => {
              let href = item.toLowerCase().replace(/\s+/g, '-')

              if (item === 'Other Businesses') {
                return (
                  <>
                    <Button sx={{ color: '#fff', marginRight: '10px' }}
                      aria-controls={open ? 'basic-menu' : undefined} onClick={handleClick} >
                      {item}
                      <ExpandMore sx={{ ml: 0.25, padding: 0 }} />
                    </Button>
                    <Menu
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      slotProps={{
                        list: {
                          'aria-labelledby': 'basic-button',
                        },
                      }}
                    >
                      {
                        jothiBrands.map((brand) => {
                          let href = brand.toLowerCase().replace(/\s+/g, '-')
                          return <MenuItem key={brand} onClick={() => handleRedirect(href)}>{brand}</MenuItem>
                        })
                      }
                    </Menu>
                  </>
                )
              } else {
                return (
                  <Button key={item} href={`/${href}`} sx={{ color: '#fff', marginRight: '10px' }}>
                    {item}
                  </Button>
                )
              }
            })}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          className='mobile-drawer'
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}



export default NavBar;
