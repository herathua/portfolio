import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';

export default function Earth({ isMobile = false }) {
  const earthRef = useRef<THREE.Mesh>(null);
  
  // Create a simple texture-based material
  const earthTexture = new THREE.TextureLoader().load(
    'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg'
  );

  useFrame((state) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.002;
      earthRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <mesh ref={earthRef} scale={isMobile ? 1.5 : 2.5}>
      <Sphere args={[1, 32, 32]}>
        <meshStandardMaterial 
          map={earthTexture}
          metalness={0.4}
          roughness={0.7}
        />
      </Sphere>
    </mesh>
  );
}