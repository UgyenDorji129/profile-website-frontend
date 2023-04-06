import { Card, CardContent, CardMedia,  Typography } from '@mui/material'
import React from 'react'

const Project = ({proj}) => {
  return (
    <Card sx={{maxWidth:"340"}}>
                <CardMedia 
                image={proj.imageUrl}
                component="img"
                height={160}
                />
                <CardContent>
                    <Typography variant='h6'>{proj.title}</Typography>
                    <Typography>{proj.desc}</Typography>
                </CardContent>
    </Card>
  )
}

export default Project