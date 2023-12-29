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
  postsItem,
  countLike,
}) => {
  const { setPostsOpen } = useContext(PostsOpenContext);

  const handleOpenPostsBox = () => {
    if (postsContent !== null) {
      setPostsOpen(postsItem);
    } else {
      return false;
    }
  };

  // function RenderEmotion({ arr }) {
  //   const unique = arr.filter(
  //     (obj, index) =>
  //       arr.findIndex((item) => item.emojiCode === obj.emojiCode) === index
  //   );
  //   return unique.map((emotion) => {
  //     return (
  //       <img
  //         src={listEmoji[emotion.emojiCode - 1].iconEmoji}
  //         alt=""
  //         className="img-emoji"
  //       />
  //     );
  //   });
  // }

  return (
    <div className="posts-body">
      <p className="posts-content">{postsContent}</p>
      <div
        className="posts-files"
        onClick={() => {
          handleOpenPostsBox();
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
          {postsImage !== null &&
            postsImage.map((image) => (
              <SwiperSlide>
                <div key={image.id} className="item-image item-file">
                  <img src={image.imgLink} alt="" className="img-show" />
                  <img className="img-bg" src={image.imgLink} alt="" />
                </div>
              </SwiperSlide>
            ))}
          {postsVideo !== null &&
            postsVideo.map((video) => (
              <SwiperSlide>
                <div key={video.id} className="item-video item-file">
                  <video
                    src={video.videoLink}
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

      {countLike > 0 && (
        <div className="posts-react">
          <div className="list-emotion">
            <img
              src="/images/Posts/Emoji/love.png"
              alt=""
              className="img-emoji"
            />
          </div>
          <div className="list-user-reacted">
            <p className="subject">
              Reacted by
              <span className="username desc"> {countLike} person</span>
            </p>
            {/* <p className="subject">
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
            </p> */}
          </div>
        </div>
      )}
    </div>
  );
};

export default PostsBody;
