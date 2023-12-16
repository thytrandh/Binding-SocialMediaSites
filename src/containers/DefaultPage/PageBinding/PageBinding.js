import PageHeader from "./PageHeader/PageHeader";
import "../PageBinding/PageBinding.scss";
import TabMenuPage from "./TabMenuPage/TabMenuPage";
import { useState } from "react";
import { PageBindingContext } from "./context/pageBindingContext";
import Timeline from "./MainPageBinding/Timeline/Timeline";
import Introduce from "./MainPageBinding/Introduce/Introduce";
import Members from "./MainPageBinding/Members/Members";
import Gallery from "./MainPageBinding/Gallery/Gallery";

const PageBinding = (Page) => {
  const [tabMenu, setTabMenu] = useState([
    {
      id: 0,
      name: "Timeline",
      isActive: true,
    },
    {
      id: 1,
      name: "Introduce",
      isActive: false,
    },
    {
      id: 2,
      name: "Members",
      isActive: false,
    },
    {
      id: 3,
      name: "Gallery",
      isActive: false,
    },
  ]);
  return (
    <PageBindingContext.Provider value={{ tabMenu, setTabMenu }}>
      <div className="page-binding profile-my-page">
        <PageHeader pageOwner={true} />
        <div className="main-page-binding">
          <TabMenuPage />
          <div className="main-content">
            {tabMenu[0].isActive && <Timeline pageOwner={true} />}
            {tabMenu[1].isActive && <Introduce />}
            {tabMenu[2].isActive && <Members />}
            {tabMenu[3].isActive && <Gallery />}
          </div>
        </div>
      </div>
    </PageBindingContext.Provider>
  );
};
export default PageBinding;
