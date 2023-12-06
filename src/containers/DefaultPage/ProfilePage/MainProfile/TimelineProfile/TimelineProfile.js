import Posts from "../../../../../components/Posts/Posts";
import "../TimelineProfile/TimelineProfile.scss";
const TimelineProfile = ({ accountOwner }) => {
  const galleryShow = [
    {
      id: 0,
      image: "/images/Profile/Gallery/1.jpg",
    },
    {
      id: 1,
      image: "/images/Profile/Gallery/2.jpg",
    },
    {
      id: 2,
      image: "/images/Profile/Gallery/3.jpg",
    },
    {
      id: 3,
      image: "/images/Profile/Gallery/4.jpg",
    },
    {
      id: 4,
      image: "/images/Profile/Gallery/5.jpg",
    },
    {
      id: 5,
      image: "/images/Profile/Gallery/6.jpg",
    },
    {
      id: 6,
      image: "/images/Profile/Gallery/7.jpg",
    },
    {
      id: 7,
      image: "/images/Profile/Gallery/8.jpg",
    },
    {
      id: 8,
      image: "/images/Profile/Gallery/9.jpg",
    },
  ];
  const friendsShow = [
    {
      id: 0,
      userName: "Jenny Wilson",
      avatar: "/images/User/user-08.jpg",
    },
    {
      id: 1,
      userName: "Philip Ninomar",
      avatar: "/images/User/user-07.jpg",
    },
    {
      id: 3,
      userName: "Iris Cana",
      avatar: "/images/User/user-06.jpg",
    },
    {
      id: 4,
      userName: "Cana Diket",
      avatar: "/images/User/user-05.jpg",
    },
    {
      id: 5,
      userName: "Cris Wilson",
      avatar: "/images/User/user-04.jpg",
    },
    {
      id: 6,
      userName: "Anana Crew",
      avatar: "/images/User/user-09.jpg",
    },
    {
      id: 7,
      userName: "Anana Zona",
      avatar: "/images/User/user-10.jpg",
    },
    {
      id: 8,
      userName: "Ariana Grande",
      avatar: "/images/User/user-profile.jpg",
    },
  ];
  const posts = [
    {
      id: 0,
      user: {
        username: "Aaron Jones",
        avatar: "/images/User/user-02.jpg",
      },
      status: "posted an update in the timeline",
      time: "a year ago",
      content: "It is really a great moment.",
      images: [{ src: "/images/Posts/Posts1/img-01.jpeg" }],
      videos: [],
      react: [
        {
          idUser: 0,
          username: "Marvin McKinney",
          emojiCode: 1,
        },
        {
          idUser: 1,
          username: "Jenny Wilson",
          emojiCode: 1,
        },
        {
          idUser: 3,
          username: "Aaron Jones",
          emojiCode: 4,
        },
      ],
      comment: [
        {
          idComment: 0,
          user: {
            idUser: 0,
            username: "Marvin McKinney",
            avatar: "/images/User/user-01.jpg",
          },
          time: "5 month",
          content: "Believe in yourself and you will be unstoppable.",
        },
        {
          idComment: 1,
          user: {
            idUser: 1,
            username: "Jenny Wilson",
            avatar: "/images/User/user-02.jpg",
          },
          time: "5 month",
          content: "superb!! Great Work..",
        },
      ],
    },
    {
      id: 1,
      user: {
        username: "Jenny Wilson",
        avatar: "/images/User/user-03.jpg",
      },
      status: "posted an update in the timeline",
      time: "a month ago",
      content:
        "Squad means family and family means nobody gets left behind.Squad means family and family means nobody gets left behind.Squad means family and family means nobody gets left behind.Squad means family and family means nobody gets left behind.",
      images: [
        {
          src: "/images/Posts/Posts2/img-01.jpg",
        },
        {
          src: "/images/Posts/Posts2/img-02.jpg",
        },
        {
          src: "/images/Posts/Posts2/img-03.jpg",
        },
        {
          src: "/images/Posts/Posts2/img-04.jpg",
        },
      ],
      videos: [
        {
          src: "/images/Posts/Posts2/video-01.mp4",
        },
      ],
      react: [
        {
          idUser: 0,
          username: "Marvin McKinney",
          emojiCode: 1,
        },
        {
          idUser: 1,
          username: "Jenny Wilson",
          emojiCode: 1,
        },
      ],
      comment: [
        {
          idComment: 0,
          user: {
            idUser: 0,
            username: "Ariana Grand",
            avatar: "/images/User/user-profile.jpg",
          },
          time: "5 month",
          content: "Believe in yourself and you will be unstoppable.",
        },
        {
          idComment: 1,
          user: {
            idUser: 1,
            username: "David McKinney",
            avatar: "/images/User/user-05.jpg",
          },
          time: "5 month",
          content: "superb!! Great Work..",
        },
      ],
    },
    {
      id: 2,
      user: {
        username: "Ariana Grande",
        avatar: "/images/User/user-04.jpg",
      },
      status: "posted an update in the timeline",
      time: "a year ago",
      content:
        "“Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day.”",
      images: [{ src: "/images/Posts/Posts3/img-01.jpeg" }],
      videos: [],
      react: [
        {
          idUser: 0,
          username: "Marvin McKinney",
          emojiCode: 1,
        },
        {
          idUser: 1,
          username: "Jenny Wilson",
          emojiCode: 2,
        },
        {
          idUser: 3,
          username: "Aaron Jones",
          emojiCode: 3,
        },
      ],
      comment: [],
    },
    {
      id: 3,
      user: {
        username: "David McCallum",
        avatar: "/images/User/user-05.jpg",
      },
      status: "posted an update in the timeline",
      time: "a year ago",
      content: "Memories you create, and we capture..😍",
      images: [
        {
          src: "/images/Posts/Posts4/img-01.jpg",
        },
        {
          src: "/images/Posts/Posts4/img-02.jpg",
        },
      ],
      videos: [{ src: "/images/Posts/Posts4/video-01.mp4" }],
      react: [
        {
          idUser: 0,
          username: "Marvin McKinney",
          emojiCode: 1,
        },
        {
          idUser: 1,
          username: "Jenny Wilson",
          emojiCode: 2,
        },
        {
          idUser: 3,
          username: "Aaron Jones",
          emojiCode: 3,
        },
      ],
      comment: [],
    },
  ];
  return (
    <div className="timeline-profile">
      <div className="detail">
        <div className="gallery-show-box">
          <div className="top-box">
            <p className="subject">Gallery</p>
            <p className="view">View more</p>
          </div>
          <div className="gallery">
            {galleryShow.length > 0 ? (
              <div
                className={
                  galleryShow.length > 0 && galleryShow.length <= 3
                    ? "list-image h-1row"
                    : galleryShow.length > 3 && galleryShow.length <= 6
                    ? "list-image h-2row"
                    : "list-image h-3row"
                }
              >
                {galleryShow.map((image) => (
                  <img
                    key={image.id}
                    src={image.image}
                    alt=""
                    className="item-img"
                  />
                ))}
              </div>
            ) : (
              <p className="mess">There are no images yet</p>
            )}
          </div>
        </div>
        <div className="friends-show-box">
          <div className="top-box">
            <p className="subject">Friends</p>
            <p className="view">View more</p>
          </div>
          <div className="friends">
            {friendsShow.length > 0 ? (
              <div
                className={
                  friendsShow.length > 0 && friendsShow.length <= 3
                    ? "list-users h-1row"
                    : friendsShow.length > 3 && friendsShow.length <= 6
                    ? "list-users h-2row"
                    : "list-users h-3row"
                }
              >
                {friendsShow.map((user) => (
                  <div className="item-user">
                    <img
                      key={user.id}
                      src={user.avatar}
                      alt=""
                      className="img-avt"
                    />
                    <p className="username">{user.userName}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="mess">There are no friends yet</p>
            )}
          </div>
        </div>
      </div>
      <div className="content">
        <Posts accountOwner={accountOwner} posts={posts} />
      </div>
    </div>
  );
};

export default TimelineProfile;
