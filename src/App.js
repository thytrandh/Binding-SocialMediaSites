import { useState } from "react";
import { AuthContext } from "./context/authContext";
import { DataContext } from "./context/dataContext";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const [isAuth, setAuth] = useState(true);

  return (
    <>
      <AuthContext.Provider value={[isAuth, setAuth]}>
        <DataContext.Provider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </DataContext.Provider>
      </AuthContext.Provider>
    </>
  );
}

export default App;
