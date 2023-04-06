import { createTheme } from "@mui/material"

const font = '"Quicksand", sans-serif';
const theme = createTheme({
    
    palette:{
        primary:{
            main: "#29b6f6"
        }
    },
    typography: {
        fontFamily: font,
        },
    
    components: {
        MuiTooltip: {
            styleOverrides: {
            tooltip: {
                backgroundColor: '#29b6f6',
                color: 'white',
                border: '1px solid',
                fontSize:"15px"
            },
            },
        },
        },
  
      
});

export default theme;

