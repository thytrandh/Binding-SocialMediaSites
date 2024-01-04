import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../MessagesSide/MessagesSide.scss";
import { useDispatch, useSelector } from "react-redux";
import { getUserListFriend } from "../../../../redux/slice/User/friendSlice";
import { DataContext } from "../../../../context/dataContext";
import { MessagesContext } from "../Context/messageContext";
import { getConversation } from "../../../../redux/slice/Messages/messagesSlice";

const MessagesSide = () => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [friends, setFriends] = useState([]);
  const [resultSearch, setResultSearch] = useState([]);
  const { userData } = useContext(DataContext);
  const { setInfoChatUser } = useContext(MessagesContext);

  const handleFilterMessages = (value) => {
    const filter = friends.filter((val) => {
      const name = `${val?.firstName} ${val?.lastName}`;
      return name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    });
    if (filter.length > 0) {
      setResultSearch(filter);
    } else {
      setResultSearch(friends);
    }
  };

  const getAllFriend = useSelector(
    (state) => state.persistedReducer?.friend?.userListFriend?.data
  );

  useEffect(() => {
    if (getAllFriend !== null && getAllFriend !== undefined) {
      setFriends(getAllFriend);
      setResultSearch(friends);
    } else {
      setFriends([]);
      setResultSearch([]);
    }
  }, [getAllFriend, friends]);

  const dispatch = useDispatch();
  useEffect(() => {
    const userid = userData?.id;
    dispatch(getUserListFriend({ userid }));
  }, [dispatch, userData]);

  const params = useParams();
  const handleOpenConversation = (item) => {
    console.log("item", item);
    navigate(`/message/${item.id}`);
    setInfoChatUser({ ...item });
    const userId = params.chatId;
    dispatch(
      getConversation({
        userId,
      })
    );
  };

  return (
    <div className="messages-side-threads">
      <div className="searchbar friends-page-searchbar">
        <form action="#" className="search-box">
          <img
            src="/images/Icon/IconDropdown/Search.png"
            className="ic-search"
            alt=""
          />
          <input
            type="text"
            className="search-input"
            placeholder="Search Here"
            value={inputSearch}
            onChange={(e) => {
              setInputSearch(e.target.value);
              handleFilterMessages(e.target.value);
            }}
          />
        </form>
      </div>
      <p className="title">Chats</p>
      <div className="conversation-list-box">
        <div className="conversation-list">
          {friends.length > 0 && (
            <>
              {resultSearch.map((item) => (
                <div
                  key={item.id}
                  className="item-conversation"
                  onClick={() => {
                    handleOpenConversation(item);
                  }}
                >
                  <div className="conver-desc">
                    <img
                      src={
                        item?.image?.imgLink
                          ? item?.image?.imgLink
                          : "/images/DefaultPage/default-avatar.jpg"
                      }
                      alt=""
                      className="img-avt"
                    />
                    <div className="message-info">
                      <p className="userName">{`${item?.firstName} ${item?.lastName}`}</p>
                      <p className="mess-content">{item?.message}</p>
                    </div>
                  </div>
                  {/* <p className="time">{item.create}.ago</p> */}
                </div>
              ))}
            </>
          )}
        </div>
        <div className="userInfo-box">
          <img
            src={
              userData?.image?.imgLink
                ? userData?.image?.imgLink
                : "/images/DefaultPage/default-avatar.jpg"
            }
            alt=""
            className="img-avt"
          />
          <p className="userName">{`${userData?.firstName} ${userData?.lastName}`}</p>
        </div>
      </div>
    </div>
  );
};

export default MessagesSide;
