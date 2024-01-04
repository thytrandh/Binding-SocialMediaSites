import { useContext, useEffect, useState } from "react";
import Posts from "../../../../../components/Posts/Posts";
import "../TimelineProfile/TimelineProfile.scss";
import { DataContext } from "../../../../../context/dataContext";
import { useDispatch, useSelector } from "react-redux";
import { getListFriend } from "../../../../../redux/slice/User/friendSlice";
const TimelineProfile = ({ accountOwner }) => {
  const { userData } = useContext(DataContext);
  const getCurrentMember = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentMember?.data
  );

  const [galleryShow, setGalleryShow] = useState([]);
  const [posts, setPosts] = useState([]);

  const getListFriendData = useSelector(
    (state) => state.persistedReducer?.friend?.listFriend?.data
  );
  const [listFriend, setListFriend] = useState([]);

  useEffect(() => {
    if (getListFriendData !== null && getListFriendData !== undefined) {
      setListFriend(getListFriendData);
    }
  }, [getListFriendData]);

  const dispatch = useDispatch();

  useEffect(() => {
    if (accountOwner) {
      const userId = userData?.id;
      dispatch(getListFriend({ userId }));
    } else {
      const userId = getCurrentMember?.id;
      dispatch(getListFriend({ userId }));
    }
  }, [accountOwner, dispatch, userData, getCurrentMember]);

  useEffect(() => {
    const hanldeInformation = () => {
      if (accountOwner) {
        if (userData?.images !== null && userData?.images !== undefined) {
          setGalleryShow(userData?.images);
        }
        if (userData?.posts !== null && userData?.posts !== undefined) {
          setPosts(userData?.posts);
        } else {
          setPosts([]);
        }
      } else {
        if (
          getCurrentMember?.images !== null &&
          getCurrentMember?.images !== undefined
        ) {
          setGalleryShow(getCurrentMember?.images);
        }
        if (
          getCurrentMember?.posts !== null &&
          getCurrentMember?.posts !== undefined
        ) {
          setPosts(getCurrentMember?.posts);
        } else {
          setPosts([]);
        }
      }
    };
    hanldeInformation();
  }, [accountOwner, getCurrentMember, userData]);

  useEffect(() => {
    const handleFilterPosts = () => {
      if (accountOwner) {
        if (posts.length > 0) {
          const filter = posts.filter((val) => val?.pagePost === null);
          if (filter.length > 0) {
            setPosts(filter);
          }
        }
      }
    };
    handleFilterPosts();
  }, [posts, userData, accountOwner, getCurrentMember]);

  return (
    <div className="timeline-profile">
      <div className="detail">
        <div className="gallery-show-box">
          <div className="top-box">
            <p className="subject">Gallery</p>
            <p className="view">View more</p>
          </div>
          <div className="gallery">
            {galleryShow !== null ? (
              <div
                className={
                  galleryShow.length > 0 && galleryShow.length <= 3
                    ? "list-image h-1row"
                    : galleryShow.length > 3 && galleryShow.length <= 6
                    ? "list-image h-2row"
                    : "list-image h-3row"
                }
              >
                {galleryShow
                  .map((image) => (
                    <img
                      key={image.id}
                      src={image.imgLink}
                      alt=""
                      className="item-img"
                    />
                  ))
                  .filter((e, k) => k < 9)}
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
            {listFriend !== null && (
              <>
                {listFriend.length > 0 ? (
                  <div
                    className={
                      listFriend.length > 0 && listFriend.length <= 3
                        ? "list-users h-1row"
                        : listFriend.length > 3 && listFriend.length <= 6
                        ? "list-users h-2row"
                        : "list-users h-3row"
                    }
                  >
                    {listFriend
                      .map((user) => (
                        <div className="item-user">
                          <img
                            key={user.id}
                            src={
                              user?.image
                                ? user?.image?.imgLink
                                : "/images/DefaultPage/default-avatar.jpg"
                            }
                            alt=""
                            className="img-avt"
                          />
                          <p className="username">{`${user?.firstName} ${user?.lastName}`}</p>
                        </div>
                      ))
                      .filter((e, k) => k < 9)}
                  </div>
                ) : (
                  <p className="mess">There are no friends yet</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="content">
        {posts.length > 0 ? (
          <Posts accountOwner={accountOwner} posts={posts} />
        ) : (
          <p className="mess-center">There are no posts yet</p>
        )}
      </div>
    </div>
  );
};

export default TimelineProfile;
