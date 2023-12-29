import "../CreateStory/CreateStory.scss";
import { useContext, useState } from "react";
import { OpenCreateStory } from "../context/openCreateStory";
import OutsideClickHandler from "react-outside-click-handler";
import { useDispatch } from "react-redux";
import { createStory } from "../../../../../redux/slice/Stories/storiesSlice";
const CreateStory = () => {
  const { setOpenCreateStory } = useContext(OpenCreateStory);
  const [selectedFile, setSelectedFile] = useState(null);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    setSelectedFile(selectedFilesArray);
    formatSelectedFilesArray();
  };
  function formatSelectedFilesArray() {
    setSelectedFile((prev) => {
      return prev.map((item) => {
        const strTemp = item.type.slice(0, 5).toString();
        if (strTemp === "image") {
          return {
            source: item,
            type: "image",
          };
        } else {
          return {
            source: item,
            type: "video",
          };
        }
      });
    });
  }

  const dispatch = useDispatch();

  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);

  const handleSubmitStory = () => {
    if (selectedFile !== null) {
      if (selectedFile[0].type === "image") {
        setImage(selectedFile[0].source);
        dispatch(
          createStory({
            image,
          })
        );
      } else if (selectedFile[0].type === "video") {
        setVideo(selectedFile[0].source);
        dispatch(
          createStory({
            video,
          })
        );
      }
      setOpenCreateStory(false);
    } else {
      return false;
    }
  };
  return (
    <div className="create-story-dropdown">
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenCreateStory(false);
        }}
      >
        <div className="create-story-box">
          <div className="header-create-story">
            <p className="title">Create Story</p>
            <div
              className="btn-close"
              onClick={() => {
                setOpenCreateStory(false);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className="middle-box">
            <div
              className="upload-files-box"
              onClick={() => document.querySelector(".input-filed").click()}
            >
              <input
                type="file"
                className="input-filed"
                hidden
                accept="image/*,video/*"
                onChange={onSelectFile}
              />
              {selectedFile !== null ? (
                <div className="selected-file">
                  {selectedFile[0].type === "image" ? (
                    <div className="img-selected">
                      <img
                        src={URL.createObjectURL(selectedFile[0].source)}
                        alt=""
                        className="img-show"
                      />
                      <img
                        src={URL.createObjectURL(selectedFile[0].source)}
                        alt=""
                        className="img-blur"
                      />
                    </div>
                  ) : (
                    <div className="video-selected">
                      <video
                        src={URL.createObjectURL(selectedFile[0].source)}
                        className="video-show"
                        autoPlay
                        controls
                      ></video>
                      <video
                        src={URL.createObjectURL(selectedFile[0].source)}
                        className="video-blur"
                      ></video>
                    </div>
                  )}
                </div>
              ) : (
                <div className="add-files-box">
                  <div className="img-post">
                    <img src="/images/Icon/IconPost/Paper Upload.png" alt="" />
                  </div>
                  <p className="desc">Add photo/video to your story</p>
                </div>
              )}
            </div>
          </div>
          <div className="bottom-box">
            <div
              className={
                selectedFile !== null
                  ? "btn-create-story enable"
                  : "btn-create-story unable"
              }
              onClick={() => {
                handleSubmitStory();
              }}
            >
              <p>Create</p>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};
export default CreateStory;
