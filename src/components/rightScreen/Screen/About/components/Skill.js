import { Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import theme from '../../../../../theme';
import { Api, BugReport, ManageAccounts, MobileFriendly, Web } from '@mui/icons-material';


function Skill({skill}) {
  
  const icons = [MobileFriendly, Web,  Api,  BugReport,  ManageAccounts];
  const Icon = icons[skill.index];
  return (
    
    <Stack direction={"column"}  spacing={1}>
        <Icon sx={{fontSize:"40px", margin:"8px", marginLeft:"0",color:theme.palette.primary.main}}/>
        <Typography variant='h6' fontWeight={"bold"}>{skill.skill.title}</Typography>
        <Typography>{skill.skill.desc}</Typography>
    </Stack>
  )
}

export default Skill