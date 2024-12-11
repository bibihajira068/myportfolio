import React from 'react';
import { Box, Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import Slider from 'react-slick';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'Developed a MERN stack e-commerce platform with integrated payment gateway.',
    image: '/ecommerce.jpg',
    link: '#',
  },
  {
    title: 'AWS Deployment Project',
    description: 'Deployed Django applications using AWS EC2 and RDS, optimizing cloud resources.',
    image: '/aws.jpg',
    link: '#',
  },
  {
    title: 'Data Visualization Dashboard',
    description: 'Created interactive dashboards using Power BI to visualize customer data.',
    image: '/dashboard.jpg',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio using React and Material-UI.',
    image: '/portfolio.jpg',
    link: '#',
  },
];

export default function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      id="projects"
      sx={{
        height: '100vh',
        padding: '2rem',
        backgroundColor: '#f7f3e9',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}
      >
        My Projects
      </Typography>

      {/* Carousel */}
      <Slider {...settings}>
        {projects.map((project, index) => (
          <Card
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              padding: '1rem',
              margin: '0 auto',
              maxWidth: 500,
              boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
              borderRadius: '12px',
              backgroundColor: '#ffffff',
            }}
          >
            {/* Project Image */}
            <CardMedia
              component="img"
              image={project.image}
              alt={project.title}
              sx={{
                height: 200,
                width: '100%',
                objectFit: 'cover',
                borderRadius: '8px',
                marginBottom: '1rem',
              }}
            />

            {/* Project Content */}
            <CardContent>
              <Typography variant="h5" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                {project.title}
              </Typography>
              <Typography variant="body2" sx={{ marginBottom: '1rem' }}>
                {project.description}
              </Typography>
              <Button
                variant="contained"
                color="primary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </Button>
            </CardContent>
          </Card>
        ))}
      </Slider>
    </Box>
  );
}
