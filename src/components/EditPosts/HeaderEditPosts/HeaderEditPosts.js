import { useContext } from "react";
import "../HeaderEditPosts/HeaderEditPosts.scss";
import { PostsEditContext } from "../../Posts/context/postsEditContext";
import "../../CreatePost/CreatePostDropdown/HeaderCreatePosts/HeaderCreatePosts.scss";

const HeaderEditPosts = () => {
  const { setOpenEditPosts } = useContext(PostsEditContext);
  return (
    <div className="header-edit-posts">
      <p className="title">Edit Posts</p>
      <div
        className="btn-close"
        onClick={() => {
          setOpenEditPosts(false);
        }}
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default HeaderEditPosts;
