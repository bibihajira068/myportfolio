import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#7B5E57' }, // Mocha brown
    secondary: { main: '#D3B8AE' }, // Mousse cream
    background: { default: '#F5F3F2', paper: '#FFFFFF' },
    text: { primary: '#3E2723', secondary: '#5D4037' },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default theme;
