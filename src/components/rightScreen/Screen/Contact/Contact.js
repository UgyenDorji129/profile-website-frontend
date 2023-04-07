import { Call, LocationOn,MailOutline,WhatsApp } from '@mui/icons-material';
import { Typography,Box, Grid, styled, } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';
import animation from '../../Animation/Animation';
import LoadingScreen from '../../../loading/LoadingScreen';


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

const Contact = () => {
      const con1 = {icon: LocationOn, value:"Tamzhing"};
      const con2 = {icon: Call, value:"9289-6324-57"};
      const con3 = {icon: MailOutline, value:"ugyendora@gmail.com"};
      const con4 = {icon:WhatsApp, value:"+975-175-1751"};
      const cons = [con1, con2, con3, con4];

      const [show,setshow] = useState(false);
      var index = 5;
  
      useEffect(()=>{
         setTimeout(()=>{
            setshow(true);
         },500);
      },[]);

     if(show === false){
         return (<LoadingScreen/>)
      }else{
         return (
            <MainBox param={{show:show, index:index}}>
               <Typography textAlign={"start"} variant='h4' fontWeight={"bold"}>Contact</Typography>
               <Grid container  sx={{display:"flex", justifyContent:"space-evenly", alignItems:"start", marginTop:"20px"}} spacing={4}>
                  <Grid item xs ={12} sm={4}><LeftSection cons={cons}/></Grid>
                  <Grid item xs={12} sm={8} ><RightSection/></Grid>
               </Grid>
            </MainBox>
         );
      }
   
}

export default Contact