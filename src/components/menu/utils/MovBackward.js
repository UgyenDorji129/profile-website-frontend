import screens from "./ScreenList";

function movBackward(curIndex, nav){
    if(curIndex === 0){
      nav(screens[5]);
    }else{
      nav(screens[curIndex - 1]);
    }
    
  }


export default movBackward;