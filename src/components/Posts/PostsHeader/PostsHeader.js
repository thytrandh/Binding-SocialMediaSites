import { useState } from "react";
import Tick from "../../Tick/Tick";
import "../PostsHeader/PostsHeader.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { useContext } from "react";
import { PostsEditContext } from "../context/postsEditContext";

const PostsHeader = ({ accountOwner, avatar, username, status, time }) => {
  const [openOptionBox, setOpenOptionBox] = useState(false);
  const { setOpenEditPosts } = useContext(PostsEditContext);

  const handleEditPosts = () => {
    setOpenEditPosts(true);
  };
  return (
    <div className="posts-header">
      <div className="avatar">
        <img src={avatar} alt="" className="img-avt" />
      </div>
      <div className="info-posts-box">
        <div className="info-posts">
          <p className="desc">
            <span className="username">{username}</span>
            <Tick />
            <span className="status">{status}</span>
          </p>
          <p className="time">{time}</p>
        </div>
        <div className="posts-option">
          <div
            className="btn-menu"
            onClick={() => {
              setOpenOptionBox(!openOptionBox);
            }}
          >
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenOptionBox(false);
            }}
          >
            {openOptionBox && (
              <div className="box-option-dropdown">
                {accountOwner ? (
                  <div className="own">
                    <p>Delete</p>
                    <p
                      onClick={() => {
                        handleEditPosts();
                      }}
                    >
                      Edit
                    </p>
                  </div>
                ) : (
                  <div className="guest">
                    <p>Report</p>
                  </div>
                )}
              </div>
            )}
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};

export default PostsHeader;
