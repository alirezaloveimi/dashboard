import { useEffect, useState } from "react";

import {
  Routes,
  Route,
  useNavigate,
  Navigate,
  useLocation,
} from "react-router-dom";

// pages
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Panel from "./pages/Panel";
import Users from "./pages/Users";
import Billing from "./pages/Billing";

// components
import Loading from "./components/Loading";

// redux
import { useAppDispatch } from "./redux/store";
import { login } from "./redux/features/userAuth";

// toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

import { supabase } from "./supabase/supabase";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getUserInfo = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (session) {
        dispatch(
          login({
            userInfo: {
              role: session?.user.user_metadata.role,
              email: session?.user.email,
              userName: session?.user.user_metadata.userName,
            },
            token: session?.access_token,
          })
        );
      }

      setIsLoading(false);
    };

    getUserInfo();
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Panel />}>
          <Route path="" element={<Navigate to="/dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="billing" element={<Billing />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={false}
        pauseOnHover
        draggable
        closeButton={false}
        theme="dark"
        bodyClassName="cursor-pointer"
      />
    </>
  );
};

export default App;
