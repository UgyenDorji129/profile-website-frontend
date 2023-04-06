import { Box, CircularProgress, Typography } from '@mui/material';
import React from 'react';

const LoadingScreen = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", height:"100%"}}>
        <CircularProgress size={100} sx={{color:"primary",}}/>
        <Typography variant='h5' marginTop={"30px"}>Loading.....</Typography>
    </Box>
  )
}

export default LoadingScreen