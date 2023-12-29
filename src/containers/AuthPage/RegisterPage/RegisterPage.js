import { useState } from "react";
import LogoTitle from "../../../components/Logo/LogoTitle/LogoTitle";
import RegisterForm from "./RegisterForm";
import VerifyForm from "./VerifyForm";
import { RegisterContext } from "../context/registerContext";

const RegisterPage = () => {
  const [openVeriryRegister, setOpenVeriryRegister] = useState(false);
  const [userRegister, setUserRegister] = useState("");
  const [isRegisterPhone, setIsRegisterPhone] = useState(false);
  return (
    <RegisterContext.Provider
      value={{
        openVeriryRegister,
        setOpenVeriryRegister,

        userRegister,
        setUserRegister,

        isRegisterPhone,
        setIsRegisterPhone,
      }}
    >
      <div className="register-page auth-page ">
        <LogoTitle />
        {openVeriryRegister ? <VerifyForm /> : <RegisterForm />}
      </div>
    </RegisterContext.Provider>
  );
};

export default RegisterPage;
