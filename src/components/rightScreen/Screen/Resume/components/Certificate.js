
import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import CertificateCard from './CertificateCard';

function Certificate({data}){
  
  return (
    <Box>
        <Typography variant='h5' fontWeight={"bold"} sx={{marginTop:"20px"}}>Certificate</Typography> 
        <Grid container>
          {
            data.map((cert, index)=>(
              <Grid item xs={12} sm={6} key={index}>
                <CertificateCard certi={cert}/>
              </Grid>
            ))
          }
        </Grid>
    </Box>
  )
}

export default Certificate