import { useState } from "react";
import BannerAds from "../../../components/BannerAds/BannerAds";
import "../Pages/Pages.scss";
import DiscoverPages from "./DiscoverPages/DiscoverPages";
import LikedPages from "./LikedPages/LikedPages";
import MyPages from "./MyPages/MyPages";

const Pages = () => {
  const [tabMenu, setTabMenu] = useState([
    {
      id: 0,
      name: "Discover Pages",
      isActive: true,
      navigate: "/pages",
    },
    {
      id: 1,
      name: "Liked Pages",
      isActive: false,
      navigate: "/pages/liked-pages",
    },
    {
      id: 2,
      name: "My Pages",
      isActive: false,
      navigate: "/pages/my-pages",
    },
  ]);
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
        <div className="btn-create-pages-box">
          <button className="btn-create-pages">
            <i class="fa-solid fa-plus"></i>
            Create new page
          </button>
        </div>
        <div className="pages-content">
          {tabMenu[0].isActive && <DiscoverPages />}
          {tabMenu[1].isActive && <LikedPages />}
          {tabMenu[2].isActive && <MyPages />}
        </div>
      </div>
    </div>
  );
};

export default Pages;
