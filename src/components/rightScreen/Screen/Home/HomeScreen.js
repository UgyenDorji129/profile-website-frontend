import { styled, Typography,Box} from '@mui/material';
import React, { useEffect, useState } from 'react';
import animation from '../../Animation/Animation';
import generateRandom from '../../utils/RandomNumber';
import axios from 'axios';
import LoadingScreen from '../../../loading/LoadingScreen';
import ErrorScreen from '../../../error/ErrorScreen';



const MainBox = styled(Box)(({param})=>({
  display: "flex", 
  justifyContent:"center", 
  alignItems:"center", 
  flexDirection:"column", 
  height:"100%",
  visibility: !param.show && "hidden",
  animation: param.show && `${animation[param.index].style} ${animation[param.index].duration}`,
  padding:"30px",
  
}));

const HomeScreen = () => {
  const [show,setshow] = useState(false);
  const [result,setResult] = useState(null);
  const [error, setError] = useState(false);
  var index = 0;

  useEffect(() => {
    axios.get("https://profile-website-backend-production.up.railway.app/getHome").then((response) => {  
    setResult(response.data.data);
    }).catch((e)=>{
      setError(true);
    });
    setshow(true);
  }, [error]);
   

  if(error){
      return <ErrorScreen/>
  }else{
    if(result === null){
      return <LoadingScreen/>
    }else{
      return (
        <MainBox param={{show:show, index:index}}>
            <Typography variant="h2" fontWeight={"bold"} color="#383537" textAlign={"center"}>{result && result.name}</Typography>
            <Typography variant="h5" padding={4} color={"#6D6B6C"} textAlign={"center"}>{result && result.role}</Typography>
        </MainBox>
      );
    }
      
    }
  }


export default HomeScreen;