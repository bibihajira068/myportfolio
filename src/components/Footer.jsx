import React from 'react';
import { Typography, Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';



export default function Footer() {
  return (
    <Box
      id="Footer"
      sx={{
        height: '10vh', // Full viewport height
        padding: '1rem',
        background: '#3E2723',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white',
      }}
    >
      {/* Left Section */}
      <Typography>© Made with ♥ by Hajira</Typography>

      {/* Right Section: Social Media Buttons */}
      <Box sx={{ display: 'flex', gap: '1rem' }}>
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
    </Box>
  );
}
