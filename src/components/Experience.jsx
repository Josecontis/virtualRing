import { Environment, OrbitControls } from "@react-three/drei";
import { HeartRing } from "./HeartRing";

export const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Environment preset="city" />
      <HeartRing />
    </>
  );
};
