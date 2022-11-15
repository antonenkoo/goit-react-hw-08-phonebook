import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';

import * as React from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { NavLink } from 'react-router-dom';

const pages = ['Contacts'];
let settings = [];

const ResponsiveAppBar = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  settings = ['Logout'];

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleUserMenuItem = key => {
    setAnchorElUser(null);
    if (key === 'Logout') {
      dispatch(logOut());
    }
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <NavLink
            style={{
              color: 'inherit',
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              textDecoration: 'none',
              fontSize: '20px',
              marginRight: '20px',
            }}
            to="/"
          >
            HOME
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {isLoggedIn && (
              <NavLink
                style={{
                  color: 'inherit',
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontSize: '17px',
                }}
                to="/contacts"
              >
                {pages[0]}
              </NavLink>
            )}
          </Box>
          {isLoggedIn ? (
            <Box
              sx={{
                flexGrow: 0,
                display: 'flex',
                width: '100px',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  paddingTop: '10px',
                  paddingBottom: '10px',
                }}
              >
                <span> {user.name} </span>
              </Box>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar
                    alt={`${user.name}`}
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem
                    key={setting}
                    onClick={() => handleUserMenuItem(setting)}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <AuthNav />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
