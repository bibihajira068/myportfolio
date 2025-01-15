import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

const internships = [
  {
    title: 'AWS Deployment Intern',
    company: 'Shuzan Technology',
    duration: 'June 2023 - March 2024',
    description: 'Managed AWS EC2 and RDS setup for Django application deployment, resolving database failures and improving scalability.',
  },
  {
    title: 'Data Science with AI/ML Intern',
    company: 'Cranes Varsity',
    duration: 'Aug 2023 - Sept 2023',
    description: 'Learnt about different processes in Data analysis along with LLMs and NLP using Python as my core language.',
  },
  {
    title: 'FullStack Developer Intern',
    company: 'Shuzan Technology',
    duration: 'Nov 2023 - March 2024',
    description: 'Built responsive web pages using React and improved website performance by 30%. Also worked on live projects.',
  },
  {
    title: 'Human Resources Intern',
    company: 'PHN Technologies',
    duration: 'April 2023 - June 2023',
    description: 'Maintained & Managed Payroll Systems.',
  },
  {
    title: 'Python Intern',
    company: 'Sync Interns',
    duration: 'Apr 2023 - May 2023',
    description: 'Created optimized solutions for Python.',
  },
  {
    title: 'Web development Intern',
    company: 'Project Planners Corp',
    duration: 'April 2023 - May 2023',
    description: 'Created dummy websites.',
  },
  {
    title: 'Web Developer & Designing Intern',
    company: 'Oasis Infobyte',
    duration: 'Sept 2023 - Oct 2022',
    description: 'Developed a full-stack e-commerce platform using HTML, CSS, JS.',
  },
  {
    title: 'Web Development Intern',
    company: 'Code Alpha',
    duration: 'May 2023 - May 2023',
    description: 'Developed a full-stack e-commerce platform using HTML, CSS, JS.',
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        padding: { xs: '2rem 1rem', md: '4rem 2rem' },
        backgroundColor: '#f7f3e9', // Mocha mousse theme background
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          marginBottom: { xs: '1.5rem', md: '2.5rem' },
        }}
      >
        Experience
      </Typography>

      {/* Responsive Grid Layout */}
      <Grid container spacing={4} justifyContent="center">
        {internships.map((internship, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <Card
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                transition: 'box-shadow 0.3s ease',
                '&:hover': {
                  boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {internship.title}
                </Typography>
                <Typography variant="subtitle1" sx={{ color: 'text.secondary' }}>
                  {internship.company}
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: 'text.secondary', marginBottom: '1rem' }}
                >
                  {internship.duration}
                </Typography>
                <Typography variant="body2">{internship.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
