import React from 'react';
import { Typography, Box, Grid, Card, CardContent } from '@mui/material';

const internships = [
  {
    title: 'AWS Deployment Intern',
    company: 'Propleads',
    duration: 'May 2024 - July 2024',
    description: 'Managed AWS EC2 and RDS setup for Django application deployment, resolving database failures and improving scalability.',
  },
  {
    title: 'Data Analyst Intern',
    company: 'TechCorp',
    duration: 'Jan 2024 - Mar 2024',
    description: 'Developed dashboards using Power BI and analyzed customer data to enhance retention strategies.',
  },
  {
    title: 'Frontend Developer Intern',
    company: 'WebWorks',
    duration: 'Aug 2023 - Dec 2023',
    description: 'Built responsive web pages using React and improved website performance by 30%.',
  },
  {
    title: 'Backend Developer Intern',
    company: 'CodeBase',
    duration: 'Jun 2023 - Aug 2023',
    description: 'Created RESTful APIs with Node.js and Express, integrating third-party authentication systems.',
  },
  {
    title: 'Digital Marketing Intern',
    company: 'MarketMasters',
    duration: 'Jan 2023 - Apr 2023',
    description: 'Optimized digital campaigns and increased website traffic by 20% through targeted SEO strategies.',
  },
  {
    title: 'AI Workshop Participant',
    company: 'Growth School',
    duration: 'Nov 2023',
    description: 'Gained insights into AI advancements and their application in business processes.',
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'DevStart',
    duration: 'Sep 2022 - Dec 2022',
    description: 'Developed a full-stack e-commerce platform using MERN stack, reducing page load time by 40%.',
  },
  {
    title: 'Database Administrator Intern',
    company: 'DataHive',
    duration: 'May 2022 - Jul 2022',
    description: 'Managed database optimization, resulting in 25% faster query execution.',
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      sx={{
        height: '140vh', // Full viewport height
        padding: '2rem',
        backgroundColor: '#f7f3e9', // Background for mocha mousse theme
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}
      >
        Experience
      </Typography>

      {/* Two-Column Layout */}
      <Grid container spacing={4} justifyContent="center">
        {internships.map((internship, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              sx={{
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '8px',
                padding: '1rem',
                backgroundColor: '#ffffff',
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
                <Typography variant="subtitle2" sx={{ color: 'text.secondary', marginBottom: '1rem' }}>
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
