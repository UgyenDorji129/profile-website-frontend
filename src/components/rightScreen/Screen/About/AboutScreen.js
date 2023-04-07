import { Box, styled } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AboutConponent from './components/AboutComponent';
import WhatIDo from './components/WhatIDo';
import FunFact from './components/FunFact';
import generateRandom from '../../utils/RandomNumber';
import animation from '../../Animation/Animation';
import axios from 'axios';
import LoadingScreen from '../../../loading/LoadingScreen';
import ErrorScreen from '../../../error/ErrorScreen';

const AboutBox = styled(Box)(({param})=>({
  display:"flex", 
  justifyContent:"center", 
  margin:"5px", 
  alignItems:"center", 
  padding:"30px",
  flexDirection:"column",
  visibility: !param.show && "hidden",
  animation: param.show && `${animation[param.index].style} ${animation[param.index].duration}`
}));



const AboutScreen = () => {
  const [show,setshow] = useState(false);
  const [about,setAbout] = useState(null);
  const [skill, setSkill] = useState(null);
  const [funfact, setFunfact] = useState(null);
  const [error, setError] = useState(false);

  var index = 1;

  function fetchRequest(url, setData, ){
   
    axios.get("https://profile-website-backend-production.up.railway.app"+url).then((response) => { 
        setData(response.data.data);
      }).catch((e)=>{
      setError(true);
    });;
  }

  useEffect(()=>{
    fetchRequest("/getAbout", setAbout);
    fetchRequest("/getSkill",setSkill);
    fetchRequest("/getFunfact",setFunfact);
    setshow(true);
  },[]);
  
  if(error){
    return <ErrorScreen/>
  }else{
    if(about === null || skill === null || funfact === null){
    return (
      <LoadingScreen/>
    )
    }else{
      return (
        <AboutBox  param={{show:show, index:index}}>
          <AboutConponent result={about && about[0]}/>
          <WhatIDo skills={skill}/>
          <FunFact funfact ={funfact}/>
        </AboutBox>
      )
    }
  }
}

export default AboutScreen;