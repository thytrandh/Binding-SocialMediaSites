import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGIN_PAGE, REGISTER_PAGE } from "../../../settings/constant";
import { RegisterContext } from "../context/registerContext";
import {
  deteteStateRegister,
  verifyRegister,
} from "../../../redux/slice/Auth/registerSlice";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";

const VerifyForm = () => {
  const { setOpenVeriryRegister } = useContext(RegisterContext);
  const { userRegister, setUserRegister } = useContext(RegisterContext);
  const { isRegisterPhone } = useContext(RegisterContext);

  const isError = useSelector(
    (state) => state.persistedReducer?.registerAuth?.error
  );
  const getTokenRegister = useSelector(
    (state) => state.persistedReducer?.registerAuth?.currentVerify?.token
  );

  const [otp, setOtp] = useState(new Array(6).fill(null));

  const handleChange = (element, index) => {
    if (element.value === null) {
      return false;
    }
    setOtp([...otp.map((code, idx) => (idx === index ? element.value : code))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    var code = otp.join("");

    if (isRegisterPhone) {
      const phone = userRegister;
      dispatch(
        verifyRegister({
          phone,
          code,
        })
      );
    } else {
      const email = userRegister;
      dispatch(
        verifyRegister({
          email,
          code,
        })
      );
    }
  };

  const handleBackRegister = () => {
    setUserRegister("");
    setOpenVeriryRegister(false);
    dispatch(deteteStateRegister());
  };

  useEffect(() => {
    if (isError) {
      setOtp(new Array(6).fill(null));
    }
    if (getTokenRegister) {
      message.success("Your registration was successful");
      dispatch(deteteStateRegister());
      navigate(LOGIN_PAGE);
    }
  }, [isError, navigate, getTokenRegister, dispatch]);

  return (
    <div className="verify-form auth-form">
      <div className="auth-form-content">
        <p className="desc">
          Please check your email account or phone now and enter verify code
        </p>
        <div className="otp-box">
          {otp.map((data, index) => {
            return (
              <input
                key={index}
                value={data}
                className="input-otp"
                type="text"
                name="otp"
                maxLength={1}
                onChange={(e) => handleChange(e.target, index)}
                onFocus={(e) => e.target.select()}
              />
            );
          })}
        </div>
        <button
          htmlType="submit"
          className="btn-submit"
          onClick={() => {
            handleSubmit();
          }}
        >
          SUBMIT
        </button>
        <div className="link-to-page">
          <p>Didn't get a code?</p>
          <Link
            onClick={() => {
              handleBackRegister();
            }}
            to={REGISTER_PAGE}
          >
            Redirect back to registration page
          </Link>
        </div>
      </div>
    </div>
  );
};
export default VerifyForm;
