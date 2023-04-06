import { Typography } from '@mui/material'
import React from 'react'
import theme from '../../../../../theme'

function Knowledges({data}){
  return (
    <Typography sx={{background:theme.palette.primary.main, color:"white", padding:"2px", borderRadius:"4px", margin:"4px"}}>{data.title}</Typography>
  )
}

export default Knowledges