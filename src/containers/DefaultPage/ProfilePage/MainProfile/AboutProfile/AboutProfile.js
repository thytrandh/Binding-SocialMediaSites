import { useContext, useEffect, useState } from "react";
import Advertisement from "../../../NewsfeedPage/Advertisement/Advertisement";
import ServiceAdvertisement from "../../../NewsfeedPage/ServiceAdvertisement/ServiceAdvertisement";
import "../AboutProfile/AboutProfile.scss";
import { DataContext } from "../../../../../context/dataContext";
import { useSelector } from "react-redux";

const AboutProfile = ({ accountOwner }) => {
  const { userData } = useContext(DataContext);
  const getCurrentMember = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentMember?.data
  );

  const [address, setAddress] = useState("Not update");
  const [phone, setPhone] = useState("Not update");
  const [email, setEmail] = useState("Not update");
  const [name, setName] = useState("Not update");
  const [gender, setGender] = useState("Not update");
  const [birthday, setBirthday] = useState("Not update");

  useEffect(() => {
    const handleInformation = () => {
      if (accountOwner) {
        setAddress(userData?.address);
        setPhone(userData?.phone);
        setEmail(userData?.email);
        setName(`${userData?.firstName} ${userData?.lastName}`);
        setGender(userData?.gender);
        if (userData?.birthday !== null) {
          setBirthday(userData?.birthday.slice(0, 10));
        }
      } else {
        setAddress(getCurrentMember?.address);
        setPhone(getCurrentMember?.phone);
        setEmail(getCurrentMember?.email);
        setName(`${getCurrentMember?.firstName} ${getCurrentMember?.lastName}`);
        setGender(getCurrentMember?.gender);
        if (getCurrentMember?.birthday !== null) {
          setBirthday(getCurrentMember?.birthday.slice(0, 10));
        }
      }
    };
    handleInformation();
  }, [accountOwner, userData, getCurrentMember]);

  return (
    <div className="about-profile">
      <div className="left">
        <div className="top-box">
          <p className="title">About</p>
        </div>
        <div className="about-box">
          <div className="item-about">
            <p className="title">Placed live</p>
            <div className="item">
              <p className="subject">Address:</p>
              <p className="content">{address ? address : "Not update"}</p>
            </div>
          </div>
          <div className="item-about">
            <p className="title">Contact Info</p>
            <div className="desc">
              <div className="item">
                <p className="subject">Phone number:</p>
                <p className="content">{phone ? phone : "Not update"}</p>
              </div>
              <div className="item">
                <p className="subject">Email Address:</p>
                <p className="content">{email ? email : "Not update"}</p>
              </div>
            </div>
          </div>
          <div className="item-about">
            <p className="title">Basic Info</p>
            <div className="desc">
              <div className="item">
                <p className="subject">Name:</p>
                <p className="content">{name ? name : "Not update"}</p>
              </div>
              <div className="item">
                <p className="subject">Gender:</p>
                <p className="content">{gender ? gender : "Not update"}</p>
              </div>
              <div className="item">
                <p className="subject">Birthday:</p>
                <p className="content">{birthday ? birthday : "Not update"}</p>
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

export default AboutProfile;
