import { ThreeDots } from "react-loader-spinner";
import "../Loader/Loader.scss";

const Loader = () => {
  return (
    <div className="loader-component">
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#2a5aa6"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
