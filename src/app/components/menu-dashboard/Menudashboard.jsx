'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Typography from '@mui/joy/Typography';
import ListItem from '@mui/material/ListItem';
import Stack  from '@mui/material/Stack'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { usePathname } from 'next/navigation'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import Toolbar from '@mui/material/Toolbar';
import Link from 'next/link'
import Logo from './surface1.png'
import Image from 'next/image'
import ClearIcon from '@mui/icons-material/Clear';
import ModalClose from '@mui/joy/ModalClose';


export default function NavMenuItems({setOpen}) {
    const pathname = usePathname()
    return(
        <Box sx={{ width: 250 }}>
        <nav aria-label="main mailbox folders">
        <Toolbar onClick={()=>setOpen(false)}>
        <Stack spacing={2}  justifyContent="space-between" direction="row" sx={{ width: '100%' }}>
        <Typography level="title-lg">
            MENU
            
          </Typography>
          <ModalClose sx={{top: 12}}/>
          {/* <ClearIcon /> */}
          </Stack>
          </Toolbar>
        <Divider />
          <List >
          <Link href="/dashboard/inbox">
              <ListItem disablePadding  sx={{color: 'black'}} onClick={(e) => setOpen(false)}>
                
                <ListItemButton selected={
                  pathname === "/dashboard/inbox" ? true : false
                }>
                  <ListItemIcon>
                    <Image
                    width={25} 
                    height={25} 
                    src={Logo}
                    alt='image' />
                    {/* <InboxIcon /> */}
                  </ListItemIcon>
                  <ListItemText primary="Inbox" />
                </ListItemButton>
                
              </ListItem>
              </Link>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <AccountBalanceIcon />
                </ListItemIcon>
                <ListItemText primary="Drafts" />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
    </Box>
    )
}
