import { useNavigate, useParams } from "react-router-dom";
import "../ProfileHeader/ProfileHeader.scss";
import {
  AVATAR_SETTING,
  BACKGROUND_COVER_SETTING,
} from "../../../../settings/constant";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";
import { addFriend } from "../../../../redux/slice/User/friendSlice";

const ProfileHeader = ({ accountOwner }) => {
  const { userData } = useContext(DataContext);
  const getCurrentMember = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentMember?.data
  );

  const isFriend = useSelector(
    (state) => state.persistedReducer?.friend?.checkIsFriend?.message
  );

  const navigate = useNavigate();

  const [avatar, setAvatar] = useState(null);
  const [background, setBackground] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

  useEffect(() => {
    const hanldeInformation = () => {
      if (accountOwner) {
        setAvatar(userData?.image?.imgLink);
        setBackground(userData?.background?.imgLink);
        setName(`${userData?.firstName} ${userData?.lastName}`);
        setPhone(userData?.phone);
        setEmail(userData?.email);
      } else {
        setAvatar(getCurrentMember?.image?.imgLink);
        setBackground(getCurrentMember?.background?.imgLink);
        setName(`${getCurrentMember?.firstName} ${getCurrentMember?.lastName}`);
        setPhone(getCurrentMember?.phone);
        setEmail(getCurrentMember?.email);
      }
    };
    hanldeInformation();
  }, [accountOwner, getCurrentMember, userData]);

  const [friendStatus, setFriendStatus] = useState([
    {
      idStatus: 1,
      status: "friend",
      nextAction: [{ action: "Unfriend", color: "red" }],
      isActive: false,
    },
    {
      idStatus: 2,
      status: "stranger",
      nextAction: [{ action: "Add friend", color: "green" }],
      isActive: false,
    },
    {
      idStatus: 3,
      status: "send request",
      nextAction: [{ action: "Cancel request", color: "red" }],
      isActive: false,
    },
    {
      idStatus: 4,
      status: "friend request",
      nextAction: [
        { action: "Confirm", color: "green" },
        { action: "Delete", color: "red" },
      ],
      isActive: true,
    },
  ]);

  const dispatch = useDispatch();
  const params = useParams();

  const handleStateFriend = (action) => {
    console.log("action", action);
    const memberId = params.memberId;
    const friendId = memberId;
    console.log("FriendId", friendId);
    if (action === "Add friend") {
      dispatch(
        addFriend({
          friendId,
        })
      );
    }
  };

  useEffect(() => {
    //chua ket ban
    if (isFriend === "User isn't friend") {
      setFriendStatus((prev) => {
        return prev.map((item) => {
          if (item.status === "stranger") {
            return {
              ...item,
              isActive: true,
            };
          } else {
            return {
              ...item,
              isActive: false,
            };
          }
        });
      });
    } else if (isFriend === "Success") {
      // da la ban be
      setFriendStatus((prev) => {
        return prev.map((item) => {
          if (item.status === "friend") {
            return {
              ...item,
              isActive: true,
            };
          } else {
            return {
              ...item,
              isActive: false,
            };
          }
        });
      });
    }
  }, [isFriend]);


  return (
    <div className="profile-header">
      <div className="banner-cover">
        <img
          src={background ? background : "/images/DefaultPage/bg-default.jpg"}
          alt=""
          className="img-banner"
        />
        <div className="blur"></div>
      </div>
      <div className="header-content">
        <div className="user-info">
          <div className="avatar">
            <img
              src={
                avatar
                  ? avatar
                  : "/images/User/Avatar Default/default-avatar.jpg"
              }
              alt=""
              className="img-avt"
            />
            {accountOwner && (
              <div
                className="btn-change-avt"
                onClick={() => {
                  navigate(AVATAR_SETTING);
                }}
              >
                <img
                  src="/images/Profile/icon/Camera.png"
                  alt=""
                  className="ic-camera"
                />
              </div>
            )}
          </div>
          <div className="info">
            <p className="username">{name}</p>
            <p className="email">@{email === null ? phone : email}</p>
            {!accountOwner && (
              <div className="status-friend-box">
                {friendStatus.map((status) => (
                  <>
                    {status.isActive && (
                      <>
                        {status.nextAction.map((action) => (
                          <button
                            className={`btn-${action.color}`}
                            onClick={() => {
                              handleStateFriend(action.action);
                            }}
                          >
                            {action.action}
                          </button>
                        ))}
                      </>
                    )}
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="option-settings">
          {accountOwner && (
            <div
              className="edit-cover-photo"
              onClick={() => {
                navigate(BACKGROUND_COVER_SETTING);
              }}
            >
              <img
                src="/images/Profile/icon/Camera.png"
                alt=""
                className="ic-camera"
              />
              <p className="subject">Edit background cover</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
