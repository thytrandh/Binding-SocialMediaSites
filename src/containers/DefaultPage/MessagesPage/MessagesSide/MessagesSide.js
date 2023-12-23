import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../MessagesSide/MessagesSide.scss";

const MessagesSide = ({ messages }) => {
  const navigate = useNavigate();
  const [inputSearch, setInputSearch] = useState("");
  const [resultSearch, setResultSearch] = useState([...messages]);

  const handleFilterMessages = (value) => {
    const filter = messages.filter((val) =>
      val.userInfo?.userName
        .toLocaleLowerCase()
        .includes(value.toLocaleLowerCase())
    );
    if (filter.length > 0) {
      setResultSearch(filter);
    } else {
      setResultSearch(messages);
    }
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
          {resultSearch.map((item) => (
            <div
              key={item.id}
              className="item-conversation"
              onClick={() => {
                navigate(`/message/${item.id}`);
              }}
            >
              <div className="conver-desc">
                <img src={item.userInfo.avatar} alt="" className="img-avt" />
                <div className="message-info">
                  <p className="userName">{item.userInfo.userName}</p>
                  <p className="mess-content">{item.message}</p>
                </div>
              </div>
              <p className="time">{item.time}.ago</p>
            </div>
          ))}
        </div>
        <div className="userInfo-box">
          <img src="/images/User/user-01.jpg" alt="" className="img-avt" />
          <p className="userName">Marvin McKinney</p>
        </div>
      </div>
    </div>
  );
};

export default MessagesSide;
