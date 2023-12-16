import Posts from "../../../../../components/Posts/Posts";
import "../Timeline/Timeline.scss";
const Timeline = ({ pageOwner }) => {
  const galleryShow = [
    {
      id: 0,
      image:
        "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/403725548_681713644104893_8066501004765465097_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wXev7FdSA2IAX-LyxpK&_nc_ht=scontent.fvca1-2.fna&oh=00_AfAN9vKq4y1IBNMs3XzmRsChLqC-or7cj0kPM-rVH0Jdjg&oe=65820EED",
    },
    {
      id: 1,
      image:
        "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368264947_633338548942403_7477692598024200880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=tN27LMm3L8oAX-NFCKg&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCCdIM47qnOEo3K5xpsHiYXXjGUDzU8R0FijC12ItZsjg&oe=65824F06",
    },
    {
      id: 2,
      image:
        "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368779625_633338538942404_1730240197883271005_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uIM6ZhB3y4EAX_vlJwV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDvcmw6dOWv6BADfdIZs3bIs6lZQoVaCAo_Wiq-r8OPGA&oe=65836603",
    },
    {
      id: 3,
      image:
        "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/369045159_633338565609068_8963413622339356511_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=z-0X0Y6Ti-4AX9rbMjQ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDjOQuxRRJ1Lijmft8M7PwzD_mnau5V1mznen6v9ax0dQ&oe=65837BF0",
    },
    {
      id: 4,
      image:
        "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/407270679_686693956940195_7195009788901474971_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=1pz0k_FtagQAX-YlScV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCZ3ZDLEWW0HTWprnIrR8YkucuIJjtTdBeq_TlLr4pTUg&oe=65827D2F",
    },
    {
      id: 5,
      image:
        "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/406358738_684707837138807_1319695252887792540_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=3635dc&_nc_ohc=eZITG1xSu0AAX8aRSGy&_nc_ht=scontent.fvca1-3.fna&oh=00_AfBNNzIpRBid4luidT4YVcsct934VVGF4Zg-v1HyC_IoYg&oe=6582B667",
    },
    {
      id: 6,
      image:
        "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/405046380_684659200477004_1667525826295611894_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=XUwRz1Ev34QAX_qRQSp&_nc_ht=scontent.fvca1-2.fna&oh=00_AfD2Auo2sugxr3oLXSVztAclGfIF6YyvQpIWff3LXdRmTg&oe=6581D200",
    },
    {
      id: 7,
      image:
        "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/405911164_684586117150979_3298045674183475549_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=3635dc&_nc_ohc=4sL_q-UUh6IAX__E45y&_nc_ht=scontent.fvca1-4.fna&oh=00_AfBTbz2ruWNa8oWxOcz1gHsaozl3obDG92tlHgXRZ5makA&oe=65835485",
    },
    {
      id: 8,
      image:
        "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/400317902_675498058059785_8340930423287595148_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=6rIlFV0G7HQAX9zoAgf&_nc_ht=scontent.fvca1-4.fna&oh=00_AfD64fyyByRtjBpN824BxoI54seAgd1Zb1VwrK7t0yr4tA&oe=65833170",
    },
  ];
  const membersShow = [
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
        avatar:
          "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/317094198_2181493305354980_6460664330045934311_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=EglUTZpdA6cAX_G3NVI&_nc_oc=AQl5cptiCfPV9yZe_v1AUKJyvy3H0pO4wd6X0QJdkAltddhs7Lo2qXgePggTZy_7s0toqgu3SncEE3cXFR0WSKBL&_nc_ht=scontent.fvca1-2.fna&oh=00_AfA9BuAt1SGudC5RuKDtu0ammj1oSulUt-WdhLe6taWr5w&oe=65830F58",
      },
      status: "posted an update in the timeline",
      time: "a year ago",
      content: "Thầy dạy tụi em bắn súng, còn tụi em bắn tim cho thầy ♥️",
      images: [
        {
          src:
            "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/403725548_681713644104893_8066501004765465097_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=wXev7FdSA2IAX-LyxpK&_nc_ht=scontent.fvca1-2.fna&oh=00_AfAN9vKq4y1IBNMs3XzmRsChLqC-or7cj0kPM-rVH0Jdjg&oe=65820EED",
        },
      ],
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
        avatar:
          "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/317094198_2181493305354980_6460664330045934311_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=EglUTZpdA6cAX_G3NVI&_nc_oc=AQl5cptiCfPV9yZe_v1AUKJyvy3H0pO4wd6X0QJdkAltddhs7Lo2qXgePggTZy_7s0toqgu3SncEE3cXFR0WSKBL&_nc_ht=scontent.fvca1-2.fna&oh=00_AfA9BuAt1SGudC5RuKDtu0ammj1oSulUt-WdhLe6taWr5w&oe=65830F58",
      },
      status: "posted an update in the timeline",
      time: "a month ago",
      content: "Sư phạm Kỹ thuật ở vũ trụ anime.....",
      images: [
        {
          src:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368264947_633338548942403_7477692598024200880_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=tN27LMm3L8oAX-NFCKg&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCCdIM47qnOEo3K5xpsHiYXXjGUDzU8R0FijC12ItZsjg&oe=65824F06",
        },
        {
          src:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/368779625_633338538942404_1730240197883271005_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=uIM6ZhB3y4EAX_vlJwV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfDvcmw6dOWv6BADfdIZs3bIs6lZQoVaCAo_Wiq-r8OPGA&oe=65836603",
        },
        {
          src:
            "https://scontent.fvca1-3.fna.fbcdn.net/v/t39.30808-6/369045159_633338565609068_8963413622339356511_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=z-0X0Y6Ti-4AX9rbMjQ&_nc_ht=scontent.fvca1-3.fna&oh=00_AfDjOQuxRRJ1Lijmft8M7PwzD_mnau5V1mznen6v9ax0dQ&oe=65837BF0",
        },
        {
          src:
            "https://scontent.fvca1-4.fna.fbcdn.net/v/t39.30808-6/368714500_633338672275724_7967119174315642615_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=UEeB2-fADb8AX_5v4M-&_nc_ht=scontent.fvca1-4.fna&oh=00_AfAYDj4EUio_jcfAxTE8iAtAPAUPP5aWDNsZaJNB9FE0ww&oe=65831797",
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
        avatar:
          "https://scontent.fvca1-2.fna.fbcdn.net/v/t39.30808-6/317094198_2181493305354980_6460664330045934311_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=EglUTZpdA6cAX_G3NVI&_nc_oc=AQl5cptiCfPV9yZe_v1AUKJyvy3H0pO4wd6X0QJdkAltddhs7Lo2qXgePggTZy_7s0toqgu3SncEE3cXFR0WSKBL&_nc_ht=scontent.fvca1-2.fna&oh=00_AfA9BuAt1SGudC5RuKDtu0ammj1oSulUt-WdhLe6taWr5w&oe=65830F58",
      },
      status: "posted an update in the timeline",
      time: "a year ago",
      content:
        "“Such short little lives our pets have to spend with us, and they spend most of it waiting for us to come home each day.”",
      images: [
        {
          src:
            "https://scontent.fvca1-1.fna.fbcdn.net/v/t39.30808-6/407270679_686693956940195_7195009788901474971_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=3635dc&_nc_ohc=1pz0k_FtagQAX-YlScV&_nc_ht=scontent.fvca1-1.fna&oh=00_AfCZ3ZDLEWW0HTWprnIrR8YkucuIJjtTdBeq_TlLr4pTUg&oe=65827D2F",
        },
      ],
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
  ];
  return (
    <div className="timeline-page-binding">
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
            <p className="subject">Members</p>
            <p className="view">View more</p>
          </div>
          <div className="friends">
            {membersShow.length > 0 ? (
              <div
                className={
                  membersShow.length > 0 && membersShow.length <= 3
                    ? "list-users h-1row"
                    : membersShow.length > 3 && membersShow.length <= 6
                    ? "list-users h-2row"
                    : "list-users h-3row"
                }
              >
                {membersShow.map((user) => (
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
              <p className="mess">There are no members yet</p>
            )}
          </div>
        </div>
      </div>
      <div className="content">
        <Posts accountOwner={pageOwner} posts={posts} />
      </div>
    </div>
  );
};
export default Timeline;
