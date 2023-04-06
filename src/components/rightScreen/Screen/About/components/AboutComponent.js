import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../../../theme';

const MainBox = styled(Box)({
  display:"flex", 
  justifyContent:"space-evenly", 
  alignItems:"start", 
  flexDirection:"column", 
  width:"100%"
})

function AboutComponent({result}) {
  return (
    <MainBox>
      <Typography textAlign={"start"} variant='h4' fontWeight={"bold"}>About <span style={{color:theme.palette.primary.main}}>Me</span></Typography>
      <Grid container sx={{marginTop:"20px", justifyContent:"space-between"}} >
        <Grid item sm={6} marginBottom="30px"><Typography>{result.desc}</Typography></Grid>
        <Grid item sm={"auto"}>
      
            <Typography color={theme.palette.primary.main} fontWeight={"bold"}>Age <span style={{all: "initial"}}> {result.age}</span></Typography>
            <Typography color={theme.palette.primary.main} fontWeight={"bold"}>Residence <span style={{all: "initial"}}>Bhutan</span></Typography>
            <Typography color={theme.palette.primary.main} fontWeight={"bold"}>Address <span style={{all: "initial"}}> {result.residence}</span></Typography>
            <Typography color={theme.palette.primary.main} fontWeight={"bold"}>E-mail <span style={{all: "initial"}}> {result.email}</span></Typography>
            <Typography color={theme.palette.primary.main} fontWeight={"bold"}>Phone <span style={{all: "initial"}}> {result.phone}</span></Typography>
      
        </Grid>
      </Grid>
    </MainBox>
  )
}

export default AboutComponent