import "./Conversation.scss";
import ItemReceivedMessages from "./ReceivedMessages/ItemReceivedMessages";
import ItemSentMessages from "./SentMessages/ItemSentMessages";
import MessageComposeBox from "./MessageComposeBox/MessageComposeBox";
import { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DataContext } from "../../../../../context/dataContext";
import { useParams } from "react-router-dom";
import { getConversation } from "../../../../../redux/slice/Messages/messagesSlice";

const Conversation = () => {
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

  return (
    <div className="conversation">
      <div className="conversation-content middle-box">
        {conversation &&
          conversation.map((item) => (
            <>
              {item?.sender?.userId === userData?.id ? (
                <ItemSentMessages
                  content={item?.message}
                  time={item?.time.slice(0, 10)}
                  imgUserAvt={
                    item?.sender?.avatar
                      ? item?.sender?.avatar
                      : "/images/DefaultPage/default-avatar.jpg"
                  }
                />
              ) : (
                <ItemReceivedMessages
                  content={item?.message}
                  time={item?.time.slice(0, 10)}
                  imgUserAvt={
                    item?.sender?.avatar
                      ? item?.sender?.avatar
                      : "/images/DefaultPage/default-avatar.jpg"
                  }
                />
              )}
            </>
          ))}
      </div>
      <MessageComposeBox />
    </div>
  );
};
export default Conversation;
