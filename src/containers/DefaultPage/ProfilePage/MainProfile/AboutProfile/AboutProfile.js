import Advertisement from "../../../NewsfeedPage/Advertisement/Advertisement";
import ServiceAdvertisement from "../../../NewsfeedPage/ServiceAdvertisement/ServiceAdvertisement";
import "../AboutProfile/AboutProfile.scss";

const AboutProfile = () => {
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
              <p className="content">
                Huu Duc, Phuoc Huu, Ninh Phuoc, Ninh Thuan
              </p>
            </div>
          </div>
          <div className="item-about">
            <p className="title">Contact Info</p>
            <div className="desc">
              <div className="item">
                <p className="subject">Phone number:</p>
                <p className="content">0769842084</p>
              </div>
              <div className="item">
                <p className="subject">Email Address:</p>
                <p className="content">jennyWilson@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="item-about">
            <p className="title">Basic Info</p>
            <div className="desc">
              <div className="item">
                <p className="subject">Name:</p>
                <p className="content">Marvin McKinney</p>
              </div>
              <div className="item">
                <p className="subject">Gender:</p>
                <p className="content">Female</p>
              </div>
              <div className="item">
                <p className="subject">Birthday:</p>
                <p className="content">29/09/2002</p>
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
