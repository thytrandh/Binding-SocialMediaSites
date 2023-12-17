import { useEffect, useState } from "react";
import "../TabMenuPage/TabMenuPage.scss";
import { useLocation, useNavigate, useParams } from "react-router-dom";
const TabMenuPage = ({ pageOwner }) => {
  const params = useParams();
  const pageId = params.pageId;

  const [tabMenuOwner, setTabMenuOwner] = useState([
    {
      id: 0,
      name: "Timeline",
      link: "/page-binding",
      isActive: true,
    },
    {
      id: 1,
      name: "Introduce",
      link: "/page-binding/intro",
      isActive: false,
    },
    {
      id: 2,
      name: "Members",
      link: "/page-binding/members",
      isActive: false,
    },
    {
      id: 3,
      name: "Gallery",
      link: "/page-binding/gallery",
      isActive: false,
    },
  ]);

  const [tabMenuMember, setTabMenuMember] = useState([
    {
      id: 0,
      name: "Timeline",
      link: `/page-binding/${pageId}`,
      isActive: true,
    },
    {
      id: 1,
      name: "Introduce",
      link: `/page-binding/${pageId}/intro`,
      isActive: false,
    },
    {
      id: 2,
      name: "Members",
      link: `/page-binding/${pageId}/members`,
      isActive: false,
    },
    {
      id: 3,
      name: "Gallery",
      link: `/page-binding/${pageId}/gallery`,
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
    setTabMenuMember((prev) => {
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
    <div className="tab-menu-page">
      <div className="tab-menu">
        {pageOwner ? (
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
            {tabMenuMember.map((item) => (
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
    </div>
  );
};
export default TabMenuPage;
