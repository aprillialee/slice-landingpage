import { BackSide } from "three";

import * as THREE from "three";

import { useLoader } from "react-three-fiber";

function Sphere() {
  const texture = useLoader(THREE.TextureLoader, "/confetti.jpg");
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[3.5, 32, 32]} />
      <meshBasicMaterial attach="material" map={texture} side={BackSide} />
    </mesh>
  );
}

export default Sphere;
