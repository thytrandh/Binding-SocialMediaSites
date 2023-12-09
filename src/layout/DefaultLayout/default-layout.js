import { Outlet } from "react-router-dom";
import SliderBar from "../../components/Default/SliderBar/SliderBar";
import "../DefaultLayout/default-layout.scss";
import Header from "../../components/Default/Header/Header";
import { ToggleContext } from "../../context/toggleContext";
import { useState } from "react";
import useWindowSize from "../../library/hooks/useWindowSize";
import { useEffect } from "react";
import Footer from "../../components/Default/Footer/Footer";

const DefaultLayout = () => {
  const { width } = useWindowSize();

  const [toggleSliderbar, setToggleSliderBar] = useState(true);

  useEffect(() => {
    if (width < 800 || (width < 1120 && width >= 1100)) {
      setToggleSliderBar(false);
    } else {
      setToggleSliderBar(true);
    }
  }, [width]);
  return (
    <div className="default-layout">
      <ToggleContext.Provider value={{ toggleSliderbar, setToggleSliderBar }}>
        <SliderBar />
      </ToggleContext.Provider>
      <div
        className={
          toggleSliderbar
            ? "default-layout-content ml-270"
            : "default-layout-content ml-90"
        }
      >
        <Header />
        {width > 768 ? (
          <div
            className="content-default container"
            style={
              toggleSliderbar
                ? { width: `${width - 270 - 30}px` }
                : { width: `${width - 90 - 20}px` }
            }
          >
            <Outlet />
          </div>
        ) : (
          <div
            className="content-default container"
            style={{ width: `${width - 20}px` }}
          >
            <Outlet />
          </div>
        )}

        <Footer />
      </div>
    </div>
  );
};

export default DefaultLayout;
