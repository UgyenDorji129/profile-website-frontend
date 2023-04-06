import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Avatar, Box, Button, Link, styled, Typography } from '@mui/material';
import React from 'react';
import imageUrl from '/Users/ugyendorji/Documents/React/profile-website/src/assets/do.png';

const MainBox = styled(Box)({
  display:"flex",
  flexDirection:"column",
  justifyContent:"end",
  alignItems:"center",
  height:"100%"
});

const Profile = styled(Box)({
  display:"flex",
  flexDirection:"column",
  justifyContent:"center",
  alignItems:"center",
  textAlign:"center",
  marginBottom:"30px"
});

const IconBox = styled(Box)({
  display:"flex",
  justifyContent:"end",
  alignItems:"center",
  marginBottom:"100px"
});

const LeftScreen = () => {
  const icons = [
    {icon: Facebook, link:"https://www.facebook.com/hdhdjfjrkndhsjs"},
    {icon: Instagram, link:"https://www.instagram.com/__ugyen___/"},
    {icon: LinkedIn, link:"https://www.linkedin.com/in/ugyen-dorji-78472a1a2/"},
    {icon: GitHub, link:"https://github.com/UgyenDorji129"}
                ]
  return (
    <MainBox>
      <Profile>
            <Avatar alt="Profile" src={imageUrl} sx={{height:"160px", width:"160px", border:"2px solid white"}}/>
            <Typography variant='h4' fontWeight={"bold"} color="white" sx={{letterSpacing:1, marginTop:2}}>Ugyen Dorji</Typography>
            <Typography variant='h7' fontWeight={"bold[300]"} color="white" sx={{letterSpacing:1, marginTop:1}}>Software Developer</Typography>
        </Profile>
      <IconBox>
            {
              icons.map((icon,index)=>(
                <Link href={icon.link} underline="none" key={index}>
                  <icon.icon sx={{color:"white",margin:1.5}}/>
                </Link>
              ))
            }
      </IconBox>
      <Link href='src/assets/UGYEN_DORJI[CV].pdf' underline="none" download="Ugyen_Dorji.pdf">
        <Box sx={{display:"flex", flexDirection:"column", alignItems:"center", marginBottom:"10px"}}>
              <Button variant='outlined' sx={{border:"white solid 2px", borderRadius:"24px",color:"white", width:"150px",marginBottom:"100px",'&:hover': {
                      backgroundColor: "#0288d1", border:"white solid 2px", } }}>Download CV</Button>
              <Typography variant='p' fontSize={14} color={"white"}  marginTop="20px">@copyright recieved 2023</Typography>    
        </Box> 
      </Link>
      
     
    </MainBox>
  )
}

export default LeftScreen