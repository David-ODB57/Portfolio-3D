import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={1.3}>
        <capsuleGeometry args={[1.3, 1.75, 20, 20]} />
        <meshStandardMaterial color={'#ac54f0'} emissive={'#ac54f0'} roughness={0.5} metalness={0.7} />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={2.5}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
}

const BallCanvas = ({ icon }) => {
  return(
     <Canvas
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Ball imgUrl={ icon } />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas;