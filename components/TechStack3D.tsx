"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, Environment, Cylinder } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

const technologies = ["React", "Next.js", "TypeScript", "Three.js", "WebGL", "Node.js", "GraphQL", "AWS", "GSAP", "Tailwind"];

function Coin({ tech, position, index }: { tech: string, position: [number, number, number], index: number }) {
    const mesh = useRef<THREE.Group>(null);
    const speed = 3; // Scroll speed

    useFrame((state, delta) => {
        if (mesh.current) {
            // Infinite scroll logic moving left
            mesh.current.position.x -= speed * delta;
            // Reset position if it goes too far left 
            if (mesh.current.position.x < -20) {
                mesh.current.position.x += 40; // 10 coins * 4 spacing = 40 total width
            }
            // Rotate the coin to show off the 3D depth and embossing
            mesh.current.rotation.y += delta * 1.5;
            mesh.current.rotation.x = Math.sin(state.clock.elapsedTime + index) * 0.3;
        }
    });

    return (
        <group ref={mesh} position={position}>
            <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                {/* Neumorphic Coin Base */}
                <Cylinder args={[1.5, 1.5, 0.4, 32]} rotation={[Math.PI / 2, 0, 0]}>
                    <meshStandardMaterial color="#0D0E15" roughness={0.1} metalness={0.9} envMapIntensity={2} />
                </Cylinder>
                {/* Embossed Text Front */}
                <Text
                    position={[0, 0, 0.21]}
                    fontSize={0.4}
                    color="#00E1D9"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                >
                    {tech}
                </Text>
                {/* Embossed Text Back */}
                <Text
                    position={[0, 0, -0.21]}
                    rotation={[0, Math.PI, 0]}
                    fontSize={0.4}
                    color="#FF007F"
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/inter/v12/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff"
                >
                    {tech}
                </Text>
            </Float>
        </group>
    );
}

export default function TechStack3D() {
    // Distribute them along the x-axis initially with staggered offsets
    const coins = useMemo(() => technologies.map((tech, i) => {
        const xPos = -20 + (i * 4); // Spread over 40 units
        const zPos = (i % 2 === 0) ? 0 : -3;
        const yPos = Math.sin(i) * 1.5;

        return { tech, position: [xPos, yPos, zPos] as [number, number, number] };
    }), []);

    return (
        <div
            className="w-full h-[400px] relative pointer-events-none"
            style={{
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
            }}
        >
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 10], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 10]} intensity={2} color="#00E1D9" />
                <directionalLight position={[-10, -10, -10]} intensity={2} color="#FF007F" />
                <pointLight position={[0, 0, 5]} intensity={3} color="#4A00E0" />

                {coins.map((coin, i) => (
                    <Coin key={i} index={i} tech={coin.tech} position={coin.position} />
                ))}

                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
