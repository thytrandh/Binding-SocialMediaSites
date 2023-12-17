import { useContext } from "react";
import { PageOpenFileBoxContext } from "../../context/pageOpenFileBoxContext";
import OutsideClickHandler from "react-outside-click-handler";
import "../ShowFileBindingBox/ShowFileBindingBox.scss";

const ShowFileBindingBox = ({ file }) => {
  const { setOpenShowFileBox } = useContext(PageOpenFileBoxContext);
  return (
    <div className="show-file-binding-box">
      <OutsideClickHandler
        onOutsideClick={() => {
          setOpenShowFileBox(false);
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
              <video
                src={file.source}
                controls
                autoPlay
                className="video-show"
              ></video>
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

export default ShowFileBindingBox;
