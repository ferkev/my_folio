import ButtonAppBar from './components/ButtonAppBar/ButtonAppBar'
import './App.css'
import Button from '@mui/material/Button';
import { Box, Typography } from '@mui/material';
import underConstructionImg from './assets/img/Building_under_Construction_3.jpg'
import { useState } from 'react';

function App() {
  const [isUnderContruction] = useState(true);
  return (
    <>
      {isUnderContruction ? <img src={underConstructionImg} width="100%" height="100%" alt="Is under construction"/>
        :
        <>
          <ButtonAppBar />
          <Box component="main" sx={{ pt: 5 }}>
            <Typography>
              <Button variant="contained">Hello world</Button>
            </Typography>
          </Box>
        </>
      }

    </>
  )
}

export default App
