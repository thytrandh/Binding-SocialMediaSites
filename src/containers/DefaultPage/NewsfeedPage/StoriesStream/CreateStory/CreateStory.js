import "../CreateStory/CreateStory.scss";
import { useContext, useState } from "react";
import { OpenCreateStory } from "../context/openCreateStory";
import OutsideClickHandler from "react-outside-click-handler";
const CreateStory = () => {
  const { setOpenCreateStory } = useContext(OpenCreateStory);
  const [selectedFile, setSelectedFile] = useState([]);
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
            source: URL.createObjectURL(item),
            type: "image",
          };
        } else {
          return {
            source: URL.createObjectURL(item),
            type: "video",
          };
        }
      });
    });
  }

  const handleSubmitStory = () => {
    if (selectedFile.length <= 0) {
      return false;
    } else {
      setOpenCreateStory(false);
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
              {selectedFile.length > 0 ? (
                <div className="selected-file">
                  {selectedFile[0].type === "image" ? (
                    <div className="img-selected">
                      <img
                        src={selectedFile[0].source}
                        alt=""
                        className="img-show"
                      />
                      <img
                        src={selectedFile[0].source}
                        alt=""
                        className="img-blur"
                      />
                    </div>
                  ) : (
                    <div className="video-selected">
                      <video
                        src={selectedFile[0].source}
                        className="video-show"
                        controls
                      ></video>
                      <video
                        src={selectedFile[0].source}
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
                selectedFile.length > 0
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
