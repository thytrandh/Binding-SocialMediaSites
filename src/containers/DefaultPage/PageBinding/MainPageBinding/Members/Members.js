import { useEffect, useState } from "react";
import useWindowSize from "../../../../../library/hooks/useWindowSize";
import "../Members/Members.scss";
import Tick from "../../../../../components/Tick/Tick";
import { useSelector } from "react-redux";
const Members = ({ pageOwner }) => {
  const { width } = useWindowSize();

  // const members = [
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
  // const handleRemove = () => {};

  const getMembersData = useSelector(
    (state) => state.persistedReducer?.pages?.memberPage?.data
  );

  const [members, setMembers] = useState([]);

  useEffect(() => {
    if (getMembersData !== null && getMembersData !== undefined) {
      setMembers(getMembersData);
    }
  }, [getMembersData]);

  const [inputSearch, setInputSearch] = useState(null);
  // const [resultSearch, setResultSearch] = useState(members);
  const handleChangeSearchInput = (value) => {
    setInputSearch(value);
    // const filter = members.filter((val) => {
    //   const name = val?.firstName + " " + val?.lastName;
    //   return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    // });
    // if (filter.length > 0) {
    //   setResultSearch(filter);
    // } else {
    //   setResultSearch(members);
    // }
  };

  return (
    <div className="members-page-binding">
      <div className="top-box">
        <p className="title">Members ({members.length})</p>
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
      <div className="members">
        {members.length > 0 ? (
          <>
            {members.map((member) => (
              <div key={member.id} className="item-member">
                <div
                  className={
                    width >= 1150 || (width < 950 && width > 460)
                      ? "user-info w-plus"
                      : "user-info"
                  }
                >
                  <img
                    src={
                      member.image?.imgLink
                        ? member.image?.imgLink
                        : "/images/DefaultPage/default-avatar.jpg"
                    }
                    alt=""
                    className="img-avt"
                  />
                  <div className="desc-info">
                    <div className="username">
                      <p className="name">{`${member.firstName} ${member.lastName}`}</p>
                      <Tick />
                    </div>
                    <p className="email">
                      {member.email ? member.email : member.phone}
                    </p>
                  </div>
                </div>

                {/* {pageOwner && (
                  <div
                    className="remove-box"
                    onClick={() => {
                      handleRemove();
                    }}
                  >
                    {width >= 1150 || (width < 950 && width > 460) ? (
                      <button className="btn-remove">Remove</button>
                    ) : (
                      <button className="btn-remove btn-remove-mini">
                        <i class="fa-solid fa-xmark"></i>
                      </button>
                    )}
                  </div>
                )} */}
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
export default Members;
