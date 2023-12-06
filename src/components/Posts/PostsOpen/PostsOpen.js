import { useContext, useState } from "react";
import { PostsOpenContext } from "../context/postsOpenContext";
import "../PostsOpen/PostsOpen.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import OutsideClickHandler from "react-outside-click-handler";

const PostsOpen = ({
  postsUser,
  postsTime,
  postsImage,
  postsVideo,
  postsContent,
  postsComment,
  postsReaction,
  listEmoji,
}) => {
  const { setPostsOpen } = useContext(PostsOpenContext);
  const [openOptionBox, setOpenOptionBox] = useState(false);
  function RenderEmotion({ arr }) {
    const unique = arr.filter(
      (obj, index) =>
        arr.findIndex((item) => item.emojiCode === obj.emojiCode) === index
    );
    return unique.map((emotion) => {
      return (
        <img
          src={listEmoji[emotion.emojiCode - 1].iconEmoji}
          alt=""
          className="img-emoji"
        />
      );
    });
  }
  return (
    <div className="posts-open">
      <OutsideClickHandler
        onOutsideClick={() => {
          setPostsOpen(null);
        }}
      >
        <div className="posts-open-box">
          <div className="posts-files">
            <Swiper
              pagination={{
                type: "progressbar",
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              {postsImage.length > 0 &&
                postsImage.map((image) => (
                  <SwiperSlide>
                    <div key={image.src} className="item-image item-file">
                      <img src={image.src} alt="" className="img-show" />
                      <img className="img-bg" src={image.src} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              {postsVideo.length > 0 &&
                postsVideo.map((video) => (
                  <SwiperSlide>
                    <div key={video.src} className="item-video item-file">
                      <video
                        src={video.src}
                        alt=""
                        className="video-show"
                        controls
                        autoPlay
                      />
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div className="show-posts-desc">
            <div className="posts-desc-header">
              <div className="user-info">
                <img src={postsUser.avatar} alt="" className="img-avt" />
                <p className="username">{postsUser.username}</p>
              </div>
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
                        <p>Edit</p>
                      </div>
                      {/* <div className="guest">
                        <p>Report</p>
                      </div> */}
                    </div>
                  )}
                </OutsideClickHandler>
              </div>
            </div>
            <div className="posts-desc-body">
              <div className="posts-desc-content">
                <img src={postsUser.avatar} alt="" className="img-avt" />
                <div className="desc-content">
                  <p className="username">
                    {postsUser.username}{" "}
                    <span className="content">{postsContent}</span>
                  </p>
                  <p className="time">{postsTime}</p>
                </div>
              </div>
              <div className="posts-comment">
                <p className="title">Comment</p>
                {postsComment.length > 0 ? (
                  postsComment.map((comment) => (
                    <div key={comment.idComment} className="item-posts-comment">
                      <img
                        src={comment.user.avatar}
                        alt=""
                        className="img-avt"
                      />
                      <div className="desc-comment">
                        <p className="username">
                          {comment.user.username}{" "}
                          <span className="content">{comment.content}</span>
                        </p>
                        <p className="time">{comment.time} ago</p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="message">No comments yet.</p>
                )}
              </div>
            </div>
            {postsReaction.length > 0 && (
              <div className="posts-desc-footer">
                <div className="posts-react">
                  <div className="list-emotion">
                    <RenderEmotion arr={postsReaction} />
                  </div>
                  <div className="list-user-reacted">
                    <p className="subject">
                      Reacted by
                      <span className="username desc">
                        {" "}
                        {postsReaction[0].username}{" "}
                      </span>
                      {postsReaction.length > 1 && (
                        <span className="desc">
                          <span className="and">And</span>{" "}
                          {postsReaction.length > 1 && postsReaction.length - 1}{" "}
                          Others
                        </span>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </OutsideClickHandler>
      <div className="btn-close-posts">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default PostsOpen;
