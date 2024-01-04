import "../NewsfeedPage/NewsfeedPage.scss";
import CreatePost from "../../../components/CreatePost/CreatePost";
import ActivityUser from "./ActivityUser/ActivityUser";
// import FriendsSuggestions from "./FriendsSuggestions/FriendsSuggestions";
import Advertisement from "./Advertisement/Advertisement";
import ServiceAdvertisement from "./ServiceAdvertisement/ServiceAdvertisement";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";
import { getNewsfeed } from "../../../redux/slice/Posts/postsSlice";
import Posts from "../../../components/Posts/Posts";
import { getListActiveFriend } from "../../../redux/slice/User/friendSlice";

const NewsfeedPage = () => {
  const { userData } = useContext(DataContext);

  const newfeedsData = useSelector(
    (state) => state?.persistedReducer?.userPosts?.newsfeed?.data
  );
  const [newfeeds, setNewFeeds] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsfeed());
  }, [dispatch]);

  useEffect(() => {
    if (newfeedsData !== null && newfeedsData !== undefined) {
      setNewFeeds(newfeedsData);
    } else setNewFeeds([]);
  }, [newfeedsData]);

  useEffect(() => {
    dispatch(getListActiveFriend());
  }, [dispatch]);

  useEffect(() => {
    if (newfeeds.length > 0) {
      const removeDuplicates = () => {
        const res = newfeeds.filter(function (item, index) {
          return (
            index ===
            newfeeds.findIndex(function (obj) {
              return JSON.stringify(item.id) === JSON.stringify(obj.id);
            })
          );
        });
        // console.log("res", res);
        setNewFeeds(res);
        return;
      };
      removeDuplicates();
    }
  }, [ setNewFeeds, newfeeds]);

  return (
    <div className="newsfeed-page">
      <div className="sliderbar-activity">
        {/* <StoriesStream /> */}
        <CreatePost
          userInfo={{
            userId: userData?.id,
            userName: ` ${userData?.firstName} ${userData?.lastName}`,
            avatar: userData?.image?.imgLink,
          }}
          postOnPage={false}
        />
        {newfeeds.length > 0 && <Posts posts={newfeeds} />}
      </div>
      <div className="sliderbar-service">
        <ServiceAdvertisement />
        <ActivityUser />
        {/* <FriendsSuggestions /> */}
        <Advertisement />
      </div>
    </div>
  );
};

export default NewsfeedPage;
