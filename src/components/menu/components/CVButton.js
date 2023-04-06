import { Box, Button, Typography } from '@mui/material'
import React from 'react'

const CVButton = () => {
  return (
    <Box sx={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <Button variant='outlined' sx={{border:"white solid 2px", borderRadius:"24px",color:"white", width:"150px",marginTop:"20px",'&:hover': {
                    backgroundColor: "#0288d1",} }}>Download CV</Button>
        <Typography variant='p' fontSize={14} color={"white"}  marginTop="20px">@copyright recieved 2023</Typography>    
    </Box> 
  )
}

export default CVButton