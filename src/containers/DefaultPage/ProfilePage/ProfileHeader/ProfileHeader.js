import { useNavigate, useParams } from "react-router-dom";
import "../ProfileHeader/ProfileHeader.scss";
import {
  AVATAR_SETTING,
  BACKGROUND_COVER_SETTING,
} from "../../../../settings/constant";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";
import {
  addFriend,
  cancelFriendRequest,
  getIsFriend,
  unFriend,
} from "../../../../redux/slice/User/friendSlice";
import { ProfileDataContext } from "../context/profileDataContext";

const ProfileHeader = ({ accountOwner }) => {
  const { userData } = useContext(DataContext);
  const { memberData } = useContext(ProfileDataContext);

  const getStateFriend = useSelector(
    (state) => state.persistedReducer?.friend?.checkIsFriend
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
        setAvatar(memberData?.image?.imgLink);
        setBackground(memberData?.background?.imgLink);
        setName(`${memberData?.firstName} ${memberData?.lastName}`);
        setPhone(memberData?.phone);
        setEmail(memberData?.email);
      }
    };
    hanldeInformation();
  }, [accountOwner, memberData, userData]);

  const [friendStatus, setFriendStatus] = useState([
    {
      idStatus: 1,
      status: "stranger",
      nextAction: [{ action: "Add friend", color: "green" }],
      isActive: false,
    },
    {
      idStatus: 2,
      status: "send request",
      nextAction: [{ action: "Cancel request", color: "red" }],
      isActive: false,
    },
    {
      idStatus: 3,
      status: "friend request",
      nextAction: [
        { action: "Confirm", color: "green" },
        { action: "Delete", color: "red" },
      ],
      isActive: false,
    },
    {
      idStatus: 4,
      status: "friend",
      nextAction: [{ action: "Unfriend", color: "red" }],
      isActive: false,
    },
  ]);

  const dispatch = useDispatch();
  const params = useParams();

  //get is friend if !accountOwner
  useEffect(() => {
    if (!accountOwner) {
      const memberId = params.memberId;
      const friendId = memberId;
      dispatch(
        getIsFriend({
          friendId,
        })
      );
    }
  }, [accountOwner, dispatch, getStateFriend, params]);

  const handleSetStateFriend = (state) => {
    setFriendStatus((prev) => {
      return prev.map((item) => {
        if (item.status === state) {
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
  };

  useEffect(() => {
    const handleGetStateFriend = () => {
      if (getStateFriend === `you and ${name} don't have friend request`) {
        handleSetStateFriend("stranger");
      } else if (
        getStateFriend === `you have been sent friend request to  ${name}`
      ) {
        handleSetStateFriend("send request");
      } else if (getStateFriend === `${name} sent friend request to you`) {
        handleSetStateFriend("friend request");
      } else if (getStateFriend === `you and ${name} is a friend`) {
        handleSetStateFriend("friend");
      }
    };
    if (!accountOwner) {
      handleGetStateFriend();
    }
  }, [getStateFriend, name, accountOwner]);

  const handleClickAction = (action) => {
    const memberId = params.memberId;
    const friendId = memberId;
    if (action === "Add friend") {
      dispatch(
        addFriend({
          friendId,
        })
      );
    } else if (action === "Cancel request") {
      dispatch(
        addFriend({
          friendId,
        })
      );
    } else if (action === "Confirm") {
      dispatch(
        addFriend({
          friendId,
        })
      );
    } else if (action === "Delete") {
      dispatch(
        cancelFriendRequest({
          friendId,
        })
      );
    } else if (action === "Unfriend") {
      dispatch(
        unFriend({
          friendId,
        })
      );
    }
  };

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
                              handleClickAction(action.action);
                              // handleStateFriend(action.action);
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
