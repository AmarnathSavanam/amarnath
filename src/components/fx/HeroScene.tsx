import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Sparkles } from "@react-three/drei";
import type { Mesh, Group } from "three";

function Knot() {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = t * 0.15;
    ref.current.rotation.y = t * 0.2;
  });
  return (
    <mesh ref={ref} position={[0, 0, -3]} castShadow>
      <torusKnotGeometry args={[0.45, 0.13, 220, 32]} />
      <MeshDistortMaterial
        color="#ff6b35"
        emissive="#e84393"
        emissiveIntensity={0.08}
        distort={0.18}
        speed={1.2}
        roughness={0.25}
        metalness={0.9}
      />
    </mesh>
  );
}

function OrbitingShapes() {
  const group = useRef<Group>(null);
  useFrame((state) => {
    if (!group.current) return;
    group.current.rotation.y = state.clock.getElapsedTime() * 0.25;
  });
  return (
    <group ref={group} position={[0, 0, -3]}>
      {Array.from({ length: 6 }).map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const r = 1.4;
        return (
          <Float key={i} speed={1.6} rotationIntensity={1.2} floatIntensity={1.4}>
            <mesh position={[Math.cos(angle) * r, Math.sin(angle * 1.3) * 0.5, Math.sin(angle) * r]}>
              {i % 2 === 0 ? (
                <icosahedronGeometry args={[0.18, 0]} />
              ) : (
                <octahedronGeometry args={[0.2, 0]} />
              )}
              <meshStandardMaterial
                color={i % 3 === 0 ? "#6c5ce7" : i % 3 === 1 ? "#f7931e" : "#e84393"}
                emissive={i % 2 === 0 ? "#6c5ce7" : "#ff6b35"}
                emissiveIntensity={0.6}
                metalness={0.7}
                roughness={0.25}
              />
            </mesh>
          </Float>
        );
      })}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.6]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0.2, 6], fov: 40 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.35} />
          <pointLight position={[4, 4, 4]} intensity={1.2} color="#ff6b35" />
          <pointLight position={[-4, -2, -2]} intensity={0.9} color="#6c5ce7" />
          <pointLight position={[0, -4, 3]} intensity={0.5} color="#e84393" />
          <Float speed={1.2} rotationIntensity={0.6} floatIntensity={1.1}>
            <Knot />
          </Float>
          <OrbitingShapes />
          <Sparkles count={80} scale={8} size={2.4} speed={0.3} color="#f7931e" opacity={0.7} />
          <Environment preset="night" />
        </Suspense>
      </Canvas>
    </div>
  );
}