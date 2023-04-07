import { Box,  Grid, ThemeProvider} from "@mui/material";
import LeftScreen from "./components/leftScreen/LeftScreen";
import DesktopMenu from "./components/menu/DesktopMenu";
import MobileMenu from "./components/menu/MobileMenu";
import RightScreen from "./components/rightScreen/RightScreen";
import theme from "./theme";
import {BrowserRouter as Router} from 'react-router-dom';





function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Box  sx={{background: {xs:"white",md:"#e3f2fd"}, display:"flex",alignItems:"center",justifyContent:"center" ,position:'absolute',top:'0px',right:'0px',bottom:'0px',left:'0px'}}>
          <Grid maxWidth={"xl"} maxHeight={"md"} container sx={{justifyContent:"space-evenly" ,alignItems:"stretch",height:{xs:"100%",md:"80%"},alignContent:"center"}}>
            <Grid item container xs ={11} md={10}  sx={{borderRadius:"24px",bgcolor:{md:theme.palette.primary.main,xs:"white"}}} >
                <Grid item md={3} sx={{display:{md:"block", xs:"none"}  }}><LeftScreen /></Grid>
                <Grid item xs={12} md={9} sx={{borderRadius:"24px", background:"white", display: "flex", justifyContent:"center", alignItems:"center",}}><RightScreen/></Grid>
            </Grid>
            <Grid item   md={1}  sx={{display:{xs:"none", md:"block"}, borderRadius:"24px", bgcolor:"white", color:theme.palette.primary.main}}><DesktopMenu/></Grid>
            <Grid item   xs={1}  sx={{display:{xs:"block", md:"none"}, borderRadius:"24px", bgcolor:"white", color:theme.palette.primary.main, height:"100%", position:"fixed",right:0,top:0}}><MobileMenu/></Grid>
          </Grid>
        </Box>
      </Router>
   
    </ThemeProvider>
  );
}

export default App;
