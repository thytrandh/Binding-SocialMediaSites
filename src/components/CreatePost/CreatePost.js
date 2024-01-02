import { useState } from "react";
import "../CreatePost/CreatePost.scss";
import CreatePostDropdown from "./CreatePostDropdown/CreatePostDropdown";
import { DropdownContext } from "./dropdownContext";
const CreatePost = ({ userInfo, postOnPage }) => {
  const optionPost = [
    {
      id: 0,
      name: "Camera",
      image: "/images/Icon/IconPost/Camera.svg",
      isActive: false,
    },
    {
      id: 1,
      name: "Photos",
      image: "/images/Icon/IconPost/Image.svg",
      isActive: false,
    },
    {
      id: 2,
      name: "Videos",
      image: "/images/Icon/IconPost/Video.svg",
      isActive: false,
    },
  ];

  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <DropdownContext.Provider value={{ openDropdown, setOpenDropdown }}>
      <div className="create-post">
        <div
          className="create-post-show"
          onClick={() => {
            setOpenDropdown(true);
          }}
        >
          <div className="create-post-header">
            <div className="user">
              <img
                src={
                  userInfo?.avatar
                    ? userInfo?.avatar
                    : "/images/DefaultPage/default-avatar.jpg"
                }
                alt=""
                className="avatar"
              />
            </div>
            <ul className="option">
              {optionPost.map((item) => (
                <li key={item.id} className="item-option">
                  <img src={item.image} alt="" className="img-icon" />
                  <p className="subject">{item.name}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="create-post-input">
            <textarea
              placeholder="What's on your mind, Marvin?"
              id=""
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="create-post-bottom">
            <div className="btn-post">
              <p>Post</p>
              <img
                src="/images/Icon/IconPost/Send.svg"
                alt=""
                className="ic-send"
              />
            </div>
          </div>
        </div>

        {openDropdown && (
          <CreatePostDropdown userInfo={userInfo} postOnPage={postOnPage} />
        )}
      </div>
    </DropdownContext.Provider>
  );
};

export default CreatePost;
