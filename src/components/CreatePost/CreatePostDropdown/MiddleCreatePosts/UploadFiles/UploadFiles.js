import { useContext, useState } from "react";
import { DataCreatePostContext } from "../../context/dataCreatePostContext";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "../UploadFiles/UploadFiles.scss";

const UploadFiles = () => {
  const { setSelectedImages } = useContext(DataCreatePostContext);
  const { setSelectedVideos } = useContext(DataCreatePostContext);
  const { addOption, setAddOption } = useContext(DataCreatePostContext);

  const [imageShow, setImageShow] = useState([]);
  const [videoShow, setVideoShow] = useState([]);

  const onSelectImage = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedImages(selectedFilesArray);

    const imagesArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setImageShow(imagesArray);
  };

  const onSelectVideo = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedVideos(selectedFilesArray);
    const videosArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setVideoShow(videosArray);
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
            {imageShow.length > 0 ? (
              <div className="show-selected-images">
                <ul className="selected-images">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {imageShow.map((image, idx) => (
                      <SwiperSlide>
                        <li key={idx} className="item-image">
                          <img src={image} alt="" className="img-selected" />
                          <img className="img-bg" src={image} alt="" />
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
            {videoShow.length > 0 ? (
              <div className="show-selected-videos">
                <ul className="selected-videos">
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                    className="mySwiper"
                  >
                    {videoShow.map((video, idx) => (
                      <SwiperSlide>
                        <li key={idx} className="item-video">
                          <video
                            src={video}
                            alt=""
                            className="video-selected-post"
                            autoPlay
                            // controls
                          />
                          <video className="video-bg" src={video} alt="" />
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
            ? setSelectedImages([])
            : addOption[1].isActive && setSelectedVideos([]);
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

export default UploadFiles;
