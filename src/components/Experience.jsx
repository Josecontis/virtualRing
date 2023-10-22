import { OrbitControls } from "@react-three/drei";
import { HeartRing } from "./HeartRing";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <pointLight position={[10, 10, 10]} />
      <ambientLight intensity={0.5} />
      <directionalLight color="white" position={[0, 0, 5]} intensity={1} />
      <HeartRing />
    </>
  );
};
