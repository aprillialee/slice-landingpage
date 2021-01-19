import { Canvas } from "react-three-fiber";

import { Suspense } from "react";

import { OrbitControls, Text } from "drei";

import Sphere from "./Sphere";

function Background() {
  return (
    <Canvas camera={{ position: [1, 0, 0] }}>
      <Suspense fallback={null}>
        <Sphere />
        <Text
          font="/RussoOne-Regular.ttf"
          position={[1, 0, 0]}
          color={"white"}
          fontSize={2}
          position={[7.5, -0.5, -1]}
          rotation={[0, 4.72, 0]}
          textStroke={"red"}
        >
          SLI
        </Text>
        <Text
          font="/RussoOne-Regular.ttf"
          position={[1, 0, 0]}
          color={"black"}
          fontSize={2}
          position={[7.5, -0.5, 1.9]}
          rotation={[0, 4.72, 0]}
        >
          CE
        </Text>
        <OrbitControls enableZoom={false} />
      </Suspense>
    </Canvas>
  );
}

export default Background;
