import { useContext } from "react";
import { DataEditPostsContext } from "../../context/dataEditPostsContext";

const EditText = ({ addOption }) => {
  const { postContent, setPostContent } = useContext(DataEditPostsContext);
  return (
    <div
      className={
        addOption[0].isActive || addOption[1].isActive || addOption[2].isActive
          ? "upload-text w-50"
          : "upload-text"
      }
    >
      <textarea
        placeholder="What's on your mind, Marvin?"
        id=""
        cols="30"
        rows="10"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      ></textarea>
    </div>
  );
};

export default EditText;
