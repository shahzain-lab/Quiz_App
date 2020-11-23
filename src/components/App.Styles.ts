  
import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }
  body {
    background: rgb(0,16,36);
    background: linear-gradient(90deg, rgba(0,16,36,1) 0%, rgba(17,129,158,1) 10%, rgba(61,179,215,1) 17%, rgba(10,86,111,1) 26%, rgba(23,152,161,1) 37%, rgba(22,177,181,1) 41%, rgba(23,189,217,1) 48%, rgba(17,138,163,1) 53%, rgba(13,98,124,1) 56%, rgba(94,191,215,1) 64%, rgba(23,135,164,1) 69%, rgba(42,188,223,1) 78%, rgba(48,167,194,1) 86%, rgba(32,132,156,1) 87%, rgba(73,224,255,1) 100%);
   
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }
  * {
    font-family: 'Catamaran', sans-serif;
    box-sizing: border-box;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  > p {
    color: #1B2631;
  }
  .score {
    color: #1B2631;
    font-size: 2rem;
    margin: 0;
  }
  h1 {
    font-family: Fascinate Inline;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    font-weight: 400;
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
  }
  .start, .next {
    cursor: pointer;
    background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
  }
  .start {
    max-width: 200px;
    
  }
`;

