import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, timelineOppositeContentClasses, TimelineSeparator } from '@mui/lab'
import { Typography } from '@mui/material'
import React from 'react'

const EduTimeLine = ({data}) => {
  return (
    <Timeline sx={{[`& .${timelineOppositeContentClasses.root}`]: {
        flex: 0,
         }}}>
        <TimelineItem >
        <TimelineOppositeContent color="text.secondary">{data.year}</TimelineOppositeContent>
            <TimelineSeparator>
                <TimelineDot color="primary"/>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent sx={{textAlign:"start", }}>
                <Typography variant='h6' fontWeight={"bold"}>{data.title}</Typography>
                <Typography>{data.desc}</Typography>
            </TimelineContent>
        </TimelineItem>
    </Timeline>
  )
}

export default EduTimeLine