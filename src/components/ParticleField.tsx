"use client";
import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const mesh = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const [positions, randoms] = useMemo(() => {
    const count = 2000;
    const pos = new Float32Array(count * 3);
    const rnd = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      rnd[i] = Math.random();
    }
    return [pos, rnd];
  }, []);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    mesh.current.rotation.y = mouse.x * 0.15;
    mesh.current.rotation.x = -mouse.y * 0.15;
    const attr = mesh.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < 2000; i++) {
      attr.setY(i, attr.getY(i) + Math.sin(t * 0.3 + randoms[i] * 6.28) * 0.0012);
    }
    attr.needsUpdate = true;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.04} color="#FF8000" transparent opacity={0.65} sizeAttenuation />
    </points>
  );
}

export default function ParticleField() {
  return (
    <Canvas
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
      camera={{ position: [0, 0, 8], fov: 60 }}
      gl={{ antialias: true }}
    >
      <Particles />
    </Canvas>
  );
}
