import React, { useMemo, useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { BufferAttribute } from "three";

const MyMesh = () => {
  const [starPos, setStarPos] = React.useState();
  const ref = useRef();
  let count = 1000;

  useEffect(() => {
    const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
    setStarPos(new BufferAttribute(new Float32Array(p), 3));
  }, []);

  useEffect(() => {
    console.log(starPos);
  }, [starPos]);

  // const points = useMemo(() => {
  //   const p = new Array(count).fill(0).map((v) => (0.5 - Math.random()) * 7.5);
  //   return new BufferAttribute(new Float32Array(p), 3);
  // }, [count]);

  // useFrame(
  //   (state, delta) => {
  //     let newArr = [...starPos.array];
  //     for (let i = 0; i < newArr.length; i++) {
  //       newArr[i] = newArr[i] + 0.1;
  //     }
  //     setStarPos(newArr);
  //   }
  //   // starPos.array.map((value) => {
  //   //   console.log(value);
  //   // })
  // );

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} {...starPos} />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        threshold={0.1}
        color={0xff00ff}
        sizeAttenuation={true}
      />
    </points>
  );
};

export const LoadingScreen = () => {
  return (
    <div className="loading">
      <Canvas>
        <ambientLight />
        <MyMesh />
      </Canvas>
    </div>
  );
};
