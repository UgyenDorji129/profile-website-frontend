import { Box, Typography } from '@mui/material';
import React from 'react';

const ErrorScreen = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column",justifyContent:"center", alignItems:"center", height:"100%"}}>
        <Typography variant='h5' marginTop={"30px"}>Something went wrong....</Typography>
    </Box>
  )
}

export default ErrorScreen