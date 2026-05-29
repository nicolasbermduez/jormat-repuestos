"use client";
import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshReflectorMaterial, Text3D, Center } from "@react-three/drei";
import * as THREE from "three";

function ActrosTruck() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.15 - 0.2;
    }
  });

  const bodyMat = <meshStandardMaterial color="#0a150a" metalness={0.9} roughness={0.1} />;
  const chromeMat = <meshStandardMaterial color="#c0c0c0" metalness={1} roughness={0.05} />;
  const glassMat = <meshStandardMaterial color="#4ade80" metalness={0.1} roughness={0} transparent opacity={0.4} />;
  const darkMat = <meshStandardMaterial color="#0a0a0f" metalness={0.8} roughness={0.2} />;
  const redMat = <meshStandardMaterial color="#cc1111" metalness={0.6} roughness={0.2} />;
  const lightYellow = <meshStandardMaterial color="#ffee88" emissive="#ffaa00" emissiveIntensity={2} />;

  return (
    <group ref={groupRef} position={[0, -0.8, 0]} scale={1.1}>
      {/* === MAIN CABIN === */}
      {/* Cabin body */}
      <mesh position={[0, 1.05, 0.3]}>
        <boxGeometry args={[2.2, 1.8, 2.4]} />
        {bodyMat}
      </mesh>
      {/* Cabin roof curve */}
      <mesh position={[0, 2.1, 0.1]} rotation={[0.15, 0, 0]}>
        <boxGeometry args={[2.2, 0.35, 2.1]} />
        {bodyMat}
      </mesh>
      {/* Cabin front slope */}
      <mesh position={[0, 1.3, -0.8]} rotation={[0.35, 0, 0]}>
        <boxGeometry args={[2.2, 1.0, 0.5]} />
        {bodyMat}
      </mesh>

      {/* === WINDSHIELD === */}
      <mesh position={[0, 1.5, -0.95]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[1.85, 0.85, 0.05]} />
        {glassMat}
      </mesh>
      {/* Windshield frame */}
      <mesh position={[0, 1.5, -0.97]} rotation={[0.3, 0, 0]}>
        <boxGeometry args={[1.95, 0.95, 0.03]} />
        {darkMat}
      </mesh>

      {/* === SIDE WINDOWS === */}
      <mesh position={[1.12, 1.5, 0.2]}>
        <boxGeometry args={[0.04, 0.55, 0.9]} />
        {glassMat}
      </mesh>
      <mesh position={[-1.12, 1.5, 0.2]}>
        <boxGeometry args={[0.04, 0.55, 0.9]} />
        {glassMat}
      </mesh>

      {/* === FRONT GRILL - Mercedes style === */}
      <mesh position={[0, 0.85, -1.16]}>
        <boxGeometry args={[1.8, 0.8, 0.08]} />
        {darkMat}
      </mesh>
      {/* Grill bars */}
      {[-0.28, -0.14, 0, 0.14, 0.28].map((y, i) => (
        <mesh key={i} position={[0, 0.85 + y, -1.18]}>
          <boxGeometry args={[1.75, 0.035, 0.06]} />
          {chromeMat}
        </mesh>
      ))}
      {/* Grill vertical bars */}
      {[-0.6, -0.3, 0, 0.3, 0.6].map((x, i) => (
        <mesh key={i} position={[x, 0.85, -1.18]}>
          <boxGeometry args={[0.04, 0.75, 0.06]} />
          {chromeMat}
        </mesh>
      ))}

      {/* === MERCEDES STAR LOGO === */}
      <mesh position={[0, 1.05, -1.2]}>
        <cylinderGeometry args={[0.12, 0.12, 0.04, 32]} />
        {chromeMat}
      </mesh>
      <mesh position={[0, 1.05, -1.22]}>
        <cylinderGeometry args={[0.08, 0.08, 0.02, 32]} />
        <meshStandardMaterial color="#silver" metalness={1} roughness={0} />
      </mesh>

      {/* === HEADLIGHTS - LED strips === */}
      {/* Left headlight */}
      <mesh position={[-0.82, 1.22, -1.15]}>
        <boxGeometry args={[0.4, 0.18, 0.1]} />
        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[-0.82, 1.22, -1.2]}>
        <boxGeometry args={[0.36, 0.08, 0.04]} />
        {lightYellow}
      </mesh>
      {/* Right headlight */}
      <mesh position={[0.82, 1.22, -1.15]}>
        <boxGeometry args={[0.4, 0.18, 0.1]} />
        <meshStandardMaterial color="#111" metalness={0.5} roughness={0.3} />
      </mesh>
      <mesh position={[0.82, 1.22, -1.2]}>
        <boxGeometry args={[0.36, 0.08, 0.04]} />
        {lightYellow}
      </mesh>

      {/* DRL strips */}
      <mesh position={[-0.82, 1.32, -1.21]}>
        <boxGeometry args={[0.35, 0.03, 0.02]} />
        <meshStandardMaterial color="#ffffff" emissive="#86efac" emissiveIntensity={3} />
      </mesh>
      <mesh position={[0.82, 1.32, -1.21]}>
        <boxGeometry args={[0.35, 0.03, 0.02]} />
        <meshStandardMaterial color="#ffffff" emissive="#86efac" emissiveIntensity={3} />
      </mesh>

      {/* === BUMPER === */}
      <mesh position={[0, 0.42, -1.1]}>
        <boxGeometry args={[2.15, 0.38, 0.25]} />
        {chromeMat}
      </mesh>
      {/* Bumper lower */}
      <mesh position={[0, 0.22, -1.0]}>
        <boxGeometry args={[2.1, 0.15, 0.2]} />
        {darkMat}
      </mesh>
      {/* Bumper air intakes */}
      <mesh position={[-0.55, 0.38, -1.22]}>
        <boxGeometry args={[0.5, 0.22, 0.04]} />
        {darkMat}
      </mesh>
      <mesh position={[0.55, 0.38, -1.22]}>
        <boxGeometry args={[0.5, 0.22, 0.04]} />
        {darkMat}
      </mesh>

      {/* === MIRRORS === */}
      {/* Left mirror arm */}
      <mesh position={[-1.28, 1.8, -0.5]}>
        <boxGeometry args={[0.08, 0.05, 0.5]} />
        {chromeMat}
      </mesh>
      <mesh position={[-1.42, 1.75, -0.3]}>
        <boxGeometry args={[0.25, 0.35, 0.06]} />
        {darkMat}
      </mesh>
      {/* Right mirror arm */}
      <mesh position={[1.28, 1.8, -0.5]}>
        <boxGeometry args={[0.08, 0.05, 0.5]} />
        {chromeMat}
      </mesh>
      <mesh position={[1.42, 1.75, -0.3]}>
        <boxGeometry args={[0.25, 0.35, 0.06]} />
        {darkMat}
      </mesh>

      {/* === ROOF SPOILER === */}
      <mesh position={[0, 2.38, 0.3]}>
        <boxGeometry args={[2.15, 0.12, 1.6]} />
        {bodyMat}
      </mesh>
      {/* Roof visor */}
      <mesh position={[0, 2.42, -0.7]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[2.1, 0.08, 0.4]} />
        <meshStandardMaterial color="#0d0d1a" metalness={0.8} roughness={0.2} />
      </mesh>
      {/* Roof light bar */}
      <mesh position={[0, 2.46, -0.68]}>
        <boxGeometry args={[1.9, 0.05, 0.06]} />
        <meshStandardMaterial color="#ffaa00" emissive="#ff8800" emissiveIntensity={1.5} />
      </mesh>

      {/* === CHASSIS / FRAME === */}
      <mesh position={[0, 0.08, 0.8]}>
        <boxGeometry args={[0.55, 0.16, 4.5]} />
        <meshStandardMaterial color="#222" metalness={0.7} roughness={0.3} />
      </mesh>
      {/* Side rails */}
      <mesh position={[-0.7, 0.08, 0.8]}>
        <boxGeometry args={[0.12, 0.14, 4.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>
      <mesh position={[0.7, 0.08, 0.8]}>
        <boxGeometry args={[0.12, 0.14, 4.5]} />
        <meshStandardMaterial color="#1a1a1a" metalness={0.7} roughness={0.3} />
      </mesh>

      {/* === CARGO BOX === */}
      <mesh position={[0, 1.1, 2.1]}>
        <boxGeometry args={[2.18, 1.8, 3.8]} />
        <meshStandardMaterial color="#151525" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Cargo box ribs */}
      {[-1.6, -1.0, -0.4, 0.2, 0.8, 1.4].map((z, i) => (
        <mesh key={i} position={[0, 1.1, z + 2.1]}>
          <boxGeometry args={[2.22, 1.85, 0.04]} />
          <meshStandardMaterial color="#0a0a18" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}
      {/* Rear doors */}
      <mesh position={[0, 1.1, 4.02]}>
        <boxGeometry args={[2.1, 1.75, 0.08]} />
        <meshStandardMaterial color="#0f0f22" metalness={0.6} roughness={0.3} />
      </mesh>
      {/* Rear door handle */}
      <mesh position={[0, 1.1, 4.08]}>
        <boxGeometry args={[0.08, 0.6, 0.06]} />
        {chromeMat}
      </mesh>
      {/* Rear lights */}
      <mesh position={[-0.9, 0.65, 4.07]}>
        <boxGeometry args={[0.28, 0.18, 0.04]} />
        {redMat}
      </mesh>
      <mesh position={[0.9, 0.65, 4.07]}>
        <boxGeometry args={[0.28, 0.18, 0.04]} />
        {redMat}
      </mesh>

      {/* === WHEELS - 10 total === */}
      {[
        // Front axle
        [-1.15, -0.18, -0.75],
        [1.15, -0.18, -0.75],
        // Drive axle 1
        [-1.18, -0.18, 1.6],
        [1.18, -0.18, 1.6],
        [-1.38, -0.18, 1.6],
        [1.38, -0.18, 1.6],
        // Drive axle 2
        [-1.18, -0.18, 2.5],
        [1.18, -0.18, 2.5],
        [-1.38, -0.18, 2.5],
        [1.38, -0.18, 2.5],
      ].map(([x, y, z], i) => (
        <group key={i} position={[x, y, z]}>
          {/* Tire */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.32, 0.14, 16, 32]} />
            <meshStandardMaterial color="#111" roughness={0.9} metalness={0.1} />
          </mesh>
          {/* Rim */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.22, 0.22, 0.15, 16]} />
            {chromeMat}
          </mesh>
          {/* Hub */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.1, 0.1, 0.2, 8]} />
            {darkMat}
          </mesh>
        </group>
      ))}

      {/* === EXHAUST STACKS === */}
      <mesh position={[-1.0, 2.1, 0.5]}>
        <cylinderGeometry args={[0.04, 0.05, 1.2, 12]} />
        {chromeMat}
      </mesh>
      <mesh position={[-1.0, 2.75, 0.5]}>
        <cylinderGeometry args={[0.06, 0.04, 0.1, 12]} />
        {chromeMat}
      </mesh>

      {/* === FUEL TANKS === */}
      <mesh position={[-1.12, 0.35, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.85, 20]} />
        <meshStandardMaterial color="#0a150a" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[1.12, 0.35, 1.1]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.25, 0.25, 0.85, 20]} />
        <meshStandardMaterial color="#0a150a" metalness={0.8} roughness={0.2} />
      </mesh>

      {/* === STEP RAILS === */}
      <mesh position={[-1.12, 0.55, -0.55]}>
        <boxGeometry args={[0.06, 0.04, 0.5]} />
        {chromeMat}
      </mesh>
      <mesh position={[1.12, 0.55, -0.55]}>
        <boxGeometry args={[0.06, 0.04, 0.5]} />
        {chromeMat}
      </mesh>

      {/* Ground shadow */}
      <mesh position={[0, -0.65, 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5, 7]} />
        <meshBasicMaterial color="#000033" transparent opacity={0.3} />
      </mesh>
    </group>
  );
}

