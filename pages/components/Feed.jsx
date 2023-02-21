import React from 'react'

import { Box, Card, CardMedia, CardHeader, CardContent, CardActions, Typography, Button, IconButton, Avatar, Stack } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Feed = () => {
  return (
    <Box display="flex" height="100vh" overflow="auto" p={2}>
      <Box height="100%">
        <Stack spacing={2}>
      <Card width="100%">
        <CardHeader
          avatar={
            <Avatar>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title="rocky007"
          subheader="Jan 1, 2023"
        />
        <CardMedia
          sx={{ height: 240 }}
          image="https://source.unsplash.com/random"
          title="Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Don't think, just do
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card width="100%">
        <CardHeader
          avatar={
            <Avatar>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title="philnick"
          subheader="Jan 2, 2023"
        />
        <CardMedia
          sx={{ height: 240 }}
          image="https://source.unsplash.com/random"
          title="Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Just do it
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Card width="100%">
        <CardHeader
          avatar={
            <Avatar>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreHorizIcon />
            </IconButton>
          }
          title="theyoda"
          subheader="Jan 3, 2023"
        />
        <CardMedia
          sx={{ height: 240 }}
          image="https://source.unsplash.com/random"
          title="Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Do or do not, there is no try
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
      <Box display="block" height="160px"></Box>
      </Stack>
      </Box>
    </Box>
  )
}

export default Feed