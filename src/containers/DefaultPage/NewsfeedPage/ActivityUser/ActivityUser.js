import { useSelector } from "react-redux";
import "../ActivityUser/ActivityUser.scss";
import { useContext } from "react";
import { DataContext } from "../../../../context/dataContext";

const ActivityUser = () => {
  const { userData } = useContext(DataContext);
  // const userActive = [
  //   {
  //     id: 0,
  //     avatar: "/images/User/user-01.jpg",
  //     userName: "Marvin McKinney",
  //   },
  //   {
  //     id: 1,
  //     avatar: "/images/User/user-03.jpg",
  //     userName: "Freya Davies",
  //   },
  //   {
  //     id: 2,
  //     avatar: "/images/User/user-04.jpg",
  //     userName: "Aaron Jones",
  //   },
  // ];

  const userActive = useSelector(
    (state) => state?.persistedReducer?.friend?.activeFriend?.data
  );
  return (
    <>
      {userActive !== null && (
        <div className="activity-user">
          <p className="title">Active User</p>
          <ul className="users">
            <li className="item-users">
              <img
                src={
                  userData.image?.imgLink
                    ? userData.image?.imgLink
                    : "/images/DefaultPage/default-avatar.jpg"
                }
                alt=""
                className="img-avt"
              />
              <div className="user-info">
                <p className="username">{`${userData.firstName} ${userData.lastName}`}</p>
                <p className="active">Active</p>
              </div>
            </li>
            {userActive &&
              userActive.map((user) => (
                <li key={user.id} className="item-users">
                  <img
                    src={
                      user.image?.imgLink
                        ? user.image?.imgLink
                        : "/images/DefaultPage/default-avatar.jpg"
                    }
                    alt=""
                    className="img-avt"
                  />
                  <div className="user-info">
                    <p className="username">{`${user.firstName} ${user.lastName}`}</p>
                    <p className="active">Active</p>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default ActivityUser;
