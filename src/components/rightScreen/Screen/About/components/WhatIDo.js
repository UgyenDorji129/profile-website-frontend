import { Box, Grid, Typography,} from '@mui/material';
import React from 'react';
import Skill from './Skill';
import theme from '../../../../../theme';


function WhatIDo({skills}){
  
  
  return (
    <Box sx={{ width:"100%", marginTop:"30px"}}>
      <Typography textAlign={"start"} variant='h5' fontWeight={"bold"}>What <span style={{color:theme.palette.primary.main}}>I Do</span></Typography>
      <Grid container spacing={2} marginTop={"20px"}>
        {skills.map((skill, index)=>(
          <Grid item sm={6} xs={12} key={index}><Skill skill={{skill,index}}/></Grid>
        ))}
      </Grid> 
    </Box>
  )
}

export default WhatIDo