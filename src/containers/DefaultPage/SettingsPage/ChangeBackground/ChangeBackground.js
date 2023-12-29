import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBackground } from "../../../../redux/slice/User/updateUserSlice";
import { message } from "antd";
import "../ChangeAvatar/ChangeAvatar.scss";

const ChangeBackground = () => {
  const isSuccess = useSelector(
    (state) =>
      state.persistedReducer?.userSettings?.currentChangeBackground?.status
  );

  const [selectedFile, setSelectedFile] = useState(null);
  const [picture, setPicture] = useState(null);
  const onSelectFile = (event) => {
    const selectedFile = event.target.files[0];
    setPicture(selectedFile);
    const temp = URL.createObjectURL(selectedFile);
    setSelectedFile(temp);
  };

  const dispatch = useDispatch();

  const handleSaveChanges = () => {
    if (picture !== null) {
      dispatch(changeBackground({ picture }));
    } else {
      message.error("Unsuccessful background cover update.");
      return false;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      setSelectedFile(null);
      setPicture(null);
    }
  }, [isSuccess]);
  return (
    <div className="setting-change-avatar settings-component">
      <p className="top-title">Change Background Cover</p>
      <div className="main-setting-change-avatar">
        <p className="title">
          Your Background Photo will be used to customize the header of your
          profile.
        </p>
        <div className="upload-files-box">
          <input
            type="file"
            className="input-filed"
            hidden
            accept="image/*"
            onChange={onSelectFile}
          />
          {selectedFile !== null ? (
            <div className="selected-file">
              <div className="img-selected">
                <img src={selectedFile} alt="" className="img-show" />
                <img src={selectedFile} alt="" className="img-blur" />
              </div>
            </div>
          ) : (
            <div className="add-files-box">
              <div
                className="img-post"
                onClick={() => document.querySelector(".input-filed").click()}
              >
                <img src="/images/Icon/IconPost/Paper Upload.png" alt="" />
              </div>
              <p className="desc">Select your background photo</p>
            </div>
          )}
          {selectedFile !== null && (
            <button
              className="btn-delete-file"
              onClick={() => {
                setSelectedFile(null);
              }}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>
        <div
          className="bottom-settings"
          onClick={() => {
            handleSaveChanges();
          }}
        >
          <button className="btn-save-change">SAVE CHANGES</button>
        </div>
      </div>
    </div>
  );
};

export default ChangeBackground;
