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
          width={2}
          fontSize={1.2}
          position={[2.5, -0.2, -0.4]}
          rotation={[0, 4.72, 0]}
          textStroke={"red"}
        >
          SLI
        </Text>
        <Text
          font="/RussoOne-Regular.ttf"
          position={[1, 0, 0]}
          color={"black"}
          fontSize={1.2}
          position={[2.5, -0.2, 1.4]}
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
