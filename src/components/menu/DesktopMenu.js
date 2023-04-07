import { ArrowLeft } from '@mui/icons-material';
import {List, ListItem, ListItemIcon, Stack, Tooltip, styled } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useLocation, useNavigate } from 'react-router-dom';
import DesktopMenuItems from './utils/DesktopMenuItems';
import screens from './utils/ScreenList';
import movForward from './utils/MovForward';
import movBackward from './utils/MovBackward';
import theme from '../../theme';



const StackDesktop = styled(Stack)({
  display:{xs:"none",md:"flex"}, 
  alignItems:"center", 
  marginTop:"5px"
});



const DesktopMenu = () => {

  const nav = useNavigate();
  const loc = useLocation();

  return (
    <Box sx={{display:{xs:"none",md:"flex"}, flexDirection:"column", justifyContent:"space-between",height:"100%"}}>
        <StackDesktop>
            <List>
              {
                DesktopMenuItems.map((item, index)=>(
                  <ListItem
                    onClick={()=>{
                      nav(item.path);
                      item.sx.color = loc.pathname === item.path ? "#0288d1": theme.palette.primary.main
                    }}
                    key={index}
                    >
                      <Tooltip title={item.title} placement="left" arrow PopperProps={{sx:{background:"white"}}} >
                      <ListItemIcon>
                        <item.icon 
                          sx={item.sx} 
                        />
                      </ListItemIcon>
                      </Tooltip>
                    </ListItem>
                ))
              }
            </List>
        </StackDesktop>
        <StackDesktop>
          <Tooltip title={"next"} placement="left" arrow PopperProps={{sx:{background:"white"}}} >
            <ArrowRightIcon sx={{fontSize:"50px", margin:"10px",cursor:"pointer"}} onClick={()=>{
              var curIndex = 0;
              for(var i = 0; i < 6; i++){
                if(screens[i] === loc.pathname){
                  curIndex = i;
                }
              }
              movForward(curIndex, nav);
            }}/>
          </Tooltip>
          <Tooltip title={"previous"} placement="left" arrow PopperProps={{sx:{background:"white"}}} >
            <ArrowLeft sx={{fontSize:"50px", margin:"10px",cursor:"pointer"}} onClick={()=>{
              var curIndex = 0;
              for(var i = 0; i < 6; i++){
                if(screens[i] === loc.pathname){
                  curIndex = i;
                }
              }
              movBackward(curIndex, nav);
            }}/>
          </Tooltip>
        </StackDesktop>
    </Box> 
  );
}

export default DesktopMenu