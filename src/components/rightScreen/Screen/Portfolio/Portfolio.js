import { Box, Grid, Link, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Project from './components/Project';
import animation from '../../Animation/Animation';
import axios from 'axios';
import LoadingScreen from '../../../loading/LoadingScreen';
import ErrorScreen from '../../../error/ErrorScreen';

const MainBox = styled(Box)(({param})=>({
    display:"flex", 
    justifyContent:"space-evenly", 
    margin:"5px", 
    alignItems:"start", 
    padding:"30px",
    flexDirection:"column",
    visibility: !param.show && "hidden",
    animation: param.show && `${animation[param.index].style} ${animation[param.index].duration}`
}));

const SecondaryBox = styled(Box)({
    display:"flex", 
    justifyContent:"space-evenly", 
    alignItems:"center", 
    marginTop:"20px"
});

const Portfolio = () => {
  
  const [show,setshow] = useState(false);
  const [result,setResult] = useState(null);
  const [error, setError] = useState(false);

  var index = 3;
  
  useEffect(()=>{
    axios.get("https://profile-u9zd.onrender.com/getPortfolio").then((response) => {
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
    return(
        <LoadingScreen/>
    );
   }else{
    return (
        <MainBox param={{show:show, index:index}}>
            <Typography textAlign={"start"} variant='h4' fontWeight={"bold"}>Portfolio</Typography>
            <SecondaryBox>
                <Grid container spacing={2}>
                    {
                        result && result.map((proj, index)=>(
                            <Grid item xs={12} sm={6} lg={4} key={index} >
                                <Link href={proj.projectUrl} underline="none"><Project proj={proj}/></Link>
                            </Grid>
                        ))
                    }
                </Grid>
            </SecondaryBox>
        </MainBox>
      );
   }
   }
}

export default Portfolio