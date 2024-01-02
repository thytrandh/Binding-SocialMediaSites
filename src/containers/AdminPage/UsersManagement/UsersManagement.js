import { useDispatch, useSelector } from "react-redux";
import BannerAds from "../../../components/BannerAds/BannerAds";
import useWindowSize from "../../../library/hooks/useWindowSize";
import "../UsersManagement/UsersManagement.scss";
import {
  disabledUser,
  enabledUser,
} from "../../../redux/slice/Report/reportSlice";

const UsersManagement = () => {
  const { width } = useWindowSize();
  const users = useSelector(
    (state) => state?.persistedReducer?.userInfo?.allUser?.data
  );

  const dispatch = useDispatch();
  const handleClickHidden = (userId, isEnable) => {
    if (isEnable) {
      dispatch(disabledUser({ userId }));
    } else {
      dispatch(enabledUser({ userId }));
    }
  };
  // const handleClickDelete = (userId) => {

  // };

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
                {width >= 800 && <th className="title">Address</th>}
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
                        src={
                          item.image?.imgLink
                            ? item.image?.imgLink
                            : "/images/DefaultPage/default-avatar.jpg"
                        }
                        alt=""
                        className="img-avt"
                      />
                      <p className="userName">{`${item.firstName} ${item.lastName}`}</p>
                    </div>
                  </th>
                  {width >= 800 && (
                    <th>{item.email ? item.email : item.phone}</th>
                  )}
                  {width > 576 && <th>{item.role}</th>}
                  <th className="option">
                    <div className="option-box">
                      <div
                        className="btn-hidden btn-option"
                        onClick={() => {
                          handleClickHidden(item.id, item.enabled);
                        }}
                      >
                        {item.enabled ? (
                          <i class="fa-duotone fa-eye-slash"></i>
                        ) : (
                          <i class="fa-duotone fa-eye"></i>
                        )}
                      </div>
                      {/* <div
                        className="btn-delete btn-option"
                        onClick={() => {
                          handleClickDelete(item.id);
                        }}
                      >
                        <i class="fa-duotone fa-trash"></i>
                      </div> */}
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
