import Carousel from "react-elastic-carousel";
import "../StoriesStream/StoriesStream.scss";
import StoriesFeed from "./StoriesFeed/StoriesFeed";
import { useContext, useState } from "react";
import { OpenStoriesFeed } from "./context/openStoriesContext";
import CreateStory from "./CreateStory/CreateStory";
import { OpenCreateStory } from "./context/openCreateStory";
import { DataContext } from "../../../../context/dataContext";

const StoriesStream = () => {
  const stories = [
    {
      id: 0,
      userInfo: {
        id: 0,
        avatar: "/images/User/user-02.jpg",
        userName: "Jenny Wilson",
      },
      content: "/images/Story/image/story-01.jpeg",
      type: "image",
      time: "2",
      isRead: false,
      isLike: false,
      isActive: false,
    },
    {
      id: 1,
      userInfo: {
        id: 1,
        avatar: "/images/User/user-03.jpg",
        userName: "Freya Davies",
      },
      content: "/images/Story/image/story-02.jpeg",
      type: "image",
      time: "3",
      isRead: false,
      isLike: false,
      isActive: false,
    },
    {
      id: 2,
      userInfo: {
        id: 2,
        avatar: "/images/User/user-04.jpg",
        userName: "Aaron Jones",
      },
      content: "/images/Story/image/story-03.jpeg",
      type: "image",
      time: "4",
      isRead: false,
      isLike: false,
      isActive: false,
    },
    {
      id: 3,
      userInfo: {
        id: 3,
        avatar: "/images/User/user-05.jpg",
        userName: "Ariene McCoy",
      },
      content: "/images/Story/image/story-04.jpeg",
      type: "image",
      time: "5",
      isRead: false,
      isLike: false,
      isActive: false,
    },
    {
      id: 4,
      userInfo: {
        id: 4,
        avatar: "/images/User/user-06.jpg",
        userName: "Alex Fob",
      },
      content: "/images/Story/image/story-05.jpeg",
      type: "image",
      time: "6",
      isRead: false,
      isLike: false,
      isActive: false,
    },
    {
      id: 5,
      userInfo: {
        id: 5,
        avatar: "/images/User/user-07.jpg",
        userName: "Ariene McCoy",
      },
      content: "/images/Story/video/video-01.mp4",
      type: "video",
      isRead: false,
      isLike: false,
      isActive: false,
    },
    {
      id: 6,
      userInfo: {
        id: 6,
        avatar: "/images/User/user-08.jpg",
        userName: "Ariene Grand",
      },
      content: "/images/Story/video/video-02.mp4",
      type: "video",
      isRead: false,
      isLike: false,
      isActive: false,
    },
  ];

  const breakPoints = [
    { width: 1, itemsToShow: 4 },
    { width: 400, itemsToShow: 5 },
    { width: 460, itemsToShow: 6 },
    { width: 470, itemsToShow: 5 },
    { width: 500, itemsToShow: 6 },
    { width: 590, itemsToShow: 7 },
  ];

  const [idStoryShow, setIdStoryShow] = useState(null);
  const [openStoriesFeed, setOpenStoriesFeed] = useState(false);
  const [openCreateStory, setOpenCreateStory] = useState(false);

  const { userData } = useContext(DataContext);

  return (
    <>
      <div className="story-stream">
        <div className="story-slider">
          <div
            className="create-story"
            onClick={() => {
              setOpenCreateStory(true);
            }}
          >
            <div className="avatar-box">
              <img
                src={
                  userData?.image?.imgLink 
                    ? userData?.image?.imgLink
                    : "/images/DefaultPage/default-avatar.jpg"
                }
                alt=""
                className="avatar"
              />
              <div className="add-badge">
                <i class="fa-regular fa-plus"></i>
              </div>
            </div>
            <p className="title">Add story</p>
          </div>
          <ul className="stories">
            {/* <Carousel
              showEmptySlots
              enableSwipe={true}
              enableMouseSwipe={true}
              itemPadding={[0, 10]}
              breakPoints={breakPoints}
              showArrows={false}
              pagination={false}
            > */}
              {stories.map((item) => (
                <li
                  key={item.id}
                  className="item-story"
                  onClick={() => {
                    setIdStoryShow(item.id);
                    setOpenStoriesFeed(true);
                  }}
                >
                  <div className="avatar-box">
                    <img src={item.userInfo.avatar} alt="" className="avatar" />
                  </div>
                  <p className="name">{item.userInfo.userName}</p>
                </li>
              ))}
            {/* </Carousel> */}
          </ul>
        </div>
      </div>
      <OpenStoriesFeed.Provider value={{ openStoriesFeed, setOpenStoriesFeed }}>
        {openStoriesFeed && (
          <StoriesFeed stories={stories} storyId={idStoryShow} />
        )}
      </OpenStoriesFeed.Provider>
      <OpenCreateStory.Provider value={{ openCreateStory, setOpenCreateStory }}>
        {openCreateStory && <CreateStory />}
      </OpenCreateStory.Provider>
    </>
  );
};
export default StoriesStream;
