const UserInfoEditPosts = ({ avatar, userName, feelingArr }) => {
  return (
    <div className="middle-top user-info use-info-edit-posts">
      <img src={avatar} alt="" className="avatar" />
      <div className="subject">
        <p className="username">
          {userName}
          {feelingArr.map(
            (item) =>
              item.isChoose && (
                <span className="feeling">
                  is {item.icon} feeling {item.content}
                </span>
              )
          )}
        </p>

        <div className="lock">
          <i class="fa-duotone fa-earth-americas"></i>
          <p className="desc">Posts on Your Profile</p>
        </div>
      </div>
    </div>
  );
};

export default UserInfoEditPosts;
