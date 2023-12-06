import { useContext } from "react";
import "../ArchiveProfile/ArchiveProfile.scss";
import { OpenShowFileContext } from "../context/openShowFileContext";
import ShowFileBox from "../ShowFileBox/ShowFileBox";
import { useState } from "react";

const ArchiveProfile = () => {
  const storyArchive = [
    {
      id: 0,
      content: "/images/Story/image/story-01.jpeg",
      type: "image",
      time: "2",
    },
    {
      id: 1,
      content: "/images/Story/image/story-02.jpeg",
      type: "image",
      time: "3",
    },
    {
      id: 2,
      content: "/images/Story/image/story-03.jpeg",
      type: "image",
      time: "1",
    },
    {
      id: 3,
      content: "/images/Story/image/story-04.jpeg",
      type: "image",
      time: "3",
    },
    {
      id: 4,
      content: "/images/Story/image/story-05.jpeg",
      type: "image",
      time: "3",
    },
    {
      id: 5,
      content: "/images/Story/video/video-01.mp4",
      type: "video",
      time: "3",
    },
    {
      id: 6,
      content: "/images/Story/video/video-02.mp4",
      type: "video",
      time: "3",
    },
  ];
  const { openFileBox, setOpenFileBox } = useContext(OpenShowFileContext);
  const [fileShow, setFileShow] = useState({
    type: null,
    source: null,
  });
  const  handleClickShowFile = (type, src) => {
    let updatedValue = {};
    updatedValue = { type: type, source: src };
    setFileShow(updatedValue);
  }
  return (
    <div className="archive-profile">
      <div className="top-box">
        <p className="title">Story Archive</p>
      </div>
      <div className="story-archive-box">
        <div className="stories">
          {storyArchive.length > 0 ? (
            <>
              {storyArchive.map((story) => (
                <div
                  key={story.id}
                  className="item-story"
                  onClick={() => {
                    handleClickShowFile(story.type, story.content);
                    setOpenFileBox(true);
                  }}
                >
                  {story.type === "image" ? (
                    <div className="img-story">
                      <img src={story.content} alt="" />
                    </div>
                  ) : (
                    <div className="video-story">
                      <video src={story.content} alt="" />
                    </div>
                  )}
                  <button className="btn-play">
                    <i class="fa-solid fa-play"></i>
                  </button>
                </div>
              ))}
            </>
          ) : (
            <p className="mess">No activity to show</p>
          )}
        </div>
      </div>
      {openFileBox && <ShowFileBox file={fileShow} />}
    </div>
  );
};

export default ArchiveProfile;
