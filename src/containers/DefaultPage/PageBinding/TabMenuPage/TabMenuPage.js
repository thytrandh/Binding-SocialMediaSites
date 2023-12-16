import { useContext} from "react";
import "../TabMenuPage/TabMenuPage.scss";
import { PageBindingContext } from "../context/pageBindingContext";
const TabMenuPage = () => {
  const { tabMenu, setTabMenu } = useContext(PageBindingContext);
  return (
    <div className="tab-menu-page">
      <div className="tab-menu">
        {tabMenu.map((item) => (
          <p
            key={item.id}
            className={item.isActive ? "item-nav active" : "item-nav"}
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
  );
};
export default TabMenuPage;
