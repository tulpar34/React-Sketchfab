import React from 'react'
import styled from 'styled-components'
import { Canvas } from '@react-three/fiber';
import Cube from './Cube';
import { OrbitControls} from '@react-three/drei';

const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
justify-content:center;
`;
const Container = styled.div`
height:100vh;
scroll-snap-align:center;
width:1000px;
display:flex;
justify-content:space-between;
`;
const Left = styled.div`
  flex:1;

  @media only screen and (max-width: 768px) {
   display:none;
  }
`;
const Title = styled.h1`
  font-size:52px;

  @media only screen and (max-width: 768px) {
    font-size:60px;
  }
`;

const Right = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:20px;

  @media only screen and (max-width: 768px) {
   text-align:center;
   align-items:center;
  }
`;
const WhatWeDo = styled.div`
  display:flex;
  gap:10px;
`;
const Line = styled.img`
  height:5px;
`;
const Subtitle = styled.h2`
  color:#da4ea2;
  margin-top:-.8rem;
`;
const Desc = styled.p`
  font-size:24px;
  color:lightgray;
`;
const Button = styled.button`
   background-color:#da4ea2;
   color:#fff;
   font-weight:500;
   cursor:pointer;
   border:none;
   width:200px;
   padding:10px;
   border-radius:4px;
`;

export default function Who() {
  return (
    <Section>
     <Container>
        <Left>     
      <Canvas camera={{fov:25, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
        <Cube/>
      </Canvas>
        </Left>
        <Right>
            
            <Title>Oyun ve Web Sayfaları Tasarlıyoruz</Title>
            <WhatWeDo>
                <Line src="./img/line.png"/>
                <Subtitle>
                   Biz Kimiz?
                </Subtitle>
            </WhatWeDo>
                <Desc>Tasarıma tutkuyla bağlı yaratıcı tasarımcılar ve geliştiriciler grubuyuz</Desc>
                <Button>Projelerimiz Gör</Button>
        </Right>
     </Container> 
    </Section>
  )
}

