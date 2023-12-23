import "../SentMessages/ItemSentMessages.scss";
const ItemSentMessages = ({ content, time, imgUserAvt, files }) => {
  return (
    <div className="item-sent-messages">
      <div className="item-sent-messages-box">
        <div className="message-content">
          {content.length > 0 && (
            <div className="message-text">
              <p className="content">
                {content} <span className="time">{time}</span>
              </p>
            </div>
          )}
        </div>

        <img src={imgUserAvt} alt="" className="img-avt" />
      </div>
    </div>
  );
};

export default ItemSentMessages;
