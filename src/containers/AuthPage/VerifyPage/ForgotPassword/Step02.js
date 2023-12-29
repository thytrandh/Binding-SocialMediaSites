import { Link } from "react-router-dom";
import { REGISTER_PAGE } from "../../../../settings/constant";
import { useState } from "react";
import { StepContext } from "../stepContext";
import { useContext } from "react";

const Step02 = () => {
  const { setStepArr } = useContext(StepContext);
  const { setVerifyCode } = useContext(StepContext);

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

  const handleProcess = () => {
    setStepArr((prev) => {
      return prev.map((item) => {
        if (item.step === 2) {
          return {
            ...item,
            active: false,
            complete: true,
          };
        } else if (item.step === 3) {
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

  const handleSubmit = () => {
    console.log(otp);
    var code = otp.join("");
    console.log(code);
    if (code.length === 6) {
      handleProcess();
      setVerifyCode(code);
    }
  };
  return (
    <div className="forgot-password-step step02">
      <div className="title">
        <p className="subject">Step 02: Enter Verify Code</p>
        <p className="desc">
          We have sent you a verification code. Please check your email account
          or phone now and enter verify code
        </p>
      </div>
      <div className="otp-verification-code">
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
          Verify code
        </button>
      </div>
      <div className="link-to-page">
        <p>Didn't get a code?</p>
        <Link to={REGISTER_PAGE}>Redirect back to registration page</Link>
      </div>
    </div>
  );
};

export default Step02;
