import { useDispatch } from "react-redux";
import Tick from "../../../../components/Tick/Tick";
import "../FriendsRequests/FriendsRequests.scss";
import { addFriend, cancelFriendRequest } from "../../../../redux/slice/User/friendSlice";
const FriendsRequests = ({ friends, resultSearch }) => {
  const dispatch = useDispatch();

  const handleConfirm = (friendId) => {
    dispatch(
      addFriend({
        friendId,
      })
    );
  };
  const handleDelete = (friendId) => {
    dispatch(
      cancelFriendRequest({
        friendId,
      })
    );
  };
  return (
    <div className="friends-requests">
      <div className="friends">
        {friends !== null ? (
          <>
            {friends.length > 0 ? (
              <>
                {resultSearch.map((friend) => (
                  <div key={friend.id} className="item-friend">
                    <img
                      src={
                        friend?.image?.imgLink
                          ? friend?.image?.imgLink
                          : "/images/DefaultPage/default-avatar.jpg"
                      }
                      alt=""
                      className="img-avt"
                    />
                    <div className="user-info">
                      <div className="username">
                        <p className="name">{`${friend?.firstName} ${friend?.lastName}`}</p>
                        <Tick />
                      </div>
                      <p className="email">
                        {friend?.email ? friend?.email : friend?.phone}
                      </p>
                      <div className="option-box">
                        <button
                          className="btn-option btn-confirm"
                          onClick={() => {
                            handleConfirm(friend?.id);
                          }}
                        >
                          Confirm
                        </button>
                        <button
                          className="btn-option btn-delete"
                          onClick={() => {
                            handleDelete(friend?.id);
                          }}
                        >
                          Delete
                        </button>
                      </div>
                      <div className="option-box option-box-2">
                        <div className="btn-add btn-option ">
                          <i class="fa-solid fa-plus"></i>
                        </div>
                        <div className="btn-delete btn-option">
                          <i class="fa-solid fa-xmark"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <p className="mess">There are no friends yet</p>
            )}
          </>
        ) : (
          <p className="mess">There are no friends yet</p>
        )}
      </div>
    </div>
  );
};
export default FriendsRequests;
