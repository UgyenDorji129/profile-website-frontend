import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../../../theme'
import Fact from './Fact';

function FunFact({funfact}){

  return (
    <Box sx={{ width:"100%", marginTop:"30px"}}>
      <Typography textAlign={"start"} variant='h5' fontWeight={"bold"}>Fun <span style={{color:theme.palette.primary.main}}>Fact</span></Typography>
      <Grid container sx={{marginTop:"20px"}} spacing={2}>
        {
          funfact.map((fact,index)=>(
            <Grid item md={4} sm={6} xs={12} key={index}>
              <Fact fact={{fact,index}}/>
            </Grid>
          ))
        }
      </Grid>
    </Box>
  )
}

export default FunFact