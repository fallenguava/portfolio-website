"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

function SceneObjects() {
  const groupRef = useRef<THREE.Group>(null);
  const { camera, invalidate } = useThree();

  const points = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => {
        const ring = i % 4;
        return {
          x: Math.cos((i / 6) * Math.PI * 2) * (3.2 + ring * 0.4),
          y: (i % 3) - 1,
          z: -i * 0.8,
          scale: 0.18 + (i % 3) * 0.05,
        };
      }),
    [],
  );

  useEffect(() => {
    const onProgress = (event: Event) => {
      if (!groupRef.current) {
        return;
      }

      const progress = (event as CustomEvent<number>).detail;

      groupRef.current.rotation.y = progress * Math.PI * 0.22;
      groupRef.current.position.y = progress * 0.08;

      camera.position.z = 8 - progress * 1.8;
      camera.position.y = 0.25 + progress * 0.45;
      camera.lookAt(0, 0, 0);
      invalidate();
    };

    window.addEventListener("journey:progress", onProgress as EventListener);

    return () => {
      window.removeEventListener(
        "journey:progress",
        onProgress as EventListener,
      );
    };
  }, [camera, invalidate]);

  return (
    <group ref={groupRef}>
      <Stars
        radius={110}
        depth={40}
        count={220}
        factor={1.4}
        saturation={0}
        fade
        speed={0.2}
      />

      <mesh position={[0, -1.6, -3.5]} rotation={[-Math.PI / 2.8, 0, 0]}>
        <planeGeometry args={[20, 20, 8, 8]} />
        <meshStandardMaterial
          color="#0f172a"
          transparent
          opacity={0.16}
          wireframe
        />
      </mesh>

      {points.map((point, idx) => (
        <mesh
          key={`${point.x}-${point.z}`}
          position={[point.x, point.y, point.z]}
        >
          <icosahedronGeometry args={[point.scale, 0]} />
          <meshStandardMaterial
            color={idx % 2 === 0 ? "#60a5fa" : "#38bdf8"}
            emissive={idx % 2 === 0 ? "#1d4ed8" : "#0e7490"}
            emissiveIntensity={0.22}
            roughness={0.55}
            metalness={0.2}
          />
        </mesh>
      ))}
    </group>
  );
}

export function SceneCanvas() {
  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 1.25]}
      camera={{ position: [0, 0.2, 8], fov: 52 }}
      gl={{
        antialias: false,
        alpha: true,
        powerPreference: "high-performance",
      }}
    >
      <color attach="background" args={["#030712"]} />
      <fog attach="fog" args={["#030712", 8, 22]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[3, 5, 2]} intensity={0.9} color="#93c5fd" />
      <pointLight position={[-4, -2, -2]} intensity={0.7} color="#22d3ee" />
      <SceneObjects />
    </Canvas>
  );
}
