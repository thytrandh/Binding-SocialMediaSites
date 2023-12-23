import "../ReceivedMessages/ItemReceivedMessages.scss";

const ItemReceivedMessages = ({ content, time, imgUserAvt, files }) => {
  return (
    <div className="item-received-messages">
      <div className="item-received-messages-box">
        <img src={imgUserAvt} alt="" className="img-avt" />
        <div className="message-content">
          {content.length > 0 && (
            <div className="message-text">
              <p className="content">
                {content} <span className="time">{time}</span>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemReceivedMessages;
