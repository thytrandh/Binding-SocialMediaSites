import { useForm } from "react-hook-form";
import "../CreatePage/CreatePage.scss";
import { useState } from "react";
const CreatePage = () => {
  const {
    // handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  // const onSubmit = (data) => {
  //   const { name, category, contact, intro } = data;
  //   console.log(name, category, contact, intro);
  // };

  const [namePage, setNamePage] = useState("");
  const [categoryPage, setCategoryPage] = useState("");

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
    console.log(temp);
    setSelectedBgCover(temp);
  };

  return (
    <div className="create-page-dropdown">
      <div className="create-page-dropdown-box">
        <div className="left-create-page">
          <p className="top-title">Create new page</p>
          <form action="" className="form-settings">
            <div className="input-item">
              <label htmlFor="name">Page Name (required)</label>
              <input
                name="name"
                type="text"
                className="input-box"
                placeholder="---"
                value={namePage}
                onChange={(e) => setNamePage(e.target.value)}
                // {...register("name", {
                //   required: true,
                // })}
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
                value={categoryPage}
                onChange={(e) => setCategoryPage(e.target.value)}
                // {...register("category", {
                //   required: true,
                // })}
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
            <div className="input-file">
              <div
                className="btn-select-avatar"
                onClick={() =>
                  document.querySelector(".input-avatar-create").click()
                }
              >
                Choose Avatar
              </div>
              <p className="file">
                {selectedAvatar !== null
                  ? "Click button to change avatar"
                  : "No avatar photo chosen"}
              </p>
              <input
                name="avatar"
                type="file"
                className="input-avatar-create"
                hidden
                accept="image/*"
                onChange={onSelectAvatar}
              />
            </div>
            <div className="input-file">
              <div
                className="btn-select-avatar"
                onClick={() =>
                  document.querySelector(".input-bg-create").click()
                }
              >
                Choose Cover
              </div>
              <p className="file">
                {selectedBgCover !== null
                  ? "Click button to change background"
                  : "No background photo chosen"}
              </p>
              <input
                name="bg"
                type="file"
                className="input-bg-create"
                hidden
                accept="image/*"
                onChange={onSelectBgCover}
              />
            </div>
          </form>
        </div>
        <div className="right-create-page">
          <div className="top-page">
            <div className="bg-cover-box">
              <img
                src={
                  selectedBgCover !== null
                    ? selectedBgCover
                    : "/images/DefaultPage/default-avatar.jpg"
                }
                alt=""
                className="bg-cover"
              />
              <div className="blur"></div>
            </div>
            <div className="avatar-box">
              <img
                src={
                  selectedAvatar !== null
                    ? selectedAvatar
                    : "/images/DefaultPage/bg-default.jpg"
                }
                alt=""
                className="img-avt"
              />
              <div className="title">
                <p className="subject">
                  {namePage !== "" ? namePage : "Page Name"}
                </p>
                <p className="desc">
                  {categoryPage !== "" ? categoryPage : "Category"}
                </p>
              </div>
            </div>
          </div>
          <div className="main-page">
            <div className="tab-menu">
              <p className="item">Timeline</p>
              <p className="item">Introduce</p>
              <p className="item">Members</p>
              <p className="item">Gallery</p>
            </div>
            <div className="main-content">
              <div className="intro-box">
                <p className="intro">Intro</p>
              </div>
              <div className="post-box">
                <p className="post">Posts</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePage;
