import "../ProfileHeader/ProfileHeader.scss";

const ProfileHeader = ({ accountOwner }) => {
  const friends = [
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
  const friendStatus = [
    {
      idStatus: 1,
      status: "friend",
      nextAction: [{ action: "Unfriend", color: "red" }],
      isActive: false,
    },
    {
      idStatus: 2,
      status: "stranger",
      nextAction: [{ action: "Add friend", color: "green" }],
      isActive: false,
    },
    {
      idStatus: 3,
      status: "send request",
      nextAction: [{ action: "Cancel request", color: "red" }],
      isActive: false,
    },
    {
      idStatus: 4,
      status: "friend request",
      nextAction: [
        { action: "Confirm", color: "green" },
        { action: "Delete", color: "red" },
      ],
      isActive: true,
    },
  ];
  return (
    <div className="profile-header">
      <div className="banner-cover">
        <img
          src="/images/Profile/bg-cover-01.jpeg"
          alt=""
          className="img-banner"
        />
        <div className="blur"></div>
      </div>
      <div className="header-content">
        <div className="user-info">
          <div className="avatar">
            <img src="/images/User/user-01.jpg" alt="" className="img-avt" />
            {accountOwner && (
              <div className="btn-change-avt">
                <img
                  src="/images/Profile/icon/Camera.png"
                  alt=""
                  className="ic-camera"
                />
              </div>
            )}
          </div>
          <div className="info">
            <p className="username">Marvin McKinney</p>
            <p className="email">@mavinMc@gmail.com</p>
            {!accountOwner && (
              <div className="status-friend-box">
                {friendStatus.map((status) => (
                  <>
                    {status.isActive && (
                      <>
                        {status.nextAction.map((action) => (
                          <button className={`btn-${action.color}`}>
                            {action.action}
                          </button>
                        ))}
                      </>
                    )}
                  </>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="option-settings">
          {accountOwner ? (
            <div className="edit-cover-photo">
              <img
                src="/images/Profile/icon/Camera.png"
                alt=""
                className="ic-camera"
              />
              <p className="subject">Edit background cover</p>
            </div>
          ) : (
            <>
              {friends && (
                <div className="list-friends">
                  {friends &&
                    friends.map((friend) => (
                      <img
                        src={friend.avatar}
                        alt=""
                        className="img-avt-friend"
                      />
                    ))}
                  <p className="subject">{friends.length} followers</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
