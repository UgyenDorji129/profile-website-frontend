import { Button, Card, CardActions, CardContent, CardMedia,  Link,  Typography } from '@mui/material'
import React from 'react'

const Post = ({proj}) => {
  return (
    <Card sx={{maxWidth:"340"}}>
                <CardMedia 
                image={proj.imageUrl}
                component="img"
                height={160}
                />
                <CardContent>
                    <Typography variant='h6'>{proj.title}</Typography>
                </CardContent>
                <CardActions>
                <Link href={proj.blogUrl} underline="none"><Button size="small">Learn More</Button></Link>
                </CardActions>
            </Card>
  )
}

export default Post