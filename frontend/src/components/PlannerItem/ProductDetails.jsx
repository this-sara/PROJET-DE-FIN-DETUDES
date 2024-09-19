import React, { useState } from 'react';
import { Box, Typography, Stack, Dialog, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

function ProductDetails({ name, id, price, description, image }) {
  const [selectedImg, setSelectedImg] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);

  // Base URL of your images
  const baseURL = "http://localhost:4001/images/";

  // Array of image URLs
  const images = [
    `${baseURL}${image}`, 
    "undeted4.jpg", 
    "undeted3.jpg"
  ];

  const handleZoomOpen = () => {
    setZoomOpen(true);
  };

  const handleZoomClose = () => {
    setZoomOpen(false);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2.5,
        flexDirection: { xs: 'column', sm: 'row' },
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <img
          width={300}
          src={images[selectedImg]}
          alt=""
          onClick={handleZoomOpen}
          style={{ cursor: 'pointer' }}
        />
      </Box>
      <Box sx={{ py: 2, textAlign: { xs: 'center', sm: 'left' } }}>
        <Typography variant="h5">20% OFF</Typography>
        <Typography my={0.4} fontSize="22px" color="crimson" variant="h6">
          {name}
        </Typography>
        <Typography variant="body1">{description}</Typography>
        <Stack
          sx={{ justifyContent: { xs: 'center', sm: 'flex-start' } }}
          direction="row"
          gap={1}
          my={1}
        >
          {images.map((item, index) => (
            <img 
              key={index} 
              width={90} 
              height={120} 
              src={item} 
              alt="" 
              onClick={() => setSelectedImg(index)}
              style={{ cursor: 'pointer' }}
            />
          ))}
        </Stack>
      </Box>

      <Dialog
        open={zoomOpen}
        onClose={handleZoomClose}
        maxWidth="md"
        fullWidth
      >
        <IconButton
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '50%',
            m: 1
          }}
          onClick={handleZoomClose}
        >
          <Close />
        </IconButton>
        <Box sx={{ textAlign: 'center', p: 2 }}>
          <img src={images[selectedImg]} alt="" style={{ width: '100%', height: 'auto' }} />
        </Box>
      </Dialog>
    </Box>
  );
}

export default ProductDetails;
