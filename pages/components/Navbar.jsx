import React from 'react'

import { BottomNavigation, BottomNavigationAction, Box } from '@mui/material'
import {
  Home,
  Explore,
  OndemandVideo,
  Chat,
  Add,
  AccountCircle,
} from "@mui/icons-material"

const Navbar = () => {
  return (
    <Box bgcolor="yellow" sx={{ display: { xs: "block", sm: "none" } }}>
      <BottomNavigation>
        <BottomNavigationAction label="Recents" icon={<Home />} />
        <BottomNavigationAction label="Recents" icon={<Explore />} />
        <BottomNavigationAction label="Recents" icon={<OndemandVideo />} />
        <BottomNavigationAction label="Recents" icon={<Add />} />
        <BottomNavigationAction label="Recents" icon={<Chat />} />
        <BottomNavigationAction label="Recents" icon={<AccountCircle />} />
      </BottomNavigation>
    </Box>
  )
}

export default Navbar