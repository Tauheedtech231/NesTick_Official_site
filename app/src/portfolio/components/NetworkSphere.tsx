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

// Optimized sphere content with reduced complexity
const SphereContent = () => {
  const sphereRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    return generateSpherePoints(40, 1.8);
  }, []);

  const connections = useMemo(() => {
    return generateConnections(nodes, 2.0);
  }, [nodes]);

  const nodeGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(nodes.flatMap(v => [v.x, v.y, v.z]));
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, [nodes]);

  const particleGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positions = generateParticlePositions(150, 2.5, 4.0);
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geometry;
  }, []);

  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.3;
    
    if (sphereRef.current) {
      sphereRef.current.rotation.y = time * 0.2;
      sphereRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;
    }
  });

  return (
    <group ref={sphereRef}>
      {/* Main wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 24, 24]} />
        <meshPhongMaterial
          color="#6366F1"
          emissive="#8B5CF6"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>

      {/* Inner sphere */}
      <mesh>
        <sphereGeometry args={[1.0, 16, 16]} />
        <meshBasicMaterial
          color="#8B5CF6"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>

      {/* Connection lines - FIXED: Using Line component from drei */}
      {connections.map(([start, end], i) => (
        <Line
          key={i}
          points={[start, end]}
          color="#6366F1"
          opacity={0.15}
          transparent
          lineWidth={1}
        />
      ))}

      {/* Main nodes */}
      <points geometry={nodeGeometry}>
        <pointsMaterial
          size={0.08}
          color="#8B5CF6"
          sizeAttenuation
          transparent
          opacity={0.6}
        />
      </points>

      {/* Floating particles */}
      <points geometry={particleGeometry}>
        <pointsMaterial
          size={0.03}
          color="#22C55E"
          sizeAttenuation
          transparent
          opacity={0.2}
        />
      </points>
    </group>
  );
};

// Main Network Sphere Component with performance detection
const NetworkSphere = () => {
  const [renderState, setRenderState] = useState<'loading' | 'desktop' | 'mobile'>('loading');

  useEffect(() => {
    const checkPerformance = () => {
      // Check if mobile
      const mobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      
      if (mobile) {
        setRenderState('mobile');
        return;
      }
      
      // Check if low memory (if available)
      const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      
      if (hasLowMemory) {
        setRenderState('mobile');
      } else {
        setRenderState('desktop');
      }
    };
    
    // Use setTimeout to defer state update
    const timer = setTimeout(() => {
      checkPerformance();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  // Render based on state
  if (renderState === 'loading') {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-[#6366F1] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (renderState === 'mobile') {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] rounded-full flex items-center justify-center">
            <span className="text-2xl text-white">3D</span>
          </div>
          <p className="text-xs text-[#94A3B8]">
            Interactive sphere available on desktop
          </p>
        </div>
      </div>
    );
  }

  // Desktop render
  return (
    <Canvas
      camera={{ position: [3, 1, 4], fov: 40 }}
      style={{ 
        width: '100%', 
        height: '100%',
        background: 'transparent'
      }}
      gl={{ 
        antialias: true,
        powerPreference: "high-performance",
        precision: "mediump",
      }}
      dpr={[1, 1.5]}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[2, 2, 2]} intensity={0.5} color="#6366F1" />
      
      <SphereContent />
    </Canvas>
  );
};

export default NetworkSphere;