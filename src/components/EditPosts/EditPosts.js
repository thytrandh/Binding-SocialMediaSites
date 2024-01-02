import { useEffect, useState } from "react";
import { DataEditPostsContext } from "./context/dataEditPostsContext";
import HeaderEditPosts from "./HeaderEditPosts/HeaderEditPosts";
import UserInfoEditPosts from "./MiddleEditPosts/UserInfoEditPosts/UserInfoEditPosts";
import EditText from "./MiddleEditPosts/EditText/EditText";
import EditFiles from "./MiddleEditPosts/EditFiles/EditFiles";
import OptionEditPosts from "./MiddleEditPosts/OptionEditPosts/OptionEditPosts";
import EditFeeling from "./MiddleEditPosts/EditFeeling/EditFeeling";
import { useContext } from "react";
import { PostsEditContext } from "../Posts/context/postsEditContext";
import OutsideClickHandler from "react-outside-click-handler";
import "../CreatePost/CreatePostDropdown/CreatePostDropdown.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteStateUserPosts,
  editPosts,
} from "../../redux/slice/Posts/postsSlice";
const EditPosts = ({ postOnPage, postInfo }) => {
  const { setOpenEditPosts } = useContext(PostsEditContext);

  const [postContent, setPostContent] = useState(postInfo?.content);

  const [addOption, setAddOption] = useState([
    {
      id: 0,
      name: "Photos",
      icon: "/images/Icon/IconPost/Dropdown/Image 2.png",
      isActive: false,
    },
    {
      id: 1,
      name: "Videos",
      icon: "/images/Icon/IconPost/Dropdown/Folder.png",
      isActive: false,
    },
    {
      id: 2,
      name: "Feeling",
      icon: "/images/Icon/IconPost/Dropdown/Heart.png",
      isActive: false,
    },
  ]);

  const isSuccess = useSelector(
    (state) => state.persistedReducer?.userPosts?.currentEditPosts?.status
  );

  const [selectedImages, setSelectedImages] = useState(postInfo?.images);
  const [selectedVideos, setSelectedVideos] = useState(
    postInfo?.videos !== null ? postInfo?.videos : null
  );
  const [image, setImage] = useState([]);
  const [video, setVideo] = useState([]);

  const [feelingArr, setFeelingArr] = useState([
    {
      id: 0,
      icon: "😄",
      content: "happy",
      isChoose: false,
    },
    {
      id: 1,
      icon: "🥰",
      content: "lovely",
      isChoose: false,
    },
    {
      id: 2,
      icon: "🤩",
      content: "excited",
      isChoose: false,
    },
    {
      id: 3,
      icon: "🤪",
      content: "crazy",
      isChoose: false,
    },
    {
      id: 4,
      icon: "😚",
      content: "blissful",
      isChoose: false,
    },
    {
      id: 6,
      icon: "😇",
      content: "blessed",
      isChoose: false,
    },
    {
      id: 7,
      icon: "😔",
      content: "sad",
      isChoose: false,
    },
    {
      id: 8,
      icon: "😀",
      content: "thankful",
      isChoose: false,
    },
    {
      id: 9,
      icon: "😘",
      content: "in love",
      isChoose: false,
    },
    {
      id: 10,
      icon: "🤗",
      content: "grateful",
      isChoose: false,
    },
    {
      id: 11,
      icon: "😍",
      content: "fantastic",
      isChoose: false,
    },
    {
      id: 12,
      icon: "😎",
      content: "cool",
      isChoose: false,
    },
    {
      id: 13,
      icon: "🫠",
      content: "chill",
      isChoose: false,
    },
    {
      id: 14,
      icon: "😒",
      content: "tired",
      isChoose: false,
    },
    {
      id: 15,
      icon: "😏",
      content: "thoughtful",
      isChoose: false,
    },
    {
      id: 16,
      icon: "😠",
      content: "angry",
      isChoose: false,
    },
    {
      id: 17,
      icon: "😷",
      content: "sick",
      isChoose: false,
    },
    {
      id: 18,
      icon: "😆",
      content: "glad",
      isChoose: false,
    },
    {
      id: 19,
      icon: "💔",
      content: "heartbroken",
      isChoose: false,
    },
    {
      id: 20,
      icon: "🥶",
      content: "cold",
      isChoose: false,
    },
    {
      id: 21,
      icon: "😓",
      content: "down",
      isChoose: false,
    },
    {
      id: 22,
      icon: "😠",
      content: "worried",
      isChoose: false,
    },
    {
      id: 23,
      icon: "😟",
      content: "sick",
      isChoose: false,
    },
    {
      id: 24,
      icon: "💪",
      content: "strong",
      isChoose: false,
    },
    {
      id: 25,
      icon: "👍",
      content: "good",
      isChoose: false,
    },
    {
      id: 26,
      icon: "😡",
      content: "furious",
      isChoose: false,
    },
    {
      id: 27,
      icon: "😐",
      content: "meh",
      isChoose: false,
    },
    {
      id: 28,
      icon: "😫",
      content: "horrible",
      isChoose: false,
    },
    {
      id: 29,
      icon: "😴",
      content: "asleep",
      isChoose: false,
    },
    {
      id: 30,
      icon: "🥸",
      content: "different",
      isChoose: false,
    },
    {
      id: 31,
      icon: "😱",
      content: "overwhelmed",
      isChoose: false,
    },
    {
      id: 32,
      icon: "🤑",
      content: "rich",
      isChoose: false,
    },
    {
      id: 33,
      icon: "😰",
      content: "threatened",
      isChoose: false,
    },
    {
      id: 34,
      icon: "😈",
      content: "evil",
      isChoose: false,
    },
    {
      id: 35,
      icon: "😨",
      content: "afraid",
      isChoose: false,
    },
    {
      id: 36,
      icon: "🫣",
      content: "trapped",
      isChoose: false,
    },
    {
      id: 37,
      icon: "🥵",
      content: "thirsty",
      isChoose: false,
    },
    {
      id: 38,
      icon: "🙄",
      content: "busy",
      isChoose: false,
    },
    {
      id: 39,
      icon: "😶",
      content: "rough",
      isChoose: false,
    },
    {
      id: 40,
      icon: "🙏",
      content: "hopeful",
      isChoose: false,
    },
  ]);

  const dispatch = useDispatch();

  const handleEditPosts = () => {
    const emojiFilter = feelingArr.filter((val) => {
      return val.isChoose;
    });

    var feeling = null;
    if (emojiFilter.length > 0) {
      feeling = emojiFilter[0]?.icon + " feeling " + emojiFilter[0]?.content;
    } else {
      feeling = null;
    }

    const content = postContent;
    const id = postInfo?.id;

    if (postContent.length <= 0 && image.length <= 0 && video.length <= 0) {
      return false;
    } else {
      if (postOnPage) {
        const pageId = postInfo?.pagePost?.id;
        dispatch(
          editPosts({
            id,
            content,
            video,
            image,
            feeling,
            pageId,
          })
        );
      } else {
        dispatch(
          editPosts({
            id,
            content,
            video,
            image,
            feeling,
          })
        );
      }
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setOpenEditPosts(false);
      dispatch(deleteStateUserPosts());
    }

    console.log("postInfo", postInfo);
  }, [isSuccess, dispatch, setOpenEditPosts, postInfo]);

  return (
    <DataEditPostsContext.Provider
      value={{
        postContent,
        setPostContent,

        selectedImages,
        setSelectedImages,
        image,
        setImage,

        selectedVideos,
        setSelectedVideos,
        video,
        setVideo,

        addOption,
        setAddOption,
        feelingArr,
        setFeelingArr,
      }}
    >
      <div className="edit-posts-dropdown">
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenEditPosts(false);
          }}
        >
          <div className="edit-posts-dropdown-box">
            <HeaderEditPosts />
            <div className="middle">
              <UserInfoEditPosts
                avatar={
                  postInfo?.pagePost !== null
                    ? postInfo?.pagePost?.avatar?.imgLink
                    : postInfo?.userPost?.avatar
                }
                userName={
                  postInfo?.pagePost !== null
                    ? postInfo?.pagePost?.pageName
                    : postInfo?.userPost?.firstName +
                      " " +
                      postInfo?.userPost?.lastName
                }
                feelingArr={feelingArr}
                postOnPage={postOnPage}
              />
              <div className="middle-content">
                <EditText addOption={addOption} />
                {(addOption[0].isActive || addOption[1].isActive) && (
                  <EditFiles />
                )}
                {addOption[2].isActive && <EditFeeling />}
                <OptionEditPosts />
              </div>
            </div>
            <div className="bottom">
              <div
                className={
                  postContent.length > 0 ||
                  selectedImages.length > 0 ||
                  selectedVideos.length > 0
                    ? "btn-post enable"
                    : "btn-post unable"
                }
                onClick={() => {
                  handleEditPosts();
                }}
              >
                Post
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </DataEditPostsContext.Provider>
  );
};
export default EditPosts;
