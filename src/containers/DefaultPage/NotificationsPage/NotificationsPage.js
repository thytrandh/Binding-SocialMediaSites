import { useState } from "react";
import "../NotificationsPage/NotificationsPage.scss";
import ActivityUser from "../NewsfeedPage/ActivityUser/ActivityUser";
import FriendsSuggestions from "../NewsfeedPage/FriendsSuggestions/FriendsSuggestions";
import Advertisement from "../NewsfeedPage/Advertisement/Advertisement";
import useWindowSize from "../../../library/hooks/useWindowSize";
import BannerAds from "../../../components/BannerAds/BannerAds";
const NotificationsPage = () => {
  const { width } = useWindowSize();

  const [tabMenu, setTabMenu] = useState([
    {
      id: 0,
      name: "Unread",
      isActive: true,
    },
    {
      id: 1,
      name: "Read",
      isActive: false,
    },
  ]);
  const [notificatons, setNotifications] = useState([
    {
      id: 0,
      content: "Jerome Bell accepted your friendship request",
      date: "1 week ago",
      idRead: false,
    },
    {
      id: 1,
      content: "Jenny Wilson accepted your friendship request",
      date: "1 week, 5 days ago",
      idRead: false,
    },
    {
      id: 2,
      content: "Aaron Jones accepted your friendship request",
      date: "1 week, 6 days ago",
      idRead: false,
    },
    {
      id: 3,
      content: "Felix Deo accepted your friendship request",
      date: "2 weeks, 1 day ago",
      idRead: false,
    },
    {
      id: 4,
      content: "Aaron Jones accepted your friendship request",
      date: "2 weeks, 2 days ago",
      idRead: false,
    },
    {
      id: 5,
      content:
        "Darlin Robertson accepted your friendship requestDarlin Robertson accepted your friendship requestDarlin Robertson accepted your friendship request",
      date: "2 weeks, 2 days ago",
      idRead: false,
    },
  ]);

  const handleDeleteNotiUnRead = () => {};
  const handleMakeRead = () => {};
  const handleDeleteNotiReaded = () => {
    setNotifications(notificatons); //gia dinh
  };

  return (
    <div className="notifications-page">
      <BannerAds
        subject={"All Notifications"}
        desc={"View all notifications"}
      />
      <div className="main-noti-content">
        <div className="left">
          <div className="top-box">
            <p className="title">Notification</p>
            <div className="tab-menu">
              {tabMenu.map((item) => (
                <p
                  key={item.id}
                  className={item.isActive ? "item active" : "item"}
                  onClick={() => {
                    setTabMenu((prev) => {
                      return prev.map((val) => {
                        if (val.id === item.id) {
                          return {
                            ...val,
                            isActive: true,
                          };
                        } else {
                          return {
                            ...val,
                            isActive: false,
                          };
                        }
                      });
                    });
                  }}
                >
                  {item.name}
                </p>
              ))}
            </div>
          </div>
          <div className="notifications-table-box">
            {tabMenu[0].isActive ? (
              <table className="notifications-table-content table-unRead">
                <thead>
                  <tr className="row-title">
                    <th className="title">Notification</th>
                    {width > 992 && (
                      <>
                        <th className="title">Date Received</th>
                        <th className="title">Actions</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {notificatons.map((itemNoti) => (
                    <tr key={itemNoti.id} className="item-noti">
                      <th>{itemNoti.content}</th>
                      {width > 992 && (
                        <>
                          <th>{itemNoti.date}</th>
                          <th className="option">
                            <div
                              className="btn-read btn-option"
                              onClick={() => {
                                handleMakeRead();
                              }}
                            >
                              <i class="fa-duotone fa-eye"></i>
                            </div>
                            <div
                              className="btn-delete btn-option"
                              onClick={() => {
                                handleDeleteNotiUnRead();
                              }}
                            >
                              <i class="fa-duotone fa-trash"></i>
                            </div>
                          </th>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <table className="notifications-table-content table-read">
                <thead>
                  <tr className="row-title">
                    <th className="title">Notification</th>
                    {width > 992 && (
                      <>
                        <th className="title">Date Received</th>
                        <th className="title">Actions</th>
                      </>
                    )}
                  </tr>
                </thead>
                <tbody>
                  {notificatons.map((itemNoti) => (
                    <tr key={itemNoti.id} className="item-noti">
                      <th>{itemNoti.content}</th>
                      {width > 992 && (
                        <>
                          <th>{itemNoti.date}</th>
                          <th className="option">
                            <div
                              className="btn-delete tb-read btn-option"
                              onClick={() => {
                                handleDeleteNotiReaded();
                              }}
                            >
                              <i class="fa-duotone fa-trash"></i>
                            </div>
                          </th>
                        </>
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
        <div className="right">
          {/* <ServiceAdvertisement /> */}
          <ActivityUser />
          <FriendsSuggestions />
          <Advertisement />
        </div>
      </div>
    </div>
  );
};
export default NotificationsPage;
