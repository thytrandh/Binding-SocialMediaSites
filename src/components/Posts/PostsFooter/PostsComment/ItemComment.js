import { useContext, useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import { EditCommentContext } from "../../context/editCommentContext";
import { useDispatch } from "react-redux";
import { deleteComment } from "../../../../redux/slice/Posts/commentSlice";
import { DataContext } from "../../../../context/dataContext";
import { createReport } from "../../../../redux/slice/Report/reportSlice";

const ItemComment = ({
  idCmt,
  idUserCmt,
  avatar,
  userName,
  time,
  contentCmt,
}) => {
  const { userData } = useContext(DataContext);
  const idUserComment = idUserCmt;
  const idCurrentUser = userData?.id;

  const [commentOwner, setCommentOwner] = useState(false);

  useEffect(() => {
    const checkCommentOwner = () => {
      if (idUserComment === idCurrentUser) {
        setCommentOwner(true);
      } else {
        setCommentOwner(false);
      }
    };
    checkCommentOwner();
  }, [idCurrentUser, idUserComment]);

  const [openEditCmt, setOpenEditCmt] = useState(false);
  const { setEditCmt, setContentEditComment, setIdEditComment } = useContext(
    EditCommentContext
  );
  const handleClickEditComment = (comment) => {
    setEditCmt(true);
    setIdEditComment(idCmt);
    setContentEditComment(comment);
  };

  const dispatch = useDispatch();

  const handleDeleteComment = () => {
    const commentId = idCmt;
    dispatch(
      deleteComment({
        commentId,
      })
    );
  };

  const handleClickReportComment = () => {
    const commentId = idCmt;
    const contentReport = "Inappropriate content";
    dispatch(
      createReport({
        contentReport,
        commentId,
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
    <li className="item-comment">
      <div className="user-avatar">
        <img
          src={avatar ? avatar : "/images/DefaultPage/default-avatar.jpg"}
          alt=""
          className="img-avt"
        />
      </div>
      <div className="comment-detail">
        <div className="subject">
          <p className="username">
            {userName}
            {/* <Tick /> */}
          </p>
          <p className="time">{`replied ${mm} ${day}, ${year} `}</p>
        </div>
        <div className="content-comment-box">
          <p className="content-comment">{contentCmt}</p>
          <OutsideClickHandler
            onOutsideClick={() => {
              setOpenEditCmt(false);
            }}
          >
            <div
              className="btn-option"
              onClick={() => {
                setOpenEditCmt(!openEditCmt);
              }}
            >
              <i class="fa-light fa-ellipsis"></i>
              {openEditCmt && (
                <>
                  {commentOwner ? (
                    <div className="option-box">
                      <p
                        className="item-option"
                        onClick={() => {
                          handleClickEditComment(contentCmt);
                        }}
                      >
                        Edit
                      </p>
                      <p
                        className="item-option"
                        onClick={() => {
                          handleDeleteComment();
                        }}
                      >
                        Delete
                      </p>
                    </div>
                  ) : (
                    <div className="option-box">
                      <p
                        className="item-option"
                        onClick={() => {
                          handleClickReportComment();
                        }}
                      >
                        Report
                      </p>
                    </div>
                  )}
                </>
              )}
            </div>
          </OutsideClickHandler>
        </div>
      </div>
    </li>
  );
};
export default ItemComment;
