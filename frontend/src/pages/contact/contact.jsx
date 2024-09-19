import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Box, Paper } from '@mui/material';
import { LocationOn, Phone, Email } from '@mui/icons-material';
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
const ContactUs = () => {
  

  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ze7j9iy', 'template_h48hlkx', form.current, {
        publicKey: 'RoV5gqS8ijad3rlHp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          Swal.fire({title:'bien reçu',icon:'success',timer:3500});
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  const iconStyle = { color: 'rgb(34,164,175)', marginRight: '10px' };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      {/* Contact Information */}
      <Grid container spacing={4} mb={4}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
            <LocationOn style={iconStyle} />
            <Box>
              <Typography variant="h6" gutterBottom color={"rgb(255,186,0)"}>
                Our Location
              </Typography>
              <Typography variant="body1" >
                123 Main Street, Anytown, AN 12345
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
            <Phone style={iconStyle} />
            <Box>
              <Typography variant="h6" gutterBottom color={"rgb(255,186,0)"}>
                Phone
              </Typography>
              <Typography variant="body1">
                (123) 456-7890
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} >
          <Paper elevation={3} sx={{ p: 3, display: 'flex', alignItems: 'center' }}>
            <Email style={iconStyle}  />
            <Box>
              <Typography variant="h6" gutterBottom color={"rgb(255,186,0)"}>
                Email
              </Typography>
              <Typography variant="body1">
                info@plannerwebsite.com
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={4} >
        {/* Location Map */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Our Location
            </Typography>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13288.498113901764!2d-7.448954!3d33.628013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sma!4v1716898956634!5m2!1sen!2sma"
              width="100%"
              height="357"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </Paper>
        </Grid>
        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <form ref={form} onSubmit={sendEmail}>
              <TextField
                label="Name"
                name="user_name"
                
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Email"
                name="user_email"
                type="email"
                
                fullWidth
                margin="normal"
                required
              />
              <TextField
                label="Message"
                name="message"
                
                multiline
                rows={4}
                fullWidth
                margin="normal"
                required
              />
              <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                Send
              </Button>
               
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactUs;
