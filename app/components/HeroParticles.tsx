"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// ─── Floating wireframe shapes ─────────────────────────────────────────────────

function FloatingShape({
  position,
  color,
  speed,
  rotAxis,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  rotAxis: [number, number, number];
}) {
  const ref = useRef<THREE.Mesh>(null!);
  const t = useRef(Math.random() * 100);

  useFrame((_, delta) => {
    t.current += delta * speed;
    if (!ref.current) return;
    ref.current.rotation.x += delta * rotAxis[0] * 0.4;
    ref.current.rotation.y += delta * rotAxis[1] * 0.4;
    ref.current.rotation.z += delta * rotAxis[2] * 0.2;
    ref.current.position.y = position[1] + Math.sin(t.current) * 0.3;
  });

  return (
    <mesh ref={ref} position={position}>
      <icosahedronGeometry args={[0.35, 0]} />
      <meshBasicMaterial color={color} wireframe opacity={0.35} transparent />
    </mesh>
  );
}

// ─── Particle cloud ────────────────────────────────────────────────────────────

function Particles({ count = 280 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const mouse = useRef({ x: 0, y: 0 });
  const { size } = useThree();

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#AFA9EC"),
      new THREE.Color("#5DCAA5"),
      new THREE.Color("#85B7EB"),
      new THREE.Color("#F0997B"),
    ];

    for (let i = 0; i < count; i++) {
      // Spread across a wide area biased toward center
      pos[i * 3]     = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3]     = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, col];
  }, [count]);

  // Track mouse
  useMemo(() => {
    if (typeof window === "undefined") return;
    const onMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    // Gentle parallax on mouse
    ref.current.rotation.y += (mouse.current.x * 0.08 - ref.current.rotation.y) * 0.03;
    ref.current.rotation.x += (mouse.current.y * 0.04 - ref.current.rotation.x) * 0.03;
    // Slow drift
    ref.current.rotation.z = state.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute args={[positions, 3]} attach="attributes-position" />
        <bufferAttribute args={[colors, 3]} attach="attributes-color" />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        vertexColors
        transparent
        opacity={0.75}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

// ─── Scene ─────────────────────────────────────────────────────────────────────

function Scene() {
  const shapes = useMemo(
    () => [
      { position: [-4.5, 1.5, -2] as [number,number,number], color: "#AFA9EC", speed: 0.6, rotAxis: [1,0.5,0] as [number,number,number] },
      { position: [4, -1, -3]  as [number,number,number], color: "#5DCAA5", speed: 0.4, rotAxis: [0,1,0.3] as [number,number,number] },
      { position: [2.5, 2.5, -1.5] as [number,number,number], color: "#85B7EB", speed: 0.7, rotAxis: [0.3,0,1] as [number,number,number] },
      { position: [-3, -2, -2.5] as [number,number,number], color: "#F0997B", speed: 0.5, rotAxis: [0.5,0.5,0] as [number,number,number] },
    ],
    []
  );

  return (
    <>
      <Particles count={320} />
      {shapes.map((s, i) => (
        <FloatingShape key={i} {...s} />
      ))}
    </>
  );
}

// ─── Export ────────────────────────────────────────────────────────────────────

export default function HeroParticles() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        dpr={[1, 1.5]}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
