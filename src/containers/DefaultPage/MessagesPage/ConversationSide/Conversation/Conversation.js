import "./Conversation.scss";
import ItemReceivedMessages from "./ReceivedMessages/ItemReceivedMessages";
import ItemSentMessages from "./SentMessages/ItemSentMessages";
import MessageComposeBox from "./MessageComposeBox/MessageComposeBox";
// import { useEffect, useState } from "react";
// import Stomp from 'stompjs';
// import SockJS from "sockjs-client";
const Conversation = () => {
  // const [messages, setMessages] = useState([]);
  // const [message, setMessage] = useState("");
  // const [nickname, setNickname] = useState("");
  // const [stompClient, setStompClient] = useState(null);

  // useEffect(() => {
  //   const socket = new SockJS("http://localhost:5000/ws");
  //   const client = Stomp.over(socket);

  //   client.connect({}, () => {
  //     client.subscribe("/topic/messages", (message) => {
  //       const receivedMessage = JSON.parse(message.body);
  //       setMessages((prevMessages) => [...prevMessages, receivedMessage]);
  //     });
  //   });

  //   setStompClient(client);

  //   return () => {
  //     client.disconnect();
  //   };
  // }, []); 

  return (
    <div className="conversation">
      <div className="conversation-content middle-box">
        <ItemReceivedMessages
          content={"Helo!"}
          time={"16:00"}
          imgUserAvt={"/images/User/user-03.jpg"}
        />
        <ItemSentMessages
          content={
            " I hope my parents agree to allow me to go for the trip. The amount is a bit high."
          }
          time={"16:10"}
          imgUserAvt={"/images/User/user-01.jpg"}
        />
        <ItemSentMessages
          content={"Good morning!"}
          time={"16:10"}
          imgUserAvt={"/images/User/user-01.jpg"}
        />
        <ItemReceivedMessages
          content={" I will have to ask my father today itself for the money."}
          time={"16:20"}
          imgUserAvt={"/images/User/user-03.jpg"}
        />
        <ItemSentMessages
          content={" I hope my parents agree to allow me to go for the trip."}
          time={"16:10"}
          imgUserAvt={"/images/User/user-01.jpg"}
        />
      </div>
      <MessageComposeBox />
    </div>
  );
};
export default Conversation;
