import { CirclesWithBar } from "react-loader-spinner";

export const Loader = () => {
  return (
    <CirclesWithBar
      height="100"
      width="100"
      color="#854320"
      outerCircleColor="#22257a"
      innerCircleColor="#22257a"
      barColor="#22257a"
      ariaLabel="circles-with-bar-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  );
};
