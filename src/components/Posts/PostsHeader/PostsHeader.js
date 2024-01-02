import { useEffect, useState } from "react";
import "../PostsHeader/PostsHeader.scss";
import OutsideClickHandler from "react-outside-click-handler";
import { useContext } from "react";
import { PostsEditContext } from "../context/postsEditContext";
import { useDispatch } from "react-redux";
import { deletePosts } from "../../../redux/slice/Posts/postsSlice";
import { DataContext } from "../../../context/dataContext";
import { createReport } from "../../../redux/slice/Report/reportSlice";

const PostsHeader = ({ avatar, username, status, time, postsItem }) => {
  const [openOptionBox, setOpenOptionBox] = useState(false);
  const { setOpenEditPosts } = useContext(PostsEditContext);
  const { setPostsEditInfo } = useContext(PostsEditContext);

  const handleEditPosts = () => {
    setPostsEditInfo(postsItem);
    setOpenEditPosts(true);
  };

  const dispatch = useDispatch();

  const handleDeletePosts = () => {
    console.log("postsId", postsItem.id);
    const postsId = postsItem.id;
    dispatch(deletePosts({ postsId }));
  };

  const { userData } = useContext(DataContext);
  const idCurrentUser = userData?.id;
  const idUserPosts = postsItem?.userPost?.userId;
  const [postsOwner, setPostsOwner] = useState(false);

  useEffect(() => {
    const checkPostsOwner = () => {
      if (idUserPosts === idCurrentUser) {
        setPostsOwner(true);
      } else {
        setPostsOwner(false);
      }
    };
    checkPostsOwner();
  }, [idCurrentUser, idUserPosts]);

  const handleReportPosts = () => {
    const postId = postsItem?.id;
    const contentReport = "Inappropriate content";
    dispatch(
      createReport({
        contentReport,
        postId,
      })
    );
  };

  const day = time.slice(8, 10);
  const month = time.slice(5, 7);
  const year = time.slice(0, 4);

  const [mm, setMm] = useState();

  useEffect(() => {
    const monthTime = [
      {
        id: 1,
        value: "01",
        month: "January",
      },
      {
        id: 2,
        value: "02",
        month: "February",
      },
      {
        id: 3,
        value: "03",
        month: "March",
      },
      {
        id: 4,
        value: "04",
        month: "April",
      },
      {
        id: 5,
        value: "05",
        month: "May",
      },
      {
        id: 6,
        value: "06",
        month: "June",
      },
      {
        id: 7,
        value: "07",
        month: "July",
      },
      {
        id: 8,
        value: "08",
        month: "August",
      },
      {
        id: 9,
        value: "09",
        month: "September",
      },
      {
        id: 10,
        value: "10",
        month: "October",
      },
      {
        id: 11,
        value: "11",
        month: "November",
      },
      {
        id: 12,
        value: "12",
        month: "December",
      },
    ];
    const arrFilter = monthTime.filter((item) => item.value === month);
    setMm(arrFilter[0].month);
  }, [month]);

  return (
    <div className="posts-header">
      <div className="avatar">
        <img
          src={avatar ? avatar : "/images/DefaultPage/default-avatar.jpg"}
          alt=""
          className="img-avt"
        />
      </div>
      <div className="info-posts-box">
        <div className="info-posts">
          <p className="desc">
            <span className="username">{username}</span>
            {/* <Tick /> */}
            {status && <span className="status"> - {status}</span>}
          </p>
          <p className="time">
            {mm} {day}, {year}
          </p>
        </div>
        <div className="posts-option">
          <div
            className="btn-menu"
            onClick={() => {
              setOpenOptionBox(!openOptionBox);
            }}
          >
            <i class="fa-solid fa-ellipsis"></i>
          </div>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenOptionBox(false);
            }}
          >
            {openOptionBox && (
              <div className="box-option-dropdown">
                {postsOwner ? (
                  <div className="own">
                    <p
                      onClick={() => {
                        handleDeletePosts();
                      }}
                    >
                      Delete
                    </p>
                    <p
                      onClick={() => {
                        handleEditPosts();
                      }}
                    >
                      Edit
                    </p>
                  </div>
                ) : (
                  <div className="guest">
                    <p
                      onClick={() => {
                        handleReportPosts();
                      }}
                    >
                      Report
                    </p>
                  </div>
                )}
              </div>
            )}
          </OutsideClickHandler>
        </div>
      </div>
    </div>
  );
};

export default PostsHeader;
