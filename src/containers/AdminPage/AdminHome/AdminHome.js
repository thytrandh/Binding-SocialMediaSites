import BannerAds from "../../../components/BannerAds/BannerAds";
import "../AdminHome/AdminHome.scss";
const AdminHome = () => {
  return (
    <div className="admin-home-page">
      <BannerAds subject={"Admin Pages"} desc={"Management Site"} />
    </div>
  );
};

export default AdminHome;
