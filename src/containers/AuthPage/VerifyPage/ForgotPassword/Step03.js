import { useForm } from "react-hook-form";
import { REGISTER_PAGE } from "../../../../settings/constant";
import { Link } from "react-router-dom";

const Step03 = () => {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { password } = data;
    console.log(password);
  };
  return (
    <div className="forgot-password-step step03">
      <div className="title">
        <p className="subject">Step 03: Reset your Password</p>
        <p className="desc">
          Please enter your new password and confirm password below:
        </p>
      </div>
      <form
        action="#"
        className="forgot-password-form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-item">
          <label htmlFor="password" className="lb-input">
            New Password
          </label>
          <div className="input-box">
            <img
              className="ic-auth ic-lock"
              src="/images/Icon/IconAuth/ic-lock.png"
              alt=""
            />
            <input
              name="password"
              type="password"
              className="input-content"
              placeholder="New Password"
              {...register("password", {
                required: true,
                minLength: 8,
              })}
            />
          </div>
          {errors.password?.type === "required" && (
            <p className="err-msg">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="err-msg">Password should be at least 8 characters</p>
          )}
        </div>
        <div className="input-item">
          <label htmlFor="confirmpassword" className="lb-input">
            Confirm Password
          </label>
          <div className="input-box">
            <img
              className="ic-auth ic-lock"
              src="/images/Icon/IconAuth/ic-lock.png"
              alt=""
            />
            <input
              name="confirmpassword"
              type="password"
              className="input-content"
              placeholder="Confirm Password"
              {...register("confirmpassword", {
                required: true,
                validate: (value) => {
                  const password = getValues("password");
                  if (value !== password) {
                    return "Password is not matched!";
                  }
                },
              })}
            />
          </div>
          {errors.confirmpassword?.type === "required" && (
            <p className="err-msg">Confirm Password is required</p>
          )}
          {errors.confirmpassword?.message && (
            <p className="err-msg">{errors.confirmpassword?.message}</p>
          )}
        </div>
        <div className="submit-box">
          <button htmlType="submit" className="btn-submit">
           Reset Password
          </button>
        </div>
      </form>
      <div className="link-to-page">
        <p>Don't Have An Account?</p>
        <Link to={REGISTER_PAGE}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Step03;
