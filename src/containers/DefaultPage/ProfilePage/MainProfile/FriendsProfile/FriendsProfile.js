import { useContext, useEffect, useState } from "react";
import Tick from "../../../../../components/Tick/Tick";
import "../FriendsProfile/FriendsProfile.scss";
import useWindowSize from "../../../../../library/hooks/useWindowSize";
import { useDispatch, useSelector } from "react-redux";
import {
  getListFriend,
  getUserListFriend,
  unFriend,
} from "../../../../../redux/slice/User/friendSlice";
import { DataContext } from "../../../../../context/dataContext";
const FriendsProfile = ({ accountOwner }) => {
  const { userData } = useContext(DataContext);
  const { width } = useWindowSize();
  // const friends = [
  //   {
  //     id: 0,
  //     userName: "Jenny Wilson",
  //     avatar: "/images/User/user-08.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     userName: "Philip Ninomar",
  //     avatar: "/images/User/user-07.jpg",
  //     email: "philipNinomar@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     userName: "Iris Cana",
  //     avatar: "/images/User/user-06.jpg",
  //     email: "irisCana@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     userName: "Cana Diket",
  //     avatar: "/images/User/user-05.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     userName: "Cris Wilson",
  //     avatar: "/images/User/user-04.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  //   {
  //     id: 6,
  //     userName: "Anana Crew",
  //     avatar: "/images/User/user-09.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  //   {
  //     id: 7,
  //     userName: "Anana Zona",
  //     avatar: "/images/User/user-10.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  //   {
  //     id: 8,
  //     userName: "Ariana Grande",
  //     avatar: "/images/User/user-profile.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  // ];
  // const listUserFriend = useSelector(
  //   (state) => state.persistedReducer?.friend?.userListFriend?.data
  // );

  const getCurrentMember = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentMember?.data
  );

  const getFriendsUser = useSelector(
    (state) => state.persistedReducer?.friend?.userListFriend?.data
  );
  const getFriendsMember = useSelector(
    (state) => state.persistedReducer?.friend?.listFriend?.data
  );

  const [inputSearch, setInputSearch] = useState(null);
  const [resultUserSearch, setResultUserSearch] = useState([...getFriendsUser]);
  const [resultMemberSearch, setResultMemberSearch] = useState([
    ...getFriendsMember,
  ]);
  const handleChangeSearchInput = (value) => {
    setInputSearch(value);
    if (accountOwner) {
      const filterUser = getFriendsUser.filter((val) => {
        const name = val?.firstName + " " + val?.lastName;
        return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      });
      if (filterUser.length > 0) {
        setResultUserSearch(filterUser);
      } else {
        setResultUserSearch(getFriendsUser);
      }
    } else {
      const filterMember = getFriendsMember.filter((val) => {
        const name = val?.firstName + " " + val?.lastName;
        return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
      });
      if (filterMember.length > 0) {
        setResultMemberSearch(filterMember);
      } else {
        setResultMemberSearch(getFriendsMember);
      }
    }
  };

  const dispatch = useDispatch();

  useEffect(() => {
    if (accountOwner) {
      const userid = userData?.id;
      dispatch(getUserListFriend({ userid }));
    } else {
      const userId = getCurrentMember?.id;
      dispatch(getListFriend({ userId }));
    }
  }, [accountOwner, dispatch, userData, getCurrentMember]);

  const handleUnfriend = (friendId) => {
    // console.log("friendId", friendId);
    const userCurId = userData?.id;
    dispatch(
      unFriend({
        userCurId,
        friendId,
      })
    );
    const refresh = () => window.location.reload(true);
    refresh();
    // const userid = userData?.id;
    // dispatch(getUserListFriend({ userid }));
  };

  return (
    <div className="friends-profile">
      <div className="top-box">
        <p className="title">{`Friends ${
          accountOwner ? getFriendsUser.length : getFriendsMember.length
        }`}</p>
        <div className="searchbar">
          <form action="#" className="search-box">
            <img
              src="/images/Icon/IconDropdown/Search.png"
              className="ic-search"
              alt=""
            />
            <input
              type="text"
              className="search-input"
              placeholder="Search Here"
              value={inputSearch}
              onChange={(e) => {
                handleChangeSearchInput(e.target.value);
              }}
            />
          </form>
        </div>
      </div>
      <div className="friends">
        {accountOwner ? (
          <>
            {getFriendsUser.length > 0 ? (
              <>
                {resultUserSearch.map((friend) => (
                  <div key={friend.id} className="item-friend">
                    <div
                      className={
                        width >= 1150 || (width < 950 && width > 460)
                          ? "user-info w-plus"
                          : "user-info"
                      }
                    >
                      <img
                        src={
                          friend?.image?.imgLink
                            ? friend?.image?.imgLink
                            : "/images/DefaultPage/default-avatar.jpg"
                        }
                        alt=""
                        className="img-avt"
                      />
                      <div className="desc-info">
                        <div className="username">
                          <p className="name">{`${friend.firstName} ${friend.lastName}`}</p>
                          <Tick />
                        </div>
                        <p className="email">
                          {friend.email ? friend.email : friend.phone}
                        </p>
                      </div>
                    </div>
                    {accountOwner && (
                      <div
                        className="unfriend-box"
                        onClick={() => {
                          handleUnfriend(friend.id);
                        }}
                      >
                        {width >= 1150 || (width < 950 && width > 460) ? (
                          <button className="btn-unfriend">Unfriend</button>
                        ) : (
                          <button className="btn-unfriend btn-unfriend-mini">
                            <i class="fa-solid fa-xmark"></i>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <p className="mess">There are no friends yet</p>
            )}
          </>
        ) : (
          <>
            {getFriendsMember.length > 0 ? (
              <>
                {resultMemberSearch.map((friend) => (
                  <div key={friend.id} className="item-friend">
                    <div
                      className={
                        width >= 1150 || (width < 950 && width > 460)
                          ? "user-info w-plus"
                          : "user-info"
                      }
                    >
                      <img
                        src={
                          friend?.image?.imgLink
                            ? friend?.image?.imgLink
                            : "/images/DefaultPage/default-avatar.jpg"
                        }
                        alt=""
                        className="img-avt"
                      />
                      <div className="desc-info">
                        <div className="username">
                          <p className="name">{`${friend.firstName} ${friend.lastName}`}</p>
                          <Tick />
                        </div>
                        <p className="email">
                          {friend.email ? friend.email : friend.phone}
                        </p>
                      </div>
                    </div>
                    {accountOwner && (
                      <div
                        className="unfriend-box"
                        onClick={() => {
                          handleUnfriend(friend.id);
                        }}
                      >
                        {width >= 1150 || (width < 950 && width > 460) ? (
                          <button className="btn-unfriend">Unfriend</button>
                        ) : (
                          <button className="btn-unfriend btn-unfriend-mini">
                            <i class="fa-solid fa-xmark"></i>
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </>
            ) : (
              <p className="mess">There are no friends yet</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FriendsProfile;
