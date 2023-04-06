import screens from "./ScreenList";

function movForward(curIndex, nav){
    if(curIndex === 5){
      nav(screens[0]);
    }else{
      nav(screens[curIndex + 1]);
    }
}


export default movForward;