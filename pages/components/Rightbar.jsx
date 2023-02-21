import React from 'react'

import { Avatar, Box, Button, Stack, Typography } from '@mui/material'

const Rightbar = () => {
  return (
      <Box 
        bgcolor="white" 
        sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block" } }}
        >
        <Stack direction="row" alignItems="center" justifyContent="space-between" p={2} pt={2} pb={1}>
            <Typography variant="body2">
                Suggestions for you
            </Typography>
            <Button sx={{textTransform: "initial"}}>See all</Button>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" bgcolor="white" p={2} pt={1}>
            <Avatar></Avatar>
            <Stack>
                <Typography>
                    username1234
                </Typography>
                <Typography variant="caption">
                    followed by user, user ...
                </Typography>
            </Stack>
            <Button>Follow</Button>
        </Stack>
        <Stack direction="row" spacing={2} alignItems="center" bgcolor="white" p={2} pt={1}>
            <Avatar></Avatar>
            <Stack>
                <Typography>
                    username1234
                </Typography>
                <Typography variant="caption">
                    followed by user, user ...
                </Typography>
            </Stack>
            <Button>Follow</Button>
        </Stack>
          <Stack direction="row" spacing={2} alignItems="center" bgcolor="white" p={2} pt={1}>
              <Avatar></Avatar>
              <Stack>
                  <Typography>
                      username1234
                  </Typography>
                  <Typography variant="caption">
                      followed by user, user ...
                  </Typography>
              </Stack>
              <Button>Follow</Button>
          </Stack>
      </Box>
  )
}

export default Rightbar