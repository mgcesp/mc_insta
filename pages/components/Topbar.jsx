import React from 'react'
import { AppBar, Box, IconButton, Toolbar, Typography, styled, Stack, InputBase, Icon, Badge, Avatar } from '@mui/material'
import { Instagram, Mail, FavoriteBorder } from '@mui/icons-material'
import SearchIcon from '@mui/icons-material/Search';

const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
});

const SearchBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    backgroundColor: "white",
}));

const SearchIconBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: '100%',
    margin: "8px",
    color: "black"
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    margin: "0",
    padding: "0"
}));

const IconsBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    marginRight: "8px",
    borderRadius: theme.shape.borderRadius,
}));

const Topbar = () => {
  return (
    <Box bgcolor="red" sx={{ display: { xs: "block", sm: "none" } }}>
        <AppBar position="sticky">
            <StyledToolbar>
                <Stack direction="row" alignItems="center">
                    <IconsBox>
                        <Instagram />
                    </IconsBox>
                </Stack>
                <SearchBox>
                    <SearchIconBox>
                        <SearchIcon />
                    </SearchIconBox>
                    <StyledInputBase placeholder='Search'></StyledInputBase>
                </SearchBox>
                <IconsBox>
                    <Badge badgeContent={3} color="error">
                        <FavoriteBorder />
                    </Badge>
                </IconsBox>
            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

export default Topbar