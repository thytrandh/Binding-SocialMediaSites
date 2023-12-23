import "./Conversation.scss";
import ItemReceivedMessages from "./ReceivedMessages/ItemReceivedMessages";
import ItemSentMessages from "./SentMessages/ItemSentMessages";
import MessageComposeBox from "./MessageComposeBox/MessageComposeBox";
const Conversation = () => {
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
