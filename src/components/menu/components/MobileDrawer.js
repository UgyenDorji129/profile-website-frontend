import { Box, Drawer, List, ListItem, ListItemText, Typography, styled } from '@mui/material';
import React from 'react';
import theme from '../../../theme';
import { Facebook, GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import Profile from './Profile';
import CVButton from './CVButton';
import { useLocation, useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';


const IconBox = styled(Box)({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
});


const MobileDrawer = ({open}) => {
  const MenuItem = [
    {
        name:"Home",
        path:"/"
    },
    {
        name:"About Me",
        path:"/about"
    },
    {
        name:"Resume",
        path:"/resume"
    },
    {
        name:"Portfolio",
        path:"/portfolio"
    },
    {
        name:"Blog",
        path:"/blog"
    },
    {
        name:"Contact",
        path:"/contact"
    }
    ];

  const nav = useNavigate();
  const loc = useLocation();

  return ( 
     <Drawer
     ModalProps={{
        slots: { backdrop: "div" },
        slotProps: {
          root: {
            style: {
              position: "absolute",
              top: "unset",
              bottom: "unset",
              left: "unset",
              right: "unset",
            },
          },
        },
      }}
        sx={{
          width: 290,
          background:theme.palette.primary.main,
          display:{md:"none"},
          flexWrap:"nowrap"
        }}
        PaperProps={{
          sx: { width: 300,background:theme.palette.primary.main, flexWrap:"nowrap" },
        }}
        anchor="right"
        variant="temporary"
        open={open[0]}
        onClose={()=>{open[1](false)}}
      >
        <Box sx={{display:"flex", flexDirection:"column", justifyContent:"space-around", flexWrap:"nowrap"}}>
        <Box sx={{display:"flex", justifyContent:"end", alignItems:"end"}}><CloseIcon sx={{color:"white", fontSize:"35px", padding:"10px"}} onClick={()=>open[1](false)}/></Box>
        <Profile/> 

        <List >

        {MenuItem.map((item, index)=>(
            <ListItem
            onClick={()=>{
                open[1](false);
                nav(item.path);
            }}
            sx={{
              flexDirection:"column",justifyContent:"center", alignItems:"center"
            }}
            key={index}
            >
              <ListItemText >
                <Typography sx={{color:loc.pathname === item.path ? 'white' : "#FBFCFC", fontWeight:"bold"}}>{item.name}</Typography>
              </ListItemText>
            </ListItem>
          ))}
        </List>

        <IconBox>
            <Facebook sx={{color:"white",margin:1.5}}/>
            <Instagram sx={{color:"white",margin:1.5}}/>
            <LinkedIn sx={{color:"white",margin:1.5}}/>
            <GitHub sx={{color:"white",margin:1.5}}/>
        </IconBox>
            
        <CVButton/>
        </Box>

      </Drawer>
  )
}

export default MobileDrawer