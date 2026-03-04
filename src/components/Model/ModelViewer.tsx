"use client";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Bounds, Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense, useMemo, useState } from "react";

type Props = { glbUrl: string };

export default function ModelViewer({ glbUrl }: Props) {
  console.log("ModelViewer glbUrl =", glbUrl, "type:", typeof glbUrl);

  if (typeof glbUrl !== "string" || glbUrl.length === 0) {
    return (
      <div className="flex h-full w-full items-center justify-center text-sm">
        Invalid model URL
      </div>
    );
  }

  return (
    <Canvas
      camera={{ position: [2.5, 1.5, 2.5], fov: 45 }}
      gl={{ antialias: true, preserveDrawingBuffer: false }}
      onCreated={({ gl }) => {
        // helps sharpness on high DPI; tweak if perf issues
        const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;
        gl.setPixelRatio(Math.min(dpr, 2));
      }}
    >
      <Suspense fallback={null}>
        {/* Lighting */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 8, 5]} intensity={1.0} />

        {/* Nice HDRI environment (optional) */}
        <Environment preset="city" />

        {/* Fit model nicely */}
        <Bounds fit clip observe margin={1.2}>
          <SelectableModel glbUrl={glbUrl} />
        </Bounds>

        <OrbitControls makeDefault enableDamping dampingFactor={0.08} />
      </Suspense>
    </Canvas>
  );
}

/**
 * Wrapper component:
 * This ensures hooks in the loaded component are never called conditionally.
 */
function SelectableModel({ glbUrl }: { glbUrl: string }) {
  if (typeof glbUrl !== "string" || glbUrl.length === 0) return null;
  return <SelectableModelLoaded glbUrl={glbUrl} />;
}

/**
 * Loaded component:
 * All hooks are called unconditionally within this component.
 */
function SelectableModelLoaded({ glbUrl }: { glbUrl: string }) {
  const { scene } = useGLTF(glbUrl);

  // Ensure each mesh can be raycasted and has unique material instances if needed
  const prepared = useMemo(() => {
    const root = scene.clone(true);

    root.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const mesh = obj as THREE.Mesh;

        // Improve picking reliability
        mesh.castShadow = false;
        mesh.receiveShadow = false;

        // If many meshes share one material, clone so we can safely tint selected
        if (Array.isArray(mesh.material)) {
          mesh.material = mesh.material.map((m) => m.clone());
        } else if (mesh.material) {
          mesh.material = (mesh.material as THREE.Material).clone();
        }
      }
    });

    return root;
  }, [scene]);

  const [selectedUuid, setSelectedUuid] = useState<string | null>(null);

  return (
    <group
      onPointerMissed={(e) => {
        // clears selection only on true click miss
        if (e.type === "click") setSelectedUuid(null);
      }}
      onClick={(e) => {
        // onClick only fires when it's a click (not a drag/orbit)
        e.stopPropagation();

        const mesh = e.object as THREE.Mesh;
        const geom = mesh?.geometry as THREE.BufferGeometry | undefined;

        // Require: it's a mesh AND has positions (needed for EdgesGeometry)
        if (mesh?.isMesh && geom?.attributes?.position) {
          setSelectedUuid(mesh.uuid);
        }
      }}
    >
      <primitive object={prepared} />

      {/* Render selection overlay (highlight + edges) */}
      {/* <SelectionOverlay root={prepared} selectedUuid={selectedUuid} /> */}
    </group>
  );
}

function SelectionOverlay({
  root,
  selectedUuid,
}: {
  root: THREE.Object3D;
  selectedUuid: string | null;
}) {
  const selectedMesh = useMemo(() => {
    if (!selectedUuid) return null;

    let found: THREE.Mesh | null = null;
    root.traverse((obj) => {
      if (found) return;
      if ((obj as THREE.Mesh).isMesh && obj.uuid === selectedUuid) {
        found = obj as THREE.Mesh;
      }
    });
    return found;
  }, [root, selectedUuid]);

  if (!selectedMesh) return null;

  const geom = selectedMesh.geometry as THREE.BufferGeometry | undefined;
  if (!geom?.attributes?.position) return null;

  return (
    <group>
      <mesh
        geometry={geom}
        matrix={selectedMesh.matrixWorld}
        matrixAutoUpdate={false}
      >
        <meshStandardMaterial transparent opacity={0.25} />
      </mesh>

      <lineSegments matrix={selectedMesh.matrixWorld} matrixAutoUpdate={false}>
        <edgesGeometry args={[geom, 15]} />
        <lineBasicMaterial />
      </lineSegments>
    </group>
  );
}

// Optional: prefetch/cache GLTFs if you want
// useGLTF.preload("/path/to/model.glb");

// Important for drei GLTF caching, cause "Cannot read properties of undefined (reading 'length')", comment out
//useGLTF.preload("/models/ev-chassis.glb");
