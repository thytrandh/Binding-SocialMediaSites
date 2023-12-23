import { useEffect, useState } from "react";
import { AuthContext } from "./context/authContext";
import { DataContext } from "./context/dataContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useSelector } from "react-redux";

function App() {
  const [isAuth, setAuth] = useState(false);
  const getToken = useSelector(
    (state) => state.persistedReducer?.loginAuth?.currentLogin?.token
  );
  const getCurrentUser = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentUser?.data
  );

  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (getToken) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [getToken]);

  useEffect(() => {
    if (getCurrentUser) {
      setUserData(getCurrentUser);
    }
  }, [setUserData, getCurrentUser]);

  return (
    <>
      <AuthContext.Provider value={{ isAuth, setAuth }}>
        <DataContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DataContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
