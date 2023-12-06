import { useContext } from "react";
import { DataCreatePostContext } from "../../context/dataCreatePostContext";
import "../UploadFeeling/UploadFeeling.scss";
const UploadFeeling = () => {
  const { feelingArr, setFeelingArr } = useContext(DataCreatePostContext);
  const { setAddOption } = useContext(DataCreatePostContext);
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
export default UploadFeeling;
