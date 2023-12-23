import BannerAds from "../../../components/BannerAds/BannerAds";
import useWindowSize from "../../../library/hooks/useWindowSize";
import "../UsersManagement/UsersManagement.scss";

const UsersManagement = () => {
  const users = [
    {
      id: 0,
      userInfo: {
        id: 0,
        name: "Marvin McKinney",
        avatar: "/images/User/user-01.jpg",
      },
      dateCreate: "20/11/2014",
      role: "Member",
      enable: true,
    },
    {
      id: 2,
      userInfo: {
        id: 1,
        name: "Ariana Grande",
        avatar: "/images/User/user-02.jpg",
      },
      dateCreate: "20/11/2014",
      role: "Member",
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
      role: "Member",
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
      role: "Member",
      enable: false,
    },
  ];
  const { width } = useWindowSize();
  return (
    <div className="users-management-page">
      <BannerAds subject={"User Management"} desc={"View all user accounts"} />
      <div className="main-content">
        <div className="top-box">
          <p className="title">User Management</p>
        </div>
        <div className="table-box">
          <table className="table-content">
            <thead>
              <tr className="row-title">
                <th className="title">#</th>
                <th className="title">Name</th>
                {width >= 800 && <th className="title">Date Created</th>}
                {width > 576 && <th className="title">Role</th>}
                <th className="title">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, idx) => (
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
                  {width > 576 && <th>{item.role}</th>}
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

export default UsersManagement;
