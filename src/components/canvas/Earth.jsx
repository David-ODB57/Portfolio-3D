import React, { useRef, Suspense } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import EarthDayMap from "../canvas/8k_earth_daymap.jpg";
import EarthNormalMap from "../canvas/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../canvas/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../canvas/8k_earth_clouds.jpg";

import { TextureLoader } from "three";
import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {

  const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
    TextureLoader,
    [EarthDayMap, EarthNormalMap, EarthSpecularMap, EarthCloudsMap]
  );

  const earthRef = useRef();
  const cloudsRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    earthRef.current.rotation.y = elapsedTime / 8;
    cloudsRef.current.rotation.y = elapsedTime / 4;
  });

  return (
    <>
      <pointLight color="#f6f3ea" position={[2, 0, 5]} intensity={1.7} />
      <mesh ref={cloudsRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1.005, 64, 64]} />
        <meshPhongMaterial
          map={cloudsMap}
          opacity={0.4}
          depthWrite={true}
          transparent={true}
          side={THREE.DoubleSide}
        />
      </mesh>
      <mesh ref={earthRef} position={[0, 0, 3]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshPhongMaterial specularMap={specularMap} />
        <meshStandardMaterial
          map={colorMap}
          normalMap={normalMap}
          metalness={0.4}
          roughness={0.7}
        />
      </mesh>
    </>
  );
}

const EarthCanvas = () => {
  return (
    <Canvas linear>
      <Suspense fallback={<CanvasLoader />}>
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;