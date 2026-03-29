import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF, useProgress } from "@react-three/drei";
import * as THREE from "three";
import { Suspense, useEffect, useMemo, useState } from "react";

import carModelUrl from "../../assets/car/tapado.glb";

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

function LoadingOverlay() {
    const { progress, active } = useProgress();
    const percentage = Math.min(100, Math.max(0, Math.round(progress)));
    const isHidden = !active && percentage >= 100;
    const loaderClassName = `hero-loader${isHidden ? " is-hidden" : ""}`;

    return (
        <Html center className={loaderClassName}>
            <div className="hero-loader-panel">
                <div className="hero-loader-track">
                    <div className="hero-loader-bar" style={{ width: `${percentage}%` }} />
                </div>
                <span className="hero-loader-text">Loading model {percentage}%</span>
            </div>
        </Html>
    );
}

function SceneGround() {
    return (
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
            <planeGeometry args={[40, 40]} />
            <meshStandardMaterial color="#78afed" roughness={0} />
        </mesh>
    );
}

function WorkshopScene() {
    const { scene } = useGLTF(carModelUrl, true);
    const smoothWhiteMaterial = useMemo(() => {
        const material = new THREE.MeshStandardMaterial({
            color: "#ff0000",
            roughness: 0.8,
            metalness: 0.2,
            transparent: false,
            opacity: 0,
            side: THREE.DoubleSide,
        });

        return material;
    }, []);

    const car = useMemo(() => {
        const cloned = scene.clone(true);

        cloned.traverse((obj: THREE.Object3D) => {
            if ((obj as THREE.Mesh).isMesh) {
                const mesh = obj as THREE.Mesh;
                mesh.castShadow = true;
                mesh.receiveShadow = true;
                if (Array.isArray(mesh.material)) {
                    mesh.material = mesh.material.map(() => smoothWhiteMaterial);
                } else {
                    mesh.material = smoothWhiteMaterial;
                }
            }
        });

        cloned.position.set(0, 0, 0);
        cloned.scale.setScalar(1);

        return cloned;
    }, [scene, smoothWhiteMaterial]);

    useFrame((_, delta) => {
        if (smoothWhiteMaterial.opacity < 1) {
            smoothWhiteMaterial.opacity = Math.min(1, smoothWhiteMaterial.opacity + delta * 1.5);
        }
    });

    return (
        <group position={[0, 0.02, 0]}>
            <primitive object={car} />

            <mesh position={[0, 0, 0]}>
                <boxGeometry args={[0.2, 0.2, 0.2]} />
                <meshStandardMaterial color="#38bdf8" emissive="#7dd3fc" emissiveIntensity={1.2} side={THREE.DoubleSide} />
            </mesh>
        </group>
    );
}

export default function WorkshopDiorama({ reducedMotion }: WorkshopDioramaProps) {
    const viewShift = useMemo(() => {
        const width = window.innerWidth;
        return -0.17 * width;
    }, []);
    const [isInteracting, setIsInteracting] = useState(false);

    return (
        <Canvas
            shadows="soft"
            camera={{ position: [3.4, 1.7, 2.6], fov: 42 }}
            style={{ width: "100%", height: "100%" }}
            gl={{ antialias: true }}
            aria-hidden="true"
        >
            <CameraShift shiftX={viewShift} />
            <fog attach="fog" args={["#134B8A", 4.5, 10]} />
            <color attach="background" args={["#134B8A"]} />
            <ambientLight intensity={0.2} color="#ffffff" />
            <directionalLight
                position={[-4, 6, 4]}
                intensity={1.05}
                color="#ffffff"
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-radius={6}
                shadow-bias={-0.00035}
                shadow-camera-left={-6}
                shadow-camera-right={6}
                shadow-camera-top={6}
                shadow-camera-bottom={-6}
            />

            <SceneGround />
            <Suspense fallback={<LoadingOverlay />}>
                <group rotation={[0, 0, 0]}>
                    <WorkshopScene />
                </group>
            </Suspense>

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

// optional preloading
useGLTF.preload(carModelUrl);
