

import styled, { createGlobalStyle } from "styled-components";


// const transparentCard = {
//    
// }

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: #dbdbdb !important;
    letter-spacing: 2px !important;
    font-family: Verdana, Geneva, Tahoma, sans-serif !important;
} 

body{
     min-width: 100vw;
     min-height: 100vh;
     background: #161623;

     &:before{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(#f00, #f0f);
        clip-path: circle(30% at right 70%);
     }
     &:after{
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        z-index: -23;
        width: 100%;
        height: 100%;
        background: linear-gradient(#2196f3, #e91e63);
         clip-path: circle(20% at 10% 10%);
     }
 }
`;

export const Wrapper = styled.div`
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%)
`

export const Heading = styled.h1`
     font-family: Fascinate Inline;
     background-image: linear-gradient(180deg, #fff, #87f1ff);
     font-weight: 400;
     background-size: 100 %;
     background-clip: text;
     -webkit-background-clip: text;
     -webkit-text-fill-color: transparent;
     -moz-background-clip: text;
     -moz-text-fill-color: transparent;
     filter: drop-shadow(2px 2px #0085a3);
     font-size: 70px;
     text-align: center;
     margin: 20px;
`