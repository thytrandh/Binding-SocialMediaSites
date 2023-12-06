import "../Posts/Posts.scss";
import PostsHeader from "./PostsHeader/PostsHeader";
import PostsBody from "./PostsBody/PostsBody";
import PostsFooter from "./PostsFooter/PostsFooter";
import PostsOpen from "./PostsOpen/PostsOpen";
import { useState } from "react";
import { PostsOpenContext } from "./context/postsOpenContext";
import EditPosts from "../EditPosts/EditPosts";
import { PostsEditContext } from "./context/postsEditContext";

const Posts = ({ posts }) => {
  const listEmoji = [
    {
      id: 1,
      name: "like",
      iconEmoji: "/images/Posts/Emoji/like.png",
    },
    {
      id: 2,
      name: "love",
      iconEmoji: "/images/Posts/Emoji/love.png",
    },
    {
      id: 3,
      name: "funny",
      iconEmoji: "/images/Posts/Emoji/funny.png",
    },
    {
      id: 4,
      name: "wow",
      iconEmoji: "/images/Posts/Emoji/wow.png",
    },
    {
      id: 5,
      name: "angry",
      iconEmoji: "/images/Posts/Emoji/angry.png",
    },
  ];
  const [postsOpen, setPostsOpen] = useState(null);
  const [openEditPosts, setOpenEditPosts] = useState(false);
  return (
    <PostsOpenContext.Provider value={{ postsOpen, setPostsOpen }}>
      <PostsEditContext.Provider value={{ openEditPosts, setOpenEditPosts }}>
        <div className="posts-stream">
          {posts.map((item) => (
            <div key={item.id} className="posts">
              <PostsHeader
                accountOwner={true}
                avatar={item.user.avatar}
                username={item.user.username}
                status={item.status}
                time={item.time}
              />
              <PostsBody
                postsId={item.id}
                postsContent={item.content}
                postsImage={item.images}
                postsVideo={item.videos}
                postsReaction={item.react}
                listEmoji={listEmoji}
              />
              <PostsFooter postsComment={item.comment} listEmoji={listEmoji} />
            </div>
          ))}
        </div>
        {postsOpen !== null && (
          <PostsOpen
            postsUser={posts[postsOpen].user}
            postsTime={posts[postsOpen].time}
            postsImage={posts[postsOpen].images}
            postsVideo={posts[postsOpen].videos}
            postsContent={posts[postsOpen].content}
            postsComment={posts[postsOpen].comment}
            postsReaction={posts[postsOpen].react}
            listEmoji={listEmoji}
          />
        )}
        {openEditPosts && <EditPosts />}
      </PostsEditContext.Provider>
    </PostsOpenContext.Provider>
  );
};

export default Posts;
