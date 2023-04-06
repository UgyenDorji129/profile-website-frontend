import { Paper, styled, Typography } from '@mui/material';
import React from 'react';
import theme from '../../../../../theme';

const MediaPaper = styled(Paper)({
  display:"flex", 
  flexDirection:"column", 
  justifyContent:"center", 
  padding:"30px 10px",
  alignItems:"center", 
  background:"#e3f2fd", 
  marginBottom:"6px", 
  textAlign:"center"
})

const SocialPaper = ({contact}) => {
  return (
    <MediaPaper>
        <contact.icon sx={{color:theme.palette.primary.main, fontSize:"40px",}}/>
        <Typography fontWeight={"bold"}>{contact.value}</Typography>
    </MediaPaper>
  )
}

export default SocialPaper