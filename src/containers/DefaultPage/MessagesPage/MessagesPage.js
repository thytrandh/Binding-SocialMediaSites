import { useEffect, useState } from "react";
import "../MessagesPage/MessagesPage.scss";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import MessagesSide from "./MessagesSide/MessagesSide";
const MessagesPage = () => {
  const [messages, setMessages] = useState([
    {
      id: 0,
      userInfo: {
        id: 0,
        userName: "Jenny Wilson",
        avatar: "/images/User/user-08.jpg",
        email: "jennyWilson@gmail.com",
      },
      message:
        "We should make use of this trip to learn the maximum possible about the places we are visiting.",
      time: "2h",
    },

    {
      id: 1,
      userInfo: {
        id: 1,
        userName: "Philip Ninomar",
        avatar: "/images/User/user-07.jpg",
        email: "philipNinomar@gmail.com",
      },

      message: "That's great, see you soon",
      time: "3h",
    },
    {
      id: 3,
      userInfo: {
        id: 3,
        userName: "Iris Cana",
        avatar: "/images/User/user-06.jpg",
        email: "irisCana@gmail.com",
      },
      message:
        "We should make use of this trip to learn the maximum possible about the places we are visiting.",
      time: "4h",
    },
    {
      id: 4,
      userInfo: {
        id: 4,
        userName: "Cana Diket",
        avatar: "/images/User/user-05.jpg",
        email: "jennyWilson@gmail.com",
      },
      message: "That's great, see you soon",
      time: "4m",
    },
    {
      id: 5,
      userInfo: {
        id: 5,
        userName: "Cris Wilson",
        avatar: "/images/User/user-04.jpg",
        email: "jennyWilson@gmail.com",
      },
      message: "Good morning",
      time: "4m",
    },
    {
      id: 6,
      userInfo: {
        id: 6,
        userName: "Anana Crew",
        avatar: "/images/User/user-09.jpg",
        email: "jennyWilson@gmail.com",
      },
      message: "He sờ lô, hơ sờ li li",
      time: "4m",
    },
    {
      id: 7,
      userInfo: {
        id: 7,
        userName: "Anana Zona",
        avatar: "/images/User/user-10.jpg",
        email: "jennyWilson@gmail.com",
      },
      message: "He sờ lô, hơ sờ li li",
      time: "4h",
    },
    {
      id: 8,
      userInfo: {
        id: 8,
        userName: "Ariana Grande",
        avatar: "/images/User/user-profile.jpg",
        email: "jennyWilson@gmail.com",
      },
      message: "He sờ lô, hơ sờ li li",
      time: "5h",
    },
  ]);

  const [infoChatUser, setInfoChatUser] = useState("");

  const navigate = useNavigate();

  const params = useParams();
  const chatId = Number(params.chatId);
  const location = useLocation();

  useEffect(() => {
    const handleConversationNavigate = () => {
      const filterConversation = messages.filter(
        (val) => val.userInfo?.id === chatId
      );
      setInfoChatUser(filterConversation);
      setMessages(messages);
    };
    handleConversationNavigate();
  }, [location, chatId, messages]);

  return (
    <div className="messages-page">
      <MessagesSide messages={messages} />
      <div className="conversation-side-thread">
        <div
          className={
            infoChatUser.length > 0
              ? "top-header-conversation"
              : "top-header-conversation flex-end"
          }
        >
          {infoChatUser.length > 0 && (
            <div className="left-top-header">
              <button
                className="btn-back"
                onClick={() => {
                  navigate("/message");
                }}
              >
                <i class="fa-solid fa-chevron-left"></i>
              </button>
              <div className="user-conversation">
                <img
                  src={infoChatUser[0]?.userInfo?.avatar}
                  alt=""
                  className="img-avt"
                />
                <div className="user-desc">
                  <p className="userName">
                    {infoChatUser[0]?.userInfo?.userName}
                  </p>
                  <p className="status">Active</p>
                </div>
              </div>
            </div>
          )}

          <button className="btn-size">
            <i class="fa-light fa-arrow-up-right-and-arrow-down-left-from-center"></i>
          </button>
        </div>
        <div className="conversation-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;
