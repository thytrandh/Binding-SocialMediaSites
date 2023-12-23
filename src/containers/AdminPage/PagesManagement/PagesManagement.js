import BannerAds from "../../../components/BannerAds/BannerAds";
import useWindowSize from "../../../library/hooks/useWindowSize";
import "../PagesManagement/PagesManagement.scss";
const PagesManagement = () => {
  const pages = [
    {
      id: 0,
      userInfo: {
        id: 0,
        name: "Thress Film",
        avatar: "/images/User/user-01.jpg",
      },
      dateCreate: "20/11/2014",
      category: "Public School",
      enable: true,
    },
    {
      id: 2,
      userInfo: {
        id: 1,
        name: "UTE TV",
        avatar: "/images/User/user-02.jpg",
      },
      dateCreate: "20/11/2014",
      category: "Public School",
      enable: true,
    },
    {
      id: 3,
      userInfo: {
        id: 0,
        name: "Marvin McKinney",
        avatar: "/images/User/user-03.jpg",
      },
      dateCreate: "20/11/2024",
      category: "Public School",
      enable: false,
    },
    {
      id: 4,
      userInfo: {
        id: 0,
        name: "Marvin McKinney",
        avatar: "/images/User/user-04.jpg",
      },
      dateCreate: "20/11/2024",
      category: "Public School",
      enable: false,
    },
  ];
  const { width } = useWindowSize();
  return (
    <div className="pages-management-page">
      <BannerAds subject={"Pages Management"} desc={"View all pages"} />
      <div className="main-content">
        <div className="top-box">
          <p className="title">Pages Management</p>
        </div>
        <div className="table-box">
          <table className="table-content">
            <thead>
              <tr className="row-title">
                <th className="title">#</th>
                <th className="title">Name</th>
                {width >= 800 && <th className="title">Date Created</th>}
                {width > 576 && <th className="title">Category</th>}
                <th className="title">Actions</th>
              </tr>
            </thead>
            <tbody>
              {pages.map((item, idx) => (
                <tr key={item.id} className="item-content">
                  <th>{idx + 1}</th>
                  <th className="box-divide">
                    <div className="box-flex">
                      <img
                        src={item.userInfo?.avatar}
                        alt=""
                        className="img-avt"
                      />
                      <p className="userName">{item.userInfo?.name}</p>
                    </div>
                  </th>
                  {width >= 800 && <th>{item.dateCreate}</th>}
                  {width > 576 && <th>{item.category}</th>}
                  <th className="option">
                    <div className="option-box">
                      <div className="btn-hidden btn-option">
                        <i class="fa-duotone fa-eye"></i>
                      </div>
                      <div className="btn-delete btn-option">
                        <i class="fa-duotone fa-trash"></i>
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PagesManagement;
