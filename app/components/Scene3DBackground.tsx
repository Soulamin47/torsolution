"use client";

// Professional "tech" backdrop: a drifting particle network — nodes joined
// by thin lines when close — over the dark base. Evokes systems, graphs and
// connections rather than the earlier playful blobs. Restrained palette
// (violet accent + soft white). Pointer adds a subtle parallax.
//
// Perf/robustness:
//  - O(n^2) proximity check on a modest node count, buffers preallocated,
//  - frameloop pauses when the tab is hidden,
//  - reduced-motion users get a still frame (no drift/parallax),
//  - lazy-loaded via Background3D (ssr:false) so nothing runs on the server.
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 130;
const MAX_DIST = 1.75;
const BOUNDS = { x: 9, y: 5, z: 3 };
const NODE_COLOR = "#b9aaff";
const LINE_COLOR = new THREE.Color("#7c5cff");

// Round sprite so nodes are dots, not squares.
function makeDotTexture() {
  const s = 64;
  const c = document.createElement("canvas");
  c.width = c.height = s;
  const ctx = c.getContext("2d")!;
  const g = ctx.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  g.addColorStop(0, "rgba(255,255,255,1)");
  g.addColorStop(0.4, "rgba(255,255,255,0.85)");
  g.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, s, s);
  const tex = new THREE.CanvasTexture(c);
  tex.needsUpdate = true;
  return tex;
}

function Network({ reduced }: { reduced: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const state = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() * 2 - 1) * BOUNDS.x;
      positions[i * 3 + 1] = (Math.random() * 2 - 1) * BOUNDS.y;
      positions[i * 3 + 2] = (Math.random() * 2 - 1) * BOUNDS.z;
      velocities[i * 3] = (Math.random() * 2 - 1) * 0.015;
      velocities[i * 3 + 1] = (Math.random() * 2 - 1) * 0.015;
      velocities[i * 3 + 2] = (Math.random() * 2 - 1) * 0.015;
    }
    const pointGeo = new THREE.BufferGeometry();
    pointGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Preallocate line buffer: max pairs * 2 vertices * 3 comps.
    const maxVerts = COUNT * COUNT * 3;
    const linePositions = new Float32Array(maxVerts);
    const lineColors = new Float32Array(maxVerts);
    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3));
    lineGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3));

    const dot = makeDotTexture();
    return { positions, velocities, pointGeo, lineGeo, linePositions, lineColors, dot };
  }, []);

  useFrame((frame, delta) => {
    const { positions, velocities, pointGeo, lineGeo, linePositions, lineColors } = state;
    const dt = Math.min(delta, 0.05) * 60;

    if (!reduced) {
      for (let i = 0; i < COUNT; i++) {
        for (let a = 0; a < 3; a++) {
          const idx = i * 3 + a;
          positions[idx] += velocities[idx] * dt;
          const bound = a === 0 ? BOUNDS.x : a === 1 ? BOUNDS.y : BOUNDS.z;
          if (positions[idx] > bound || positions[idx] < -bound) {
            velocities[idx] *= -1;
            positions[idx] = Math.max(-bound, Math.min(bound, positions[idx]));
          }
        }
      }
      pointGeo.attributes.position.needsUpdate = true;
    }

    // Rebuild proximity lines.
    let v = 0;
    for (let i = 0; i < COUNT; i++) {
      const ix = positions[i * 3];
      const iy = positions[i * 3 + 1];
      const iz = positions[i * 3 + 2];
      for (let j = i + 1; j < COUNT; j++) {
        const dx = ix - positions[j * 3];
        const dy = iy - positions[j * 3 + 1];
        const dz = iz - positions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < MAX_DIST) {
          const alpha = 1 - dist / MAX_DIST;
          linePositions[v] = ix;
          linePositions[v + 1] = iy;
          linePositions[v + 2] = iz;
          linePositions[v + 3] = positions[j * 3];
          linePositions[v + 4] = positions[j * 3 + 1];
          linePositions[v + 5] = positions[j * 3 + 2];
          for (let k = 0; k < 2; k++) {
            lineColors[v + k * 3] = LINE_COLOR.r * alpha;
            lineColors[v + k * 3 + 1] = LINE_COLOR.g * alpha;
            lineColors[v + k * 3 + 2] = LINE_COLOR.b * alpha;
          }
          v += 6;
        }
      }
    }
    lineGeo.setDrawRange(0, v / 3);
    lineGeo.attributes.position.needsUpdate = true;
    lineGeo.attributes.color.needsUpdate = true;

    if (groupRef.current && !reduced) {
      const g = groupRef.current;
      g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, frame.pointer.x * 0.16, 0.03);
      g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, -frame.pointer.y * 0.1, 0.03);
    }
  });

  return (
    <group ref={groupRef}>
      <points ref={pointsRef} geometry={state.pointGeo}>
        <pointsMaterial
          size={0.13}
          map={state.dot}
          color={NODE_COLOR}
          transparent
          opacity={0.9}
          depthWrite={false}
          sizeAttenuation
          blending={THREE.AdditiveBlending}
        />
      </points>
      <lineSegments ref={linesRef} geometry={state.lineGeo}>
        <lineBasicMaterial
          vertexColors
          transparent
          opacity={0.55}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>
    </group>
  );
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
      style={{ position: "fixed", inset: 0, zIndex: -1, pointerEvents: "none" }}
    >
      <Canvas
        dpr={[1, 1.8]}
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        frameloop={reduced ? "demand" : "always"}
      >
        <Network reduced={reduced} />
      </Canvas>
    </div>
  );
}
