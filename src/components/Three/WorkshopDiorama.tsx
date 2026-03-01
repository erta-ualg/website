import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { useEffect, useState } from "react";

interface WorkshopDioramaProps {
    reducedMotion?: boolean;
}

function CameraShift({ shiftX }: { shiftX: number }) {
    const { camera, size } = useThree();

    useEffect(() => {
        const width = Math.max(1, Math.floor(size.width));
        const height = Math.max(1, Math.floor(size.height));
        const perspective = camera as THREE.PerspectiveCamera;

        perspective.setViewOffset(width, height, shiftX, 0, width, height);
        perspective.updateProjectionMatrix();

        return () => {
            perspective.clearViewOffset();
            perspective.updateProjectionMatrix();
        };
    }, [camera, size.width, size.height, shiftX]);

    return null;
}

function WorkshopScene() {
    return (
        <group position={[0, 0, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.25, 0]} receiveShadow>
                <planeGeometry args={[40, 40]} />
                <meshStandardMaterial color="#dbeafe" roughness={0}/>
            </mesh>
            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#38bdf8" emissive="#7dd3fc" emissiveIntensity={1.2} />
            </mesh>
        </group>
    );
}

export default function WorkshopDiorama({ reducedMotion }: WorkshopDioramaProps) {
    const viewShift = -200;
    const [isInteracting, setIsInteracting] = useState(false);

    return (
        <Canvas
            shadows
            camera={{ position: [3.4, 1.7, 2.6], fov: 42 }}
            style={{ width: "100%", height: "100%" }}
            gl={{ antialias: true }}
        >
            <CameraShift shiftX={viewShift} />
            <fog attach="fog" args={["#134B8A", 4.5, 10]} />
            <color attach="background" args={["#134B8A"]} />
            <ambientLight intensity={0.2} color="#c7d9f2" />
            <directionalLight
                position={[-4, 6, 4]}
                intensity={1.05}
                color="#93c5fd"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.00035}
                shadow-camera-left={-6}
                shadow-camera-right={6}
                shadow-camera-top={6}
                shadow-camera-bottom={-6}
            />

            <group rotation={[0, 0, 0]}>
                <WorkshopScene />
            </group>

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                enableRotate
                autoRotate={!reducedMotion && !isInteracting}
                autoRotateSpeed={0.6}
                enableDamping
                dampingFactor={0.1}
                rotateSpeed={0.35}
                minPolarAngle={Math.PI / 2.6}
                maxPolarAngle={Math.PI / 2.15}
                target={[0, 0, 0]}
                onStart={() => setIsInteracting(true)}
                onEnd={() => setIsInteracting(false)}
            />
        </Canvas>
    );
}
