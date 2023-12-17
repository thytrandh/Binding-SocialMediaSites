import Advertisement from "../../../NewsfeedPage/Advertisement/Advertisement";
import ServiceAdvertisement from "../../../NewsfeedPage/ServiceAdvertisement/ServiceAdvertisement";
import "../Introduce/Introduce.scss";
const Introduce = () => {
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
              <p className="content">Public School</p>
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
            <p className="title">Introduce</p>
            <div className="desc">
              <div className="item">
                <p className="content">
                  The course is designed to highlight the learning objectives,
                  requirements and professional orientation in English Applied
                  Linguistics program at Ho Chi Minh City University of
                  Technology and Education . In this course, students are
                  provided with fundamental knowledge of Translation and
                  Interpretation as well as Business fields in a systematic,
                  scientific, complete and detailed way with practical
                  situations.
                </p>
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
