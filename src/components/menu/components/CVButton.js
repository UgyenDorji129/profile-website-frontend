import { Box, Button, Link, Typography } from '@mui/material';
import React from 'react';
import cvUrl from '../../../assets/cv.pdf'

const CVButton = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
      <Link href={cvUrl} underline="none" download="Ugyen_Dorji.pdf">
        <Button variant='outlined' sx={{border:"white solid 2px", borderRadius:"24px",color:"white", width:"150px",marginTop:"20px",'&:hover': {
                    backgroundColor: "#0288d1",} }}>Download CV</Button>
      </Link>
        <Typography variant='p' fontSize={14} color={"white"}  marginTop="20px">@copyright recieved 2023</Typography>    
    </Box> 
  )
}

export default CVButton