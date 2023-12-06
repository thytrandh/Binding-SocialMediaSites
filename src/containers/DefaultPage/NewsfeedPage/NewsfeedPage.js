import "../NewsfeedPage/NewsfeedPage.scss";
import CreatePost from "../../../components/CreatePost/CreatePost";
import Posts from "../../../components/Posts/Posts";
import StoriesStream from "./StoriesStream/StoriesStream";
import ActivityUser from "./ActivityUser/ActivityUser";
import FriendsSuggestions from "./FriendsSuggestions/FriendsSuggestions";
import Advertisement from "./Advertisement/Advertisement";
import ServiceAdvertisement from "./ServiceAdvertisement/ServiceAdvertisement";

const NewsfeedPage = () => {
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
    <div className="newsfeed-page">
      <div className="sliderbar-activity">
        <StoriesStream />
        <CreatePost />
        <Posts posts={posts}/>
      </div>
      <div className="sliderbar-service">
        <ServiceAdvertisement />
        <ActivityUser />
        <FriendsSuggestions />
        <Advertisement />
      </div>
    </div>
  );
};

export default NewsfeedPage;
