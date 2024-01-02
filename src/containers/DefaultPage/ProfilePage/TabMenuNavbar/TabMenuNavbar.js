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
  // const memberId = params.memberId;

  // navigate(`/message/${idMember}`);
  const [tabMenuMembers, setTabMenuMembers] = useState([
    {
      id: 0,
      name: "Timeline",
      link: `/members/${params.memberId}`,
      isActive: true,
    },
    {
      id: 1,
      name: "About",
      link: `/members/${params.memberId}/about`,
      isActive: false,
    },
    {
      id: 2,
      name: "Friends",
      link: `/members/${params.memberId}/friends`,
      isActive: false,
    },
    {
      id: 3,
      name: "Gallery",
      link: `/members/${params.memberId}/gallery`,
      isActive: false,
    },
  ]);

  const navigate = useNavigate();
  const handleNavigate = (path, idTab) => {
    navigate(path);
    if (accountOwner) {
      navigate(path);
    } else {
      if (idTab === 0) {
        navigate(`/members/${params.memberId}`);
      } else if (idTab === 1) {
        navigate(`/members/${params.memberId}/about`);
      } else if (idTab === 2) {
        navigate(`/members/${params.memberId}/friends`);
      } else if (idTab === 3) {
        navigate(`/members/${params.memberId}/gallery`);
      }
    }
  };

  const location = useLocation();
  useEffect(() => {
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
      // const memberId = params.memberId;
      setTabMenuMembers((prev) => {
        return prev.map((item) => {
          if (pathname === `/members/${params.memberId}` && item.id === 0) {
            return {
              ...item,
              isActive: true,
            };
          } else if (
            pathname === `/members/${params.memberId}/about` &&
            item.id === 1
          ) {
            return {
              ...item,
              isActive: true,
            };
          } else if (
            pathname === `/members/${params.memberId}/friends` &&
            item.id === 2
          ) {
            return {
              ...item,
              isActive: true,
            };
          } else if (
            pathname === `/members/${params.memberId}/gallery` &&
            item.id === 3
          ) {
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
    const pathname = location.pathname;
    handleActiveOwnerItem(pathname);
    handleActiveMemberItem(pathname);
  }, [location, params]);
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
                  handleNavigate(item.link, item.id);
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
