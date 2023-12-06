import "../FriendsSuggestions/FriendsSuggestions.scss";
const FriendsSuggestions = () => {
  const usersSuggestions = [
    {
      id: 0,
      avatar: "/images/User/user-05.jpg",
      userName: "Ariana Grande",
      email: "marvin@gmail.com",
    },
    {
      id: 1,
      avatar: "/images/User/user-06.jpg",
      userName: "Freya Davies",
      email: "freya@gmail.com",
    },
    {
      id: 2,
      avatar: "/images/User/user-07.jpg",
      userName: "Aaron Jones",
      email: "aaron@gmail.com",
    },
    {
      id: 3,
      avatar: "/images/User/user-08.jpg",
      userName: "David McKinney",
      email: "david@gmail.com",
    },
  ];
  return (
    <div className="friends-suggestions">
      <p className="title">Suggestion For You</p>
      <ul className="users-suggestion">
        {usersSuggestions &&
          usersSuggestions.map((user) => (
            <li key={user.id} className="item-user">
              <div className="avatar">
                <img src={user.avatar} alt="" className="img-avt" />
              </div>
              <div className="item-desc">
                <div className="user-info">
                  <p className="username">{user.userName}</p>
                  <p className="email">{user.email}</p>
                </div>
                <div className="option-box">
                  <div className="btn-add btn-option ">
                    <i class="fa-solid fa-plus"></i>
                  </div>
                  <div className="btn-delete btn-option">
                    <i class="fa-solid fa-xmark"></i>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default FriendsSuggestions;
