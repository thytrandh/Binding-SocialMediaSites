import { useContext, useEffect, useState } from "react";
import { PostsOpenContext } from "../context/postsOpenContext";
import "../PostsOpen/PostsOpen.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import OutsideClickHandler from "react-outside-click-handler";

const PostsOpen = ({
  postsUser,
  postsPages,
  postsTime,
  postsImage,
  postsVideo,
  postsContent,
  postsComment,
  postsFeeling,
  postsReaction,
  listEmoji,
}) => {
  const { setPostsOpen } = useContext(PostsOpenContext);

  const day = postsTime.slice(8, 10);
  const month = postsTime.slice(5, 7);
  const year = postsTime.slice(0, 4);
  const [mm, setMm] = useState();

  useEffect(() => {
    const monthTime = [
      {
        id: 1,
        value: "01",
        month: "January",
      },
      {
        id: 2,
        value: "02",
        month: "February",
      },
      {
        id: 3,
        value: "03",
        month: "March",
      },
      {
        id: 4,
        value: "04",
        month: "April",
      },
      {
        id: 5,
        value: "05",
        month: "May",
      },
      {
        id: 6,
        value: "06",
        month: "June",
      },
      {
        id: 7,
        value: "07",
        month: "July",
      },
      {
        id: 8,
        value: "08",
        month: "August",
      },
      {
        id: 9,
        value: "09",
        month: "September",
      },
      {
        id: 10,
        value: "10",
        month: "October",
      },
      {
        id: 11,
        value: "11",
        month: "November",
      },
      {
        id: 12,
        value: "12",
        month: "December",
      },
    ];
    const arrFilter = monthTime.filter((item) => item.value === month);
    setMm(arrFilter[0].month);

    // console.log("postsUser", postsUser);
  }, [month]);

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

  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    const handleInfo = () => {
      if (postsPages !== null) {
        setAvatar(postsPages.avatar?.imgLink);
        setName(postsPages?.pageName);
      } else {
        setAvatar(postsUser?.avatar);
        setName(`${postsUser?.firstName} ${postsUser?.lastName}`);
      }
    };
    handleInfo();
    // console.log("postsUser", postsUser);
    // console.log("postsPages", postsPages);
  }, [postsPages, postsUser]);

  return (
    <div className="posts-open">
      <OutsideClickHandler
        onOutsideClick={() => {
          setPostsOpen(null);
        }}
      >
        <div className="posts-open-box">
          <div className="posts-files-2">
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
                    <div key={image.id} className="item-image-2 item-file-2">
                      <img src={image.imgLink} alt="" className="img-show-2" />
                      {/* <img className="img-bg" src={image.imgLink} alt="" /> */}
                    </div>
                  </SwiperSlide>
                ))}
              {postsVideo !== null &&
                postsVideo.map((video) => (
                  <SwiperSlide>
                    <div key={video.id} className="item-video-2 item-file-2">
                      <video
                        src={video.videoLink}
                        alt=""
                        className="video-show-2"
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
                <img
                  src={
                    avatar !== null
                      ? avatar
                      : "/images/User/Avatar Default/default-avatar.jpg"
                  }
                  alt=""
                  className="img-avt"
                />
                <p className="username">
                  {name}

                  {postsFeeling !== null && (
                    <span className="content">
                      {" - "}
                      {postsFeeling}
                    </span>
                  )}
                </p>
              </div>
            </div>
            <div className="posts-desc-body">
              <div className="posts-desc-content">
                <img
                  src={
                    avatar
                      ? avatar
                      : "/images/User/Avatar Default/default-avatar.jpg"
                  }
                  alt=""
                  className="img-avt"
                />
                <div className="desc-content">
                  <p className="username">
                    {name} <span className="content">{postsContent}</span>
                  </p>
                  <p className="time">
                    {mm} {day}, {year}
                  </p>
                </div>
              </div>
              <div className="posts-comment">
                <p className="title">Comment</p>
                {postsComment !== null ? (
                  postsComment.map((comment) => (
                    <div key={comment.id} className="item-posts-comment">
                      <img
                        src={
                          comment?.userComment?.avatar !== null
                            ? comment?.userComment?.avatar
                            : "/images/DefaultPage/default-avatar.jpg"
                        }
                        alt=""
                        className="img-avt"
                      />
                      <div className="desc-comment">
                        <p className="username">
                          {comment.userComment?.firstName}{" "}
                          {comment.userComment?.lastName}
                          <span className="content"> {comment.content}</span>
                        </p>
                        <p className="time">
                          {comment?.createTime.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="message">No comments yet.</p>
                )}
              </div>
            </div>
            {/* {postsReaction.length > 0 && (
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
            )} */}
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
