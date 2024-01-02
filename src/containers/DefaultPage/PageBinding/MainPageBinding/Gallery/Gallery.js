import { useContext, useEffect, useState } from "react";
import "../Gallery/Gallery.scss";
import { PageOpenFileBoxContext } from "../../context/pageOpenFileBoxContext";
import ShowFileBindingBox from "../ShowFileBindingBox/ShowFileBindingBox";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPageById } from "../../../../../redux/slice/Pages/pagesSlice";

const Gallery = (pageOwner) => {
  // const images = [
  //   {
  //     id: 0,
  //     source:
  //       "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/403725548_681713644104893_8066501004765465097_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wXev7FdSA2IAX-LyxpK&_nc_ht=scontent.fvca1-2.fna&oh=00_AfAN9vKq4y1IBNMs3XzmRsChLqC-or7cj0kPM-rVH0Jdjg&oe=65820EED",
  //   },
  //   {
  //     id: 1,
  //     source:
  //       "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368264947_633338548942403_7477692598024200880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=tN27LMm3L8oAX-NFCKg&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCCdIM47qnOEo3K5xpsHiYXXjGUDzU8R0FijC12ItZsjg&oe=65824F06",
  //   },
  //   {
  //     id: 2,
  //     source:
  //       "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368779625_633338538942404_1730240197883271005_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uIM6ZhB3y4EAX_vlJwV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDvcmw6dOWv6BADfdIZs3bIs6lZQoVaCAo_Wiq-r8OPGA&oe=65836603",
  //   },
  //   {
  //     id: 3,
  //     source:
  //       "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/369045159_633338565609068_8963413622339356511_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=z-0X0Y6Ti-4AX9rbMjQ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDjOQuxRRJ1Lijmft8M7PwzD_mnau5V1mznen6v9ax0dQ&oe=65837BF0",
  //   },
  //   {
  //     id: 4,
  //     source:
  //       "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/407270679_686693956940195_7195009788901474971_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=1pz0k_FtagQAX-YlScV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCZ3ZDLEWW0HTWprnIrR8YkucuIJjtTdBeq_TlLr4pTUg&oe=65827D2F",
  //   },
  //   {
  //     id: 5,
  //     source:
  //       "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/406358738_684707837138807_1319695252887792540_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=eZITG1xSu0AAX8aRSGy&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBNNzIpRBid4luidT4YVcsct934VVGF4Zg-v1HyC_IoYg&oe=6582B667",
  //   },
  //   {
  //     id: 6,
  //     source:
  //       "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/405046380_684659200477004_1667525826295611894_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XUwRz1Ev34QAX_qRQSp&_nc_ht=scontent.fvca1-2.fna&oh=00_AfD2Auo2sugxr3oLXSVztAclGfIF6YyvQpIWff3LXdRmTg&oe=6581D200",
  //   },
  //   {
  //     id: 7,
  //     source:
  //       "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/405911164_684586117150979_3298045674183475549_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=4sL_q-UUh6IAX__E45y&_nc_ht=scontent.fvca1-4.fna&oh=00_AfBTbz2ruWNa8oWxOcz1gHsaozl3obDG92tlHgXRZ5makA&oe=65835485",
  //   },
  //   {
  //     id: 8,
  //     source:
  //       "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/400317902_675498058059785_8340930423287595148_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6rIlFV0G7HQAX9zoAgf&_nc_ht=scontent.fvca1-4.fna&oh=00_AfD64fyyByRtjBpN824BxoI54seAgd1Zb1VwrK7t0yr4tA&oe=65833170",
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

  const pagesData = useSelector(
    (state) => state?.persistedReducer?.pages?.currentPages?.data
  );
  const memberPagesData = useSelector(
    (state) => state.persistedReducer?.pages?.getPage?.data
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

  const { openShowFileBox, setOpenShowFileBox } = useContext(
    PageOpenFileBoxContext
  );

  useEffect(() => {
    const handleInfomation = () => {
      // console.log("hihh");
      if (pageOwner) {
        // console.log("hihh");
        setImages(pagesData?.images);
        setVideos(pagesData?.videos);
      } else {
        setImages(memberPagesData?.images);
        setVideos(memberPagesData?.videos);
      }
    };
    handleInfomation();
  }, [memberPagesData, pageOwner, pagesData]);

  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    const pageId = params.pageId;
    dispatch(getPageById({ pageId }));
  }, [dispatch, params]);

  useEffect(() => {
    if (memberPagesData) {
      setImages(memberPagesData?.images);
      setVideos(memberPagesData?.videos);
    }
  }, [memberPagesData]);

  return (
    <div className="gallery-page-binding">
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
                        setOpenShowFileBox(true);
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
                        setOpenShowFileBox(true);
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
      {openShowFileBox && <ShowFileBindingBox file={fileShow} />}
    </div>
  );
};
export default Gallery;
