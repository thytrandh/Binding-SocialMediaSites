import "./ConversationEmpty.scss";
const ConversationEmpty = () => {
  return (
    <div className="conversation-empty">
      <div className="mess-box">
        <i class="fa-light fa-comments"></i>
        <p className="mess">Select a conversation to display messages</p>
      </div>
      <img
        src="/images/Messages/bg-conversation.jpg"
        alt=""
        className="img-bg"
      />
    </div>
  );
};

export default ConversationEmpty;
