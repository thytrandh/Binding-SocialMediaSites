import { useEffect, useState } from "react";
import "../ProfilePage/ProfilePage.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Outlet } from "react-router-dom";
import { OpenShowFileContext } from "./MainProfile/context/openShowFileContext";
import TabMenuNavbar from "./TabMenuNavbar/TabMenuNavbar";
import { useSelector } from "react-redux";
import { ProfileDataContext } from "./context/profileDataContext";

const ProfilePage = ({ accountOwner }) => {
  const [openFileBox, setOpenFileBox] = useState(false);
  const getCurrentMember = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentMember?.data
  );
  const [memberData, setMemberData] = useState({});

  useEffect(() => {
    if (getCurrentMember) {
      setMemberData(getCurrentMember);
    }
  }, [getCurrentMember, setMemberData]);

  return (
    <ProfileDataContext.Provider value={{ memberData, setMemberData }}>
      <div className="profile-page">
        <ProfileHeader accountOwner={accountOwner} />
        <div className="main-profile">
          <TabMenuNavbar accountOwner={accountOwner} />
          <div className="main-content">
            <OpenShowFileContext.Provider
              value={{ openFileBox, setOpenFileBox }}
            >
              <Outlet />
            </OpenShowFileContext.Provider>
          </div>
        </div>
      </div>
    </ProfileDataContext.Provider>
  );
};

export default ProfilePage;
