"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei"
import { Suspense } from "react"

function Robot() {
  const { scene } = useGLTF("/robot.glb")
  return <primitive object={scene} scale={2.5} position={[0, -2.5, 0]} />
}

export function RobotModel() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} color="#ffd4a3" />
        <directionalLight position={[-10, 5, -5]} intensity={0.5} color="#a3c4ff" />
        <spotLight position={[0, 10, 0]} intensity={0.8} color="#fff5e6" />
        <Suspense fallback={null}>
          <Robot />
          <Environment preset="studio" />
          <ContactShadows
            position={[0, -2.5, 0]}
            opacity={0.4}
            scale={10}
            blur={2}
            far={4}
          />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}
