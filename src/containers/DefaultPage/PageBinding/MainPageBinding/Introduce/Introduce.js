import { useContext, useEffect, useState } from "react";
import Advertisement from "../../../NewsfeedPage/Advertisement/Advertisement";
import ServiceAdvertisement from "../../../NewsfeedPage/ServiceAdvertisement/ServiceAdvertisement";
import "../Introduce/Introduce.scss";
import { DataContext } from "../../../../../context/dataContext";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
const Introduce = ({ pageOwner }) => {
  const { userData } = useContext(DataContext);
  const [pagesData, setPagesData] = useState(userData?.page);
  const params = useParams();
  const dispatch = useDispatch();
  const [category, setCategory] = useState(null);
  const [contact, setContact] = useState(null);
  const [intro, setIntro] = useState(null);

  const handleInformation = () => {
    if (pageOwner) {
      setCategory(pagesData?.category);
      setContact(pagesData?.contact);
      setIntro(pagesData?.introduce);
      return;
    } else {
      // const memberId = params.memberId;
      // const userId = memberId;
      // dispatch(getUserById({ userId }));
      // if (memberData) {
      //   setGalleryShow(memberData?.images);
      //   setPosts(memberData?.posts);
      // }
      return;
    }
  };

  useEffect(() => {
    handleInformation();
  }, []);
  return (
    <div className="introduce-page-binding">
      <div className="left">
        <div className="top-box">
          <p className="title">Introduce</p>
        </div>
        <div className="about-box">
          <div className="item-about">
            <p className="title">Categories</p>
            <div className="item">
              <p className="content">{category ? category : "Not update"}</p>
            </div>
          </div>
          <div className="item-about">
            <p className="title">Contact Info</p>
            <div className="desc">
              {/* <div className="item">
                <p className="subject">Phone number:</p>
                <p className="content">0769842084</p>
              </div> */}
              <div className="item">
                <p className="subject">Address:</p>
                <p className="content">{contact ? contact : "Not update"}</p>
              </div>
            </div>
          </div>
          <div className="item-about">
            <p className="title">Introduce</p>
            <div className="desc">
              <div className="item">
                <p className="content">{intro ? intro : "Not update"}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <ServiceAdvertisement />
        <Advertisement />
      </div>
    </div>
  );
};
export default Introduce;
