import ItemComment from "./ItemComment";

const PostsComment = ({ postsComment }) => {
  return (
    <ul className="list-comment">
      {postsComment.map((comment) => (
        <ItemComment
          key={comment?.id}
          idCmt={comment?.id}
          idUserCmt={comment?.userComment?.userId}
          avatar={comment?.userComment?.avatar}
          userName={
            comment?.userComment?.firstName +
            " " +
            comment.userComment?.lastName
          }
          time={comment?.createTime.slice(0, 10)}
          contentCmt={comment?.content}
        />
      ))}
    </ul>
  );
};
export default PostsComment;
