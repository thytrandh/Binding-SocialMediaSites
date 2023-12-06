import "../LogoTitle/LogoTitle.scss";
const LogoTitle = () => {
  return (
    <div className="logo-title">
      <div className="logo">
        <img src="/images/Logo/logo-blue.svg" alt="" />
        <p className="website-name">Binding</p>
      </div>
      <p className="desc">
        Welcom to Bingding, a platform to connect with the social word
      </p>
    </div>
  );
};
export default LogoTitle;
