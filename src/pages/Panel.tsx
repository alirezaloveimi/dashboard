// router dom
import { Navigate, Outlet, useLocation } from "react-router-dom";

// components
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { useEffect } from "react";
import { hideSidebar } from "../redux/features/showSidebar";

const Panel = () => {
  const { isLogin } = useAppSelector((state) => state.userAuth);
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    dispatch(hideSidebar());
  }, [pathname]);

  if (!isLogin) {
    return <Navigate to="/login" />;
  }

  return (
    <div
      className="bg-cover-center"
      style={{ backgroundImage: 'url("/images/body-background.jpg")' }}
    >
      <Sidebar />
      <div className="p-6 xl:ml-72">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Panel;
