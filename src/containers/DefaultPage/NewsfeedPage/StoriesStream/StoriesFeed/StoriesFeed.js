import "../StoriesFeed/StoriesFeed.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules";
import { useContext } from "react";
import { OpenStoriesFeed } from "../context/openStoriesContext";
import OutsideClickHandler from "react-outside-click-handler";
import { useState } from "react";

const StoriesFeed = ({ stories, storyId }) => {
  const { setOpenStoriesFeed } = useContext(OpenStoriesFeed);

  const [openOptionBox, setOpenOptionBox] = useState(false);

  return (
    <div className="stories-feed">
      <OutsideClickHandler>
        <>
          <div className="stories-feed-box">
            <div className="stories">
              <Swiper
                initialSlide={storyId}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                spaceBetween={100}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 150,
                  modifier: 1,
                  slideShadows: true,
                }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[Autoplay, EffectCoverflow, Navigation]}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                // onSwiper={3}
                className="mySwiper"
              >
                {stories.map((story) => (
                  <SwiperSlide key={story.id}>
                    <div className="item-story">
                      <div className="story-desc">
                        <div className="user-info">
                          <img
                            src={story.userInfo.avatar}
                            alt=""
                            className="img-avt"
                          />
                          <p className="username">{story.userInfo.userName}</p>
                        </div>
                        <p className="time">{story.time} hours ago</p>
                        <div className="option"></div>
                      </div>
                      {story.type === "video" ? (
                        <video
                          className="story-file"
                          src={story.content}
                          // controls
                          autoPlay
                          loop
                        />
                      ) : (
                        <img
                          className="story-file"
                          src={story.content}
                          alt=""
                        />
                      )}
                      <div className="posts-option">
                        <div
                          className="btn-menu"
                          onClick={() => {
                            setOpenOptionBox(!openOptionBox);
                          }}
                        >
                          <i class="fa-solid fa-ellipsis"></i>
                        </div>
                        <OutsideClickHandler
                          onOutsideClick={() => {
                            setOpenOptionBox(false);
                          }}
                        >
                          {openOptionBox && (
                            <div className="box-option-dropdown">
                              <div className="own">
                                <p>Delete</p>
                              </div>
                            </div>
                          )}
                        </OutsideClickHandler>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
                <div className="slider-controler">
                  <div className="swiper-button-prev slider-arrow">
                    <i class="fa-solid fa-chevron-left"></i>
                  </div>
                  <div className="swiper-button-next slider-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                  </div>
                  <div className="swiper-pagination"></div>
                </div>
              </Swiper>
            </div>
          </div>
          <div
            className="btn-close-posts"
            onClick={() => {
              setOpenStoriesFeed(false);
            }}
          >
            <i class="fa-solid fa-xmark"></i>
          </div>
        </>
      </OutsideClickHandler>
    </div>
  );
};
export default StoriesFeed;
