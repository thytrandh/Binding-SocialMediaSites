import "../ActivityUser/ActivityUser.scss";

const ActivityUser = () => {
  const userActive = [
    {
      id: 0,
      avatar: "/images/User/user-01.jpg",
      userName: "Marvin McKinney",
    },
    {
      id: 1,
      avatar: "/images/User/user-03.jpg",
      userName: "Freya Davies",
    },
    {
      id: 2,
      avatar: "/images/User/user-04.jpg",
      userName: "Aaron Jones",
    },
  ];
  return (
    <>
      {userActive && (
        <div className="activity-user">
          <p className="title">Active User</p>
          <ul className="users">
            {userActive &&
              userActive.map((user) => (
                <li key={user.id} className="item-users">
                  <img src={user.avatar} alt="" className="img-avt" />
                  <div className="user-info">
                    <p className="username">{user.userName}</p>
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
