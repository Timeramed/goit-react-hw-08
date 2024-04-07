import { CirclesWithBar } from "react-loader-spinner";
import { LoaderStyled } from "./Loader.styled";

export const Loader = () => {
  return (
    <LoaderStyled>
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
    </LoaderStyled>
  );
};
