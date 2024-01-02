import { useEffect, useState } from "react";
import BannerAds from "../../../components/BannerAds/BannerAds";
import "../Pages/Pages.scss";
import DiscoverPages from "./DiscoverPages/DiscoverPages";
import MyPages from "./MyPages/MyPages";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentPages } from "../../../redux/slice/Pages/pagesSlice";

const Pages = () => {
  const getCurrentPage = useSelector(
    (state) => state?.persistedReducer?.pages?.currentPages?.data
  );

  const [tabMenu, setTabMenu] = useState([
    {
      id: 0,
      name: "All Pages",
      isActive: true,
      navigate: "/pages",
    },
    // {
    //   id: 1,
    //   name: "Liked Pages",
    //   isActive: false,
    //   navigate: "/pages/liked-pages",
    // },
    {
      id: 1,
      name: "My Pages",
      isActive: false,
      navigate: "/pages/my-pages",
    },
  ]);

  const [isPage, setIsPage] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentPages());
  }, [dispatch]);

  useEffect(() => {
    if (getCurrentPage !== null) {
      setIsPage(true);
    } else {
      setIsPage(false);
    }
  }, [getCurrentPage]);
  // const callAPICheckMyPage = () => {};
  return (
    <div className="pages pages-control">
      <BannerAds
        subject={"Bingding Sites"}
        desc={"Good Communication is the key to cop-up with good ideas"}
      />
      <div className="main-pages-content">
        <div className="top-box">
          <p className="title">Pages</p>
          <div className="tab-menu">
            {tabMenu.map((item) => (
              <p
                key={item.id}
                className={item.isActive ? "item active" : "item"}
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
        </div>
        <div className="pages-content">
          {tabMenu[0].isActive && <DiscoverPages />}
          {/* {tabMenu[1].isActive && <LikedPages />} */}
          {tabMenu[1].isActive && <MyPages isPage={isPage} />}
        </div>
      </div>
    </div>
  );
};

export default Pages;
