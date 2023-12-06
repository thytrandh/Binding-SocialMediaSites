import { useState } from "react";
import { Link } from "react-router-dom";
import { LOGIN_PAGE } from "../../../settings/constant";

const VerifyForm = () => {
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

  const handleSubmit = () => {
    console.log(otp);
    var code = otp.join("");
    console.log(code);
  };

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
          <p>Already Have An Account?</p>
          <Link to={LOGIN_PAGE}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};
export default VerifyForm;
