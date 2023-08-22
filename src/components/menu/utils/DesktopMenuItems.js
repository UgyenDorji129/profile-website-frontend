import BookIcon from '@mui/icons-material/Book';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { Home, Mail, Person, SchoolSharp } from '@mui/icons-material';
import theme from '../../../theme';

const DesktopMenuItems = [
    { 
      icon: Home, 
      title:"Home", 
      sx:{fontSize:"35px", margin:"10px", color:theme.palette.primary.main, cursor:"pointer"}, 
      path: '/' 
    },
    { 
      icon: Person, 
      title:"About", 
      sx: {fontSize:"35px", margin:"10px", color:theme.palette.primary.main,cursor:"pointer"}, 
      path: '/about' 
    },
    { 
      icon: SchoolSharp,
      title:"Resume", 
      sx: {fontSize:"35px", margin:"10px", color:theme.palette.primary.main,cursor:"pointer"}, 
      path: '/resume' 
    },
    { 
      icon: BusinessCenterIcon,
      title:"Portfolio",
      sx: {fontSize:"35px", margin:"10px", color:theme.palette.primary.main,cursor:"pointer"}, 
      path: '/portfolio' 
    },
    { 
      icon: BookIcon, 
      title:"Blog",
      sx: {fontSize:"35px", margin:"10px", color:theme.palette.primary.main,cursor:"pointer"}, 
      path: '/blog' 
    },
    { 
      icon: Mail, 
      title:"Contact",
      sx: {fontSize:"35px", margin:"10px", color:theme.palette.primary.main,cursor:"pointer"}, 
      path: '/contact' 
    },
    
  ];

export default DesktopMenuItems;