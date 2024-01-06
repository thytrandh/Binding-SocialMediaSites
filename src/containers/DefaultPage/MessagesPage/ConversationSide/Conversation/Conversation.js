import "./Conversation.scss";
import ItemReceivedMessages from "./ReceivedMessages/ItemReceivedMessages";
import ItemSentMessages from "./SentMessages/ItemSentMessages";
import MessageComposeBox from "./MessageComposeBox/MessageComposeBox";
import { useContext, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../../../../../context/dataContext";
import { useParams } from "react-router-dom";
import { getConversation } from "../../../../../redux/slice/Messages/messagesSlice";
import { MessagesContext } from "../../Context/messageContext";
import OutsideClickHandler from "react-outside-click-handler";

const Conversation = () => {
  const { searchOpen, setSearchOpen } = useContext(MessagesContext);
  const { userData } = useContext(DataContext);
  const [conversation, setConversation] = useState([]);
  const getConversationData = useSelector(
    (state) => state?.persistedReducer?.messages?.conversation?.data
  );

  useEffect(() => {
    if (getConversation !== null && getConversation !== undefined) {
      setConversation(getConversationData);
    } else {
      setConversation([]);
    }
  }, [getConversationData]);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    const userId = params.chatId;

    const intervalId = setInterval(() => {
      dispatch(
        getConversation({
          userId,
        })
      );
    }, 3000);

    return () => clearInterval(intervalId);
  }, [dispatch, params]);

  const [groupMessage, setGroupMessage] = useState([]);
  useEffect(() => {
    const groupDataByDate = (data) => {
      const groupedData = {};

      data.forEach((message) => {
        // Extract date from createTime
        const createDate = new Date(message.createTime).toLocaleDateString();

        // Check if the date is already a key in groupedData
        if (groupedData.hasOwnProperty(createDate)) {
          // If the date exists, push the message to the existing array
          groupedData[createDate].push(message);
        } else {
          // If the date doesn't exist, create a new array with the message
          groupedData[createDate] = [message];
        }
      });

      return groupedData;
    };
    if (conversation) {
      const groupedData = groupDataByDate(conversation);
      setGroupMessage(groupedData);
      //console.log(groupedData);
    }
  }, [conversation]);

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = new Date(dateString).toLocaleDateString(
      "en-US",
      options
    );
    return formattedDate;
  };

  var scrollToRef = useRef(null);
  const [searchInput, setInputSearch] = useState("");
  const handleSearch = (value) => {
    if (searchInput !== "") {
      const filter = conversation.filter((val) => {
        return val?.message
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      if (filter) {
        const itemMess = filter[0];
        //console.log("filter", filter);
        const itemRef = document.getElementById(itemMess?.id);
        const messagesContainer = scrollToRef.current;
        if (itemRef && messagesContainer) {
          itemRef.scrollIntoView({ behavior: "smooth" });
          const scrollPosition =
            itemRef.offsetTop - messagesContainer.offsetTop;
          messagesContainer.scrollTop = scrollPosition;

          const previousHighlightedItem = document.querySelector(
            ".highlighted"
          );
          if (previousHighlightedItem) {
            previousHighlightedItem.classList.remove("highlighted");
          }

          // Add the 'highlighted' class to the current highlighted item
          itemRef.classList.add("highlighted");
        }
      }
    }
  };

  return (
    <div className="conversation">
      <div className="conversation-content middle-box">
        {searchOpen && (
          <OutsideClickHandler
            onOutsideClick={() => {
              setSearchOpen(false);
            }}
          >
            <div className="search-message-box">
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
                  value={searchInput}
                  onChange={(e) => {
                    setInputSearch(e.target.value);
                    if (searchInput !== "") {
                      handleSearch(e.target.value);
                    }
                  }}
                />
              </form>
            </div>
          </OutsideClickHandler>
        )}

        {conversation && (
          <div
            className={searchOpen ? "messages searchActive" : "messages"}
            ref={scrollToRef}
          >
            {Object.keys(groupMessage).map((date) => (
              <div key={date}>
                <div className="dateGr">
                  <p className="date">{formatDate(date)}</p>
                </div>
                <>
                  {groupMessage[date].map((item) => (
                    <div className="item-mess-box" id={item.id}>
                      {item?.usender?.userId === userData?.id ? (
                        <ItemSentMessages
                          content={item?.message}
                          time={item?.createTime.slice(11, 16)}
                          imgUserAvt={
                            item?.usender?.avatar
                              ? item?.usender?.avatar
                              : "/images/DefaultPage/default-avatar.jpg"
                          }
                          image={item?.img?.imgLink}
                        />
                      ) : (
                        <ItemReceivedMessages
                          content={item?.message}
                          time={item?.createTime.slice(11, 16)}
                          imgUserAvt={
                            item?.usender?.avatar
                              ? item?.usender?.avatar
                              : "/images/DefaultPage/default-avatar.jpg"
                          }
                          image={item?.img?.imgLink}
                        />
                      )}
                    </div>
                  ))}
                </>
              </div>
            ))}
          </div>
        )}

        {/* {groupMessage.length > 0 &&
          groupMessage.map((item) => (
            <>
              {item?.usender?.userId === userData?.id ? (
                <ItemSentMessages
                  content={item?.message}
                  time={item?.createTime.slice(11, 16)}
                  imgUserAvt={
                    item?.usender?.avatar
                      ? item?.usender?.avatar
                      : "/images/DefaultPage/default-avatar.jpg"
                  }
                  image={item?.img?.imgLink}
                />
              ) : (
                <ItemReceivedMessages
                  content={item?.message}
                  time={item?.createTime.slice(11, 16)}
                  imgUserAvt={
                    item?.usender?.avatar
                      ? item?.usender?.avatar
                      : "/images/DefaultPage/default-avatar.jpg"
                  }
                  image={item?.img?.imgLink}
                />
              )}
            </>
          ))} */}
      </div>
      <MessageComposeBox />
    </div>
  );
};
export default Conversation;
