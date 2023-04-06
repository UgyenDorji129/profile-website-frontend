import { Stack } from '@mui/material';
import Map from './Map';
import Form from './From';
import React from 'react'

const RightSection = () => {
  return (
    <Stack direction={"column"} sx={{justifyContent:"space-evenly", alignItems:"start"}}>
        <Map/>
        <Form/>
    </Stack>
  )
}

export default RightSection