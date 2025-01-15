import React from 'react';
import { Typography, Box, Button } from '@mui/material';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        minHeight: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, // Column for small screens, row for larger screens
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: { xs: '2rem', md: '4rem' },
        backgroundColor: '#f7f3e9', // Mocha mousse theme background
        gap: { xs: '2rem', md: '4rem' },
      }}
    >
      {/* Profile Image Section */}
      <Box
        sx={{
          flex: { xs: '0 0 auto', md: '0 0 auto' },
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: { xs: '200px', sm: '250px', md: '300px' },
          height: { xs: '200px', sm: '250px', md: '300px' },
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '50%', // Ensures the image is round
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
          maxWidth: { md: '60%' },
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
          }}
        >
          Who I Am
        </Typography>
        <Typography
          sx={{
            marginBottom: '2rem',
            fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
            lineHeight: 1.6,
            color: '#555',
          }}
        >
          A 2024 graduate and passionate Software Engineer actively seeking opportunities to grow 
          and contribute in the tech industry. I have hands-on experience in React-based development, 
          including deploying scalable Django applications on AWS. 
          Beyond coding, I love creating content on LinkedIn, sharing insights on tech and career growth. 
          I’m a 22-year-old software engineer passionate about data-driven
          solutions and entrepreneurship. My goal is to make an impact in
          technology and community development. With a strong foundation in
          software development and a vision for meaningful change, I’m
          constantly exploring new opportunities to grow and innovate.
        </Typography>

        {/* Action Buttons */}
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            justifyContent: { xs: 'center', md: 'flex-start' },
          }}
        >
          {/* <Button
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
          </Button> */}
        </Box>
      </Box>
    </Box>
  );
}
