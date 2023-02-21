import React from 'react'

import { Box, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Typography, Icon, styled } from '@mui/material'
import {
  Home,
  Search,
  Explore,
  OndemandVideo,
  Chat,
  FavoriteBorder,
  Add,
  AccountCircle,
  Instagram,
} from "@mui/icons-material"

const ListItemIconStyled = styled(ListItemIcon) ({
  minWidth: "24px",
});

const ListItemTextStyled = styled(ListItemText) ({
  marginLeft: "16px",
  marginRight: "40px"
});

const Sidebar = () => {
  return (
    <Box bgcolor="#FFF" sx={{ display: { xs: "none", sm: "flex" } }}>
      <List>
        <ListItemButton divider={"true"}>
          <ListItemIconStyled sx={{ display: { xs: "none", sm: "block"} }}>
            <Instagram />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Instagram" sx={{ fontWeight: "700", display: { xs: "none", md: "block" } }} />
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <Home />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Home" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <Search />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Search" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <Explore />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Explore" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <OndemandVideo />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Reels" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <Chat />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Messages" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <FavoriteBorder />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Notifications" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <Add />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Create" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
        <ListItemButton>
          <ListItemIconStyled>
            <AccountCircle />
          </ListItemIconStyled>
          <ListItemTextStyled primary="Profile" sx={{ display: { xs: "none", md: "block" } }}/>
        </ListItemButton>
      </List>
    </Box>
  )
}

export default Sidebar