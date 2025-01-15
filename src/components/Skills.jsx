import React from 'react';
import { Typography, Box, Grid, useMediaQuery, useTheme } from '@mui/material';

const skills = ['Python', 'Django', 'React', 'AWS', 'SQL', 'JavaScript', 'Web Development', 'Content Creation'];

export default function Skills() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // For screens smaller than 'sm'
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // For 'sm' to 'md'

  return (
    <Box
      id="skills"
      sx={{
        minHeight: '100vh', // Ensure it takes at least full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #7B5E57, #D3B8AE)',
      }}
    >
      {/* Heading */}
      <Typography
        variant={isMobile ? 'h5' : 'h4'} // Adjust heading size for smaller screens
        gutterBottom
        sx={{ fontWeight: 'bold', marginBottom: '1rem' }}
      >
        My Skills
      </Typography>

      {/* Skill Badges */}
      <Grid
        container
        spacing={isMobile ? 2 : 3} // Reduce spacing for smaller screens
        justifyContent="center"
        sx={{
          maxWidth: '800px',
          margin: '0 auto',
        }}
      >
        {skills.map((skill, index) => (
          <Grid
            item
            key={index}
            xs={isMobile ? 6 : isTablet ? 4 : 3} // Responsive grid sizing
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: isMobile ? 100 : isTablet ? 120 : 150, // Adjust size for different screens
                height: isMobile ? 100 : isTablet ? 120 : 150,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)', // Hover effect
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <Typography
                variant={isMobile ? 'body1' : 'h6'} // Adjust text size for smaller screens
                sx={{
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: '0 1rem',
                }}
              >
                {skill}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
