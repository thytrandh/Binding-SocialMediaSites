import { useContext, useState } from "react";
import "../HeaderAdmin/HeaderAdmin.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { DataContext } from "../../../../context/dataContext";
import { useNavigate } from "react-router-dom";
const HeaderAdmin = () => {
  const { userData } = useContext(DataContext);
  const menu = [
    {
      id: 0,
      name: "User Accounts",
      navigate: "/admin-page/users",
    },
    {
      id: 1,
      name: "Reported Post",
      navigate: "/admin-page/posts",
    },
    {
      id: 2,
      name: "Reported Comment",
      navigate: "/admin-page/comments",
    },
    {
      id: 3,
      name: "Pages",
      navigate: "/admin-page/pages",
    },
    {
      id: 4,
      name: "Log Out",
      navigate: "/login",
    },
  ];
  const [openMenuMini, setOpenMenuMini] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="header-admin">
      <div className="header-top-admin">
        <div className="logo">
          <img className="logo-img" src="/images/Logo/logo-blue.svg" alt="" />
          <p className="title">Binding</p>
        </div>
        <div className="menu-admin">
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
                    <li
                      key={item.id}
                      className="item"
                      onClick={() => {
                        navigate(item.navigate);
                      }}
                    >
                      {item.name.toLocaleUpperCase()}
                    </li>
                  ))}
                </ul>
              </OutsideClickHandler>
            </div>
          )}
        </div>
      </div>
      <div className="header-admin-default">
        <div className="header-left">
          <ul className="main-menu">
            {menu
              .map((item) => (
                <li key={item.id} className="item-menu">
                  {item.name}
                </li>
              ))
              .filter((e, k) => k < 4)}
          </ul>
        </div>
        <div className="header-right">
          <img
            src="/images/Icon/IconDropdown/Home.png"
            alt=""
            className="ic-dropdown"
          />
          <img
            src={
              userData?.image?.imgLink
                ? userData?.image?.imgLink
                : "/images/User/Avatar Default/default-avatar.jpg"
            }
            alt=""
            className="img-avt"
            onClick={() => {
              navigate("/admin-page");
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderAdmin;
