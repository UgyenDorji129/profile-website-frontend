import { Box, LinearProgress, Typography } from '@mui/material'
import React from 'react'

const ProgressBar = ({data}) => {
  return (
    <Box sx={{marginTop:"20px"}}>
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <Typography fontWeight={"bold"}>{data.name}</Typography>
            <Typography>{data.percentage}%</Typography>
        </Box>
        <LinearProgress variant="determinate" value={data.percentage} />
    </Box>
  )
}

export default ProgressBar