import { Canvas } from "react-three-fiber";

import { Suspense } from "react";

import { OrbitControls, Text } from "drei";

import Sphere from "./Sphere";

function Background() {
  return (
    <Canvas camera={{ position: [1, 0, 0] }}>
      <Suspense fallback={null}>
        <Sphere />
        <Text color="yellow" z={-2} font={"Russo One"}>
          HELLO
        </Text>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}

export default Background;
