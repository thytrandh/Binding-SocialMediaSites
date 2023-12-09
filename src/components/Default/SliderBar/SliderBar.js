import { useState } from "react";
import LogoDefault from "../../Logo/LogoDefault/LogoDefault";
import "./SliderBar.scss";
import Tick from "../../Tick/Tick";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ToggleContext } from "../../../context/toggleContext";
import useWindowSize from "../../../library/hooks/useWindowSize";

const SliderBar = () => {
  const { width } = useWindowSize();

  const [menuArr, setMenuArr] = useState([
    {
      id: 0,
      icon: "/images/Icon/IconMenu/Document.png",
      name: "Newsfeed",
      navigate: "/",
      active: true,
    },
    // {
    //   id: 1,
    //   icon: "/images/Icon/IconMenu/2 User.png",
    //   name: "Friends List",
    //   navigate: "/profile/friends",
    //   active: false,
    // },
    {
      id: 1,
      icon: "/images/Icon/IconMenu/2 User.png",
      name: "Friends",
      navigate: "/friends",
      active: false,
    },
    {
      id: 2,
      icon: "/images/Icon/IconMenu/Shield Done.png",
      name: "Pages",
      navigate: "/pages",
      active: false,
    },
    {
      id: 3,
      icon: "/images/Icon/IconMenu/Bookmark.png",
      name: "Story Archive",
      navigate: "/profile/archive",
      active: false,
    },
    {
      id: 4,
      icon: "/images/Icon/IconMenu/Notification.png",
      name: "Notifications",
      navigate: "/notifications",
      active: false,
    },
    {
      id: 5,
      icon: "/images/Icon/IconMenu/Chat.png",
      name: "Messages",
      navigate: "/message",
      active: false,
    },
    {
      id: 6,
      icon: "/images/Icon/IconMenu/Image.png",
      name: "Gallery",
      navigate: "/profile/gallery",
      active: false,
    },
    {
      id: 7,
      icon: "/images/Icon/IconMenu/Lock.png",
      name: "Log Out",
      navigate: "/login",
      active: false,
    },
    {
      id: 8,
      icon: "/images/Icon/IconMenu/Setting.png",
      name: "Settings",
      navigate: "/settings",
      active: false,
    },
  ]);

  const { toggleSliderbar, setToggleSliderBar } = useContext(ToggleContext);

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

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname;
    handleActiveItem(pathname);
  }, [location]);

  return (
    <div
      className={
        toggleSliderbar
          ? "slider-bar slider-bar-default animate-fade-in-left"
          : "slider-bar slider-bar-mini animate-fade-in-right"
      }
    >
      <div
        className="btn-open-menu"
        onClick={() => {
          if (width < 800 || (width < 1120 && width >= 1100)) {
            return false;
          } else {
            setToggleSliderBar(!toggleSliderbar);
          }
        }}
      >
        <i class="fa-light fa-angle-left"></i>
      </div>
      <div className="slider-bar-header">
        <LogoDefault />
      </div>
      <div className="slider-bar-content">
        <div className="user-info">
          <div className="avatar">
            <img src="/images/User/user-01.jpg" alt="" />
          </div>
          <div className="detail-data">
            <p className="title">
              Marvin McKinney
              <Tick />
            </p>
            <p className="desc">@marvin</p>
          </div>
        </div>
        <div className="navigate-menu">
          <p className="title">MENU</p>
          <ul className="menu">
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
              .filter((e, k) => k < 7)}
          </ul>
        </div>
        <div className="navigate-menu">
          <p className="title">ACCOUNT</p>
          <ul className="menu">
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
              .filter((e, k) => k < 2)}
          </ul>
        </div>
      </div>
      <div className="slider-bar-footer">
        <p>© 2023 Classification Essay</p>
      </div>
    </div>
  );
};
export default SliderBar;
