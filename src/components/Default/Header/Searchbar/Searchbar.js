import { useState } from "react";
import "../Searchbar/Searchbar.scss";
import ListResult from "./ListResult/ListResult";
import useWindowSize from "../../../../library/hooks/useWindowSize";

const Searchbar = () => {
  const users = [
    {
      id: 0,
      avatar: "/images/User/user-02.jpg",
      name: "Jenny Wilson",
      mutual: 2,
    },
    {
      id: 1,
      avatar: "/images/User/user-03.jpg",
      name: "Freya Davies",
      mutual: 8,
    },
    {
      id: 2,
      avatar: "/images/User/user-04.jpg",
      name: "Aaron Jones",
      mutual: 5,
    },
    {
      id: 3,
      avatar: "/images/User/user-05.jpg",
      name: "Ariene McCoy",
      mutual: 1,
    },
    {
      id: 4,
      avatar: "/images/User/user-06.jpg",
      name: "Alex Fob",
      mutual: 5,
    },
  ];

  const pages = [
    {
      id: 0,
      avatar: "/images/Pages/page-01.jpg",
      name: "Animal Crackers",
      registionDate: "July 16, 2022",
    },
    {
      id: 1,
      avatar: "/images/Pages/page-02.jpg",
      name: "The Best Wing",
      registionDate: "July 16, 2022",
    },
    {
      id: 2,
      avatar: "/images/Pages/page-03.jpg",
      name: "Squad Ghouls",
      registionDate: "July 16, 2022",
    },
    {
      id: 3,
      avatar: "/images/Pages/page-04.jpg",
      name: "Wombo Combo",
      registionDate: "July 16, 2022",
    },
    {
      id: 4,
      avatar: "/images/Pages/page-05.jpg",
      name: "Three Amigos",
      registionDate: "July 16, 2022",
    },
    {
      id: 5,
      avatar: "/images/Pages/page-06.jpg",
      name: "Film Fanatics",
      registionDate: "July 16, 2022",
    },
  ];
  const [resultFilterUser, setResultFilterUser] = useState(null);
  const [resultFilterPage, setResultFilterPage] = useState(null);

  const [dropdownBox, setDropdownBox] = useState(false);

  const [input, setInput] = useState(null);
  const handleChangeInput = (value) => {
    setInput(value);

    const filterUser = users.filter((val) =>
      val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setResultFilterUser(filterUser);

    const filterPage = pages.filter((val) =>
      val.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );
    setResultFilterPage(filterPage);
  };

  const { width } = useWindowSize();

  return (
    <div className="header-searchbar">
      <img
        src="/images/Icon/IconDropdown/Search.png"
        className="ic-searchbar"
        alt=""
        onClick={() => {
          setDropdownBox(!dropdownBox);
        }}
      />
      <div className="header-searchbar-box">
        {(dropdownBox || width > 1400) && (
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
              value={input}
              onChange={(e) => {
                handleChangeInput(e.target.value);
              }}
            />
          </form>
        )}
        {width > 1400 && input !== null && input.length > 0 && (
          <div className="search-result">
            <div className="result-box">
              <ListResult title={"Member"} listResult={resultFilterUser} />
              <ListResult title={"Page"} listResult={resultFilterPage} />
            </div>
            <div className="footer-dropdown-box">
              <button className="btn-view">View All</button>
            </div>
          </div>
        )}
        {dropdownBox && width < 1440 && input !== null && input.length > 0 && (
          <div className="search-result">
            <div className="result-box">
              <ListResult title={"Member"} listResult={resultFilterUser} />
              <ListResult title={"Page"} listResult={resultFilterPage} />
            </div>
            <div className="footer-dropdown-box">
              <button className="btn-view">View All</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Searchbar;
