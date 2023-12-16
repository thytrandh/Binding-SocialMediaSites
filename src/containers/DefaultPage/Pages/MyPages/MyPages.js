import { useForm } from "react-hook-form";
import "../MyPages/MyPages.scss";
import { useState } from "react";
import CreatePage from "../CreatePage/CreatePage";
import { PageContext } from "../context/pageContext";
import { useNavigate } from "react-router-dom";
const MyPages = ({ isPage }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const [selectedAvatar, setSelectedAvatar] = useState(null);
  const onSelectAvatar = (event) => {
    const selectedFile = event.target.files[0];
    const temp = URL.createObjectURL(selectedFile);
    setSelectedAvatar(temp);
  };

  const [selectedBgCover, setSelectedBgCover] = useState(null);
  const onSelectBgCover = (event) => {
    const selectedFile = event.target.files[0];
    const temp = URL.createObjectURL(selectedFile);
    setSelectedBgCover(temp);
  };

  const onSubmit = (data) => {
    const { name, category, contact, intro } = data;
    console.log(name, category, contact, intro);
  };

  const [openCreatePage, setOpenCreatePage] = useState(false);

  const navigate = useNavigate();

  return (
    <PageContext.Provider value={{ openCreatePage, setOpenCreatePage }}>
      <div className="my-pages">
        <div
          className={isPage ? "header-my-pages flex-end" : "header-my-pages"}
        >
          {isPage === false && (
            <p className="mess">You haven't published any pages yet</p>
          )}
          <div className="button-box">
            <button
              className={
                isPage ? "btn-create-pages unable" : "btn-create-pages"
              }
              onClick={() => {
                if (!isPage) {
                  setOpenCreatePage(true);
                } else {
                  return false;
                }
              }}
            >
              <i class="fa-solid fa-plus"></i>
              Create new page
            </button>
            <button
              className={
                isPage ? "btn-access-pages" : "btn-access-pages unable"
              }
              onClick={() => {
                if (isPage) {
                  navigate("/page-binding");
                } else {
                  return false;
                }
              }}
            >
              <i class="fa-solid fa-arrow-right"></i>
              Access Page
            </button>
          </div>
        </div>
        {isPage && (
          <>
            <div className="top-box-my-pages">
              <div className="upload-avatar-box">
                <input
                  type="file"
                  className="input-avatar"
                  hidden
                  accept="image/*"
                  onChange={onSelectAvatar}
                />
                <div
                  className="avatar-box"
                  onClick={() =>
                    document.querySelector(".input-avatar").click()
                  }
                >
                  <img
                    src={
                      selectedAvatar !== null
                        ? selectedAvatar
                        : "/images/User/Avatar Default/default-avatar.jpg"
                    }
                    alt=""
                    className="img-show"
                  />

                  <button className="btn-selected-file">
                    <img src="/images/Profile/icon/Camera.png" alt="" />
                  </button>
                </div>
                <div className="title">
                  <p className="subject">Change Avatar</p>
                  <p className="desc">Select your avatar photo</p>
                </div>
              </div>
            </div>
            <div className="middle-box-my-pages">
              <div className="left">
                <form action="" className="form-settings">
                  <div className="input-item">
                    <label htmlFor="name">Page Name (required)</label>
                    <input
                      name="name"
                      type="text"
                      className="input-box"
                      placeholder="---"
                      {...register("name", {
                        required: true,
                      })}
                    />
                    {errors.name?.type === "required" && (
                      <p className="err-msg">Page Name is required</p>
                    )}
                  </div>
                  <div className="input-item">
                    <label htmlFor="category">Category (required)</label>
                    <input
                      name="category"
                      type="text"
                      className="input-box"
                      placeholder="---"
                      {...register("category", {
                        required: true,
                      })}
                    />
                    {errors.category?.type === "required" && (
                      <p className="err-msg">Category is required</p>
                    )}
                  </div>
                  <div className="input-item">
                    <label htmlFor="contact">Contact (required)</label>
                    <input
                      name="contact"
                      type="text"
                      className="input-box"
                      placeholder="---"
                      {...register("contact", {
                        required: true,
                      })}
                    />
                    {errors.contact?.type === "required" && (
                      <p className="err-msg">Contact is required</p>
                    )}
                  </div>
                  <div className="input-item textarea-input">
                    <label htmlFor="intro">Introduce (required)</label>
                    <textarea
                      name="intro"
                      type="text"
                      className="input-box"
                      placeholder="---"
                      {...register("intro", {
                        required: true,
                      })}
                    />
                    {errors.intro?.type === "required" && (
                      <p className="err-msg">Introduce is required</p>
                    )}
                  </div>
                </form>
              </div>
              <div className="right">
                <div className="upload-files-box">
                  <input
                    type="file"
                    className="input-filed"
                    hidden
                    accept="image/*"
                    onChange={onSelectBgCover}
                  />
                  {selectedBgCover !== null ? (
                    <div className="selected-file">
                      <div className="img-selected">
                        <img
                          src={selectedBgCover}
                          alt=""
                          className="img-show"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className="add-files-box">
                      <div
                        className="img-post"
                        onClick={() =>
                          document.querySelector(".input-filed").click()
                        }
                      >
                        <img
                          src="/images/Icon/IconPost/Paper Upload.png"
                          alt=""
                        />
                      </div>
                      <p className="desc">Select your background cover</p>
                    </div>
                  )}
                  {selectedBgCover !== null && (
                    <button
                      className="btn-delete-file"
                      onClick={() => {
                        setSelectedBgCover(null);
                      }}
                    >
                      <i class="fa-solid fa-xmark"></i>
                    </button>
                  )}
                </div>
              </div>
            </div>
            <div className="bottom-box-my-pages">
              <button
                className="btn-save-change"
                onClick={handleSubmit(onSubmit)}
              >
                SAVE CHANGES
              </button>
            </div>
          </>
        )}
      </div>
      {openCreatePage && <CreatePage />}
    </PageContext.Provider>
  );
};
export default MyPages;
