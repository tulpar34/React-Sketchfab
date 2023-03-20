import React,{useRef} from 'react'
import { OrbitControls, RenderTexture,PerspectiveCamera,Text } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Cube() {
   const textRef = useRef()
  useFrame(state=> (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*1) )
  return (
    <mesh>
          <boxGeometry/>
          <meshStandardMaterial>
            <RenderTexture attach='map'>
              <PerspectiveCamera
               makeDefault
               position={[0,0,5]}
              />
              <color attach='background' args={['#dc9dcd']} />
             <Text ref={textRef} fontSize={2.2} color='#555' >Musti</Text>
            </RenderTexture>
          </meshStandardMaterial>
         
        </mesh>
  )
}
