import { useContext, useEffect, useState } from "react";
import "../PostsFooter/PostsFooter.scss";
import PostsComment from "./PostsComment/PostsComment";
import { EditCommentContext } from "../context/editCommentContext";
import { useDispatch } from "react-redux";
import {
  editComment,
  postComment,
} from "../../../redux/slice/Posts/commentSlice";
import {
  likePosts,
  unlikePosts,
} from "../../../redux/slice/Posts/likePostsSlice";
import { DataContext } from "../../../context/dataContext";

const PostsFooter = ({ postsId, postsComment, listEmoji }) => {
  const [postCmt, setPostCmt] = useState(null);
  const [openCommentBox, setOpenCommentBox] = useState(false);

  const [editCmt, setEditCmt] = useState(false);
  const [contentEditComment, setContentEditComment] = useState(null);
  const [idEditComment, setIdEditComment] = useState(null);

  const dispatch = useDispatch();

  const { userData } = useContext(DataContext);
  const [isLikePosts, setIsLikePosts] = useState(false);

  useEffect(() => {
    const checkIsLikePost = () => {
      const userPostsLike = userData?.postLike;
      if (userPostsLike !== null) {
        for (var i = 0; i < userPostsLike.length; i++) {
          if (userPostsLike[i] === postsId) {
            setIsLikePosts(true);
            return;
          } else {
            setIsLikePosts(false);
          }
        }
      }
    };
    checkIsLikePost();
  }, [userData, postsId]);

  const handlePostComment = () => {
    if (editCmt) {
      //call API Edit comment
      const id = idEditComment;
      const content = contentEditComment;
      const postId = postsId;
      dispatch(
        editComment({
          id,
          content,
          postId,
        })
      );
      setContentEditComment("");
      setEditCmt(false);
      setPostCmt("");
    } else {
      //call API Add New (Post) comment
      const postId = postsId;
      const content = postCmt;

      dispatch(
        postComment({
          postId,
          content,
        })
      );

      setPostCmt("");
    }
  };

  const handleClickLikePosts = () => {
    const postId = postsId;
    if (isLikePosts) {
      dispatch(
        unlikePosts({
          postId,
        })
      );
    } else {
      dispatch(
        likePosts({
          postId,
        })
      );
    }
  };

  return (
    <EditCommentContext.Provider
      value={{
        editCmt,
        setEditCmt,

        contentEditComment,
        setContentEditComment,
        idEditComment,
        setIdEditComment,
      }}
    >
      <div className="posts-footer">
        <div className="posts-footer-option">
          <div className="left">
            <div
              className="drop-emotion"
              onClick={() => {
                handleClickLikePosts();
                setIsLikePosts(!isLikePosts);
              }}
            >
              {isLikePosts ? (
                <img
                  src="/images/Posts/Emoji/love.png"
                  alt=""
                  className="img-emotion"
                />
              ) : (
                <img
                  src="/images/Posts/Emoji/Heart.png"
                  alt=""
                  className="img-emotion"
                />
              )}

              <p>Love</p>
              {/* <div className="emoji-tooltip">
                {listEmoji.map((emoji) => (
                  <div className="item-emoji">
                    <p className="desc-tooltip">{emoji.name}</p>
                    <img src={emoji.iconEmoji} alt="" className="img-emoji" />
                  </div>
                ))}
              </div> */}
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
            <p className="comment-count">
              {postsComment !== null ? postsComment.length : "0"} Comment
            </p>
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
                  src={
                    userData?.image
                      ? userData?.image?.imgLink
                      : "/images/DefaultPage/default-avatar.jpg"
                  }
                  alt=""
                  className="img-userAvt"
                />
                <input
                  type="text"
                  value={editCmt ? contentEditComment : postCmt}
                  className="comment-input"
                  placeholder="Write a Comment..."
                  onChange={(e) => {
                    editCmt
                      ? setContentEditComment(e.target.value)
                      : setPostCmt(e.target.value);
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
              {postsComment !== null && (
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
