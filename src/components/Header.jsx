import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Bi Bi Hajira
        </Typography>
        <Button color="inherit">
          <Link to="about" smooth duration={500}>
            About
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="skills" smooth duration={500}>
            Skills
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="projects" smooth duration={500}>
            Projects
          </Link>
        </Button>
        <Button color="inherit">
          <Link to="contact" smooth duration={500}>
            Contact
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
}


// import React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import { Link } from 'react-scroll';

// export default function Header() {
//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           Bi Bi Hajira
//         </Typography>
//         <Button color="inherit" component={Link} to="about" smooth>
//           About
//         </Button>
//         <Button color="inherit" component={Link} to="skills" smooth>
//           Skills
//         </Button>
//         <Button color="inherit" component={Link} to="projects" smooth>
//           Projects
//         </Button>
//         <Button color="inherit" component={Link} to="internships" smooth>
//           Internships
//         </Button>
//         <Button color="inherit" component={Link} to="contact" smooth>
//           Contact
//         </Button>
//       </Toolbar>
//     </AppBar>
//   );
// }
