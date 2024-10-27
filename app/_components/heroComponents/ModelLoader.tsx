import { Html } from "@react-three/drei";

const ModelLoader = () => {
  return (
    <Html
      as="div"
      center
      style={{
        zIndex: 10,
      }}
    >
      <span className="bg-white p-5 "> Loading...</span>
    </Html>
  );
};

export default ModelLoader;
