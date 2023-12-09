import "../FriendsPage/FriendsPage.scss";
import BannerAds from "../../../components/BannerAds/BannerAds";
import { useState } from "react";
import AllFriends from "./AllFriends/AllFriends";
import FriendsRequests from "./FriendsRequests/FriendsRequests";
import SentRequests from "./SentRequests/SentRequests";

const FriendsPage = () => {
  const [tabMenu, setTabMenu] = useState([
    {
      id: 0,
      name: "All Friends",
      isActive: true,
    },
    {
      id: 1,
      name: "Friends Requests",
      isActive: false,
    },
    {
      id: 2,
      name: "Sent Requests",
      isActive: false,
    },
  ]);

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
    <div className="friends-page friends-page-section">
      <BannerAds
        subject={"Bingding Sites"}
        desc={"Good Communication is the key to cop-up with good ideas"}
      />
      <div className="main-friends-content">
        <div className="top-box">
          <div className="tab-menu">
            {tabMenu.map((item) => (
              <p
                key={item.id}
                className={item.isActive ? "title active" : "title"}
                onClick={() => {
                  setTabMenu((prev) => {
                    return prev.map((val) => {
                      if (val.id === item.id) {
                        return {
                          ...val,
                          isActive: true,
                        };
                      } else {
                        return {
                          ...val,
                          isActive: false,
                        };
                      }
                    });
                  });
                }}
              >
                {item.name}
              </p>
            ))}
          </div>
          <div className="searchbar friends-page-searchbar">
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
        {tabMenu[0].isActive && (
          <AllFriends friends={friends} resultSearch={resultSearch} />
        )}
        {tabMenu[1].isActive && (
          <FriendsRequests friends={friends} resultSearch={resultSearch} />
        )}
        {tabMenu[2].isActive && (
          <SentRequests friends={friends} resultSearch={resultSearch} />
        )}
      </div>
    </div>
  );
};
export default FriendsPage;
