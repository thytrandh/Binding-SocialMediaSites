import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "../MessageComposeBox/MessageComposeBox.scss";

const MessageComposeBox = () => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [message, setMessage] = useState("");

  const onclickEmoji = (emoji) => {
    setMessage(`${message} ${emoji}`);
  };

  const handleSendMessage = () => {
    if (message.length > 0) {
      setMessage("");
      return true;
    } else {
      return false;
    }
  };

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

  const handleDeleteSelectedFiles = (item) => {
    const filter = selectedFile.filter((val) => val !== item);
    setSelectedFile(filter);
  };
  return (
    <>
      <div className="show-selected-file-box">
        {selectedFile.map((item, idx) => (
          <div key={item.id} className="img-box">
            <img src={item.source} alt="" />
            <button
              className="btn-delete"
              onClick={() => {
                handleDeleteSelectedFiles(item);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        ))}
      </div>
      <div className="bottom-box">
        <div className="option-box">
          <button
            className="btn-option"
            onClick={() =>
              document.querySelector(".input-filed-message").click()
            }
          >
            <input
              type="file"
              className="input-filed-message"
              hidden
              multiple
              accept="image/*,video/*"
              onChange={onSelectFile}
            />
            <img src="/images/Messages/Image 2.png" alt="" className="img-ic" />
          </button>
          <button className="btn-option">
            <img src="/images/Messages/Voice 2.png" alt="" className="img-ic" />
          </button>
        </div>
        <div className="input-message-box">
          <textarea
            type="text"
            className="input-mess"
            value={message}
            placeholder="Write your message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
          <div className="btn-emoji">
            <i
              class="fa-light fa-face-smile"
              onClick={() => {
                setPickerVisible(!isPickerVisible);
              }}
            ></i>
            <OutsideClickHandler
              onOutsideClick={() => {
                setPickerVisible(false);
              }}
            >
              {isPickerVisible && (
                <div className="emoji-box">
                  <Picker
                    data={data}
                    previewPosition="none"
                    onEmojiSelect={(e) => {
                      onclickEmoji(e.native);
                    }}
                  />
                </div>
              )}
            </OutsideClickHandler>
          </div>
        </div>
        <button
          className="btn-send"
          onClick={() => {
            handleSendMessage();
          }}
        >
          <p className="send">Send</p>
          <img
            src="/images/Icon/IconPost/Send.svg"
            alt=""
            className="img-send"
          />
        </button>
      </div>
    </>
  );
};
export default MessageComposeBox;
