import ItemComment from "./ItemComment";

const PostsComment = ({ postsComment }) => {
  return (
    <ul className="list-comment">
      {postsComment.map((comment) => (
        <ItemComment
          key={comment.idComment}
          avatar={comment.user.avatar}
          userName={comment.user.username}
          time={comment.time}
          contentCmt={comment.content}
          accountOwner={comment.idComment === 0}
        />
      ))}
    </ul>
  );
};
export default PostsComment;
