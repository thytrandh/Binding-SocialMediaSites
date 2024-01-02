import { useState } from "react";
import DropdownIcon from "./DropdownIcon/DropdownIcon";
import "./Header.scss";
import Searchbar from "./Searchbar/Searchbar";
import OutsideClickHandler from "react-outside-click-handler";
import {
  NEWSFEED_PAGE,
  POLICY_PAGE,
  PROFILE_PAGE,
} from "../../../settings/constant";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const menu = [
    {
      id: 0,
      name: "Home",
      navigate: "/home",
    },
    {
      id: 1,
      name: "Newsfeed",
      navigate: "/",
    },
    {
      id: 2,
      name: "Friends List",
      navigate: "/profile/friends",
    },
    {
      id: 3,
      name: "Pages",
      navigate: "/pages",
    },
    {
      id: 4,
      name: "Story Archive",
      navigate: "/story/archive",
    },
    {
      id: 5,
      name: "Notifications",
      navigate: "/notifications",
    },
    {
      id: 6,
      name: "Messages",
      navigate: "/message",
    },

    {
      id: 7,
      name: "Settings",
      navigate: "/settings",
    },
  ];

  const [openMenuMini, setOpenMenuMini] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="header ">
      <div className="header-top">
        <div className="logo">
          <img className="logo-img" src="/images/Logo/logo-blue.svg" alt="" />
          <p className="title">Binding</p>
        </div>
        <div className="menu">
          <div
            className="btn-open-menu"
            onClick={() => {
              setOpenMenuMini(true);
            }}
          >
            <i class="fa-duotone fa-bars"></i>
          </div>
          {openMenuMini && (
            <div className="menu-open">
              <OutsideClickHandler
                onOutsideClick={() => {
                  setOpenMenuMini(false);
                }}
              >
                <ul className="list">
                  <div
                    className="btn-close"
                    onClick={() => {
                      setOpenMenuMini(false);
                    }}
                  >
                    <p>CLOSE</p>
                    <i class="fa-solid fa-x"></i>
                  </div>
                  {menu.map((item) => (
                    <li key={item.id} className="item">
                      {item.name.toLocaleUpperCase()}
                    </li>
                  ))}
                </ul>
              </OutsideClickHandler>
            </div>
          )}
        </div>
      </div>
      <div className="header-default">
        <div className="header-left">
          <ul className="main-menu">
            <li
              className="item-menu"
              onClick={() => {
                navigate(NEWSFEED_PAGE);
              }}
            >
              HOME
            </li>
            <li
              className="item-menu"
              onClick={() => {
                navigate(NEWSFEED_PAGE);
              }}
            >
              ACTIVITY
            </li>
            <li
              className="item-menu"
              onClick={() => {
                navigate(PROFILE_PAGE);
              }}
            >
              TIME LINE
            </li>
            <li
              className="item-menu"
              onClick={() => {
                navigate(POLICY_PAGE);
              }}
            >
              PRIVACY POLICY
            </li>
            {/* <li className="item-menu">CONDITIONS</li> */}
          </ul>
        </div>
        <div className="header-right">
          <Searchbar />
          <DropdownIcon />
        </div>
      </div>
    </div>
  );
};

export default Header;
