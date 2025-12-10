import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Group } from 'three';

export const AnimalModel = () => {
  const group = useRef<Group>(null);
  
  // Generate DNA helix points
  const helixPoints = useMemo(() => {
    const points = [];
    const segments = 20;
    
    for (let i = 0; i < segments; i++) {
      const t = (i / segments) * Math.PI * 4;
      const y = (i / segments) * 3 - 1.5;
      
      // Strand 1
      points.push({
        position: [Math.cos(t) * 0.5, y, Math.sin(t) * 0.5] as [number, number, number],
        color: '#005B96'
      });
      
      // Strand 2 (opposite)
      points.push({
        position: [Math.cos(t + Math.PI) * 0.5, y, Math.sin(t + Math.PI) * 0.5] as [number, number, number],
        color: '#88B04B'
      });
    }
    return points;
  }, []);
  
  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <group ref={group} dispose={null}>
      {/* DNA Double Helix */}
      {helixPoints.map((point, i) => (
        <Sphere key={i} args={[0.08, 16, 16]} position={point.position}>
          <meshStandardMaterial 
            color={point.color} 
            metalness={0.4} 
            roughness={0.3}
          />
        </Sphere>
      ))}
    </group>
  );
};
