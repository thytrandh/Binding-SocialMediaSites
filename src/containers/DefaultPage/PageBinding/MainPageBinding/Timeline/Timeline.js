import { useEffect, useState } from "react";
import CreatePost from "../../../../../components/CreatePost/CreatePost";
import "../Timeline/Timeline.scss";
import { useDispatch, useSelector } from "react-redux";
import Posts from "../../../../../components/Posts/Posts";
import { getMemberPage } from "../../../../../redux/slice/Pages/pagesSlice";
const Timeline = ({ pageOwner }) => {
  // const galleryShow = [
  //   {
  //     id: 0,
  //     image:
  //       "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/403725548_681713644104893_8066501004765465097_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wXev7FdSA2IAX-LyxpK&_nc_ht=scontent.fvca1-2.fna&oh=00_AfAN9vKq4y1IBNMs3XzmRsChLqC-or7cj0kPM-rVH0Jdjg&oe=65820EED",
  //   },
  //   {
  //     id: 1,
  //     image:
  //       "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368264947_633338548942403_7477692598024200880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=tN27LMm3L8oAX-NFCKg&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCCdIM47qnOEo3K5xpsHiYXXjGUDzU8R0FijC12ItZsjg&oe=65824F06",
  //   },
  //   {
  //     id: 2,
  //     image:
  //       "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368779625_633338538942404_1730240197883271005_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uIM6ZhB3y4EAX_vlJwV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDvcmw6dOWv6BADfdIZs3bIs6lZQoVaCAo_Wiq-r8OPGA&oe=65836603",
  //   },
  //   {
  //     id: 3,
  //     image:
  //       "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/369045159_633338565609068_8963413622339356511_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=z-0X0Y6Ti-4AX9rbMjQ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDjOQuxRRJ1Lijmft8M7PwzD_mnau5V1mznen6v9ax0dQ&oe=65837BF0",
  //   },
  //   {
  //     id: 4,
  //     image:
  //       "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/407270679_686693956940195_7195009788901474971_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=1pz0k_FtagQAX-YlScV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCZ3ZDLEWW0HTWprnIrR8YkucuIJjtTdBeq_TlLr4pTUg&oe=65827D2F",
  //   },
  //   {
  //     id: 5,
  //     image:
  //       "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/406358738_684707837138807_1319695252887792540_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=eZITG1xSu0AAX8aRSGy&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBNNzIpRBid4luidT4YVcsct934VVGF4Zg-v1HyC_IoYg&oe=6582B667",
  //   },
  //   {
  //     id: 6,
  //     image:
  //       "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/405046380_684659200477004_1667525826295611894_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XUwRz1Ev34QAX_qRQSp&_nc_ht=scontent.fvca1-2.fna&oh=00_AfD2Auo2sugxr3oLXSVztAclGfIF6YyvQpIWff3LXdRmTg&oe=6581D200",
  //   },
  //   {
  //     id: 7,
  //     image:
  //       "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/405911164_684586117150979_3298045674183475549_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=4sL_q-UUh6IAX__E45y&_nc_ht=scontent.fvca1-4.fna&oh=00_AfBTbz2ruWNa8oWxOcz1gHsaozl3obDG92tlHgXRZ5makA&oe=65835485",
  //   },
  //   {
  //     id: 8,
  //     image:
  //       "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/400317902_675498058059785_8340930423287595148_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6rIlFV0G7HQAX9zoAgf&_nc_ht=scontent.fvca1-4.fna&oh=00_AfD64fyyByRtjBpN824BxoI54seAgd1Zb1VwrK7t0yr4tA&oe=65833170",
  //   },
  // ];
  // const membersShow = [
  //   {
  //     id: 0,
  //     userName: "Jenny Wilson",
  //     avatar: "/images/User/user-08.jpg",
  //   },
  //   {
  //     id: 1,
  //     userName: "Philip Ninomar",
  //     avatar: "/images/User/user-07.jpg",
  //   },
  //   {
  //     id: 3,
  //     userName: "Iris Cana",
  //     avatar: "/images/User/user-06.jpg",
  //   },
  //   {
  //     id: 4,
  //     userName: "Cana Diket",
  //     avatar: "/images/User/user-05.jpg",
  //   },
  //   {
  //     id: 5,
  //     userName: "Cris Wilson",
  //     avatar: "/images/User/user-04.jpg",
  //   },
  //   {
  //     id: 6,
  //     userName: "Anana Crew",
  //     avatar: "/images/User/user-09.jpg",
  //   },
  //   {
  //     id: 7,
  //     userName: "Anana Zona",
  //     avatar: "/images/User/user-10.jpg",
  //   },
  //   {
  //     id: 8,
  //     userName: "Ariana Grande",
  //     avatar: "/images/User/user-profile.jpg",
  //   },
  // ];

  const getCurrentPage = useSelector(
    (state) => state?.persistedReducer?.pages?.currentPages?.data
  );

  const memberPagesData = useSelector(
    (state) => state.persistedReducer?.pages?.getPage?.data
  );

  const [pagesData, setPagesData] = useState(getCurrentPage);

  const [galleryShow, setGalleryShow] = useState(null);
  const [posts, setPosts] = useState(null);

  // const params = useParams();
  const dispatch = useDispatch();

  const listMember = useSelector(
    (state) => state.persistedReducer?.pages?.memberPage?.data
  );

  useEffect(() => {
    if (pageOwner) {
      const pageId = getCurrentPage?.id;
      dispatch(getMemberPage({ pageId }));
    } else {
      const pageId = memberPagesData?.id;
      dispatch(getMemberPage({ pageId }));
    }
  }, [pageOwner, getCurrentPage, memberPagesData, dispatch]);

  //get list members

  useEffect(() => {
    const handleInfomation = () => {
      if (pageOwner) {
        setGalleryShow(pagesData?.images);
        setPosts(pagesData?.posts);
        return;
      } else {
        setGalleryShow(memberPagesData?.images);
        setPosts(memberPagesData?.posts);
        return;
      }
    };
    handleInfomation();
  }, [pageOwner, pagesData, memberPagesData]);

  useEffect(() => {
    if (getCurrentPage) {
      setPagesData(getCurrentPage);
    }
  }, [getCurrentPage]);

  return (
    <div className="timeline-page-binding">
      <div className="detail">
        <div className="gallery-show-box">
          <div className="top-box">
            <p className="subject">Gallery</p>
            <p className="view">View more</p>
          </div>
          <div className="gallery">
            {galleryShow !== null ? (
              <>
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
                        src={image.imgLink}
                        alt=""
                        className="item-img"
                      />
                    ))}
                  </div>
                ) : (
                  <p className="mess">There are no images yet</p>
                )}
              </>
            ) : (
              <p className="mess">There are no images yet</p>
            )}
          </div>
        </div>
        <div className="friends-show-box">
          <div className="top-box">
            <p className="subject">Members</p>
            <p className="view">View more</p>
          </div>
          <div className="friends">
            {listMember !== null ? (
              <>
                {listMember.length > 0 ? (
                  <div
                    className={
                      listMember.length > 0 && listMember.length <= 3
                        ? "list-users h-1row"
                        : listMember.length > 3 && listMember.length <= 6
                        ? "list-users h-2row"
                        : "list-users h-3row"
                    }
                  >
                    {listMember.map((user) => (
                      <div className="item-user">
                        <img
                          key={user.id}
                          src={user?.image?.imgLink}
                          alt=""
                          className="img-avt"
                        />
                        <p className="username">{`${user?.firstName} ${user?.lastName}`}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="mess">There are no members yet</p>
                )}
              </>
            ) : (
              <p className="mess">There are no members yet</p>
            )}
          </div>
        </div>
      </div>
      <div className="content">
        {pageOwner && (
          <CreatePost
            userInfo={{
              userId: pagesData?.id,
              userName: pagesData?.pageName,
              avatar: pagesData?.avatar?.imgLink,
            }}
            postOnPage={true}
          />
        )}

        {posts !== null ? (
          <Posts accountOwner={pageOwner} posts={posts} />
        ) : (
          <p className="mess-center">There are no posts yet</p>
        )}
      </div>
    </div>
  );
};
export default Timeline;
