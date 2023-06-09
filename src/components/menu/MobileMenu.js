import { ArrowLeft} from '@mui/icons-material';
import { Stack, styled } from '@mui/material';
import React, { useState } from 'react';
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
  background: theme.palette.primary.main,
  color:"white",
  borderRadius:"40px",
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  padding:"3px",
  margin:"10px",
});

const DirectionButton = styled(Stack)({
  display:"flex", 
  alignItems:"center", 
  background: theme.palette.primary.main,
  color:"white",
  borderRadius:"40px",
  padding:"3px",
  margin:"10px",
});

const StackMobile = styled(Stack)({
  display:"flex", 
  flexDirection:"column", 
  justifyContent:"space-between",
  alignContent:"space-between",
  height:`100%`,
  alignItems:"flex-end"
});


//Components
const MobileMenu = () => {
  const nav = useNavigate();
  const loc = useLocation();
  const [open,setOpen] = useState(false);
  const controller = [open,setOpen];


  return (
        <StackMobile>
            <MenuDiv ><MenuIcon sx={{fontSize:"40px",cursor:"pointer"}} onClick={()=>setOpen(true)}/></MenuDiv>
            <MobileDrawer open ={controller} />
            <DirectionButton>
            
              <ArrowRightIcon sx={{fontSize:"40px", cursor:"pointer"}} onClick={()=>{
                var curIndex = 0;
                for(var i = 0; i < 6; i++){
                  if(screens[i] === loc.pathname){
                    curIndex = i;
                  }
                }
                movForward(curIndex, nav);
              }}/>
              <ArrowLeft sx={{fontSize:"40px", cursor:"pointer",marginTop:"20px"}} onClick={()=>{
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
    
  );
}

export default MobileMenu;