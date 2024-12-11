import React from 'react';
import { Typography, Box, Grid } from '@mui/material';

const skills = ['Python', 'SQL', 'React', 'Node.js', 'Power BI', 'Google Data Studio', 'QlikSense', 'Excel'];

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        height: '100vh', // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', // Centers content vertically
        alignItems: 'center', // Centers content horizontally
        textAlign: 'center',
        padding: '2rem',
        background: 'linear-gradient(135deg, #7B5E57, #D3B8AE)',
      }}
    >
      {/* Heading */}
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
        My Skills
      </Typography>

      {/* Skill Badges */}
      <Grid
        container
        spacing={3}
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
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 150,
                height: 150,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                backgroundColor: '#fff', // Primary color for theme
                // color: '#fff',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'scale(1.1)', // Hover effect
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              {/* <Typography variant="body1" sx={{ fontSize: '1rem', textAlign: 'center' }}> */}
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>

                {skill}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
