import { BackSide } from "three";

import * as THREE from "three";

import { useLoader } from "react-three-fiber";

function Sphere() {
  const texture = useLoader(THREE.TextureLoader, "/confetti.jpg");
  return (
    <mesh>
      <sphereGeometry attach="geometry" args={[10, 10, 10]} />
      <meshBasicMaterial attach="material" map={texture} side={BackSide} />
    </mesh>
  );
}

export default Sphere;
