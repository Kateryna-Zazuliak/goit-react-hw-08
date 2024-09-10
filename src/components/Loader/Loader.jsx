import { ColorRing } from "react-loader-spinner";
const Loader = () => {
  return (
    <ColorRing
      visible={true}
      height="180"
      width="180"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#00a6ff", "#1976d2", "#115192", "#ffffff", "#0196e6"]}
    />
  );
};

export default Loader;
