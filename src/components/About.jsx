import React from 'react';
import { Typography, Box, Button } from '@mui/material';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Stack on small screens, row on larger screens
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        backgroundColor: '#f7f3e9', // Background for mocha mousse theme
        gap: '2rem',
      }}
    >
      {/* Profile Image Section */}
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: 250,
            height: 250,
            borderRadius: '50%',
            backgroundImage: 'url(/icon.png)', // Replace with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
          }}
        />
      </Box>

      {/* Text Content Section */}
      <Box
        sx={{
          flex: 2,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Who I Am
        </Typography>
        <Typography
          sx={{
            marginBottom: '2rem',
            fontSize: '1.2rem',
            lineHeight: 1.6,
            color: '#555',
          }}
        >
          I’m a 22-year-old software engineer passionate about data-driven
          solutions and entrepreneurship. My goal is to make an impact in
          technology and community development. With a strong foundation in
          software development and a vision for meaningful change, I’m
          constantly exploring new opportunities to grow and innovate.
        </Typography>

        {/* Buttons */}
        <Box sx={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Button
            variant="contained"
            color="primary"
            href="#contact"
            sx={{
              backgroundColor: '#8e44ad',
              '&:hover': { backgroundColor: '#6d3590' },
            }}
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            color="primary"
            href="/path-to-your-cv.pdf"
            target="_blank"
            sx={{
              borderColor: '#8e44ad',
              color: '#8e44ad',
              '&:hover': {
                backgroundColor: '#f7f3e9',
                borderColor: '#6d3590',
                color: '#6d3590',
              },
            }}
          >
            Download CV
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
