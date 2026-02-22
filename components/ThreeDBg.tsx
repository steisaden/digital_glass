"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, Float } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Torus() {
    const mesh = useRef<THREE.Mesh>(null);

    useFrame((state, delta) => {
        if (mesh.current) {
            mesh.current.rotation.x += delta * 0.15;
            mesh.current.rotation.y += delta * 0.15;
        }
    });

    return (
        <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
            <mesh ref={mesh}>
                <torusKnotGeometry args={[9, 3, 128, 16]} />
                <MeshTransmissionMaterial
                    backside
                    samples={2}
                    thickness={3}
                    chromaticAberration={1}
                    anisotropy={0.5}
                    distortion={0.5}
                    distortionScale={0.5}
                    temporalDistortion={0.1}
                    iridescence={1}
                    iridescenceIOR={1}
                    iridescenceThicknessRange={[0, 1400]}
                    clearcoat={1}
                    attenuationDistance={0.5}
                    attenuationColor="#ffffff"
                    color="#00E1D9"
                />
            </mesh>
        </Float>
    );
}

export default function ThreeDBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80">
            <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 30], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#4A00E0" />
                <pointLight position={[-10, -10, -10]} intensity={2} color="#FF007F" />
                <Torus />
                <Environment preset="city" />
            </Canvas>
        </div>
    );
}
