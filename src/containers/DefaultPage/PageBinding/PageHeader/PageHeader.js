import { useState } from "react";
import "../PageHeader/PageHeader.scss";
const PageHeader = ({ pageOwner }) => {
  const members = [
    {
      id: 0,
      userName: "Jenny Wilson",
      avatar: "/images/User/user-02.jpg",
      email: "jennyWilson@gmail.com",
    },
    {
      id: 1,
      userName: "Freya Davies",
      avatar: "/images/User/user-03.jpg",
      email: "freyaDavies@gmail.com",
    },
    {
      id: 3,
      userName: "Aaron Jones",
      avatar: "/images/User/user-04.jpg",
      email: "jennyWilson@gmail.com",
    },
    {
      id: 4,
      userName: "Ariana Grande",
      avatar: "/images/User/user-05.jpg",
      email: "freyaDavies@gmail.com",
    },
    {
      id: 5,
      userName: "Ariana McCoy",
      avatar: "/images/User/user-06.jpg",
      email: "freyaDavies@gmail.com",
    },
  ];
  const [isLikePage, setIsLikePage] = useState(false);

  const pageInfo = {
    idPage: 0,
    namePage:
      "UTE TV - Kênh truyền hình trường Đại học Sư phạm Kỹ thuật TPHCM ",
    categoryPage: "Education",
    avatar:
      "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/317094198_2181493305354980_6460664330045934311_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=EglUTZpdA6cAX_G3NVI&_nc_oc=AQl5cptiCfPV9yZe_v1AUKJyvy3H0pO4wd6X0QJdkAltddhs7Lo2qXgePggTZy_7s0toqgu3SncEE3cXFR0WSKBL&_nc_ht=scontent.fvca1-2.fna&oh=00_AfA9BuAt1SGudC5RuKDtu0ammj1oSulUt-WdhLe6taWr5w&oe=65830F58",
    bgCover:
      "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/270541902_1928618510642462_2661247953309366017_n.jpg?stp=dst-jpg_p720x720&_nc_cat=110&ccb=1-7&_nc_sid=783fdb&_nc_ohc=uWfvhF2B25MAX-lj4mQ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfAxiC0buZvA3xcPxbXmLrb0eTYt2M3G4YoVbJh24O3jmw&oe=6582FEEB",
  };

  return (
    <div className="page-binding-header">
      <div className="banner-cover">
        <img src={pageInfo?.bgCover} alt="" className="img-banner" />
        <div className="blur"></div>
      </div>
      <div className="header-content">
        <div className="page-info">
          <div className="avatar">
            <img src={pageInfo.avatar} alt="" className="img-avt" />
          </div>
          <div className="info">
            <p className="namepage">{pageInfo?.namePage}</p>
            <p className="category">{[pageInfo?.categoryPage]}</p>
          </div>
        </div>
        <div className="option-settings">
          {pageOwner ? (
            <div className="edit-cover-photo">
              <img
                src="/images/Pages/Edit Square.png"
                alt=""
                className="ic-camera"
              />
              <p className="subject">Edit your Page's</p>
            </div>
          ) : (
            <>
              {members && (
                <div className="list-members">
                  {members &&
                    members.map((member) => (
                      <img
                        src={member.avatar}
                        alt=""
                        className="img-avt-member"
                      />
                    ))}
                  {/* <p className="subject">{friends.length} followers</p> */}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default PageHeader;
