import { Box, Grid,  Typography, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Post from './components/Post'
import generateRandom from '../../utils/RandomNumber';
import animation from '../../Animation/Animation';
import axios from 'axios';
import LoadingScreen from '../../../loading/LoadingScreen';
import ErrorScreen from '../../../error/ErrorScreen';

const BlogBox = styled(Box)(({param})=>({
    display:"flex", 
    justifyContent:"space-evenly", 
    margin:"5px", 
    alignItems:"start", 
    padding:"30px",
    flexDirection:"column",
    visibility: !param.show && "hidden",
    animation: param.show && `${animation[param.index].style} ${animation[param.index].duration}`
}))

const Blog = () => {

   const [show,setshow] = useState(false);
    var index = 4;
    const [result, setResult] = useState(null);
    const [error, setError] = useState(false);

    useEffect(()=>{
        axios.get("https://profile-website-backend-production.up.railway.app/getBlog").then((response) => {
          setResult(response.data.data);
        }).catch((e)=>{
            setError(true);
        });
        setshow(true);
      },[]);

  if(error){
    return <ErrorScreen/>
  }else{
    if(result === null){
        return <LoadingScreen/>
  }else{
    return (
        <BlogBox param={{show:show, index:index}}>
            <Typography textAlign={"start"} variant='h4' fontWeight={"bold"}>Blog</Typography>
            <Box sx={{display:"flex", justifyContent:"space-evenly", alignItems:"center", marginTop:"20px"}}>
                <Grid container spacing={5}>
                    {
                        result && result.map((proj, index)=>(
                            <Grid item xs={12} sm={6} lg={4} key={index}>
                                <Post proj={proj}/>
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </BlogBox >
      );
  }
  }
}

export default Blog