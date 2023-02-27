import "./App.css";
import { Outlet } from "react-router-dom";
import AuthContextProvider from "./context/AuthContextProvider";
import AccessLogin from "./components/login/google/AccessLogin";

function App() {
  return (
    <>
      <AuthContextProvider>
        <AccessLogin />
        <Outlet />
      </AuthContextProvider>
    </>
  );
}

export default App;
