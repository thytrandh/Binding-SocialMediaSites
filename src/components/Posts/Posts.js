import "../Posts/Posts.scss";
import PostsHeader from "./PostsHeader/PostsHeader";
import PostsBody from "./PostsBody/PostsBody";
import PostsFooter from "./PostsFooter/PostsFooter";
import PostsOpen from "./PostsOpen/PostsOpen";
import { useState } from "react";
import { PostsOpenContext } from "./context/postsOpenContext";
import EditPosts from "../EditPosts/EditPosts";
import { PostsEditContext } from "./context/postsEditContext";

const Posts = ({ accountOwner, posts }) => {
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
                accountOwner={accountOwner}
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
        {openEditPosts && (
          <EditPosts
            userInfo={{
              id: 0,
              userName:
                "UTE TV - Kênh truyền hình trường Đại học Sư phạm Kỹ thuật TPHCM",
              avatar:
                "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/317094198_2181493305354980_6460664330045934311_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=EglUTZpdA6cAX_G3NVI&_nc_oc=AQl5cptiCfPV9yZe_v1AUKJyvy3H0pO4wd6X0QJdkAltddhs7Lo2qXgePggTZy_7s0toqgu3SncEE3cXFR0WSKBL&_nc_ht=scontent.fvca1-2.fna&oh=00_AfA9BuAt1SGudC5RuKDtu0ammj1oSulUt-WdhLe6taWr5w&oe=65830F58",
            }}
            postOnPage={true}
          />
        )}
      </PostsEditContext.Provider>
    </PostsOpenContext.Provider>
  );
};

export default Posts;
