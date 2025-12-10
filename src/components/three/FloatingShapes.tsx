import { useRef, useMemo } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import { MathUtils, Group } from 'three';

// Pre-compute molecule data outside of render
const MOLECULE_DATA = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  speed: 0.5 + (i * 0.1),
  position: [
    (i % 4 - 1.5) * 3,
    ((i % 3) - 1) * 2.5,
    -2 - (i % 2) * 2
  ] as [number, number, number],
  size: 0.08 + (i % 3) * 0.05,
  color: i % 2 === 0 ? "#005B96" : "#88B04B"
}));

export const FloatingShapes = () => {
  const { mouse } = useThree();
  const group = useRef<Group>(null);

  useFrame(() => {
    if (group.current) {
      const x = (mouse.x * window.innerWidth) / 50;
      const y = (mouse.y * window.innerHeight) / 50;
      
      group.current.rotation.x = MathUtils.lerp(group.current.rotation.x, y * 0.0005, 0.1);
      group.current.rotation.y = MathUtils.lerp(group.current.rotation.y, x * 0.0005, 0.1);
    }
  });

  // Use useMemo to ensure stable molecule data
  const molecules = useMemo(() => MOLECULE_DATA, []);

  return (
    <group ref={group}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#005B96" />

      {/* Main floating organic shapes */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[1, 64, 64]} position={[2, 0, -2]}>
          <MeshDistortMaterial
            color="#005B96"
            envMapIntensity={0.8}
            clearcoat={1}
            clearcoatRoughness={0}
            metalness={0.2}
            roughness={0.1}
            distort={0.4}
            speed={2}
          />
        </Sphere>
      </Float>
      
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.8}>
        <Sphere args={[0.6, 32, 32]} position={[-2, 1, -1]}>
          <MeshDistortMaterial
            color="#88B04B"
            speed={2}
            distort={0.4}
            metalness={0.2}
            roughness={0.1}
          />
        </Sphere>
      </Float>

      <Float speed={3} rotationIntensity={1} floatIntensity={0.5}>
        <Sphere args={[0.4, 32, 32]} position={[3, -2, -1]}>
          <MeshDistortMaterial
            color="#FF6F61"
            speed={4}
            distort={0.5}
            radius={1}
            metalness={0.1}
          />
        </Sphere>
      </Float>

      {/* Background Molecules - Pre-computed positions for stability */}
      {molecules.map((mol) => (
        <Float 
          key={mol.id} 
          speed={mol.speed} 
          rotationIntensity={1.5} 
          floatIntensity={0.8} 
          position={mol.position}
        >
          <Icosahedron args={[mol.size, 0]}>
            <meshPhysicalMaterial 
              color={mol.color}
              transmission={0.4}
              opacity={0.4}
              transparent
              roughness={0.3}
              thickness={1.5}
            />
          </Icosahedron>
        </Float>
      ))}
    </group>
  );
};
