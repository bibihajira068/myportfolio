import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button, Grid } from '@mui/material';

const projects = [
  {
    title: 'Bridge & Boat height Monitoring System',
    description: ' I worked on in Final Year of Engineering bought us the KSCST Recognition.',
    image: '/iot.jpg',
    link: 'https://www.linkedin.com/posts/hajira722_teamwork-projectmanagement-iot-activity-7242948330148749312-8J6b?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'AWS Deployment Project',
    description: 'Deployed Django applications using AWS EC2 and RDS, optimizing cloud resources.',
    image: '/aws.jpg',
    link: 'https://www.linkedin.com/posts/hajira722_aws-cloudcomputing-infrastructuremanagement-activity-7267574741673140224-gTma?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'Meals Delivery App',
    description: 'In this project I performed CRUD Operations Using DRF I worked on models like Order, OrderItems, Reviews.',
    image: '/meals.jpg',
    link: 'https://www.linkedin.com/posts/hajira722_opentowork-django-restframework-activity-7243312445132308480-RRwB?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio using React and Material-UI.',
    image: '/portfolio.png',
    link: '',
  },
  {
    title: 'Y-Plan',
    description: 'The Django Rest Framework based project was deployed on EC2 The media and course videos were deployed on S3.',
    image: '/y-plan.jpg',
    link: 'https://www.linkedin.com/posts/hajira722_opentowork-aws-ec2-activity-7242497727266185217-3Wf5?utm_source=share&utm_medium=member_desktop',
  },
  {
    title: 'OmniSync Platform',
    description: 'Developed a dashboard to track and analyze Amazon MCF orders.',
    image: '/omnisync.png',
    link: 'https://drive.google.com/file/d/1qPjd7Vfgzhiw1kU9bYFpFhEEmmTCP2-f/view?usp=drive_link',
  },
];

export default function Projects() {
  return (
    <Box
      id="projects"
      sx={{
        backgroundColor: '#f7f3e9',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h4"
        sx={{
          fontWeight: 'bold',
          marginBottom: '2rem',
          color: '#333',
        }}
      >
        My Projects
      </Typography>

      {/* Projects Grid */}
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: 'center',
        }}
      >
        {projects.map((project, index) => (
          <Grid
            item
            key={index}
            xs={12}
            sm={6}
            md={4}
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Card
              sx={{
                maxWidth: 345,
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                borderRadius: '12px',
                backgroundColor: '#fff',
              }}
            >
              {/* Project Image */}
              <CardMedia
                component="img"
                alt={project.title}
                height="180"
                image={project.image}
                sx={{
                  objectFit: 'cover',
                }}
              />
              {/* Project Content */}
              <CardContent>
                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 'bold',
                    marginBottom: '0.5rem',
                  }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    marginBottom: '1rem',
                    color: '#666',
                  }}
                >
                  {project.description}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textTransform: 'none',
                  }}
                >
                  View Project
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
