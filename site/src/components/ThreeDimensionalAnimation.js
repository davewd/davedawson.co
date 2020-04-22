import React, { useRef, useState, useEffect } from 'react'
import { Canvas, useThree, useFrame, extend } from 'react-three-fiber'
import styled, {withTheme} from 'styled-components'
import { backgroundColor, textColor } from '../styling/theme';
import { Model } from './3d-helpers'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

// Make OrbitControls known as <orbitControls />
extend({ OrbitControls })

const StyledThreeDimensionalAnimationWrapper = styled.div`
width: 100%
`;

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 1;
      controls.maxDistance = 5;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

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
  const { camera, domElement } = useThree()
    return(
        <StyledThreeDimensionalAnimationWrapper>
            <Canvas >
                <CameraController />
                <ambientLight />
                <pointLight position={[10, 100, 100]} />
                <Model url='./assets/male_head.obj'/>
                {/*<Box position={[-3, 0, 0]} {...props} />
                <Box position={[3, 0, 0]} {...props}/>*/}
            </Canvas>
        </StyledThreeDimensionalAnimationWrapper>
    )
}

export default withTheme(ThreeDimensionalAnimation);