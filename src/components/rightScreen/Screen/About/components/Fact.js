import { Paper, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../../../theme';
import { DirectionsBike, Flag, LibraryBooks, WorkHistory } from '@mui/icons-material';

const FunPaper = styled(Paper)({
  display:"flex", 
  flexDirection:"column", 
  justifyContent:"space-evenly", 
  alignItems:"center", 
  padding:"5px"
})

function Fact ({fact}) {
  const icons = [WorkHistory, LibraryBooks, DirectionsBike, Flag];
  const Icon = icons[fact.index];
  return (
    <FunPaper elevation={1} sx={{}}>
        <Icon sx={{fontSize:"35px", margin:"8px", color:theme.palette.primary.main}}/>
        <Typography variant='h6' fontWeight={"bold[300]"}>{fact.fact.title}</Typography>
        <Typography>{fact.fact.count}</Typography>
    </FunPaper>
  )
}

export default Fact