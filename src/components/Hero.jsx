import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import VideoPlayer from 'react-background-video-player';

const Hero = () => (
<>
  
    <Box
      sx={{ mt: { sm: '40px', xs: '30px' }, ml: { sm: '40px' }, mr: { sm: '40px' } }}
      position="relative"
      
    >
        <VideoPlayer
              className='video'
              src={
                'https://res.cloudinary.com/dlslkjyrn/video/upload/v1682333834/ezgif.com-reverse_1_online-video-cutter.com_evqn1o.mp4'
              }
              autoPlay={true}
              muted={true}
            />
            <Box className='hero__content'>
        
        <Typography
          fontWeight={700}
          sx={{ fontSize: { lg: '44px', xs: '40px' } }}
          color="#fff" 
          mb="23px"
          mt="30px"
          align='center'
        >
          Sweat, Smile <br />
          And Repeat
        </Typography>
        <Typography align='center' color="#fff"  fontSize="22px" fontFamily="Alegreya" lineHeight="35px">
          Check out the most effective exercises personalized to you
        </Typography>
        <Stack>
          <a
            href="#exercises"
            className='hero__button'
            
          >
            Explore Exercises
          </a>
        </Stack>
      </Box>
    </Box>
</>
);

export default Hero;
