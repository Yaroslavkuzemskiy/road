'use client'
import {Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, Hidden } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import NavMenuItems from '../menu-dashboard/Menudashboard'
import Link from 'next/link';
import Stack  from '@mui/material/Stack'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircle from '@mui/icons-material/AccountCircle';



export default function AppBarHeader() {
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';
    const [isOpen, setOpen] = useState(false)

    const handleMenuClose = () => {
        setAnchorEl(null);
       
      };
      const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
      };
     
    return(
       <>
            <AppBar position="static" sx={{ paddingLeft: 3, paddingRight: 3, marginBottom: 4, background: '#6b676e' }} >
                <Toolbar>
                   
                        <IconButton 
                        // sx={{ display: { xl: 'none', xs: 'block' } }}
                            onClick={() => setOpen(true)}
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                    
                    <Stack spacing={2} justifyContent="space-between" direction="row" sx={{ width: '100%' }}>
                        <Link href='/dashboard' >
                            <Typography variant="h6" component="div" sx={{ color: 'white', flexGrow: 1 }}>
                                Dashboard
                            </Typography>

                        </Link>
                    </Stack>
                    <Box >
                        <IconButton
                            size="large"
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            id={menuId}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={isMenuOpen}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
                        </Menu>

                        {/* <Button component={RouterLink} to='settings'
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  Settings
                </Button> */}

                    </Box>
                </Toolbar>
            </AppBar>

            <Drawer
                anchor="left"
                open={isOpen}
                onClose={() => setOpen(false)}
            >
        
                <NavMenuItems setOpen={setOpen} />
            </Drawer>
            </>
    )
}
