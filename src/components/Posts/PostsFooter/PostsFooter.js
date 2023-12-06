import { useState } from "react";
import Tick from "../../Tick/Tick";
import "../PostsFooter/PostsFooter.scss";

const PostsFooter = ({ postsComment, listEmoji }) => {
  const [postComment, setPostComment] = useState("");
  const [openCommentBox, setOpenCommentBox] = useState(false);
  const handlePostComment = () => {
    console.log(postComment);
    setPostComment("");
  };
  return (
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
            className={openCommentBox ? "posts-comment open" : "posts-comment"}
          >
            <div className="post-comment-box">
              <img
                src="/images/User/user-01.jpg"
                alt=""
                className="img-userAvt"
              />
              <input
                type="text"
                value={postComment}
                className="comment-input"
                placeholder="Write a Comment..."
                onChange={(e) => setPostComment(e.target.value)}
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
              <ul className="list-comment">
                {postsComment.map((comment) => (
                  <li key={comment.idComment} className="item-comment">
                    <div className="user-avatar">
                      <img
                        src={comment.user.avatar}
                        alt=""
                        className="img-avt"
                      />
                    </div>
                    <div className="comment-detail">
                      <div className="subject">
                        <p className="username">
                          {comment.user.username}
                          <Tick />
                        </p>
                        <p className="time">replied {comment.time} ago</p>
                      </div>
                      <p className="content-comment">{comment.content}</p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
};
export default PostsFooter;
