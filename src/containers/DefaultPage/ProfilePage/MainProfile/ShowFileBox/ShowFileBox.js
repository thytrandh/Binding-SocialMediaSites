import { useContext } from "react";
import "./ShowFileBox.scss";
import { OpenShowFileContext } from "../context/openShowFileContext";
import OutsideClickHandler from "react-outside-click-handler";
const ShowFileBox = ({ file }) => {
  const { setOpenFileBox } = useContext(OpenShowFileContext);
  return (
    <div className="show-file-box">
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenFileBox(false);
        }}
      >
        <div className="show-file-content">
          {file.type === "image" ? (
            <>
              <img src={file.source} alt="" className="img-show" />
              <img src={file.source} alt="" className="img-blur" />
            </>
          ) : (
            <>
              <video src={file.source} controls autoPlay className="video-show"></video>
              <video src={file.source} className="video-blur"></video>
            </>
          )}
        </div>
      </OutsideClickHandler>

      <div className="btn-close-posts">
        <i class="fa-solid fa-xmark"></i>
      </div>
    </div>
  );
};
export default ShowFileBox;
