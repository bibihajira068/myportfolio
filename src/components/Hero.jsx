import React from 'react';
import { Typography, Box, Button, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

export default function About() {
  return (
    <Box
      id="about"
      sx={{
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem 1rem',
        background: 'linear-gradient(135deg, #7B5E57, #D3B8AE)',

        // backgroundColor: '#f7f3e9', // Mocha mousse theme
      }}
    >
      {/* Oval-shaped Image Placeholder */}
      <Box
  sx={{
    width: 150,
    height: 150,
    borderRadius: '50%',
    backgroundImage: 'url(/image.jpg)', // Path to your image
    backgroundSize: 'cover', // Ensures the image covers the entire area
    backgroundPosition: 'center', // Centers the image
    marginBottom: '1rem',
  }}
/>


      {/* About Me Section */}
      <Typography variant="h4" gutterBottom>
        About Me
      </Typography>
      <Typography sx={{ maxWidth: '600px', marginBottom: '2rem' }}>
        I’m a 22-year-old software engineer passionate about data-driven solutions and entrepreneurship.
        My goal is to make an impact in technology and community development.
      </Typography>

      {/* Social Media Buttons */}
      <Box sx={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <IconButton
          aria-label="LinkedIn"
          component="a"
          href="https://www.linkedin.com/in/hajira722/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#0072b1' }}
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="GitHub"
          component="a"
          href="https://github.com/bibihajira068"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#333' }}
        >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Twitter"
          component="a"
          href="https://x.com/hajira722"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: '#1DA1F2' }}
        >
          <TwitterIcon fontSize="large" />
        </IconButton>
        <IconButton
          aria-label="Email"
          component="a"
          href="mailto:bibihajira068@gmail.com"
          sx={{ color: '#D44638' }}
        >
          <EmailIcon fontSize="large" />
        </IconButton>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Button
          variant="contained"
          color="primary"
          href="mailto:bibihajira068@gmail.com"
          sx={{
            backgroundColor: '#8e44ad', // Theme color
            '&:hover': { backgroundColor: '#6d3590' },
          }}
        >
          Contact Me
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="/BI_BI_HAJIRA_RESUME.pdf"
          target="_blank"
          sx={{
            borderColor: '#8e44ad', // Theme color
            color: '#8e44ad',
            '&:hover': { backgroundColor: '#f7f3e9', borderColor: '#6d3590', color: '#6d3590' },
          }}
        >
          Download CV
        </Button>
      </Box>
    </Box>
  );
}
