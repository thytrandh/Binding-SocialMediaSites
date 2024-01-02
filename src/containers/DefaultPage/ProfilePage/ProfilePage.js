import { useContext, useEffect, useState } from "react";
import "../ProfilePage/ProfilePage.scss";
import ProfileHeader from "./ProfileHeader/ProfileHeader";
import { Outlet } from "react-router-dom";
import { OpenShowFileContext } from "./MainProfile/context/openShowFileContext";
import TabMenuNavbar from "./TabMenuNavbar/TabMenuNavbar";
import { useDispatch, useSelector } from "react-redux";
import { ProfileDataContext } from "./context/profileDataContext";
import { getAllPostsByUser } from "../../../redux/slice/Posts/postsSlice";
import { DataContext } from "../../../context/dataContext";
import { getUserListFriend } from "../../../redux/slice/User/friendSlice";

const ProfilePage = ({ accountOwner }) => {
  const { userData } = useContext(DataContext);
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

  const dispatch = useDispatch();
  const userId = userData?.id;

  useEffect(() => {
    dispatch(
      getAllPostsByUser({
        userId,
      })
    );
  }, [dispatch, userId]);

  useEffect(() => {
    const userid = userData?.id;
    dispatch(getUserListFriend({ userid }));
  }, [dispatch, userData]);
  

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
