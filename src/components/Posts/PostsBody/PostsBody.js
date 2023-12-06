import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import "../PostsBody/PostsBody.scss";
import { useContext } from "react";
import { PostsOpenContext } from "../context/postsOpenContext";

const PostsBody = ({
  postsId,
  postsContent,
  postsImage,
  postsVideo,
  postsReaction,
  listEmoji,
}) => {
  const { setPostsOpen } = useContext(PostsOpenContext);

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
    <div className="posts-body">
      <p className="posts-content">{postsContent}</p>
      <div
        className="posts-files"
        onClick={() => {
          setPostsOpen(postsId);
        }}
      >
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
      {postsReaction.length > 0 && (
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
                  {postsReaction.length > 1 && postsReaction.length - 1} Others
                </span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsBody;
