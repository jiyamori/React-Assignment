import React from 'react'
import styled from 'styled-components';
import ImageWe from './WebDeveloper.jpg';

const Container = styled.div`
display: flex;
height: 90%;
`;

const Left = styled.div`
width:60%;
height: fit-content;
background-color: lightgray;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const Title = styled.div`
width: 100%;
font-size:30px;
font-weight: bold;
color: aliceblue;
text-align: left;

`;

const Description = styled.p`
font-size: 20px;
color: black;
width: 100%;
`;

const Right = styled.div`
width:40%;
background-color: white;
display : flex;
align-items:left;
height: fit-content;
`;

const WebImg = styled.img`
width : 390px;
height: 270px;
`;
 

 const FunctionStyle = () => {
  return (
    <Container>
        <Left><Title>
          IT- Management-IT Support and IT Services for everyone!
          </Title>
          <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Voluptatibus, at. Laborum at earum eaque aspernatur distinctio,
             libero odit officia blanditiis totam, 
             quam id nesciunt! Esse adipisci modi vero quo aliquid!</Description>
          </Left>
        <Right><WebImg src ={ImageWe}/></Right>
    </Container>
  )
}

export default FunctionStyle;
