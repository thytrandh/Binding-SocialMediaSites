import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LikedPages = () => {
  const navigate = useNavigate();

  const [discoverPages] = useState([
    {
      id: 0,
      pageInfo: {
        id: 0,
        avatar: "/images/Pages/page-01.jpg",
        bgCover: "/images/Ads/banner-bg.jpg",
        name: "Animal Crackers",
        registionDate: "July 16, 2022",
      },
      member: [
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
      ],
    },
    {
      id: 1,
      pageInfo: {
        id: 1,
        avatar: "/images/Pages/page-02.jpg",
        bgCover: "/images/Ads/banner-bg.jpg",
        name: "The Best Wing",
        registionDate: "July 16, 2022",
      },
      member: [
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
      ],
    },
    {
      id: 2,
      pageInfo: {
        id: 2,
        avatar: "/images/Pages/page-03.jpg",
        bgCover: "/images/Ads/banner-bg.jpg",
        name: "Squad Ghouls",
        registionDate: "July 16, 2022",
      },
      member: [
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
      ],
    },
    {
      id: 3,
      pageInfo: {
        id: 3,
        avatar: "/images/Pages/page-04.jpg",
        bgCover: "/images/Ads/banner-bg.jpg",
        name: "Wombo Combo",
        registionDate: "July 16, 2022",
      },
      member: [
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
      ],
    },
    {
      id: 4,
      pageInfo: {
        id: 4,
        avatar: "/images/Pages/page-05.jpg",
        bgCover: "/images/Ads/banner-bg.jpg",
        name: "Three Amigos",
        registionDate: "July 16, 2022",
      },
      member: [
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
      ],
    },
    {
      id: 5,
      pageInfo: {
        id: 5,
        avatar: "/images/Pages/page-06.jpg",
        bgCover: "/images/Ads/banner-bg.jpg",
        name: "Film Fanatics",
        registionDate: "July 16, 2022",
      },
      member: [
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
      ],
    },
  ]);
  return (
    <div className="liked-pages pages-component">
      {discoverPages.map((item) => (
        <div key={item.id} className="item-page-box">
          <div
            className="top-item"
            onClick={() => {
              navigate(`/page-binding/${item.id}`);
            }}
          >
            <img src={item.pageInfo.bgCover} alt="" className="bg-cover" />
            <img src={item.pageInfo.avatar} alt="" className="avatar" />
          </div>
          <div className="middle-item">
            <p className="name-page">{item.pageInfo.name}</p>
            <div className="members">
              <img
                src="/images/Icon/IconDropdown/User.png"
                alt=""
                className="ic-user"
              />
              <p className="subject">
                Member {item.member.length > 0 && item.member.length}
              </p>
            </div>
          </div>
          <div className="bottom-item">
            <div className="members-list">
              {item.member.length > 0 && (
                <>
                  {item.member.map((val) => (
                    <img
                      key={val.id}
                      src={val.avatar}
                      alt=""
                      className="avt-member"
                    />
                  ))}
                </>
              )}
            </div>
            <button className="btn-choose btn-red">Unlike this page</button>
          </div>
        </div>
      ))}
    </div>
  );
};
export default LikedPages;
