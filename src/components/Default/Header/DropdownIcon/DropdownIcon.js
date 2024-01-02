import { useContext, useEffect, useState } from "react";
import "../DropdownIcon/DropdownIcon.scss";
import { useNavigate } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../../../redux/slice/Auth/loginSlice";
import { DataContext } from "../../../../context/dataContext";
import { NEWSFEED_PAGE, SETTINGS_PAGE } from "../../../../settings/constant";
import {
  addFriend,
  cancelFriendRequest,
  getRequestFriendList,
} from "../../../../redux/slice/User/friendSlice";

const DropdownIcon = () => {
  const { userData } = useContext(DataContext);

  const [menuDropdown, setMenuDropdown] = useState([
    {
      id: 0,
      name: "Home",
      icon: "/images/Icon/IconDropdown/Home.png",
      active: false,
    },
    {
      id: 1,
      name: "Menu",
      icon: "/images/Icon/IconDropdown/Category.png",
      active: false,
    },
    {
      id: 2,
      name: "Friend Requests",
      icon: "/images/Icon/IconDropdown/User.png",
      active: false,
      data: [],
    },
    // {
    //   id: 3,
    //   name: "Messages",
    //   icon: "/images/Icon/IconDropdown/Message.png",
    //   active: false,
    //   data: [
    //     {
    //       id: 0,
    //       avatar: "/images/User/user-02.jpg",
    //       userName: "Jenny Wilson",
    //       message: "Good morning",
    //       time: "1h",
    //     },
    //     {
    //       id: 1,
    //       avatar: "/images/User/user-03.jpg",
    //       userName: "Freya Davies",
    //       message: "Yes, same here. Bye",
    //       time: "2h",
    //     },
    //     {
    //       id: 2,
    //       avatar: "/images/User/user-04.jpg",
    //       userName: "Aaron Jones",
    //       message: "That's great, see you soon",
    //       time: "1 mo.",
    //     },
    //     {
    //       id: 3,
    //       avatar: "/images/User/user-05.jpg",
    //       userName: "Ariene McCoy",
    //       message: "Let's go to hospital to see him guys.",
    //       time: "4 mo.",
    //     },
    //     {
    //       id: 4,
    //       avatar: "/images/User/user-06.jpg",
    //       userName: "Ariene McCoy",
    //       message:
    //         "We should make use of this trip to learn the maximum possible about the places we are visiting.",
    //       time: "4 mo.",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   name: "Notifications",
    //   icon: "/images/Icon/IconDropdown/Notification.png",
    //   active: false,
    //   data: [
    //     {
    //       id: 0,
    //       avatar: "/images/User/user-02.jpg",
    //       userName: "Jenny Wilson",
    //       content: "accepted your friendship request",
    //       time: "1 hours",
    //     },
    //     {
    //       id: 1,
    //       avatar: "/images/User/user-03.jpg",
    //       userName: "Freya Davies",
    //       content: "accepted your friendship request",
    //       time: "a day",
    //     },
    //     {
    //       id: 2,
    //       avatar: "/images/User/user-04.jpg",
    //       userName: "Aaron Jones",
    //       content: "accepted your friendship request",
    //       time: "1 months",
    //     },
    //     {
    //       id: 3,
    //       avatar: "/images/User/user-05.jpg",
    //       userName: "Ariene McCoy",
    //       content: "accepted your friendship request",
    //       time: "4 months",
    //     },
    //     {
    //       id: 4,
    //       avatar: "/images/User/user-06.jpg",
    //       userName: "Aaron Jones",
    //       content: "accepted your friendship request",
    //       time: "1 months",
    //     },
    //     {
    //       id: 5,
    //       avatar: "/images/User/user-07.jpg",
    //       userName: "Ariene McCoy",
    //       content: "accepted your friendship request",
    //       time: "4 months",
    //     },
    //   ],
    // },
  ]);
  const handleClickIconDropdown = (index) => {
    if (index === 0) {
      navigate(NEWSFEED_PAGE);
    } else if (index === 1) {
      navigate(SETTINGS_PAGE);
    } else {
      setMenuDropdown((prev) => {
        return prev.map((item) => {
          if (item.id === index) {
            return {
              ...item,
              active: !item.active,
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
  const handleClickOutSide = (index) => {
    setMenuDropdown((prev) => {
      return prev.map((item) => {
        if (item.id === index) {
          return {
            ...item,
            active: false,
          };
        } else {
          return {
            ...item,
          };
        }
      });
    });
  };

  const [dropdownUserMenu, setDropdownUserMenu] = useState(false);
  const userMenu = [
    {
      id: 0,
      name: "My Profile",
      icon: "/images/Icon/IconDropdown/Profile.png",
      navigate: "/profile",
    },
    {
      id: 1,
      name: "Account Settings",
      icon: "/images/Icon/IconDropdown/Setting.png",
      // navigate: "/settings/account-info",
      navigate: "/settings/account/change-password",
    },
    {
      id: 2,
      name: "Profile Settings",
      icon: "/images/Icon/IconDropdown/Folder.png",
      navigate: "/settings",
    },
    {
      id: 3,
      name: "Change Avatar",
      icon: "/images/Icon/IconDropdown/Image.png",
      navigate: "/settings/profile/change-avatar",
    },
  ];
  const navigate = useNavigate();
  const hanldeNavigate = (pathname) => {
    navigate(pathname);
  };

  const getFriendsReqs = useSelector(
    (state) => state.persistedReducer?.friend?.requestFriend?.data
  );

  const [friendsReqs, setFriendReq] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRequestFriendList());
  }, [dispatch]);

  useEffect(() => {
    if (getFriendsReqs !== null) {
      setFriendReq(getFriendsReqs);
    }
  }, [getFriendsReqs]);

  useEffect(() => {
    const setFriendReq = () => {
      setMenuDropdown((prev) => {
        return prev.map((item) => {
          if (item.id === 2) {
            return {
              ...item,
              data: friendsReqs,
            };
          } else {
            return {
              ...item,
            };
          }
        });
      });
    };
    setFriendReq();
  }, [friendsReqs]);

  const handleConfirm = (friendId) => {
    dispatch(
      addFriend({
        friendId,
      })
    );
  };
  const handleDelete = (friendId) => {
    dispatch(
      cancelFriendRequest({
        friendId,
      })
    );
  };

  return (
    <div className="header-dropdown-icon">
      <ul className="menu-dropdown">
        {menuDropdown.map((item) => (
          <OutsideClickHandler
            onOutsideClick={() => {
              handleClickOutSide(item.id);
            }}
          >
            <li
              key={item.id}
              className="item-dropdown"
              onClick={() => {
                handleClickIconDropdown(item.id);
              }}
            >
              <img src={item.icon} alt="" className="ic-dropdown" />
              <span className="tooltip">
                {item.name === "Friend Requests" ? "Requests" : item.name}
              </span>
              {item.active && (
                <div className="dropdown-box">
                  <div className="header-dropdown-box">
                    <p className="title">{item.name}</p>
                  </div>
                  <div className="content-dropdown-box">
                    {/* NOTIFICATIONS */}
                    {item.name === "Notifications" && (
                      <ul className="notifications-list list">
                        {item?.data.map((noti) => (
                          <li key={noti.id} className="item-noti item">
                            <img className="avatar" src={noti.avatar} alt="" />
                            <div className="content-noti">
                              <p className="noti">
                                {noti.userName} {noti.content}
                              </p>
                              <p className="noti-time">{noti.time} ago</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* MESSAGES */}
                    {item.name === "Messages" && (
                      <ul className="messages-list list">
                        {item?.data.map((mess) => (
                          <li key={mess.id} className="item-mess item">
                            <img className="avatar" src={mess.avatar} alt="" />
                            <div className="content-mess">
                              <div className="user-info">
                                <p className="username">{mess.userName}</p>
                                <p className="time">{mess.time} ago</p>
                              </div>
                              <p className="message">{mess.message}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                    {/* FRIEND REQUESTS*/}
                    {item.name === "Friend Requests" && (
                      <ul className="requests-list list">
                        {item?.data !== null && item?.data.length > 0 ? (
                          <>
                            {item?.data.map((req) => (
                              <li key={req.id} className="item-req item">
                                <img
                                  className="avatar"
                                  src={
                                    req?.image?.imgLink
                                      ? req?.image?.imgLink
                                      : "/images/DefaultPage/default-avatar.jpg"
                                  }
                                  alt=""
                                />
                                <div className="content-req">
                                  <div className="user-info">
                                    <p className="username">{`${req?.firstName} ${req?.lastName}`}</p>
                                    {/* <p className="mutual">
                                      {req.mutual} mutual friends
                                    </p> */}
                                  </div>
                                  <div className="btn-option">
                                    <button
                                      className="btn-confirm"
                                      onClick={() => {
                                        handleConfirm(req?.id);
                                      }}
                                    >
                                      Confirm
                                    </button>
                                    <button
                                      className="btn-delete"
                                      onClick={() => {
                                        handleDelete(req?.id);
                                      }}
                                    >
                                      Delete Request
                                    </button>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </>
                        ) : (
                          <p className="mess">
                            There are no friends request yet
                          </p>
                        )}
                      </ul>
                    )}
                  </div>
                  <div className="footer-dropdown-box">
                    <button className="btn-view">View All {item.name}</button>
                  </div>
                </div>
              )}
            </li>
          </OutsideClickHandler>
        ))}
      </ul>
      <div className="user-dropdown">
        <OutsideClickHandler
          onOutsideClick={() => {
            setDropdownUserMenu(false);
          }}
        >
          <div
            className="avatar"
            onClick={() => {
              setDropdownUserMenu(!dropdownUserMenu);
            }}
          >
            <img
              src={
                userData?.image?.imgLink
                  ? userData?.image?.imgLink
                  : "/images/User/Avatar Default/default-avatar.jpg"
              }
              alt=""
            />
          </div>
          {dropdownUserMenu && (
            <ul className="dropdown-box">
              {userMenu.map((item) => (
                <li
                  key={item.id}
                  className="item"
                  onClick={() => {
                    hanldeNavigate(item.navigate);
                  }}
                >
                  <img src={item.icon} alt="" className="ic-dropdown" />
                  <p className="title">{item.name}</p>
                </li>
              ))}
              <div
                className="btn-logout"
                onClick={() => {
                  dispatch(logOut());
                  navigate("/login");
                }}
              >
                <img src="/images/Icon/IconDropdown/Logout.png" alt="" />
                <p className="title">Log Out</p>
              </div>
            </ul>
          )}
        </OutsideClickHandler>
      </div>
    </div>
  );
};

export default DropdownIcon;
