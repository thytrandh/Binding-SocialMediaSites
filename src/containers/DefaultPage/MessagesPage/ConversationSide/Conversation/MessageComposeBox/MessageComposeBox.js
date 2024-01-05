import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import "../MessageComposeBox/MessageComposeBox.scss";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { sendMessages } from "../../../../../../redux/slice/Messages/messagesSlice";

const MessageComposeBox = () => {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [message, setMessage] = useState("");

  const onclickEmoji = (emoji) => {
    setMessage(`${message} ${emoji}`);
  };

  const params = useParams();

  const dispatch = useDispatch();
  const handleSendMessage = () => {
    console.log("ïmage", image);
    if (message.length > 0 || image !== null) {
      const receiverId = params.chatId;
      dispatch(
        sendMessages({
          message,
          image,
          receiverId,
        })
      );
      setMessage("");
      setImage(null);
      setSelectedFile(null);
      return true;
    } else {
      return false;
    }
  };

  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const onSelectFile = (event) => {
    const selectedFiles = event.target.files;
    console.log("selectedFiles", selectedFiles);
    setImage(selectedFiles[0]);
    const imgURL = URL.createObjectURL(selectedFiles[0]);
    setSelectedFile(imgURL);
    // const selectedFilesArray = Array.from(selectedFiles);
    // setSelectedFile(selectedFilesArray);
    // formatSelectedFilesArray();
  };

  // function formatSelectedFilesArray() {
  //   setSelectedFile((prev) => {
  //     return prev.map((item) => {
  //       const strTemp = item.type.slice(0, 5).toString();
  //       if (strTemp === "image") {
  //         return {
  //           source: URL.createObjectURL(item),
  //           type: "image",
  //         };
  //       } else {
  //         return {
  //           source: URL.createObjectURL(item),
  //           type: "video",
  //         };
  //       }
  //     });
  //   });
  // }

  // const handleDeleteSelectedFiles = (item) => {
  //   const filter = selectedFile.filter((val) => val !== item);
  //   setSelectedFile(filter);
  // };
  return (
    <>
      {selectedFile !== null && selectedFile !== undefined && (
        <div className="show-selected-file-box">
          <div className="img-box">
            <img src={selectedFile} alt="" />
            <button
              className="btn-delete"
              onClick={() => {
                setImage(null);
                setSelectedFile(null);
                // handleDeleteSelectedFiles(item);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
        </div>
      )}

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
              accept="image/*"
              onChange={onSelectFile}
            />
            <img src="/images/Messages/Image 2.png" alt="" className="img-ic" />
          </button>
          {/* <button className="btn-option">
            <img src="/images/Messages/Voice 2.png" alt="" className="img-ic" />
          </button> */}
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
