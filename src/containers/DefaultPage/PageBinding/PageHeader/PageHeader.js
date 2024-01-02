import { useContext, useEffect, useState } from "react";
import "../PageHeader/PageHeader.scss";
import { DataContext } from "../../../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";
import { PAGES } from "../../../../settings/constant";
import { useNavigate, useParams } from "react-router-dom";
import {
  getIsLikePage,
  likePage,
} from "../../../../redux/slice/Pages/pagesSlice";
const PageHeader = ({ pageOwner }) => {
  // const members = [
  //   {
  //     id: 0,
  //     userName: "Jenny Wilson",
  //     avatar: "/images/User/user-02.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  //   {
  //     id: 1,
  //     userName: "Freya Davies",
  //     avatar: "/images/User/user-03.jpg",
  //     email: "freyaDavies@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     userName: "Aaron Jones",
  //     avatar: "/images/User/user-04.jpg",
  //     email: "jennyWilson@gmail.com",
  //   },
  //   {
  //     id: 4,
  //     userName: "Ariana Grande",
  //     avatar: "/images/User/user-05.jpg",
  //     email: "freyaDavies@gmail.com",
  //   },
  //   {
  //     id: 5,
  //     userName: "Ariana McCoy",
  //     avatar: "/images/User/user-06.jpg",
  //     email: "freyaDavies@gmail.com",
  //   },
  // ];

  const { userData } = useContext(DataContext);
  const pagesData = userData?.page;
  const memberPagesData = useSelector(
    (state) => state.persistedReducer?.pages?.getPage?.data
  );

  const [avatar, setAvatar] = useState(null);
  const [background, setBackground] = useState(null);
  const [name, setName] = useState(null);
  // const [contact, setContact] = useState(null);
  const [category, setCategory] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const hanldeInformation = () => {
      if (pageOwner) {
        setAvatar(pagesData?.avatar?.imgLink);
        setBackground(pagesData?.background?.imgLink);
        setName(pagesData?.pageName);
        // setContact(pagesData?.contact);
        setCategory(pagesData?.category);
      } else {
        setAvatar(memberPagesData?.avatar?.imgLink);
        setBackground(memberPagesData?.background?.imgLink);
        setName(memberPagesData?.pageName);
        // setContact(memberPagesData?.contact);
        setCategory(memberPagesData?.category);
      }
    };
    hanldeInformation();
  }, [memberPagesData, pagesData, pageOwner]);

  const getStatusLikePage = useSelector(
    (state) => state.persistedReducer?.pages?.isLikePage?.status
  );
  const [isLikePage, setIsLikePage] = useState(false);
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    if (!pageOwner) {
      const pageId = params.pageId;
      dispatch(getIsLikePage({ pageId }));
    }
  }, [dispatch, pageOwner, params]);

  useEffect(() => {
    if (getStatusLikePage) {
      setIsLikePage(true);
    } else {
      setIsLikePage(false);
    }
  }, [getStatusLikePage]);

  const handleClickLikePage = () => {
    const pageId = params.pageId;
    dispatch(likePage({ pageId }));
  };

  return (
    <div className="page-binding-header">
      <div className="banner-cover">
        <img
          src={background ? background : "/images/DefaultPage/bg-default.jpg"}
          alt=""
          className="img-banner"
        />
        <div className="blur"></div>
      </div>
      <div className="header-content">
        <div className="page-info">
          <div className="avatar">
            <img
              src={
                avatar
                  ? avatar
                  : "/images/User/Avatar Default/default-avatar.jpg"
              }
              alt=""
              className="img-avt"
            />
          </div>
          <div className="info">
            <p className="namepage">{name}</p>
            <p className="category">{category ? category : "Category"}</p>
            {!pageOwner && (
              <div className="status-friend-box">
                <button
                  className="btn-action"
                  onClick={() => {
                    handleClickLikePage();
                    // setIsLikePage(!isLikePage);
                  }}
                >
                  {isLikePage ? "Dislike Page" : "Like Page"}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="option-settings">
          {pageOwner && (
            <div
              className="edit-cover-photo"
              onClick={() => {
                navigate(PAGES);
              }}
            >
              <img
                src="/images/Pages/Edit Square.png"
                alt=""
                className="ic-camera"
              />
              <p className="subject">Edit your Page's</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default PageHeader;
