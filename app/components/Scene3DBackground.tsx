"use client";

// Interactive 3D WebGL backdrop for the Torsolution vitrine.
// Organic distorting blobs in the brand palette that float, self-rotate
// and follow the pointer with a soft parallax. Alpha canvas → the cream
// page background shows through and only the blobs are painted.
//
// Perf/robustness:
//  - dpr capped, frameloop pauses when the tab is hidden,
//  - reduced-motion users get a still frame (no distortion/parallax),
//  - lazy-loaded via Background3D (ssr:false) so nothing runs on the server.
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

type BlobDef = {
  position: [number, number, number];
  color: string;
  scale: number;
  distort: number;
  speed: number;
};

const BLOBS: BlobDef[] = [
  // Prominent glossy orbs in the empty right zone (away from hero copy).
  { position: [2.3, 0.6, 0.5], color: "#7c5cff", scale: 1.3, distort: 0.3, speed: 1.3 },
  { position: [3.3, -1.2, 0], color: "#00a878", scale: 0.9, distort: 0.32, speed: 1.6 },
  { position: [1.7, -1.9, 0.3], color: "#ff7a59", scale: 0.7, distort: 0.34, speed: 1.5 },
  { position: [3.6, 1.6, -0.6], color: "#ffcf4a", scale: 0.65, distort: 0.32, speed: 1.4 },
  // Soft far-back accents for depth.
  { position: [-3.9, -2.2, -5], color: "#bca7ff", scale: 1.5, distort: 0.4, speed: 1.1 },
  { position: [-0.6, 3.1, -6], color: "#70e1c1", scale: 1.3, distort: 0.4, speed: 1.4 },
];

function Blob({ position, color, scale, distort, speed, reduced }: BlobDef & { reduced: boolean }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (ref.current && !reduced) {
      ref.current.rotation.y += delta * 0.15;
      ref.current.rotation.x += delta * 0.05;
    }
  });

  return (
    <Float
      speed={reduced ? 0 : speed}
      rotationIntensity={reduced ? 0 : 0.3}
      floatIntensity={reduced ? 0 : 0.5}
    >
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 5]} />
        <MeshDistortMaterial
          color={color}
          distort={reduced ? 0 : distort}
          speed={reduced ? 0 : 1.6}
          roughness={0.16}
          metalness={0.1}
        />
      </mesh>
    </Float>
  );
}

function Rig({ children, reduced }: { children: React.ReactNode; reduced: boolean }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current || reduced) return;
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, state.pointer.x * 0.28, 0.04);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, -state.pointer.y * 0.18, 0.04);
    ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, state.pointer.x * 0.5, 0.04);
    ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, state.pointer.y * 0.35, 0.04);
  });

  return <group ref={ref}>{children}</group>;
}

export default function Scene3DBackground() {
  const reduced = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches,
    []
  );

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        pointerEvents: "none",
      }}
    >
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 7], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={reduced ? "demand" : "always"}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[-5, 6, 5]} intensity={2.6} />
        <pointLight position={[6, 2, 4]} color="#ffffff" intensity={30} distance={40} />
        <pointLight position={[-6, -3, 3]} color="#7c5cff" intensity={45} distance={35} />
        <pointLight position={[5, -4, 2]} color="#ff7a59" intensity={28} distance={35} />
        <Rig reduced={reduced}>
          {BLOBS.map((blob, i) => (
            <Blob key={i} {...blob} reduced={reduced} />
          ))}
        </Rig>
      </Canvas>
    </div>
  );
}
