import { ArrowLeft} from '@mui/icons-material';
import {Stack, styled } from '@mui/material';
import React, { useState } from 'react';
import { Box } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MenuIcon from '@mui/icons-material/Menu';
import theme from '../../theme';
import screens from './utils/ScreenList';
import movBackward from './utils/MovBackward';
import movForward from './utils/MovForward';
import { useLocation, useNavigate } from 'react-router-dom';
import MobileDrawer from './components/MobileDrawer';

//Styles
const MenuDiv = styled("div")({
  padding:"3px",
  background: theme.palette.primary.main,
  color:"white",
  borderRadius:"40px",
  margin:"2px",
  height:"42px",
  width:"42px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
});

const DirectionButton = styled(Stack)({
  display:"flex", 
  alignItems:"center", 
  marginTop:"5px",
  background: theme.palette.primary.main,
  color:"white",
  borderRadius:"40px",
});

const StackMobile = styled(Stack)({
  display:"flex", 
  flexDirection:"column", 
  justifyContent:"space-between",
  height:"100vh", 
  alignItems:"flex-end"
});


//Components
const MobileMenu = () => {
  const nav = useNavigate();
  const loc = useLocation();
  const [open,setOpen] = useState(false);
  const controller = [open,setOpen];


  return (
    <Box padding={"4px"}>
        <StackMobile>
            <MenuDiv ><MenuIcon sx={{fontSize:"35px", margin:"8px"}} onClick={()=>setOpen(true)}/></MenuDiv>
            <MobileDrawer open ={controller}/>
            <DirectionButton>
            <ArrowRightIcon sx={{fontSize:"35px", margin:"8px"}} onClick={()=>{
              var curIndex = 0;
              for(var i = 0; i < 6; i++){
                if(screens[i] === loc.pathname){
                  curIndex = i;
                }
              }
              movForward(curIndex, nav);
            }}/>
            <ArrowLeft sx={{fontSize:"35px", margin:"8px"}} onClick={()=>{
              var curIndex = 0;
              for(var i = 0; i < 6; i++){
                if(screens[i] === loc.pathname){
                  curIndex = i;
                }
              }
              movBackward(curIndex, nav);
            }}/>
            </DirectionButton>
        </StackMobile>
    </Box>
    
  );
}

export default MobileMenu;