import "../SentMessages/ItemSentMessages.scss";
const ItemSentMessages = ({ content, time, imgUserAvt, image }) => {
  return (
    <div className="item-sent-messages">
      <div className="item-sent-messages-box">
        <div className="message-content">
          {content !== undefined && (
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

        <img src={imgUserAvt} alt="" className="img-avt" />
      </div>
    </div>
  );
};

export default ItemSentMessages;
