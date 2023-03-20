import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls,Stage} from '@react-three/drei';
import Shoes from './Shoes'
import styled from 'styled-components';

const Desc = styled.div`
width:190px;
height:70px;
padding:20px;
background-color:#fff;
border-radius:4px;
position:absolute;
bottom:50px;
right:50px;

@media only screen and (max-width: 768px) {
  top:0;
  left:0;
  bottom:0;
  right:0;
  margin:auto;
   }
`;
export default function ProductDesign() {
  return (
    <>
    <Canvas>
      <Stage environment='city' intensity={0.6}>
        <Shoes/>
      </Stage>
      <OrbitControls enableZoom={false} autoRotate/>
    </Canvas>
    <Desc>Hem dünya standartlarında tasarıma hem de ürününüzün pazarda başarılı olmasını sağlamaya odaklanarak ürün tasarlıyoruz</Desc>
    </>
  )
}
