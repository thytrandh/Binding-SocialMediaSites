import { useEffect, useState } from "react";
import "../GalleryProfile/GalleryProfile.scss";
import ShowFileBox from "../ShowFileBox/ShowFileBox.js";
import { OpenShowFileContext } from "../context/openShowFileContext.js";
import { useContext } from "react";
import { DataContext } from "../../../../../context/dataContext.js";
import { useSelector } from "react-redux";
const GalleryProfile = ({ accountOwner }) => {
  // const images = [
  //   {
  //     id: 0,
  //     source: "/images/Profile/Gallery/1.jpg",
  //   },
  //   {
  //     id: 1,
  //     source: "/images/Profile/Gallery/2.jpg",
  //   },
  //   {
  //     id: 2,
  //     source: "/images/Profile/Gallery/3.jpg",
  //   },
  //   {
  //     id: 3,
  //     source: "/images/Profile/Gallery/4.jpg",
  //   },
  //   {
  //     id: 4,
  //     source: "/images/Profile/Gallery/5.jpg",
  //   },
  //   {
  //     id: 5,
  //     source: "/images/Profile/Gallery/6.jpg",
  //   },
  //   {
  //     id: 6,
  //     source: "/images/Profile/Gallery/7.jpg",
  //   },
  //   {
  //     id: 7,
  //     source: "/images/Profile/Gallery/8.jpg",
  //   },
  //   {
  //     id: 8,
  //     source: "/images/Profile/Gallery/9.jpg",
  //   },
  //   {
  //     id: 9,
  //     source: "/images/Profile/Gallery/10.jpg",
  //   },
  //   {
  //     id: 10,
  //     source: "/images/Profile/Gallery/11.jpg",
  //   },
  // ];

  // const videos = [
  //   {
  //     id: 0,
  //     source: "/images/Profile/Gallery/videos/1.mp4",
  //   },
  //   {
  //     id: 1,
  //     source: "/images/Profile/Gallery/videos/2.mp4",
  //   },
  //   {
  //     id: 2,
  //     source: "/images/Profile/Gallery/videos/3.mp4",
  //   },
  //   {
  //     id: 3,
  //     source: "/images/Profile/Gallery/videos/4.mp4",
  //   },
  //   {
  //     id: 4,
  //     source: "/images/Profile/Gallery/videos/5.mp4",
  //   },
  // ];

  const { userData } = useContext(DataContext);
  const getCurrentMember = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentMember?.data
  );

  const [images, setImages] = useState(null);
  const [videos, setVideos] = useState(null);

  const [optionGallery, setOptionGallery] = useState([
    {
      id: 0,
      name: "Photos",
      isActive: true,
    },
    {
      id: 1,
      name: "Videos",
      isActive: false,
    },
  ]);

  const [fileShow, setFileShow] = useState({
    type: null,
    source: null,
  });
  const { openFileBox, setOpenFileBox } = useContext(OpenShowFileContext);

  const handleClickImage = (src) => {
    let updatedValue = {};
    updatedValue = { type: "image", source: src };
    setFileShow(updatedValue);
  };

  const handleClickVideo = (src) => {
    let updatedValue = {};
    updatedValue = { type: "video", source: src };
    setFileShow(updatedValue);
  };

  useEffect(() => {
    const handleInformation = () => {
      if (accountOwner) {
        setImages(userData?.images);
        setVideos(userData?.videos);
      } else {
        setImages(getCurrentMember?.images);
        setVideos(getCurrentMember?.videos);
      }
    };
    handleInformation();
  }, [accountOwner, getCurrentMember, userData]);

  return (
    <div className="gallery-profile">
      <div className="top-box">
        <p className="title">Gallery</p>
        <div className="option-gallery">
          {optionGallery.map((item) => (
            <p
              key={item.id}
              className={item.isActive ? "item active" : "item"}
              onClick={() => {
                setOptionGallery((prev) => {
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
      <div className="gallery-show">
        {optionGallery[0].isActive && (
          <div className="photos-box">
            <div className="photos-show">
              {images !== null ? (
                <>
                  {images.map((img) => (
                    <div
                      key={img.id}
                      className="item-image"
                      onClick={() => {
                        handleClickImage(img?.imgLink);
                        setOpenFileBox(true);
                      }}
                    >
                      <img src={img?.imgLink} alt="" />
                    </div>
                  ))}
                </>
              ) : (
                <p className="mess">No activity to show</p>
              )}
            </div>
          </div>
        )}
        {optionGallery[1].isActive && (
          <div className="videos-box">
            <div className="videos-show">
              {videos !== null ? (
                <>
                  {videos.map((vid) => (
                    <div
                      key={vid.id}
                      className="item-video"
                      onClick={() => {
                        handleClickVideo(vid.videoLink);
                        setOpenFileBox(true);
                      }}
                    >
                      <video src={vid.videoLink} alt="" />
                      <button className="btn-play">
                        <i class="fa-solid fa-play"></i>
                      </button>
                    </div>
                  ))}
                </>
              ) : (
                <p className="mess">No activity to show</p>
              )}
            </div>
          </div>
        )}
      </div>

      {openFileBox && <ShowFileBox file={fileShow} />}
    </div>
  );
};
export default GalleryProfile;
