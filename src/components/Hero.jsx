import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Sphere,MeshDistortMaterial} from '@react-three/drei';


const Section = styled.div`
height:100vh;
scroll-snap-align:center;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

@media only screen and (max-width: 768px) {
  height:200vh;
}

`;
const Container = styled.div`
height:100%;
scroll-snap-align:center;
width:1000px;
display:flex;
justify-content:space-between;

@media only screen and (max-width: 768px) {
  width:100%;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}

`;
const Left = styled.div`
  flex:2;
  display:flex;
  flex-direction:column;
  justify-content:center;
  gap:20px;

  @media only screen and (max-width: 768px) {
    flex:1;
    align-items:center;
  }
`;
const Title = styled.h1`
  font-size:74px;

  @media only screen and (max-width: 768px) {
    text-align:center;
    font-size:54px;
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

  @media only screen and (max-width: 768px) {
    padding:20px;
    text-align:center;
  }
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
const Right = styled.div`
  flex:3;
  position:relative;

  @media only screen and (max-width: 768px) {
    flex:1;
    width:100%;
  }
`;
const Img = styled.img`
  width:500px;
  height:450px;
  object-fit:contain;
  position:absolute;
  top:0;
  bottom:0;
  left:0;
  right:0;
  margin:auto;
  animation:animate 2s infinite ease alternate;
  background:transparent;

  @media only screen and (max-width: 768px) {
    width:300px;
    height:300px;
   
  }

  @keyframes animate {
    100%{
        transform:translateY(20px);
    }
  }
`;

export default function Hero() {
  return (
    <Section>
     <Navbar/>
     { <Container>
        <Left>
            <Title>Düşün.Yap.Çöz</Title>
            <WhatWeDo>
                <Line src="./img/line.png"/>
                <Subtitle>
                    Ne Mi Yapıyoruz?
                </Subtitle>
            </WhatWeDo>
                <Desc>Keyifli, insan merkezli dijital deneyimler yaratmaktan keyif alıyoruz.</Desc>
                <Button>Daha fazla bilgi edin</Button>
            
        </Left>
        <Right>
        <Canvas>
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
         <Sphere args={[1,100,200]} scale={2.4}>
         <MeshDistortMaterial
           color='#3d1c56'
           attach='material'
           distort={0.5}
           speed={2}
         />
         </Sphere>
       </Canvas>
           { <Img src='./img/moon.png'/>}
        </Right>
     </Container>  }
    </Section>
  )
}
