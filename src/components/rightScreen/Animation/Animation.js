import {keyframes} from '@mui/material';
const animation = [
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
        duration:"1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
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
      duration:"1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: translateY(-500px);
                transform: translateY(-500px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
        opacity: 0;
      }
      38% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
        opacity: 1;
      }
      55% {
        -webkit-transform: translateY(-65px);
                transform: translateY(-65px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      72% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
      }
      81% {
        -webkit-transform: translateY(-28px);
                transform: translateY(-28px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      90% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
      }
      95% {
        -webkit-transform: translateY(-8px);
                transform: translateY(-8px);
        -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
      }
      100% {
        -webkit-transform: translateY(0);
                transform: translateY(0);
        -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
      }
      `,
      duration:"1.2s both"
    },
    {
      style: keyframes`
      0% {
        -webkit-transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
                transform: rotateY(20deg) rotateX(35deg) translate(300px, -300px) skew(-35deg, 10deg);
        opacity: 0;
      }
      100% {
        -webkit-transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
                transform: rotateY(0) rotateX(0deg) translate(0, 0) skew(0deg, 0deg);
        opacity: 1;
      }
      `,
      duration:"1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both"
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
      duration:"1.3s cubic-bezier(0.175, 0.885, 0.320, 1.275) both"
    },
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
      duration:"1.5s cubic-bezier(0.470, 0.000, 0.745, 0.715) both"
    },
]

export default animation;