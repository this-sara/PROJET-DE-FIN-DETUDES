import React from 'react';
import { KeyboardArrowUp } from '@mui/icons-material';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';

const ScrollTop = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={useScrollTrigger()}>
        <Fab sx={{position:"fixed",bottom:33,right:33, color:"white", backgroundColor:"rgb(0,194,203)"}} color="rgb(0,194,203)" onClick={handleScrollTop}>
      <KeyboardArrowUp />
    </Fab>
    </Zoom>
    
  );
};

export default ScrollTop;

