import { useEffect, useState } from "react";
import { AuthContext } from "./context/authContext";
import { DataContext } from "./context/dataContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { getRequestFriendList } from "./redux/slice/User/friendSlice";

function App() {
  const [isAuth, setAuth] = useState(true);
  const getToken = useSelector(
    (state) => state.persistedReducer?.loginAuth?.currentLogin?.token
  );

  useEffect(() => {
    if (getToken) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [getToken]);

  const getCurrentUser = useSelector(
    (state) => state.persistedReducer?.userInfo?.currentUser?.data
  );
  const [userData, setUserData] = useState({});

  useEffect(() => {
    if (getCurrentUser) {
      setUserData(getCurrentUser);
    }
  }, [setUserData, getCurrentUser]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRequestFriendList());
  }, [dispatch]);

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
