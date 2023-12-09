import "../BannerAds/BannerAds.scss";
const BannerAds = ({ subject, desc }) => {
  return (
    <div className="banner-ads">
      <img src="/images/Ads/banner-bg.jpg" alt="" className="bg-img" />
      <div className="title">
        <p className="subject">{subject}</p>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};
export default BannerAds;
