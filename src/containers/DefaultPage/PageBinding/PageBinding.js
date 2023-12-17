import PageHeader from "./PageHeader/PageHeader";
import "../PageBinding/PageBinding.scss";
import TabMenuPage from "./TabMenuPage/TabMenuPage";
import { useState } from "react";
import { PageOpenFileBoxContext } from "./context/pageOpenFileBoxContext";
import { Outlet } from "react-router-dom";

const PageBinding = ({ pageOwner }) => {
  const [openShowFileBox, setOpenShowFileBox] = useState(false);

  return (
    <div className="page-binding profile-my-page">
      <PageHeader pageOwner={pageOwner} />
      <div className="main-page-binding">
        <TabMenuPage pageOwner={pageOwner} />
        <div className="main-content">
          <PageOpenFileBoxContext.Provider
            value={{ openShowFileBox, setOpenShowFileBox }}
          >
            <Outlet />
          </PageOpenFileBoxContext.Provider>
        </div>
      </div>
    </div>
  );
};
export default PageBinding;
