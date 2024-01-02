import { useEffect, useState } from "react";
import Advertisement from "../../../NewsfeedPage/Advertisement/Advertisement";
import ServiceAdvertisement from "../../../NewsfeedPage/ServiceAdvertisement/ServiceAdvertisement";
import "../Introduce/Introduce.scss";
import { useSelector } from "react-redux";
const Introduce = ({ pageOwner }) => {
  const getCurrentPage = useSelector(
    (state) => state?.persistedReducer?.pages?.currentPages?.data
  );
  const memberPagesData = useSelector(
    (state) => state.persistedReducer?.pages?.getPage?.data
  );
  const [pagesData, setPagesData] = useState(getCurrentPage);

  const [category, setCategory] = useState(null);
  const [contact, setContact] = useState(null);
  const [intro, setIntro] = useState(null);

  useEffect(() => {
    if (getCurrentPage) {
      setPagesData(getCurrentPage);
    }
  }, [getCurrentPage]);

  useEffect(() => {
    const handleInformation = () => {
      if (pageOwner) {
        setCategory(pagesData?.category);
        setContact(pagesData?.contact);
        setIntro(pagesData?.introduce);
        return;
      } else {
        setCategory(memberPagesData?.category);
        setContact(memberPagesData?.contact);
        setIntro(memberPagesData?.introduce);
        return;
      }
    };
    handleInformation();
  }, [pageOwner, memberPagesData, pagesData]);
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
