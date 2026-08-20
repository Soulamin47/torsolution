"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Sparkles, Stars, useTexture } from "@react-three/drei";
import * as THREE from "three";

function LogoInSpace() {
  const group = useRef<THREE.Group>(null!);
  const texture = useTexture("/app-icon.svg");

  useFrame((state) => {
    if (!group.current) return;
    const time = state.clock.elapsedTime;
    const targetX = state.pointer.y * -0.16 + Math.sin(time * 0.42) * 0.035;
    const targetY = state.pointer.x * 0.24 + Math.sin(time * 0.32) * 0.08;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.035;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.035;
    group.current.rotation.z = Math.sin(time * 0.38) * 0.035;
  });

  return (
    <Float speed={1.25} rotationIntensity={0.08} floatIntensity={0.55}>
      <group ref={group}>
        {/* Repeated translucent layers make the real logo feel volumetric. */}
        {[0.22, 0.16, 0.1].map((z, index) => (
          <mesh key={z} position={[0, 0, -z]} scale={1 + index * 0.018}>
            <planeGeometry args={[3.25, 3.25]} />
            <meshBasicMaterial map={texture} transparent opacity={0.16 - index * 0.035} depthWrite={false} blending={THREE.AdditiveBlending} />
          </mesh>
        ))}
        <mesh position={[0, 0, 0.26]}>
          <planeGeometry args={[3.18, 3.18]} />
          <meshBasicMaterial map={texture} transparent side={THREE.DoubleSide} toneMapped={false} />
        </mesh>

        {/* A quiet halo follows the logo instead of competing with it. */}
        <mesh position={[0, 0, -0.55]}>
          <circleGeometry args={[2.05, 96]} />
          <meshBasicMaterial color="#5eead4" transparent opacity={0.075} depthWrite={false} blending={THREE.AdditiveBlending} />
        </mesh>
        <mesh position={[0.3, -0.05, -0.62]} scale={1.22}>
          <ringGeometry args={[2.08, 2.095, 128]} />
          <meshBasicMaterial color="#a78bfa" transparent opacity={0.24} depthWrite={false} />
        </mesh>
      </group>
    </Float>
  );
}

function DepthParticles() {
  const points = useRef<THREE.Points>(null!);
  const positions = useMemo(() => {
    const values = new Float32Array(420 * 3);
    for (let i = 0; i < 420; i += 1) {
      const a = Math.sin((i + 1) * 12.9898) * 43758.5453;
      const b = Math.sin((i + 1) * 47.123) * 23421.631;
      const c = Math.sin((i + 1) * 91.731) * 18312.221;
      const randomA = a - Math.floor(a);
      const randomB = b - Math.floor(b);
      const randomC = c - Math.floor(c);
      values[i * 3] = (randomA - 0.5) * 13;
      values[i * 3 + 1] = (randomB - 0.5) * 9;
      values[i * 3 + 2] = -1 - randomC * 8;
    }
    return values;
  }, []);

  useFrame((state) => {
    if (!points.current) return;
    points.current.rotation.z = state.clock.elapsedTime * 0.006;
    points.current.rotation.y = state.pointer.x * 0.025;
    points.current.rotation.x = state.pointer.y * 0.018;
  });

  return (
    <points ref={points}>
      <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /></bufferGeometry>
      <pointsMaterial color="#dffcf3" size={0.025} transparent opacity={0.52} sizeAttenuation depthWrite={false} />
    </points>
  );
}

function Scene() {
  return (
    <>
      <fog attach="fog" args={["#080812", 7, 18]} />
      <Stars radius={38} depth={18} count={950} factor={2.2} saturation={0.12} fade speed={0.32} />
      <DepthParticles />
      <Sparkles count={28} scale={[6, 4.5, 3]} size={2.5} speed={0.22} color="#a78bfa" opacity={0.55} />
      <Suspense fallback={null}><LogoInSpace /></Suspense>
    </>
  );
}

export default function ProductOrbital() {
  return (
    <div className="relative h-[430px] w-full md:h-[560px]" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 7.2], fov: 43 }} dpr={[1, 1.7]} gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}>
        <Scene />
      </Canvas>
    </div>
  );
}
