import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../../../../settings/constant";
import { useContext } from "react";
import { StepContext } from "../stepContext";

const Step01 = () => {
  const { setStepArr } = useContext(StepContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { user } = data;
    console.log(user);

    setStepArr((prev) => {
      return prev.map((item) => {
        if (item.step === 1) {
          return {
            ...item,
            active: false,
            complete: true,
          };
        } else if (item.step === 2) {
          return {
            ...item,
            active: true,
          };
        } else {
          return {
            ...item,
            active: false,
          };
        }
      });
    });
  };
  return (
    <div className="forgot-password-step step01">
      <div className="title">
        <p className="subject">Step 01: Enter your Email or Phone number</p>
        <p className="desc">
          Please enter the email or phone you'd like your password reset
          information sen to:
        </p>
      </div>
      <form
        action="#"
        className="forgot-password-form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-item">
          <label htmlFor="user" className="lb-input">
            Email or Phone Number
          </label>
          <div className="input-box input-box-forgot">
            <div className="ic-auth">
              <img
                className="ic-add-user"
                src="/images/Icon/IconAuth/ic-add-user.png"
                alt=""
              />
            </div>
            <input
              name="user"
              type="text"
              className="input-content"
              placeholder="Your email or phone number"
              {...register("user", {
                required: true,
              })}
            />
          </div>
          {errors.user?.type === "required" && (
            <p className="err-msg">Email or Phone Number is required</p>
          )}
        </div>
        <div className="submit-box">
          <button htmlType="submit" className="btn-submit">
            Get a verification code
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

export default Step01;
