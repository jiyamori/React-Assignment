import styled from "styled-components";
import React from  'react';
import { createGlobalStyle } from "styled-components";
import FunctionNavbar from "./FunctionNavbar";
import FunctionStyle from "./FunctionStyle";

const GlobalStyle = createGlobalStyle`
    body{
        background-color: white;
        /* @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap'); 
        *{
            font-family: 'Roboto Mono', monospace;
        } */
    }
`
const Container = styled.div`
    background :white;
    height: 20vh;
   
`;

   
const EXampleStyledComponent = () => {
  return (
    <>
   
    <GlobalStyle/>
    <Container>   
    </Container>
    <FunctionNavbar/>
    <FunctionStyle/>
    </>
  )
}

export default EXampleStyledComponent;

