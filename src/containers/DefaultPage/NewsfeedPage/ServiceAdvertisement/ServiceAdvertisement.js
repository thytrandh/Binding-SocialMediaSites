import "../ServiceAdvertisement/ServiceAdvertisement.scss";
const ServiceAdvertisement = () => {
  return (
    <div className="service-advertisement">
      <p className="title">Advertisement</p>
      <ul className="list-product">
        <li className="item">
          <img src="/images/Ads/product-01.jpg" alt="" />
          <div className="desc">
            <p className="subject">Raw, Organic Kombucha</p>
            <p className="address">brewdrkombucha.com</p>
          </div>
        </li>
        <li className="item">
          <img src="/images/Ads/product-02.jpg" alt="" />
          <div className="desc">
            <p className="subject">Allerdefense Essence</p>
            <p className="address">dprogramvietnam.com</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ServiceAdvertisement;
