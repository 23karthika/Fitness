// src/components/VideoCard.js
import React, { useState } from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography, CardActions, Button, Dialog, DialogContent } from '@mui/material';
import { Container } from '@mui/material';

const   AerobicExercises = ({ title, description, videoSrc, thumbnail }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container style={{ width: '100%', backgroundColor: 'aqua' }}>
      <Card sx={{ maxWidth: 350, height: 350, margin: 5 }}>
        <CardActionArea onClick={handleClickOpen} >
          <CardMedia
            component="img"
            height="140"
            image={thumbnail}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
          <DialogContent>
            <video width="100%" controls>
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </DialogContent>
          <CardActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </CardActions>
        </Dialog>
      </Card>
    </Container>
  );
};

export default  AerobicExercises;
