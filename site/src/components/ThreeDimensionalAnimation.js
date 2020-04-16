import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import styled, {withTheme} from 'styled-components'
import ReactDOM from "react-dom"
import { useTheme } from '../styling/ThemeContext';
import { backgroundColor, textColor } from '../styling/theme';

const StyledThreeDimensionalAnimationWrapper = styled.div`
font-face: 'bold'
`;

function Box(props) {

    // This reference will give us direct access to the mesh
    const mesh = useRef()

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)    

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh
     {...props}
      ref={mesh}
      scale={active ? [5, 5, 5] : [2, 2, 2]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color={hovered ? `${backgroundColor(props)}` : `${textColor(props)}`} />
    </mesh>
  )
}

function ThreeDimensionalAnimation(props) {
    return(
        <StyledThreeDimensionalAnimationWrapper>
            <Canvas >
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-3, 0, 0]} {...props} />
                <Box position={[3, 0, 0]} {...props}/>
            </Canvas>
        </StyledThreeDimensionalAnimationWrapper>
    )
}

export default withTheme(ThreeDimensionalAnimation);