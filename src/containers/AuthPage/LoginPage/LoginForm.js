// import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { REGISTER_PAGE, VERIFY_PAGE } from "../../../settings/constant";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { user, password } = data;
    console.log(user, password);
  };

  return (
    <div className="login-form auth-form">
      <form
        action="#"
        className="auth-form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-item">
          <label htmlFor="user" className="lb-input">
            Email or Phone Number
          </label>
          <div className="input-box">
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
                // pattern: {
                //   value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,

                // },
              })}
            />
          </div>
          {errors.user?.type === "required" && (
            <p className="err-msg">Email or Phone Number is required</p>
          )}
          {/* {errors.user?.type === "pattern" && (
            <p className="err-msg">Invalid email address</p>
          )} */}
        </div>
        <div className="input-item">
          <label htmlFor="password" className="lb-input">
            Your Password
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
              placeholder="Your password"
              {...register("password", {
                required: true,
              })}
            />
          </div>
          {errors.password?.type === "required" && (
            <p className="err-msg">Password is required</p>
          )}
        </div>
        <div className="item-extension">
          <div className="checkbox-item">
            <input
              className="checkbox-remember"
              type="checkbox"
              name=""
              id="checkRemember"
            />
            <label className="lb-checkbox lb-remember" htmlFor="checkRemember">
              Remember Me
            </label>
          </div>
          <div className="link-to-sub-page forgot-password">
            <Link to={VERIFY_PAGE}>Forgot Password?</Link>
          </div>
        </div>
        <div className="submit-box">
          <button htmlType="submit" className="btn-submit">
            SIGN IN
          </button>
        </div>
      </form>
      {/* <div className="login-with-google">
        <span className="divide">or</span>
        <button className="btn-login-google">
          <img className="ic-google" src="/images/Icon/ic-google.png" alt="" />
          <p>Sign In with Google</p>
        </button>
      </div> */}
      <div className="link-to-page">
        <p>Don't Have An Account?</p>
        <Link to={REGISTER_PAGE}>Sign Up</Link>
      </div>
    </div>
  );
};

export default LoginForm;
