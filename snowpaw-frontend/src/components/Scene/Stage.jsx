import React, { useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";

function CameraFix() {
    const { camera, size } = useThree();

    useEffect(() => {
        // Camera slightly back and high
        camera.position.set(6, 3, 10);

        // Look at origin (stage)
        camera.lookAt(0, 3, 5);


        camera.aspect = size.width / size.height;
        camera.updateProjectionMatrix();
    }, [camera, size]);

    return null;
}

export default function Stage({ children }) {
    return (
        <Canvas style={{ width: "100%", height: "100%" }}>
            <CameraFix />

            {/* Lights */}
            <ambientLight intensity={1} />
            <directionalLight position={[0, 10, 10]} intensity={1.2} />

            {/* Stage — forward and to the right */}
            <mesh position={[7, -4, 1]}> {/* X=4 → right, Z=2 → forward */}
                <boxGeometry args={[16, 1, 8]} />
                <meshStandardMaterial
                    color="#502f1aff"
                    roughness={0.85}
                    metalness={0.05}
                />
            </mesh>

            {children}
        </Canvas>
    );
}
