import {keyframes} from '@mui/material';
const animation = [
    {
        style: keyframes`
        0% {
        -webkit-transform: scale(2);
                transform: scale(2);
        -webkit-filter: blur(4px);
                filter: blur(4px);
        opacity: 0;
        }
        100% {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-filter: blur(0px);
                filter: blur(0px);
        opacity: 1;
        }
        `,
        duration:"0.7s cubic-bezier(0.470, 0.000, 0.745, 0.715) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: rotateX(-100deg);
                transform: rotateX(-100deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0deg);
                transform: rotateX(0deg);
        -webkit-transform-origin: top;
                transform-origin: top;
        opacity: 1;
      }
      `,
      duration:"0.5s cubic-bezier(0.175, 0.885, 0.320, 1.275) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
                transform: rotateY(30deg) translateY(-300px) skewY(-30deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0deg) translateY(0) skewY(0deg);
                transform: rotateY(0deg) translateY(0) skewY(0deg);
        opacity: 1;
      }
      `,
      duration:"0.6s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: translateY(-600px) rotateX(-30deg) scale(0);
                transform: translateY(-600px) rotateX(-30deg) scale(0);
        -webkit-transform-origin: 50% 100%;
                transform-origin: 50% 100%;
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0) rotateX(0) scale(1);
                transform: translateY(0) rotateX(0) scale(1);
        -webkit-transform-origin: 50% 1400px;
                transform-origin: 50% 1400px;
        opacity: 1;
      }
      `,
      duration:"0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: translateZ(600px);
                transform: translateZ(600px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
      `,
      duration:"0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: translateZ(-1400px);
                transform: translateZ(-1400px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateZ(0);
                transform: translateZ(0);
        opacity: 1;
      }
      `,
      duration:"0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: translateY(-1000px);
                transform: translateY(-1000px);
        opacity: 0;
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        opacity: 1;
      }
      `,
      duration:"0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: translateZ(-800px) rotateY(90deg);
                transform: translateZ(-800px) rotateY(90deg);
        opacity: 0;
      }
      54% {
        -webkit-transform: translateZ(-160px) rotateY(87deg);
                transform: translateZ(-160px) rotateY(87deg);
        opacity: 1;
      }
      100% {
        -webkit-transform: translateZ(0) rotateY(0);
                transform: translateZ(0) rotateY(0);
      }
      `,
      duration:" 0.45s ease-out both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: rotateX(80deg);
                transform: rotateX(80deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateX(0);
                transform: rotateX(0);
        opacity: 1;
      }
      `,
      duration:"0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    }
]

export default animation;