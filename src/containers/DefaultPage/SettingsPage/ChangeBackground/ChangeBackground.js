import { useState } from "react";

const ChangeBackground = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const onSelectFile = (event) => {
    const selectedFile = event.target.files[0];
    const temp = URL.createObjectURL(selectedFile);
    setSelectedFile(temp);
  };

  const handleSaveChanges = () => {
    if (selectedFile !== null) {
      setSelectedFile(null);
    } else {
      return false;
    }
  };
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
