import "../UserInfoCreatePosts/UserInfoCreatePosts.scss";
const UserInfoCreatePosts = ({ avatar, userName, feelingArr, postOnPage }) => {
  return (
    <div className="middle-top user-info">
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
          <p className="desc">
            {postOnPage ? "Posts on Your Page" : "Posts on Your Profile"}
          </p>
        </div>
      </div>
    </div>
  );
};
export default UserInfoCreatePosts;
