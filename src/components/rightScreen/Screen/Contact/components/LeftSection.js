import { Stack } from '@mui/material'
import React from 'react'
import SocialPaper from './SocialPaper'

const LeftSection = ({cons}) => {
  return (
        <Stack direction={"column"}>
          {
              cons.map((con, index)=>(
                  <SocialPaper contact={con} key={index}/>
              ))
          }
        </Stack>
  )
}

export default LeftSection