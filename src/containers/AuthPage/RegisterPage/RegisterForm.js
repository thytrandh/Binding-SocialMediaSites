import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../../settings/constant";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../redux/slice/Auth/registerSlice";
import { useContext, useEffect, useState } from "react";
import { RegisterContext } from "../context/registerContext";

const RegisterForm = () => {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const [registerPhone, setRegisterPhone] = useState(false);

  const { setOpenVeriryRegister } = useContext(RegisterContext);
  const { setUserRegister } = useContext(RegisterContext);
  const { setIsRegisterPhone } = useContext(RegisterContext);

  const dispatch = useDispatch();

  const isError = useSelector(
    (state) => state.persistedReducer?.registerAuth?.error
  );
  const getCurrentRegister = useSelector(
    (state) => state.persistedReducer?.registerAuth?.currentRegister
  );

  const onSubmit = (data) => {
    const { fname, lname, email, phone, password } = data;
    console.log(fname, lname, email, phone, password);
    const firstName = fname;
    const lastName = lname;
    const enabled = false;

    if (registerPhone) {
      dispatch(
        registerUser({
          firstName,
          lastName,
          phone,
          password,
          enabled,
        })
      );
      setUserRegister(phone);
      setIsRegisterPhone(true);
    } else {
      dispatch(
        registerUser({
          firstName,
          lastName,
          email,
          password,
          enabled,
        })
      );
      setUserRegister(email);
      setIsRegisterPhone(false);
    }

    reset({
      fname: "",
      lname: "",
      phone: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  useEffect(() => {
    if (getCurrentRegister) {
      setOpenVeriryRegister(true);
    }
    if (isError) {
      reset({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    }
  }, [getCurrentRegister, isError, setOpenVeriryRegister, reset]);

  return (
    <div className="register-form auth-form">
      <form
        action="#"
        className="auth-form-content"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="divide-column">
          <div className="input-item">
            <label htmlFor="fname" className="lb-input">
              First Name
            </label>
            <div className="input-box">
              <img
                className="ic-auth ic-lock"
                src="/images/Icon/IconAuth/ic-add-user.png"
                alt=""
              />
              <input
                name="fname"
                type="text"
                className="input-content"
                placeholder="First name"
                {...register("fname", {
                  required: true,
                })}
              />
            </div>
            {errors.fname?.type === "required" && (
              <p className="err-msg">First name is required</p>
            )}
          </div>
          <div className="input-item">
            <label htmlFor="lname" className="lb-input">
              Last Name
            </label>
            <div className="input-box">
              <img
                className="ic-auth ic-lock"
                src="/images/Icon/IconAuth/ic-add-user.png"
                alt=""
              />
              <input
                name="lname"
                type="text"
                className="input-content"
                placeholder="Last name"
                {...register("lname", {
                  required: true,
                })}
              />
            </div>
            {errors.lname?.type === "required" && (
              <p className="err-msg">Last name is required</p>
            )}
          </div>
        </div>
        <div className="input-item">
          <label htmlFor="email" className="lb-input">
            <span
              className={registerPhone ? "badge-choose" : "badge-choose active"}
              onClick={() => {
                setRegisterPhone(false);
              }}
            >
              Email
            </span>
            <span> or </span>
            <span
              className={registerPhone ? "badge-choose active" : "badge-choose"}
              onClick={() => {
                setRegisterPhone(true);
              }}
            >
              Phone Number
            </span>
          </label>
          <div className="input-box">
            <div className="ic-auth">
              <img
                className="ic-add-user"
                src="/images/Icon/IconAuth/ic-email.png"
                alt=""
              />
            </div>
            {registerPhone ? (
              <input
                name="phone"
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
                name="email"
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
          {registerPhone && (
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

          {!registerPhone && (
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
            Password
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
              placeholder="Password"
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
        <div className="item-extension">
          <div className="checkbox-item">
            <input
              className="checkbox-remember"
              type="checkbox"
              name=""
              id="checkRemember"
            />
            <label className="lb-checkbox lb-remember" htmlFor="checkRemember">
              I agree with terms and conditions
            </label>
          </div>
        </div>
        <div className="submit-box">
          <button htmlType="submit" className="btn-submit">
            SIGN UP
          </button>
        </div>
      </form>
      {/* <div className="register-with-google">
        <span className="divide">or</span>
        <button className="btn-login-google">
          <img className="ic-google" src="/images/Icon/ic-google.png" alt="" />
          <p>Sign Up with Google</p>
        </button>
      </div> */}
      <div className="link-to-page">
        <p>Already Have An Account?</p>
        <Link to={LOGIN_PAGE}>Sign In</Link>
      </div>
    </div>
  );
};

export default RegisterForm;
