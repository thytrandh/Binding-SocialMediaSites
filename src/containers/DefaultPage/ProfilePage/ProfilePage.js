import { useState } from "react";
import "../ProfilePage/ProfilePage.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Outlet } from "react-router-dom";
import { OpenShowFileContext } from "./MainProfile/context/openShowFileContext";
import TabMenuNavbar from "./TabMenuNavbar/TabMenuNavbar";

const ProfilePage = ({accountOwner}) => {
  const [openFileBox, setOpenFileBox] = useState(false);
  return (
    <div className="profile-page">
      <ProfileHeader accountOwner={accountOwner} />
      <div className="main-profile">
        <TabMenuNavbar accountOwner={accountOwner} />
        <div className="main-content">
          <OpenShowFileContext.Provider value={{ openFileBox, setOpenFileBox }}>
            <Outlet />
          </OpenShowFileContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
