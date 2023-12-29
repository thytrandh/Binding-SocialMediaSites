import { useEffect, useState } from "react";
import "../DiscoverPages/DiscoverPages.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllPages,
  getPageById,
} from "../../../../redux/slice/Pages/pagesSlice";

const DiscoverPages = () => {
  const navigate = useNavigate();

  // const [discoverPages] = useState([
  //   {
  //     id: 0,
  //     pageInfo: {
  //       id: 0,
  //       avatar: "/images/Pages/page-01.jpg",
  //       bgCover: "/images/Ads/banner-bg.jpg",
  //       name: "Animal Crackers",
  //       registionDate: "July 16, 2022",
  //     },
  //     member: [
  //       {
  //         id: 0,
  //         avatar: "/images/User/user-02.jpg",
  //         name: "Jenny Wilson",
  //         mutual: 2,
  //       },
  //       {
  //         id: 1,
  //         avatar: "/images/User/user-03.jpg",
  //         name: "Freya Davies",
  //         mutual: 8,
  //       },
  //       {
  //         id: 2,
  //         avatar: "/images/User/user-04.jpg",
  //         name: "Aaron Jones",
  //         mutual: 5,
  //       },
  //       {
  //         id: 3,
  //         avatar: "/images/User/user-05.jpg",
  //         name: "Ariene McCoy",
  //         mutual: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 1,
  //     pageInfo: {
  //       id: 1,
  //       avatar: "/images/Pages/page-02.jpg",
  //       bgCover: "/images/Ads/banner-bg.jpg",
  //       name: "The Best Wing",
  //       registionDate: "July 16, 2022",
  //     },
  //     member: [],
  //   },
  //   {
  //     id: 2,
  //     pageInfo: {
  //       id: 2,
  //       avatar: "/images/Pages/page-03.jpg",
  //       bgCover: "/images/Ads/banner-bg.jpg",
  //       name: "Squad Ghouls",
  //       registionDate: "July 16, 2022",
  //     },
  //     member: [
  //       {
  //         id: 0,
  //         avatar: "/images/User/user-02.jpg",
  //         name: "Jenny Wilson",
  //         mutual: 2,
  //       },
  //       {
  //         id: 1,
  //         avatar: "/images/User/user-03.jpg",
  //         name: "Freya Davies",
  //         mutual: 8,
  //       },
  //       {
  //         id: 2,
  //         avatar: "/images/User/user-04.jpg",
  //         name: "Aaron Jones",
  //         mutual: 5,
  //       },
  //       {
  //         id: 3,
  //         avatar: "/images/User/user-05.jpg",
  //         name: "Ariene McCoy",
  //         mutual: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     pageInfo: {
  //       id: 3,
  //       avatar: "/images/Pages/page-04.jpg",
  //       bgCover: "/images/Ads/banner-bg.jpg",
  //       name: "Wombo Combo",
  //       registionDate: "July 16, 2022",
  //     },
  //     member: [
  //       {
  //         id: 0,
  //         avatar: "/images/User/user-02.jpg",
  //         name: "Jenny Wilson",
  //         mutual: 2,
  //       },
  //       {
  //         id: 1,
  //         avatar: "/images/User/user-03.jpg",
  //         name: "Freya Davies",
  //         mutual: 8,
  //       },
  //       {
  //         id: 2,
  //         avatar: "/images/User/user-04.jpg",
  //         name: "Aaron Jones",
  //         mutual: 5,
  //       },
  //       {
  //         id: 3,
  //         avatar: "/images/User/user-05.jpg",
  //         name: "Ariene McCoy",
  //         mutual: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     pageInfo: {
  //       id: 4,
  //       avatar: "/images/Pages/page-05.jpg",
  //       bgCover: "/images/Ads/banner-bg.jpg",
  //       name: "Three Amigos",
  //       registionDate: "July 16, 2022",
  //     },
  //     member: [
  //       {
  //         id: 0,
  //         avatar: "/images/User/user-02.jpg",
  //         name: "Jenny Wilson",
  //         mutual: 2,
  //       },
  //       {
  //         id: 1,
  //         avatar: "/images/User/user-03.jpg",
  //         name: "Freya Davies",
  //         mutual: 8,
  //       },
  //       {
  //         id: 2,
  //         avatar: "/images/User/user-04.jpg",
  //         name: "Aaron Jones",
  //         mutual: 5,
  //       },
  //       {
  //         id: 3,
  //         avatar: "/images/User/user-05.jpg",
  //         name: "Ariene McCoy",
  //         mutual: 1,
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     pageInfo: {
  //       id: 5,
  //       avatar: "/images/Pages/page-06.jpg",
  //       bgCover: "/images/Ads/banner-bg.jpg",
  //       name: "Film Fanatics",
  //       registionDate: "July 16, 2022",
  //     },
  //     member: [
  //       {
  //         id: 0,
  //         avatar: "/images/User/user-02.jpg",
  //         name: "Jenny Wilson",
  //         mutual: 2,
  //       },
  //       {
  //         id: 1,
  //         avatar: "/images/User/user-03.jpg",
  //         name: "Freya Davies",
  //         mutual: 8,
  //       },
  //       {
  //         id: 2,
  //         avatar: "/images/User/user-04.jpg",
  //         name: "Aaron Jones",
  //         mutual: 5,
  //       },
  //       {
  //         id: 3,
  //         avatar: "/images/User/user-05.jpg",
  //         name: "Ariene McCoy",
  //         mutual: 1,
  //       },
  //     ],
  //   },
  // ]);

  const getAllPage = useSelector(
    (state) => state.persistedReducer?.pages?.allPages?.data
  );
  const [discoverPages, setDiscoverPages] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPages());
  }, [dispatch]);
  useEffect(() => {
    if (getAllPage) {
      setDiscoverPages(getAllPage);
    }
  }, [getAllPage, setDiscoverPages]);

  const handleViewPages = (pageId) => {
    dispatch(
      getPageById({
        pageId,
      })
    );
    navigate(`/page-binding/${pageId}`, { replace: true });
  };

  return (
    <div className="discover-pages pages-component">
      {discoverPages !== null && (
        <>
          {discoverPages.map((item) => (
            <div
              key={item.id}
              className="item-page-box"
              onClick={() => handleViewPages(item.id)}
            >
              <div className="top-item">
                <img
                  src={
                    item?.background?.imgLink
                      ? item?.background?.imgLink
                      : "/images/Ads/banner-bg.jpg"
                  }
                  alt=""
                  className="bg-cover"
                />
                <img
                  src={
                    item?.avatar?.imgLink
                      ? item?.avatar?.imgLink
                      : "/images/DefaultPage/default-avatar.jpg"
                  }
                  alt=""
                  className="avatar"
                />
              </div>
              <div className="middle-item">
                <p className="name-page">{item?.pageName}</p>
                <div className="members">
                  <img
                    src="/images/Icon/IconDropdown/User.png"
                    alt=""
                    className="ic-user"
                  />
                  <p className="subject">Member {item.countMember}</p>
                </div>
              </div>
              {/* <div className="bottom-item">
                <div className="members-list">
                  {item.member?.length > 0 ? (
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
                  ) : (
                    <p className="mess">No Members</p>
                  )}
                </div>
                <button className="btn-choose btn-blue">Like Page</button>
              </div> */}
            </div>
          ))}
        </>
      )}
    </div>
  );
};
export default DiscoverPages;
