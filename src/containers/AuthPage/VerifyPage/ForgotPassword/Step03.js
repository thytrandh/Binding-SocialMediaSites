import { useForm } from "react-hook-form";
import { LOGIN_PAGE, REGISTER_PAGE } from "../../../../settings/constant";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { StepContext } from "../stepContext";
import {
  deleteStateResetPassword,
  deleteStateResetPasswordRq,
  resetPassword,
} from "../../../../redux/slice/Auth/resetPasswordSlice";
import { useDispatch, useSelector } from "react-redux";

const Step03 = () => {
  const { userResetPassword } = useContext(StepContext);
  const { isResetPhone } = useContext(StepContext);
  const { verifyCode } = useContext(StepContext);

  const isError = useSelector(
    (state) => state.persistedReducer?.resetPasswordAuth?.error
  );
  const currentResetPassword = useSelector(
    (state) => state.persistedReducer?.resetPasswordAuth?.currentResetPassword
  );

  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { password } = data;
    const newPassword = password;

    if (isResetPhone) {
      const phone = userResetPassword;
      dispatch(
        resetPassword({
          verifyCode,
          phone,
          newPassword,
        })
      );
    } else {
      const email = userResetPassword;
      dispatch(
        resetPassword({
          verifyCode,
          email,
          newPassword,
        })
      );
    }
  };

  useEffect(() => {
    if (isError) {
      reset({
        password: "",
        confirmpassword: "",
      });
    }

    if (!isError && currentResetPassword !== null) {
      dispatch(deleteStateResetPasswordRq());
      dispatch(deleteStateResetPassword());
      navigate(LOGIN_PAGE);
    }
  }, [isError, currentResetPassword, dispatch, navigate, reset]);

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
