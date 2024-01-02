import { useContext, useEffect, useState } from "react";
import LogoDefault from "../../../../components/Logo/LogoDefault/LogoDefault";
import { useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../../../context/dataContext";
import Tick from "../../../../components/Tick/Tick";
import "../SliderbarAdmin/SliderbarAdmin.scss";
import { ToggleAdminContext } from "../../context/toggleAdminContext";
import useWindowSize from "../../../../library/hooks/useWindowSize";
import { logOut } from "../../../../redux/slice/Auth/loginSlice";
import { useDispatch } from "react-redux";

const SliderbarAdmin = () => {
  const { userData } = useContext(DataContext);
  const { toggleSliderbarAdmin, setToggleSliderBarAdmin } = useContext(
    ToggleAdminContext
  );

  const { width } = useWindowSize();

  const [menuArr, setMenuArr] = useState([
    {
      id: 0,
      icon: "/images/Icon/IconMenu/2 User.png",
      name: "User Accounts",
      navigate: "/admin-page/users",
      active: true,
    },
    {
      id: 1,
      icon: "/images/Icon/IconMenu/Document.png",
      name: "Reported Post",
      navigate: "/admin-page/posts",
      active: false,
    },
    {
      id: 2,
      icon: "/images/Icon/IconMenu/Chat.png",
      name: "Reported Comment",
      navigate: "/admin-page/comments",
      active: false,
    },
    {
      id: 3,
      icon: "/images/Icon/IconMenu/Shield Done.png",
      name: "Pages",
      navigate: "/admin-page/pages",
      active: false,
    },
    {
      id: 4,
      icon: "/images/Icon/IconMenu/Lock.png",
      name: "Log Out",
      navigate: "/login",
      active: false,
    },
  ]);

  const handleActiveItem = (pathname) => {
    setMenuArr((prev) => {
      return prev.map((item) => {
        if (item.navigate === pathname) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
    });
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (path) => {
    if (path === "/login") {
      dispatch(logOut());
      navigate(path);
    } else {
      navigate(path);
    }
  };

  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname;
    handleActiveItem(pathname);
  }, [location]);

  return (
    <div
      className={
        toggleSliderbarAdmin
          ? "slider-bar-admin slider-bar-admin-default animate-fade-in-left"
          : "slider-bar-admin slider-bar-admin-mini animate-fade-in-right"
      }
    >
      <div
        className="btn-open-menu"
        onClick={() => {
          if (width < 800 || (width < 1120 && width >= 1100)) {
            return false;
          } else {
            setToggleSliderBarAdmin(!toggleSliderbarAdmin);
          }
        }}
      >
        <i class="fa-light fa-angle-left"></i>
      </div>
      <div
        className="slider-bar-admin-header"
        onClick={() => {
          navigate("/admin-page");
        }}
      >
        <LogoDefault />
      </div>
      <div className="slider-bar-admin-content">
        <div
          className="user-info-admin"
          onClick={() => {
            navigate("/profile");
          }}
        >
          <div className="avatar">
            <img
              src={
                userData?.image?.imgLink
                  ? userData?.image?.imgLink
                  : "/images/User/Avatar Default/default-avatar.jpg"
              }
              alt=""
            />
          </div>
          <div className="detail-data">
            <p className="title">
              {userData?.firstName} {userData?.lastName}
              <Tick />
            </p>
            <p className="desc">
              {userData?.email ? userData?.email : "@email"}
            </p>
          </div>
        </div>
        <div className="navigate-menu-admin">
          <p className="title">MENU</p>
          <ul className="menu-admin">
            {menuArr
              .map((item) => {
                return (
                  <li
                    key={item.id}
                    className={item.active ? "item-menu active" : "item-menu"}
                    onClick={() => {
                      handleNavigate(item.navigate);
                    }}
                  >
                    <img className="icon-menu" src={item.icon} alt="" />
                    <p className="subject">{item.name}</p>
                  </li>
                );
              })
              .filter((e, k) => k < 4)}
          </ul>
        </div>
        <div className="navigate-menu-admin">
          <p className="title">ACCOUNT</p>
          <ul className="menu-admin">
            {menuArr
              .map((item) => {
                return (
                  <li
                    key={item.id}
                    className={item.active ? "item-menu active" : "item-menu"}
                    onClick={() => {
                      handleNavigate(item.navigate);
                    }}
                  >
                    <img className="icon-menu" src={item.icon} alt="" />
                    <p className="subject">{item.name}</p>
                  </li>
                );
              })
              .reverse()
              .filter((e, k) => k < 1)}
          </ul>
        </div>
      </div>
      <div className="slider-bar-footer">
        <p>© 2023 Classification Essay</p>
      </div>
    </div>
  );
};

export default SliderbarAdmin;
