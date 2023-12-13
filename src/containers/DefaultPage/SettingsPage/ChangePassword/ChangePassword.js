import { useForm } from "react-hook-form";
import "../ChangePassword/ChangePassword.scss";

const ChangePassword = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const { current, newP, confirm } = data;
    console.log(current, newP, confirm);
  };

  return (
    <div className="settings-component change-password">
      <p className="top-title">Change Password</p>
      <div className="main-change-password">
        <form action="" className="form-settings">
          <div className="input-item">
            <label htmlFor="current">Current Password</label>
            <input
              name="current"
              type="password"
              className="input-box"
              placeholder="---"
              {...register("current", {
                required: true,
              })}
            />
            {errors.current?.type === "required" && (
              <p className="err-msg">Current Password is required</p>
            )}
          </div>
          <div className="input-item">
            <label htmlFor="new">New Password</label>
            <input
              name="new"
              type="password"
              className="input-box"
              placeholder="---"
              {...register("newP", {
                required: true,
                minLength: 8,
              })}
            />
            {errors.newP?.type === "required" && (
              <p className="err-msg">New Password is required</p>
            )}
            {errors.newP?.type === "minLength" && (
              <p className="err-msg">
                Password should be at least 8 characters
              </p>
            )}
          </div>
          <div className="input-item">
            <label htmlFor="confirm">Confirm Password</label>
            <input
              name="confirm"
              type="password"
              className="input-box"
              placeholder="---"
              {...register("confirm", {
                required: true,
                validate: (value) => {
                  const password = getValues("newP");
                  if (value !== password) {
                    return "Password is not matched!";
                  }
                },
              })}
            />
            {errors.confirm?.type === "required" && (
              <p className="err-msg">Confirm Password is required</p>
            )}
            {errors.confirm?.message && (
              <p className="err-msg">{errors.confirm?.message}</p>
            )}
          </div>
        </form>
        <div className="bottom-settings">
          <button className="btn-save-change" onClick={handleSubmit(onSubmit)}>
            SAVE CHANGES
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
