import "../ItemBannerAuth/ItemBannerAuth.scss";

const  ItemBannerAuth = ({ imgBanner, title, desc }) => {
  return (
    <div className="item-banner-auth">
      <div className="img-banner">
        <img src={imgBanner} alt="" />
      </div>
      <div className="content">
        <p className="title">{title}</p>
        <p className="desc">{desc}</p>
      </div>
    </div>
  );
};

export default ItemBannerAuth;
