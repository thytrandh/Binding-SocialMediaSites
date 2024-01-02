import BannerAds from "../../../components/BannerAds/BannerAds";
import "../PolicyPage/PolicyPage.scss";

const PolicyPage = () => {
  return (
    <div className="policy-pages">
      <BannerAds
        subject={"Privacy Policy"}
        desc={"Good Communication is the key to cop-up with good ideas"}
      />
      <div className="policy-content">
        <div className="box-info">
          <p className="title">Introduction</p>
          <p className="desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum.
          </p>
          <p className="desc">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn’t anything.
          </p>
          <p className="desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum.
          </p>
        </div>
        <div className="box-info">
          <p className="title">Managing Your Information</p>
          <p className="desc">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using ‘Content here, content
            here’, making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for lorem ipsum. There are many variations
            of passages of Lorem Ipsum available, but the majority have suffered
            alteration in some form, by injected humour, or randomised words
            which
          </p>
        </div>
      </div>
    </div>
  );
};

export default PolicyPage;
