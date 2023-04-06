import { Avatar, Typography, Box, styled, } from '@mui/material';
import imageUrl from '/Users/ugyendorji/Documents/React/profile-website/src/assets/do.png';
import React from 'react';

const ProfileBox = styled(Box)({
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    textAlign:"center",
    marginTop:"30px"
});

const Profile = () => {
  return (
    <ProfileBox>
        <Avatar alt="Profile" src={imageUrl} sx={{height:"150px", width:"150px", border:"2px solid white"}}/>
        <Typography variant='h4' fontWeight={"bold"} color="white" sx={{letterSpacing:1, marginTop:2}}>Ugyen Dorji</Typography>
        <Typography variant='h7' fontWeight={"bold[300]"} color="white" sx={{letterSpacing:1, marginTop:2}}>Software Developer</Typography>
    </ProfileBox>
  )
}

export default Profile