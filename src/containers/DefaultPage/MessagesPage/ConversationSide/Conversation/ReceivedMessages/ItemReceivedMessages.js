import "../ReceivedMessages/ItemReceivedMessages.scss";

const ItemReceivedMessages = ({ content, time, imgUserAvt, image }) => {
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
          {image !== undefined && (
            <div className="img-box-mess">
              <img src={image} alt="" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemReceivedMessages;
