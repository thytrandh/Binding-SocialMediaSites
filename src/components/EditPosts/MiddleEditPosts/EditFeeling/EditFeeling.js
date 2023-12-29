import { useContext } from "react";
import { DataEditPostsContext } from "../../context/dataEditPostsContext";
import "../../../CreatePost/CreatePostDropdown/MiddleCreatePosts/UploadFeeling/UploadFeeling.scss";

const EditFeeling = () => {
  const { feelingArr, setFeelingArr } = useContext(DataEditPostsContext);
  const { setAddOption } = useContext(DataEditPostsContext);
  return (
    <div className="upload-feeling">
      <ul className="feeling-box">
        {feelingArr.map((item) => (
          <li
            key={item.id}
            className="item-emoji"
            onClick={() => {
              setFeelingArr((prev) => {
                return prev.map((emoji) => {
                  if (emoji.id === item.id) {
                    return {
                      ...emoji,
                      isChoose: true,
                    };
                  } else {
                    return {
                      ...emoji,
                      isChoose: false,
                    };
                  }
                });
              });
            }}
          >
            <div className="ic-emoji">
              <p>{item.icon}</p>
            </div>
            <p className="desc">{item.content}</p>
          </li>
        ))}
      </ul>
      <div
        className="btn-close"
        onClick={() => {
          setAddOption((prev) => {
            return prev.map((item) => {
              return {
                ...item,
                isActive: false,
              };
            });
          });
        }}
      >
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};
export default EditFeeling;
