import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#2B4570',
    },
    secondary: {
      main: '#7180AC',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;