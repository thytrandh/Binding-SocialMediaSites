import { useState } from "react";
import LogoTitle from "../../../components/Logo/LogoTitle/LogoTitle";
import "../VerifyPage/VerifyPage.scss";
import Step01 from "./ForgotPassword/Step01";
import Step02 from "./ForgotPassword/Step02";
import Step03 from "./ForgotPassword/Step03";
import { StepContext } from "./stepContext";
import { useDispatch } from "react-redux";
import {
  deleteStateResetPassword,
  deleteStateResetPasswordRq,
} from "../../../redux/slice/Auth/resetPasswordSlice";

const VerifyPage = () => {
  const [stepArr, setStepArr] = useState([
    {
      step: 1,
      active: true,
      complete: false,
    },
    {
      step: 2,
      active: false,
      complete: false,
    },
    {
      step: 3,
      active: false,
      complete: false,
    },
  ]);

  const [userResetPassword, setUserResetPassword] = useState("");
  const [isResetPhone, setIsResetPhone] = useState(false);
  const [verifyCode, setVerifyCode] = useState("");

  const dispatch = useDispatch();

  const handleClickStep = (step) => {
    if (step === 1) {
      dispatch(deleteStateResetPasswordRq());
    } else if (step === 2) {
      dispatch(deleteStateResetPassword());
    }

    setStepArr((prev) => {
      return prev.map((item) => {
        if (item.step === step) {
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
    <div className="verify-page auth-page">
      <LogoTitle />
      <div className="verify-progress">
        {stepArr.map((item) => (
          <div
            className={item.complete ? "step complete" : "step"}
            key={item.step}
          >
            <div
              className={item.active ? "badge active" : "badge"}
              onClick={() => {
                handleClickStep(item.step);
              }}
            >
              {item.step}
            </div>
            <div className="progress complete"></div>
          </div>
        ))}
      </div>
      <div className="forgot-password-form auth-form">
        <StepContext.Provider
          value={{
            stepArr,
            setStepArr,

            userResetPassword,
            setUserResetPassword,

            isResetPhone,
            setIsResetPhone,

            verifyCode,
            setVerifyCode,
          }}
        >
          {stepArr.map(
            (item, index) =>
              item.active &&
              (item.step === 1 ? (
                <Step01 />
              ) : item.step === 2 ? (
                <Step02 />
              ) : item.step === 3 ? (
                <Step03 />
              ) : (
                <Step01 />
              ))
          )}
        </StepContext.Provider>
      </div>
    </div>
  );
};

export default VerifyPage;
