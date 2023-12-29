import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { DataEditPostsContext } from "../../context/dataEditPostsContext";
import "../../../CreatePost/CreatePostDropdown/MiddleCreatePosts/UploadFiles/UploadFiles.scss";

const EditFiles = () => {
  const { selectedImages, setSelectedImages } = useContext(
    DataEditPostsContext
  );
  const { selectedVideos, setSelectedVideos } = useContext(
    DataEditPostsContext
  );
  const { setImage, setVideo } = useContext(DataEditPostsContext);

  const { addOption, setAddOption } = useContext(DataEditPostsContext);

  const onSelectImage = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setImage(selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages(imagesArray);
  };

  const onSelectVideo = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setVideo(selectedFilesArray);
    const videosArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedVideos(videosArray);
  };

  

  return (
    <div className="upload-file">
      <div
        className="upload-box"
        onClick={() => document.querySelector(".input-filed").click()}
      >
        <input
          type="file"
          className="input-filed"
          multiple
          hidden
          accept={addOption[0].isActive ? "image/*" : "video/*"}
          onChange={
            addOption[0].isActive
              ? onSelectImage
              : addOption[1].isActive && onSelectVideo
          }
        />
        {addOption[0].isActive && (
          <>
            {selectedImages !== null ? (
              <div className="show-selected-images">
                <ul className="selected-images">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {selectedImages.map((image, idx) => (
                      <SwiperSlide>
                        <li key={idx} className="item-image">
                          <img
                            src={image?.imgLink ? image?.imgLink : image}
                            alt=""
                            className="img-selected"
                          />
                          <img
                            className="img-bg"
                            src={image?.imgLink ? image?.imgLink : image}
                            alt=""
                          />
                        </li>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </ul>
              </div>
            ) : (
              <div className="add-files-box">
                <div className="img-post">
                  <img src="/images/Icon/IconPost/Paper Upload.png" alt="" />
                </div>
                <p className="desc">Add photos to your post</p>
              </div>
            )}
          </>
        )}
        {addOption[1].isActive && (
          <>
            {selectedVideos !== null ? (
              <div className="show-selected-videos">
                <ul className="selected-videos">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {selectedVideos.map((video, idx) => (
                      <SwiperSlide>
                        <li key={idx} className="item-video">
                          <video
                            src={video?.videoLink ? video?.videoLink : video}
                            alt=""
                            className="video-selected"
                            controls
                            autoPlay
                          />
                          {/* <video
                            className="video-bg"
                            src={video?.videoLink ? video?.videoLink : video}
                            alt=""
                          /> */}
                        </li>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </ul>
              </div>
            ) : (
              <div className="add-files-box">
                <div className="img-post">
                  <img src="/images/Icon/IconPost/Paper Upload.png" alt="" />
                </div>
                <p className="desc">Add videos to your post</p>
              </div>
            )}
          </>
        )}
      </div>
      <div
        className="btn-close"
        onClick={() => {
          addOption[0].isActive
            ? setSelectedImages(null)
            : addOption[1].isActive && setSelectedVideos(null);
          setAddOption((prev) => {
            return prev.map((item) => {
              return {
                ...item,
                isActive: false,
              };
            });
          });
        }}
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};
export default EditFiles;
