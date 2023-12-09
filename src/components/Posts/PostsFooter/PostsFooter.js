import { useState } from "react";
import "../PostsFooter/PostsFooter.scss";
import PostsComment from "./PostsComment/PostsComment";
import { EditCommentContext } from "../context/editCommentContext";

const PostsFooter = ({ postsComment, listEmoji }) => {
  const [postComment, setPostComment] = useState(null);
  const [openCommentBox, setOpenCommentBox] = useState(false);

  const [editComment, setEditComment] = useState(false);
  const [contentEditComment, setContentEditComment] = useState(null);

  const handlePostComment = () => {
    if (editComment) {
      //call API Edit comment
      setContentEditComment("");
      setEditComment(false);
    } else {
      //call API Add New (Post) comment
      setPostComment("");
    }
  };
  return (
    <EditCommentContext.Provider
      value={{
        editComment,
        setEditComment,
        contentEditComment,
        setContentEditComment,
      }}
    >
      <div className="posts-footer">
        <div className="posts-footer-option">
          <div className="left">
            <div className="drop-emotion">
              <img
                src="/images/Posts/Emoji/Heart.png"
                alt=""
                className="img-emotion"
              />
              <p>Love</p>
              <div className="emoji-tooltip">
                {listEmoji.map((emoji) => (
                  <div className="item-emoji">
                    <p className="desc-tooltip">{emoji.name}</p>
                    <img src={emoji.iconEmoji} alt="" className="img-emoji" />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="btn-comment"
              onClick={() => {
                setOpenCommentBox(!openCommentBox);
              }}
            >
              <img src="/images/Posts/comment.png" alt="" className="ic-cmt" />
              <p>Comment</p>
            </div>
          </div>
          <div className="right">
            <p className="comment-count">{postsComment.length} Comment</p>
          </div>
        </div>
        {openCommentBox && (
          <>
            <div
              className={
                openCommentBox ? "posts-comment open" : "posts-comment"
              }
            >
              <div className="post-comment-box">
                <img
                  src="/images/User/user-01.jpg"
                  alt=""
                  className="img-userAvt"
                />
                <input
                  type="text"
                  value={editComment ? contentEditComment : postComment}
                  className="comment-input"
                  placeholder="Write a Comment..."
                  onChange={(e) => {
                    editComment
                      ? setContentEditComment(e.target.value)
                      : setPostComment(e.target.value);
                  }}
                />

                <div
                  className="btn-post"
                  onClick={() => {
                    handlePostComment();
                  }}
                >
                  <img src="/images/Posts/Send.png" alt="" />
                </div>
              </div>
              {postsComment.length > 0 && (
                <PostsComment postsComment={postsComment} />
              )}
            </div>
          </>
        )}
      </div>
    </EditCommentContext.Provider>
  );
};
export default PostsFooter;
