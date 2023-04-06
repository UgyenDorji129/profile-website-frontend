import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import theme from '../../../../../theme';
import EduTimeLine from './EduTimeLine';
import Knowledges from './Knowledges';
import ProgressBar from './ProgressBar';

function Educations({data}){

    return (
    <Box marginTop={"30px"}>
        <Grid container sx={{justifyContent:"space-evenly"}} spacing={8}>
            <Grid item xs={12} md={7}>
                <Stack direction={"column"} sx={{}}>
                <Typography variant='h5' fontWeight={"bold"}>Education</Typography>
                {
                    data.education.map((ed, index)=>(
                        <EduTimeLine data={ed} key={index}/>
                    ))
                }
                </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
                <Stack direction={"column"} >
                    <Typography variant='h5' fontWeight={"bold"}>Frame<span style={{color:theme.palette.primary.main}}>Work</span></Typography> 
                    {
                        data.frame.map((frame,index)=>(
                            <ProgressBar data={frame} key={index}/>
                        ))
                    }

                    <Typography variant='h5' fontWeight={"bold"} marginTop="50px">Programming <span style={{color:theme.palette.primary.main}}>Language</span></Typography> 
                    {
                        data.prog.map((lang, index)=>(
                            <ProgressBar data={lang} key={index}/>
                        ))
                    }

                    <Typography variant='h5' fontWeight={"bold"} marginTop="50px">Other  <span style={{color:theme.palette.primary.main}}>Skills</span></Typography> 
                    <Box sx={{display:"flex", flexWrap:"wrap"}}>
                        {
                        data.know.map((know)=>(
                            <Knowledges data={know}/>
                        ))
                        }
                    </Box>
                </Stack>
            </Grid>
        </Grid>
        
    </Box>
  )
}

export default Educations