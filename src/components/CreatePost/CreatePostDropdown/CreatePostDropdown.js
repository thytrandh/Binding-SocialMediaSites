import { useContext } from "react";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { DropdownContext } from "../dropdownContext";
import "../CreatePostDropdown/CreatePostDropdown.scss";
import { DataCreatePostContext } from "./context/dataCreatePostContext";
import HeaderCreatePosts from "./HeaderCreatePosts/HeaderCreatePosts";
import UserInfoCreatePosts from "./MiddleCreatePosts/UserInfoCreatePosts/UserInfoCreatePosts";
import UploadFeeling from "./MiddleCreatePosts/UploadFeeling/UploadFeeling";
import UploadFiles from "./MiddleCreatePosts/UploadFiles/UploadFiles";
import UploadText from "./MiddleCreatePosts/UploadText/UploadText";
import OptionAddPosts from "./MiddleCreatePosts/OptionAddPosts/OptionAddPosts";

const CreatePostDropdown = ({ userInfo, postOnPage }) => {
  const { setOpenDropdown } = useContext(DropdownContext);

  const [postContent, setPostContent] = useState("");

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

  const [selectedImages, setSelectedImages] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState([]);

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

  const handleSubmitPost = () => {
    const emojiFilter = feelingArr.filter((val) => {
      return val.isChoose;
    });
    const feeling =
      emojiFilter[0]?.icon + " feeling " + emojiFilter[0]?.content;
    const content = postContent;
    const images = [...selectedImages];
    const videos = [...selectedVideos];
    console.log("test", feeling, content, images, videos);
    if (
      postContent.length <= 0 &&
      selectedImages.length <= 0 &&
      selectedVideos.length <= 0
    ) {
      return false;
    } else {
      setOpenDropdown(false);
    }
  };

  return (
    <DataCreatePostContext.Provider
      value={{
        postContent,
        setPostContent,
        selectedImages,
        setSelectedImages,
        selectedVideos,
        setSelectedVideos,
        addOption,
        setAddOption,
        feelingArr,
        setFeelingArr,
      }}
    >
      <div className="create-post-dropdown">
        <OutsideClickHandler
          onOutsideClick={() => {
            setOpenDropdown(false);
          }}
        >
          <div className="create-post-dropdown-box">
            <HeaderCreatePosts />
            <div className="middle">
              <UserInfoCreatePosts
                avatar={userInfo?.avatar}
                userName={userInfo?.userName}
                feelingArr={feelingArr}
                postOnPage={postOnPage}
              />
              <div className="middle-content">
                <UploadText addOption={addOption} />
                {(addOption[0].isActive || addOption[1].isActive) && (
                  <UploadFiles />
                )}
                {addOption[2].isActive && <UploadFeeling />}
                <OptionAddPosts />
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
                  handleSubmitPost();
                }}
              >
                Post
              </div>
            </div>
          </div>
        </OutsideClickHandler>
      </div>
    </DataCreatePostContext.Provider>
  );
};

export default CreatePostDropdown;
