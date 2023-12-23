import BannerAds from "../../../components/BannerAds/BannerAds";
import useWindowSize from "../../../library/hooks/useWindowSize";
import "../PostsManagement/PostsManagement.scss";

const PostsManagement = () => {
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
  const { width } = useWindowSize();
  return (
    <div className="posts-management-page">
      <BannerAds subject={"Posts Management"} desc={"View all posts"} />
      <div className="main-content">
        <div className="top-box">
          <p className="title">Posts Management</p>
        </div>
        <div className="table-box">
          <table className="table-content">
            <thead>
              <tr className="row-title">
                <th className="title">#</th>
                <th className="title">Name</th>
                {width >= 800 && <th className="title">Date Created</th>}
                {width > 576 && <th className="title">Detail</th>}
                <th className="title">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((item, idx) => (
                <tr key={item.id} className="item-content">
                  <th>{idx + 1}</th>
                  <th className="box-divide">
                    <div className="box-flex">
                      <img src={item.user?.avatar} alt="" className="img-avt" />
                      <p className="userName">{item.user?.username}</p>
                    </div>
                  </th>
                  {width >= 800 && <th>{item.time}</th>}
                  {width > 576 && (
                    <th className="th-button">
                      <button className="btn-see">See details</button>
                    </th>
                  )}
                  <th className="option">
                    <div className="option-box">
                      <div className="btn-hidden btn-option">
                        <i class="fa-duotone fa-eye"></i>
                      </div>
                      <div className="btn-delete btn-option">
                        <i class="fa-duotone fa-trash"></i>
                      </div>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PostsManagement;
