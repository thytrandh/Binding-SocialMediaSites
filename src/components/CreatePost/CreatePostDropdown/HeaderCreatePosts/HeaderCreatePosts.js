import { useContext } from "react";
import { DropdownContext } from "../../dropdownContext";
import "../HeaderCreatePosts/HeaderCreatePosts.scss";

const HeaderCreatePosts = () => {
  const { setOpenDropdown } = useContext(DropdownContext);
  return (
    <div className="header-create-posts">
      <p className="title">Create Post</p>
      <div
        className="btn-close"
        onClick={() => {
          setOpenDropdown(false);
        }}
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};

export default HeaderCreatePosts;
