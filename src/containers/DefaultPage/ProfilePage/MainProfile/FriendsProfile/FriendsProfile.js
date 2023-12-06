import { useState } from "react";
import Tick from "../../../../../components/Tick/Tick";
import "../FriendsProfile/FriendsProfile.scss";
const FriendsProfile = ({ accountOwner }) => {
  const friends = [
    {
      id: 0,
      userName: "Jenny Wilson",
      avatar: "/images/User/user-08.jpg",
      email: "jennyWilson@gmail.com",
    },
    {
      id: 1,
      userName: "Philip Ninomar",
      avatar: "/images/User/user-07.jpg",
      email: "philipNinomar@gmail.com",
    },
    {
      id: 3,
      userName: "Iris Cana",
      avatar: "/images/User/user-06.jpg",
      email: "irisCana@gmail.com",
    },
    {
      id: 4,
      userName: "Cana Diket",
      avatar: "/images/User/user-05.jpg",
      email: "jennyWilson@gmail.com",
    },
    {
      id: 5,
      userName: "Cris Wilson",
      avatar: "/images/User/user-04.jpg",
      email: "jennyWilson@gmail.com",
    },
    {
      id: 6,
      userName: "Anana Crew",
      avatar: "/images/User/user-09.jpg",
      email: "jennyWilson@gmail.com",
    },
    {
      id: 7,
      userName: "Anana Zona",
      avatar: "/images/User/user-10.jpg",
      email: "jennyWilson@gmail.com",
    },
    {
      id: 8,
      userName: "Ariana Grande",
      avatar: "/images/User/user-profile.jpg",
      email: "jennyWilson@gmail.com",
    },
  ];
  const handleUnfriend = () => {};

  const [inputSearch, setInputSearch] = useState(null);
  const [resultSearch, setResultSearch] = useState([...friends]);
  const handleChangeSearchInput = (value) => {
    setInputSearch(value);
    const filter = friends.filter((val) =>
      val.userName.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    if (filter.length > 0) {
      setResultSearch(filter);
    } else {
      setResultSearch(friends);
    }
  };
  return (
    <div className="friends-profile">
      <div className="top-box">
        <p className="title">Friends ({friends.length})</p>
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
        {friends.length > 0 ? (
          <>
            {resultSearch.map((friend) => (
              <div key={friend.id} className="item-friend">
                <img src={friend.avatar} alt="" className="img-avt" />
                <div className="user-info">
                  <div className="username">
                    <p className="name">{friend.userName}</p>
                    <Tick />
                  </div>
                  <p className="email">{friend.email}</p>
                </div>
                {accountOwner && (
                  <div className="unfriend-box">
                    <button
                      className="btn-unfriend"
                      onClick={() => {
                        handleUnfriend();
                      }}
                    >
                      <i class="fa-solid fa-xmark"></i>
                      <p className="tooltip">Unfriend</p>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </>
        ) : (
          <p className="mess">There are no friends yet</p>
        )}
      </div>
    </div>
  );
};

export default FriendsProfile;
