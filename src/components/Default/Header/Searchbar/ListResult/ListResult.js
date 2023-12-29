import { useNavigate } from "react-router-dom";
import "../ListResult/ListResult.scss";
import { useContext } from "react";
import { DataContext } from "../../../../../context/dataContext";
import { useDispatch } from "react-redux";
import { getUserById } from "../../../../../redux/slice/User/userSlice";
import { getIsFriend } from "../../../../../redux/slice/User/friendSlice";
import {
  getIsLikePage,
  getPageById,
} from "../../../../../redux/slice/Pages/pagesSlice";

const ListResult = ({ title, listResult }) => {
  const { userData } = useContext(DataContext);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const refresh = () => window.location.reload(true);

  const handleViewProfile = (profileId) => {
    if (title === "Member") {
      const userId = userData?.id;
      if (profileId === userId) {
        navigate("/profile");
      } else {
        const userId = profileId;
        dispatch(getUserById({ userId }));
        const memberId = profileId;
        const friendId = memberId;
        dispatch(getIsFriend({ friendId }));
        navigate(`/members/${memberId}`, { replace: true });
      }
    } else if (title === "Page") {
      const pageId = profileId;
      dispatch(getPageById({ pageId }));
      dispatch(getIsLikePage({ pageId }));
      navigate(`/page-binding/${pageId}`, { replace: true });
    }
  };

  return (
    <ul className="list-result">
      <p className="title">{title}</p>
      {listResult !== null &&
        listResult.length > 0 &&
        listResult.map((user) => (
          <li
            key={user.id}
            className="item-result"
            onClick={() => {
              handleViewProfile(user?.id);
            }}
          >
            <img
              className="avatar"
              src={
                user?.image?.imgLink
                  ? user?.image?.imgLink
                  : user?.avatar?.imgLink
              }
              alt=""
            />
            <div className="info">
              <div className="name">
                <p className="">
                  {user?.firstName
                    ? user?.firstName + " " + user?.lastName
                    : user?.pageName}
                </p>
                {/* <Tick /> */}
              </div>
              {/* <p className="desc">{20} mutual friends</p> */}
            </div>
          </li>
        ))}
      {listResult !== null && listResult.length < 1 && (
        <p className="no-data">
          Sorry, we didn't find any users matching this search
        </p>
      )}
    </ul>
  );
};

export default ListResult;
