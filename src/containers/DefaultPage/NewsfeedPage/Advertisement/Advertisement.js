import "../Advertisement/Advertisement.scss";
const Advertisement = () => {
  return (
    <div className="advertisement">
      <img src="/images/Ads/img-ads.png" alt="" className="img-ads" />
      <div className="content">
        <div className="logo">
          <img src="/images/Logo/logo-blue.svg" alt="" className="img-logo" />
          <p className="title">Binding</p>
        </div>
        <p className="desc">
          Feel free to reach us anytime. we are avaliable 24 hours
        </p>
        <div className="btn-contact">
            <p>CONTACT US</p>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
