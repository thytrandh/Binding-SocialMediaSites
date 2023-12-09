import Tick from "../../../../components/Tick/Tick";
import "../SentRequests/SentRequests.scss";
import useWindowSize from "../../../../library/hooks/useWindowSize";

const SentRequests = ({ friends, resultSearch }) => {
  const { width } = useWindowSize();
  return (
    <div className="sent-requests">
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
                    <button className="btn-option btn-cancel">
                      {width > 950 && width < 1100
                        ? "Cancel"
                        : "Cancel requests"}
                    </button>
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

export default SentRequests;
