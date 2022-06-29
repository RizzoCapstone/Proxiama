import "./App.css";
import React, { useEffect, Suspense } from "react";
import { Canvas, useThree, useLoader, extend } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { Stars, shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";
import * as THREE from "three";

const AtmosphereShaderMaterial = shaderMaterial(
  //uniforms
  {},

  //vertex shader
  glsl`
  varying vec3 vertexNormal;

  void main(){
    vertexNormal = normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,

  //fragment shader
  glsl`
  varying vec3 vertexNormal;
  void main(){
    float intensity = pow(0.8 - dot(vertexNormal, vec3(0,0,1.0)),2.0);
    gl_FragColor = (vec4(0.3,0.6,1.0,1.0) * intensity);
  }
  `
);
// float intensity = 0.62 - dot(vertexNormal, vec3(0,0,1));
const GlobeShaderMaterial = shaderMaterial(
  //uniforms
  { globeTexture: "", uColor: new THREE.Color(0, 0, 0) },

  //Vertex Shader
  glsl`
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main(){
    vertexUV = uv;
    vertexNormal =normalize(normalMatrix * normal);
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  }`,

  //Fragment Shader
  glsl`  
  uniform vec3 uColor;
  uniform sampler2D globeTexture;
  varying vec2 vertexUV;
  varying vec3 vertexNormal;
  void main(){

    float intensity = 1.09 - dot(vertexNormal, vec3(0,0,1));
    vec3 atmosphere = vec3(uColor)* pow(intensity,1.5);

    gl_FragColor = vec4(atmosphere+texture2D(globeTexture,vertexUV).xyz, 1);
  }`
);

extend({ GlobeShaderMaterial });
extend({ AtmosphereShaderMaterial });

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);
    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

function Scene() {
  return (
    <>
      <CameraController />
      <Stars />
      <ambientLight intensity={0.1} />
      <pointLight position={[1, 1, 1]} />
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[1.5, 50, 50]} />
        <globeShaderMaterial
          uColor={new THREE.Color(0.3, 0.6, 1.0)}
          globeTexture={new THREE.TextureLoader().load("globe.jpg")}
        />
      </mesh>
      <mesh>
        <sphereBufferGeometry attach="geometry" args={[1.59, 50, 50]} />
        <atmosphereShaderMaterial
          attach="material"
          blending={THREE.AdditiveBlending}
          side={THREE.BackSide}
        />
      </mesh>
      <mesh position={[0, 0, 6]}>
        <sphereBufferGeometry attach="geometry" args={[0.35, 50, 50]} />
        <globeShaderMaterial
          uColor={new THREE.Color(0.1, 0.1, 0.1)}
          globeTexture={new THREE.TextureLoader().load("moon.jpg")}
        />
      </mesh>
    </>
  );
}

function App() {
  return (
    <div className="App" width={window.innerWidth} height={window.innerHeight}>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
