import { useContext } from "react";
import { DataCreatePostContext } from "../../context/dataCreatePostContext";
import "../UploadText/UploadText.scss";

const UploadText = ({ addOption, userName }) => {
  const { setPostContent } = useContext(DataCreatePostContext);
  return (
    <div
      className={
        addOption[0].isActive || addOption[1].isActive || addOption[2].isActive
          ? "upload-text w-50"
          : "upload-text"
      }
    >
      <textarea
        placeholder={`What's on your mind, ${userName}?`}
        id=""
        cols="30"
        rows="10"
        onChange={(e) => setPostContent(e.target.value)}
      ></textarea>
    </div>
  );
};

export default UploadText;
