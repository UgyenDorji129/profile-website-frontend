
import { Box, } from '@mui/system';
import React from 'react';
import HomeScreen from './Screen/Home/HomeScreen';
import AboutScreen from './Screen/About/AboutScreen';
import {  Routes, Route, } from 'react-router-dom';
import Resume from './Screen/Resume/Resume';
import Portfolio from './Screen/Portfolio/Portfolio';
import Blog from './Screen/Blog/Blog';
import Contact from './Screen/Contact/Contact';



const RightScreen = () => {
  

  return (
  
      <Box sx={{height: "-webkit-fill-available", height:{xs:"100vh", md:"75vh"}, overflow:"auto", width:"100%"}}>
      <Routes>
        <Route exact path={"/"} element={<HomeScreen/>}/>
        <Route exact path={"/about"} element={<AboutScreen/>}/>
        <Route exact path={"/resume"} element={<Resume/>}/>
        <Route exact path={"/portfolio"} element={<Portfolio/>}/>
        <Route exact path={"/blog"} element={<Blog/>}/>
        <Route exact path={"/contact"} element={<Contact/>}/>
      </Routes>
      </Box>
  )
}

export default RightScreen