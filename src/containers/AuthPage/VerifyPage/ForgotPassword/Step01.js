import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../../../../settings/constant";
import { useContext, useEffect, useState } from "react";
import { StepContext } from "../stepContext";
import { resetPasswordRequest } from "../../../../redux/slice/Auth/resetPasswordSlice";
import { useDispatch, useSelector } from "react-redux";

const Step01 = () => {
  const { setStepArr } = useContext(StepContext);
  const { setUserResetPassword } = useContext(StepContext);
  const { setIsResetPhone } = useContext(StepContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const [resetPhone, setResetPhone] = useState(false);

  const isError = useSelector(
    (state) => state.persistedReducer?.resetPasswordAuth?.error
  );
  const isSuccess = useSelector(
    (state) =>
      state.persistedReducer?.resetPasswordAuth?.currentResetPasswordRq?.status
  );

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const { email, phone } = data;
    console.log(email, phone);

    if (resetPhone) {
      dispatch(
        resetPasswordRequest({
          phone,
        })
      );
      setUserResetPassword(phone);
      setIsResetPhone(true);
    } else {
      dispatch(
        resetPasswordRequest({
          email,
        })
      );
      setUserResetPassword(email);
      setIsResetPhone(false);
    }
  };

  useEffect(() => {
    const handleProcess = () => {
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

    if (isError) {
      reset({
        phone: "",
        email: "",
      });
    }
    if (!isError && isSuccess) {
      handleProcess();
    }
  }, [isError, isSuccess, reset, setStepArr]);

  useEffect(() => {}, []);

  return (
    <div className="forgot-password-step step01">
      <div className="title">
        <p className="subject">Step 01: Enter your Email or Phone number</p>
        <p className="desc">
          Please enter the email or phone you'd like your password reset
          information sent to:
        </p>
      </div>
      <form
        action="#"
        className="forgot-password-form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="input-item">
          <label htmlFor="user" className="lb-input">
            <span
              className={resetPhone ? "badge-choose" : "badge-choose active"}
              onClick={() => {
                setResetPhone(false);
              }}
            >
              Email
            </span>
            <span> or </span>
            <span
              className={resetPhone ? "badge-choose active" : "badge-choose"}
              onClick={() => {
                setResetPhone(true);
              }}
            >
              Phone Number
            </span>
          </label>
          <div className="input-box input-box-forgot">
            <div className="ic-auth">
              <img
                className="ic-add-user"
                src="/images/Icon/IconAuth/ic-add-user.png"
                alt=""
              />
            </div>
            {resetPhone ? (
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
          {resetPhone && (
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
          {!resetPhone && (
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
