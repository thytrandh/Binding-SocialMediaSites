import Tick from "../../../../components/Tick/Tick";
import "../AllFriends/AllFriends.scss";

const AllFriends = ({ friends, resultSearch }) => {
  return (
    <div className="all-friends">
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
export default AllFriends;
