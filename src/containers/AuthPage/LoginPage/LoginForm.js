// import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  NEWSFEED_PAGE,
  REGISTER_PAGE,
  VERIFY_PAGE,
} from "../../../settings/constant";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../redux/slice/Auth/loginSlice";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { deteteStateRegister } from "../../../redux/slice/Auth/registerSlice";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [loginPhone, setLoginPhone] = useState(false);

  const { isAuth } = useContext(AuthContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isError = useSelector(
    (state) => state.persistedReducer?.loginAuth?.error
  );

  const onSubmit = (data) => {
    const { email, phone, password } = data;
    console.log(email, phone, password);

    if (loginPhone) {
      dispatch(
        login({
          phone,
          password,
        })
      );
    } else {
      dispatch(
        login({
          email,
          password,
        })
      );
    }
  };

  useEffect(() => {
    if (isError) {
      reset({
        user: "",
        password: "",
      });
    }
    if (isAuth) {
      navigate(NEWSFEED_PAGE);
    }
    dispatch(deteteStateRegister());
  }, [reset, isError, navigate, isAuth, dispatch]);

  return (
    <div className="login-form auth-form">
      <form
        action="#"
        className="auth-form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-item">
          <label htmlFor="user" className="lb-input">
            <span
              className={loginPhone ? "badge-choose" : "badge-choose active"}
              onClick={() => {
                setLoginPhone(false);
              }}
            >
              Email
            </span>
            <span> or </span>
            <span
              className={loginPhone ? "badge-choose active" : "badge-choose"}
              onClick={() => {
                setLoginPhone(true);
              }}
            >
              Phone Number
            </span>
          </label>
          <div className="input-box">
            <div className="ic-auth">
              <img
                className="ic-add-user"
                src="/images/Icon/IconAuth/ic-add-user.png"
                alt=""
              />
            </div>
            {loginPhone ? (
              <input
                name="user"
                type="text"
                className="input-content"
                placeholder="Your phone number"
                {...register("phone", {
                  required: true,
                  minLength: 10,
                  maxLength: 10,
                  pattern: {
                    value: /^[0-9]+$/,
                  },
                })}
              />
            ) : (
              <input
                name="user"
                type="text"
                className="input-content"
                placeholder="Your email address"
                {...register("email", {
                  required: true,
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  },
                })}
              />
            )}
          </div>
          {loginPhone && (
            <>
              {errors.phone?.type === "required" && (
                <p className="err-msg">Phone number is required</p>
              )}
              {(errors.phone?.type === "pattern" ||
                errors.phone?.type === "minLength" ||
                errors.phone?.type === "maxLength") && (
                <p className="err-msg">Invalid phone number</p>
              )}
            </>
          )}
          {!loginPhone && (
            <>
              {errors.email?.type === "required" && (
                <p className="err-msg">Email address is required</p>
              )}
              {errors.email?.type === "pattern" && (
                <p className="err-msg">Invalid email address</p>
              )}
            </>
          )}
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
