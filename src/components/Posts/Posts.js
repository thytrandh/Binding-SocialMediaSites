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
  const [postsEditInfo, setPostsEditInfo] = useState(null);

  return (
    <PostsOpenContext.Provider value={{ postsOpen, setPostsOpen }}>
      <PostsEditContext.Provider
        value={{
          openEditPosts,
          setOpenEditPosts,

          postsEditInfo,
          setPostsEditInfo,
        }}
      >
        <div className="posts-stream">
          {posts
            .map((item) => (
              <div key={item.id} className="posts">
                <PostsHeader
                  avatar={
                    item?.page !== null
                      ? item?.page?.avatar?.imgLink
                      : item?.userPost?.avatar
                  }
                  username={
                    item?.page !== null
                      ? item?.page?.pageName
                      : item?.userPost?.firstName +
                        " " +
                        item?.userPost?.lastName
                  }
                  status={item?.feeling}
                  time={item?.createDate.slice(0, 10)}
                  postsItem={item}
                />
                <PostsBody
                  postsId={item?.id}
                  postsContent={item?.content}
                  postsImage={item?.images}
                  postsVideo={item?.videos}
                  postsReaction={[
                    {
                      idUser: 0,
                      username: "Marvin McKinney",
                      emojiCode: 1,
                    },
                    {
                      idUser: 1,
                      username: "Jenny Wilson",
                      emojiCode: 1,
                    },
                    {
                      idUser: 3,
                      username: "Aaron Jones",
                      emojiCode: 4,
                    },
                  ]}
                  listEmoji={listEmoji}
                  postsItem={item}
                  countLike={item.countLike}
                />
                <PostsFooter
                  postsId={item?.id}
                  postsComment={item?.comments}
                  listEmoji={listEmoji}
                />
              </div>
            ))
            .reverse()}
        </div>
        {postsOpen !== null && (
          <PostsOpen
            postsUser={postsOpen?.userPost}
            postsPages={postsOpen?.page}
            postsTime={postsOpen?.createDate}
            postsImage={postsOpen?.images}
            postsVideo={postsOpen?.videos}
            postsContent={postsOpen?.content}
            postsComment={postsOpen?.comments}
            postsFeeling={postsOpen?.feeling}
            // postsReaction={posts[postsOpen].react}
            // listEmoji={listEmoji}
          />
        )}
        {openEditPosts && (
          <EditPosts
            postInfo={postsEditInfo}
            postOnPage={postsEditInfo?.page !== null ? true : false}
          />
        )}
      </PostsEditContext.Provider>
    </PostsOpenContext.Provider>
  );
};

export default Posts;
