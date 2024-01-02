import { Outlet } from "react-router-dom";
import "../AuthLayout/auth-layout.scss";
// import Carousel from "react-elastic-carousel";
import ItemBannerAuth from "../../components/Auth/ItemBannerAuth/ItemBannerAuth";

const AuthLayout = () => {
  return (
    <div className="auth-layout">
      <div className="banner-auth-layout">
        <div className="animate-circle">
          <div id="circle-small"></div>
          <div id="circle-medium"></div>
          <div id="circle-large"></div>
          <div id="circle-xlarge"></div>
          <div id="circle-xxlarge"></div>
        </div>
        {/* <Carousel
          className="banner-image-slider"
          itemsToShow={1}
          pagination={true}
          showArrows={false}
          focusOnSelect={false}
          enableMouseSwipe={false}
          enableAutoPlay={true}
          autoPlaySpeed={2000}
          enableSwipe={true}
        > */}
          <ItemBannerAuth
            imgBanner={"/images/AuthPage/BannerImg/banner-01.png"}
            title={"Connect With The World"}
            desc={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />
          <ItemBannerAuth
            imgBanner={"/images/AuthPage/BannerImg/banner-02.png"}
            title={"Power UP Your Friendship"}
            desc={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />
          <ItemBannerAuth
            imgBanner={"/images/AuthPage/BannerImg/banner-03.jpg"}
            title={"Together Is Better"}
            desc={
              "It is a long established fact that a reader will be distracted by the readable content."
            }
          />
        {/* </Carousel> */}
      </div>

      <div className="auth-content">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
