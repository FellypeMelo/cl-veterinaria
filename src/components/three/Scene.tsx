import { Canvas, type CanvasProps } from '@react-three/fiber';
import { Suspense } from 'react';
import { Environment, Preload } from '@react-three/drei';

interface SceneProps extends CanvasProps {
  children: React.ReactNode;
  className?: string;
  withEnvironment?: boolean;
}

export const Scene = ({ 
  children, 
  className,
  withEnvironment = true,
  ...props 
}: SceneProps) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <Canvas
        className="w-full h-full"
        dpr={[1, 2]} // Optimize for pixel ratio
        gl={{ antialias: true, alpha: true }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        {...props}
      >
        <Suspense fallback={null}>
          {withEnvironment && <Environment preset="city" />}
          {children}
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};
