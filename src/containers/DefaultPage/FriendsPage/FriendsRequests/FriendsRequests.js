import Tick from "../../../../components/Tick/Tick";
import "../FriendsRequests/FriendsRequests.scss";
const FriendsRequests = ({ friends, resultSearch }) => {
  return (
    <div className="friends-requests">
      <div className="friends">
        {friends.length > 0 ? (
          <>
            {resultSearch.map((friend) => (
              <div key={friend.id} className="item-friend">
                <img src={friend.avatar} alt="" className="img-avt" />
                <div className="user-info">
                  <div className="username">
                    <p className="name">{friend.userName}</p>
                    <Tick />
                  </div>
                  <p className="email">{friend.email}</p>
                  <div className="option-box">
                    <button className="btn-option btn-confirm">Confirm</button>
                    <button className="btn-option btn-delete">Delete</button>
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
      </div>
    </div>
  );
};
export default FriendsRequests;
