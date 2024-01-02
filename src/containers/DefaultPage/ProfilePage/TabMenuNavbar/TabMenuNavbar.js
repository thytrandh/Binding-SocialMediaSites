import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../TabMenuNavbar/TabMenuNavbar.scss";
import { useEffect } from "react";
import { useState } from "react";
const TabMenuNavbar = ({ accountOwner }) => {
  const [tabMenuOwner, setTabMenuOwner] = useState([
    {
      id: 0,
      name: "Timeline",
      link: "/profile",
      isActive: true,
    },
    {
      id: 1,
      name: "About",
      link: "/profile/about",
      isActive: false,
    },
    {
      id: 2,
      name: "Friends",
      link: "/profile/friends",
      isActive: false,
    },
    {
      id: 3,
      name: "Gallery",
      link: "/profile/gallery",
      isActive: false,
    },
    // {
    //   id: 4,
    //   name: "Archive",
    //   link: "/profile/archive",
    //   isActive: false,
    // },
  ]);

  const params = useParams();
  const memberId = params.memberId;
  // navigate(`/message/${idMember}`);
  const [tabMenuMembers, setTabMenuMembers] = useState([
    {
      id: 0,
      name: "Timeline",
      link: `/members/${memberId}`,
      isActive: true,
    },
    {
      id: 1,
      name: "About",
      link: `/members/${memberId}/about`,
      isActive: false,
    },
    {
      id: 2,
      name: "Friends",
      link: `/members/${memberId}/friends`,
      isActive: false,
    },
    {
      id: 3,
      name: "Gallery",
      link: `/members/${memberId}/gallery`,
      isActive: false,
    },
  ]);

  const navigate = useNavigate();
  const handleNavigate = (path) => {
    navigate(path);
  };

  const handleActiveOwnerItem = (pathname) => {
    setTabMenuOwner((prev) => {
      return prev.map((item) => {
        if (item.link === pathname) {
          return {
            ...item,
            isActive: true,
          };
        } else {
          return {
            ...item,
            isActive: false,
          };
        }
      });
    });
  };
  const handleActiveMemberItem = (pathname) => {
    setTabMenuMembers((prev) => {
      return prev.map((item) => {
        if (item.link === pathname) {
          return {
            ...item,
            isActive: true,
          };
        } else {
          return {
            ...item,
            isActive: false,
          };
        }
      });
    });
  };

  const location = useLocation();
  useEffect(() => {
    const pathname = location.pathname;
    handleActiveOwnerItem(pathname);
    handleActiveMemberItem(pathname);
  }, [location]);
  return (
    <div className="tab-menu-navbar">
      <div className="tab-menu">
        {accountOwner ? (
          <>
            {tabMenuOwner.map((item) => (
              <p
                key={item.id}
                className={item.isActive ? "item-nav active" : "item-nav"}
                onClick={() => {
                  handleNavigate(item.link);
                }}
              >
                {item.name}
              </p>
            ))}
          </>
        ) : (
          <>
            {tabMenuMembers.map((item) => (
              <p
                key={item.id}
                className={item.isActive ? "item-nav active" : "item-nav"}
                onClick={() => {
                  handleNavigate(item.link);
                }}
              >
                {item.name}
              </p>
            ))}
          </>
        )}
      </div>
      {accountOwner && (
        <div className="option-box">
          <div className="edit-profile">
            <img
              src="/images/Profile/icon/Edit Square.png"
              alt=""
              className="ic-edit"
            />
            <p>Edit profile</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabMenuNavbar;
