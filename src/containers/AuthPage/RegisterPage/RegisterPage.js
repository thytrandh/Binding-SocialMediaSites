import { useState } from "react";
import LogoTitle from "../../../components/Logo/LogoTitle/LogoTitle";
import RegisterForm from "./RegisterForm";
import VerifyForm from "./VerifyForm";

const RegisterPage = () => {
  const [isVerify] = useState(true);
  return (
    <div className="register-page auth-page ">
      <LogoTitle />
      {isVerify ? <VerifyForm /> : <RegisterForm />}
    </div>
  );
};

export default RegisterPage;
