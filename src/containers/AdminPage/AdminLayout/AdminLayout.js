import { Outlet } from "react-router-dom";
import "../AdminLayout/AdminLayout.scss";
import SliderbarAdmin from "./SliderbarAdmin/SliderbarAdmin";
import { ToggleAdminContext } from "../context/toggleAdminContext";
import { useEffect, useState } from "react";
import useWindowSize from "../../../library/hooks/useWindowSize";
import Footer from "../../../components/Default/Footer/Footer";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
const AdminLayout = () => {
  const { width } = useWindowSize();

  const [toggleSliderbar, setToggleSliderBar] = useState(true);

  useEffect(() => {
    if (width < 1050) {
      setToggleSliderBar(false);
    } else {
      setToggleSliderBar(true);
    }
  }, [width]);

  return (
    <div className="admin-layout">
      <ToggleAdminContext.Provider
        value={{ toggleSliderbar, setToggleSliderBar }}
      >
        <SliderbarAdmin />
      </ToggleAdminContext.Provider>
      <div
        className={
          toggleSliderbar
            ? "admin-layout-content ml-270"
            : "admin-layout-content ml-90"
        }
      >
        <HeaderAdmin />
        {width > 992 ? (
          <div
            className="main-content-admin container"
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
            className="main-content-admin container"
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

export default AdminLayout;
