/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/HeartRing.gltf 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/HeartRing.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Ring.geometry} material={materials.pinkgold} position={[-0.012, 0.314, 0]} rotation={[Math.PI / 2, 1.551, Math.PI]} scale={[0.746, 0.506, 0.746]} />
      <mesh geometry={nodes.hearth.geometry} material={materials.pinkgold} position={[-0.004, -0.159, 0.001]} rotation={[-0.004, 0.022, -0.013]} scale={[0.14, 0.179, 0.14]} />
      <mesh geometry={nodes.diamond.geometry} material={materials.diamond} position={[-0.463, 0.981, 0]} rotation={[0, 0, 0.441]} scale={0.094} />
      <mesh geometry={nodes.diamondContainer.geometry} material={materials.pinkgold} position={[-0.489, 0.991, -0.001]} rotation={[0, -0.002, 0.46]} scale={0.114} />
    </group>
  )
}

useGLTF.preload('/HeartRing.gltf')
