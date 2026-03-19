// components/NetworkSphere.tsx
'use client';

import { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line } from '@react-three/drei';
import * as THREE from 'three';

// Simple loading component
const SimpleLoader = () => (
  <div className="w-full h-full flex items-center justify-center">
    <div className="w-8 h-8 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin" />
  </div>
);

// Helper function to generate deterministic points
const generateSpherePoints = (count: number, radius: number) => {
  const points = [];
  
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(2 * (i / count) - 1);
    const theta = i * 2.39996; // Golden angle approximation
    
    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);
    
    points.push(new THREE.Vector3(x, y, z));
  }
  
  return points;
};

// Generate deterministic connections
const generateConnections = (nodes: THREE.Vector3[], maxDistance: number) => {
  const lines = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const distance = nodes[i].distanceTo(nodes[j]);
      if (distance < maxDistance && (i * j) % 5 === 0) {
        lines.push([nodes[i], nodes[j]]);
      }
    }
  }
  return lines;
};

// Generate deterministic particle positions
const generateParticlePositions = (count: number, minRadius: number, maxRadius: number) => {
  const positions = [];
  
  for (let i = 0; i < count; i++) {
    const phi = Math.acos(2 * (i / count) - 1);
    const theta = i * 2.39996;
    const r = minRadius + (i % (maxRadius - minRadius + 1));
    
    const x = r * Math.sin(phi) * Math.cos(theta);
    const y = r * Math.sin(phi) * Math.sin(theta);
    const z = r * Math.cos(phi);
    
    positions.push(x, y, z);
  }
  
  return new Float32Array(positions);
};

// Optimized sphere content with reduced complexity for mobile
const SphereContent = ({ isMobile = false }) => {
  const sphereRef = useRef<THREE.Group>(null);
  
  // Reduced node count for mobile
  const nodeCount = isMobile ? 20 : 40;
  const connectionThreshold = isMobile ? 1.8 : 2.0;
  const particleCount = isMobile ? 60 : 150;
  
  const nodes = useMemo(() => {
    return generateSpherePoints(nodeCount, 1.8);
  }, [nodeCount]);

  const connections = useMemo(() => {
    return generateConnections(nodes, connectionThreshold);
  }, [nodes, connectionThreshold]);

  const nodeGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodes.flatMap(v => [v.x, v.y, v.z]));
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = generateParticlePositions(particleCount, 2.5, 4.0);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [particleCount]);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.3;
    
    if (sphereRef.current) {
      // Smoother rotation for mobile
      sphereRef.current.rotation.y = time * (isMobile ? 0.15 : 0.2);
      if (!isMobile) {
        sphereRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
      }
    }
  });

  return (
    <group ref={sphereRef}>
      {/* Main wireframe sphere - simpler for mobile */}
      <mesh>
        <sphereGeometry args={[1.5, isMobile ? 16 : 24, isMobile ? 16 : 24]} />
        <meshPhongMaterial
          color="#6366F1"
          emissive="#8B5CF6"
          transparent
          opacity={isMobile ? 0.2 : 0.15}
          wireframe
        />
      </mesh>

      {/* Inner sphere - hidden on mobile for performance */}
      {!isMobile && (
        <mesh>
          <sphereGeometry args={[1.0, 16, 16]} />
          <meshBasicMaterial
            color="#8B5CF6"
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
      )}

      {/* Connection lines - fewer on mobile */}
      {connections.slice(0, isMobile ? 30 : undefined).map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color="#6366F1"
          opacity={isMobile ? 0.25 : 0.15}
          transparent
          lineWidth={isMobile ? 0.5 : 1}
        />
      ))}

      {/* Main nodes - larger on mobile for better visibility */}
      <points geometry={nodeGeometry}>
        <pointsMaterial
          size={isMobile ? 0.12 : 0.08}
          color="#8B5CF6"
          sizeAttenuation
          transparent
          opacity={isMobile ? 0.8 : 0.6}
        />
      </points>

      {/* Floating particles - fewer on mobile */}
      <points geometry={particleGeometry}>
        <pointsMaterial
          size={isMobile ? 0.04 : 0.03}
          color="#22C55E"
          sizeAttenuation
          transparent
          opacity={isMobile ? 0.3 : 0.2}
        />
      </points>
    </group>
  );
};

// Main Network Sphere Component
const NetworkSphere = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const mobile = window.innerWidth < 768 || 
                     /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      setIsMobile(mobile);
      setIsLoaded(true);
    };
    
    // Small delay to ensure smooth loading
    const timer = setTimeout(checkMobile, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <SimpleLoader />;
  }

  return (
    <Canvas
      camera={{ position: isMobile ? [2.5, 0.5, 3.5] : [3, 1, 4], fov: isMobile ? 45 : 40 }}
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent'
      }}
      gl={{ 
        antialias: true,
        powerPreference: "default",
        precision: "lowp",
        alpha: true,
        stencil: false,
        depth: true
      }}
      dpr={isMobile ? [1, 1] : [1, 1.5]}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={isMobile ? 0.8 : 0.6} />
      <pointLight position={[2, 2, 2]} intensity={isMobile ? 0.8 : 0.5} color="#6366F1" />
      
      {/* Add a second light for mobile to make colors pop */}
      {isMobile && (
        <pointLight position={[-2, 1, 2]} intensity={0.5} color="#8B5CF6" />
      )}
      
      <SphereContent isMobile={isMobile} />
    </Canvas>
  );
};

export default NetworkSphere;