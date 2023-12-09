import { useContext, useState } from "react";
import Tick from "../../../Tick/Tick";
import OutsideClickHandler from "react-outside-click-handler";
import { EditCommentContext } from "../../context/editCommentContext";

const ItemComment = ({ avatar, userName, time, contentCmt, accountOwner }) => {
  const [openEditCmt, setOpenEditCmt] = useState(false);
  const { setEditComment, setContentEditComment } = useContext(
    EditCommentContext
  );
  const handleClickEditComment = (comment) => {
    setEditComment(true);
    setContentEditComment(comment);
  };
  return (
    <li className="item-comment">
      <div className="user-avatar">
        <img src={avatar} alt="" className="img-avt" />
      </div>
      <div className="comment-detail">
        <div className="subject">
          <p className="username">
            {userName}
            <Tick />
          </p>
          <p className="time">replied {time} ago</p>
        </div>
        <div className="content-comment-box">
          <p className="content-comment">{contentCmt}</p>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenEditCmt(false);
            }}
          >
            {accountOwner && (
              <div
                className="btn-option"
                onClick={() => {
                  setOpenEditCmt(!openEditCmt);
                }}
              >
                <i class="fa-light fa-ellipsis"></i>
                {openEditCmt && (
                  <div className="option-box">
                    <p
                      className="item-option"
                      onClick={() => {
                        handleClickEditComment(contentCmt);
                      }}
                    >
                      Edit
                    </p>
                    <p className="item-option">Delete</p>
                  </div>
                )}
              </div>
            )}
          </OutsideClickHandler>
        </div>
      </div>
    </li>
  );
};
export default ItemComment;
