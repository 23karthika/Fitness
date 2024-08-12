// src/pages/AerobicExercises.js
import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import AerobicExercises from './AerobicExercises';
import thumbnail1 from '../../assets/images/aerobic/522420191.jpg';
import thumbnail2 from '../../assets/images/aerobic/aerobic-vs-anaerobic-7-1024×644.jpg';
const AerobicExercisesPage = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Aerobic Exercises
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <AerobicExercises
            title="Aerobic Exercise 1"
            description="A great aerobic exercise to get your heart pumping."
            videoSrc="path_to_your_video1.mp4"
            thumbnail={thumbnail1}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AerobicExercises
            title="Aerobic Exercise 2"
            description="Another effective aerobic exercise for cardiovascular health."
            videoSrc="path_to_your_video2.mp4"
            // thumbnail={thumbnail2}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AerobicExercises
            title="Aerobic Exercise 3"
            description="Improve your stamina with this aerobic exercise."
            videoSrc="path_to_your_video3.mp4"
            // thumbnail={thumbnail3}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AerobicExercises
            title="Aerobic Exercise 3"
            description="Improve your stamina with this aerobic exercise."
            videoSrc="path_to_your_video3.mp4"
            // thumbnail={thumbnail4}
          />
        </Grid><Grid item xs={12} sm={6} md={4}>
          <AerobicExercises
            title="Aerobic Exercise 3"
            description="Improve your stamina with this aerobic exercise."
            videoSrc="path_to_your_video3.mp4"
            // thumbnail={thumbnail5}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AerobicExercises
            title="Aerobic Exercise 3"
            description="Improve your stamina with this aerobic exercise."
            videoSrc="path_to_your_video3.mp4"
            // thumbnail={thumbnail6}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <AerobicExercises
            title="Aerobic Exercise 3"
            description="Improve your stamina with this aerobic exercise."
            videoSrc="path_to_your_video3.mp4"
            // thumbnail={thumbnail7}
          />
        </Grid>
        {/* Add more AerobicExercises components as needed */}
      </Grid>
    </Box>
  );
};

export default AerobicExercisesPage;
