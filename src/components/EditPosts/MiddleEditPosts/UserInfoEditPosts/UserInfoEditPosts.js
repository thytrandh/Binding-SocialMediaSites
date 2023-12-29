import "../../../CreatePost/CreatePostDropdown/MiddleCreatePosts/UserInfoCreatePosts/UserInfoCreatePosts.scss";

const UserInfoEditPosts = ({ avatar, userName, feelingArr, postOnPage }) => {
  return (
    <div className="middle-top user-info use-info-edit-posts">
      <img
        src={
          avatar !== null ? avatar : "/images/DefaultPage/default-avatar.jpg"
        }
        alt=""
        className="avatar"
      />
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

export default UserInfoEditPosts;
