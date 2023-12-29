import { useContext, useEffect, useState } from "react";
import BannerAds from "../../../components/BannerAds/BannerAds";
import "../SettingsPage/SettingsPage.scss";
import Tick from "../../../components/Tick/Tick";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { DataContext } from "../../../context/dataContext";

const SettingsPage = () => {
  const { userData } = useContext(DataContext);

  const [profileMenuDropdown, setProfileMenuDropdown] = useState(true);
  const [profileSetting, setProfileSetting] = useState([
    {
      id: 0,
      name: "Personal Information",
      link: "/settings",
      isActive: true,
    },
    {
      id: 1,
      name: "Change Avatar",
      link: "/settings/profile/change-avatar",
      isActive: false,
    },
    {
      id: 2,
      name: "Change Background Cover",
      link: "/settings/profile/change-bg-cover",
      isActive: false,
    },
  ]);

  const [accountMenuDropdown, setAccountMenuDropdown] = useState(false);
  const [accountSetting, setAccountSetting] = useState([
    // {
    //   id: 0,
    //   name: "Account Information",
    //   link: "/settings/account-info",
    //   isActive: false,
    // },
    {
      id: 1,
      name: "Change Password",
      link: "/settings/account/change-password",
      isActive: false,
    },
  ]);

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const location = useLocation();
  useEffect(() => {
    const handleActiveItem = (pathname) => {
      if (profileMenuDropdown) {
        setProfileSetting((prev) => {
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
      } else if (accountMenuDropdown) {
        setAccountSetting((prev) => {
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
      }
    };
    const pathname = location.pathname;
    handleActiveItem(pathname);
  }, [location, accountMenuDropdown, profileMenuDropdown]);

  return (
    <div className="settings-page">
      <BannerAds
        subject={"Settings Page"}
        desc={"Account Settings and Profile Settings"}
      />
      <div className="main-settings-page">
        <div className="left">
          <div className="tab-menu menu-profile-setting">
            <div
              className={profileMenuDropdown ? "top-title active" : "top-title"}
              onClick={() => {
                setProfileMenuDropdown(true);
                setAccountMenuDropdown(false);
              }}
            >
              <div className="title">
                <img
                  src="/images/Settings/Profile.png"
                  alt=""
                  className="icon"
                />
                <p>Profile Settings</p>
              </div>
              <div className="icon-chev">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            {profileMenuDropdown && (
              <div className="menu-dropdown">
                {profileSetting.map((item) => (
                  <p
                    key={item.id}
                    className="item-menu"
                    onClick={() => {
                      handleNavigate(item.link);
                    }}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            )}
          </div>
          <div className="tab-menu menu-account-setting">
            <div
              className={accountMenuDropdown ? "top-title active" : "top-title"}
              onClick={() => {
                setAccountMenuDropdown(true);
                setProfileMenuDropdown(false);
              }}
            >
              <div className="title">
                <img
                  src="/images/Settings/Setting.png"
                  alt=""
                  className="icon"
                />
                <p>Account Settings</p>
              </div>
              <div className="icon-chev">
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
            {accountMenuDropdown && (
              <div className="menu-dropdown">
                {accountSetting.map((item) => (
                  <p
                    key={item.id}
                    className="item-menu"
                    onClick={() => {
                      handleNavigate(item.link);
                    }}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="right">
          <div className="profile-box">
            <img
              src={
                userData?.image?.imgLink
                  ? userData?.image?.imgLink
                  : "/images/User/Avatar Default/default-avatar.jpg"
              }
              alt=""
              className="img-avt"
            />
            <div className="desc">
              <p className="username">
                {userData?.firstName} {userData?.lastName} <Tick />
              </p>
              <p className="year">Member since 2024</p>
            </div>
          </div>
          <div className="main-settings-content">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
