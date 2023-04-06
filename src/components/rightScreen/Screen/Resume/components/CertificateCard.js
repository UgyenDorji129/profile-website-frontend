import React from 'react';
import { Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'

const CertificateCard = ({certi}) => {
  return (
    <Card sx={{ maxWidth: 345, margin:"10px" }}>
        <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={certi.imageUrl}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {certi.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {certi.desc}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CertificateCard