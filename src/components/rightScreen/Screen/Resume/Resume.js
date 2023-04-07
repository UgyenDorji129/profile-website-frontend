import { Box, styled, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Certificate from './components/Certificate';
import Educations from './components/Educations';
import animation from '../../Animation/Animation';
import axios from 'axios';
import LoadingScreen from '../../../loading/LoadingScreen';
import ErrorScreen from '../../../error/ErrorScreen';

const MainBox = styled(Box)(({param})=>({
  display:"flex", 
  justifyContent:"center", 
  margin:"5px", 
  alignItems:"start", 
  padding:"30px",
  flexDirection:"column",
  visibility: !param.show && "hidden",
  animation: param.show && `${animation[param.index].style} ${animation[param.index].duration}`
}));

const Resume = () => {

  const [show,setshow] = useState(false);
  const [education, setEducation] = useState(null);
  const [frame, setFrame] = useState(null);
  const [prog, setProg] = useState(null);
  const [know, setKnow] = useState(null);
  const [certi, setCerti] = useState(null);
  const [error, setError] = useState(false);

  var index = 2;

  function fetchRequest(url, setFunction){
    axios.get(url).then((response) => { 
        setFunction(response.data.data);
      }).catch((e)=>{
      setError(true);
    });
  }
  
  useEffect(()=>{
    fetchRequest("https://profile-website-backend-production.up.railway.app/getEducation", setEducation);
    fetchRequest("https://profile-website-backend-production.up.railway.app/getFrame", setFrame);
    fetchRequest("https://profile-website-backend-production.up.railway.app/getPrograming", setProg);
    fetchRequest("https://profile-website-backend-production.up.railway.app/getOtherSkill", setKnow);
    fetchRequest("https://profile-website-backend-production.up.railway.app/getCertificate", setCerti);
    setshow(true);
  },[]);

  if(error){
    return <ErrorScreen/>
  }else{
    if(education === null || frame === null || prog === null || certi === null || know === null){
    return(
      <LoadingScreen/>
    )
  }else{
    return (
      <MainBox param={{show:show, index:index}}>
          <Typography textAlign={"start"} variant='h4' fontWeight={"bold"}>Resume</Typography>
          <Educations data={{education, frame, prog, know}}/>
          <Certificate data={certi}/>
      </MainBox> 
    )
  }
  }
}

export default Resume