function Ground() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.45, 0]}>
      <planeGeometry args={[30, 30]} />
      <MeshReflectorMaterial
        blur={[300, 100]}
        resolution={1024}
        mixBlur={1}
        mixStrength={40}
        roughness={1}
        depthScale={1.2}
        minDepthThreshold={0.4}
        maxDepthThreshold={1.4}
        color="#020c02"
        metalness={0.8}
        mirror={0}
      />
    </mesh>
  );
}

function Particles() {
  const count = 80;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = Math.random() * 8;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }
  return (
    <points>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#4ade80" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function TruckScene() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [5, 2.5, 8], fov: 40 }}
        gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.2 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <directionalLight position={[10, 10, 5]} intensity={2} color="#ffffff" castShadow />
          <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#16a34a" />
          <pointLight position={[0, 5, 0]} intensity={1} color="#166534" />
          <pointLight position={[0, 0.5, -2]} intensity={3} color="#4488ff" distance={6} />
          <pointLight position={[-3, 1, 0]} intensity={1.5} color="#15803d" distance={8} />

          <Environment preset="night" />

          <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.1}>
            <ActrosTruck />
          </Float>

          <Ground />
          <Particles />

          {/* Atmospheric fog */}
          <fog attach="fog" args={["#020c02", 15, 35]} />
        </Suspense>
      </Canvas>
    </div>
  );
}
