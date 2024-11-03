import { useState } from "react";

// redux
import { useAppDispatch, useAppSelector } from "../redux/store";
import { hideSidebar } from "../redux/features/showSidebar";
import { logout } from "../redux/features/userAuth";

// data , icons
import { icons } from "../data/icons";
import { sidebarItems } from "../data/datas";

import { NavLink } from "react-router-dom";

import Modal from "./Modal";

const Sidebar = () => {
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const { isLogin, userInfo } = useAppSelector((state) => state.userAuth);
  const { show } = useAppSelector((state) => state.showSidebar);
  const dispatch = useAppDispatch();

  const logoutUserHandler = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        style={{ background: "linear-gradient(80deg, #05052c, #01112e)" }}
        className={`w-64 h-[96vh] rounded-2xl fixed z-50 m-4 transition-ease-300 ${
          show ? "translate-x-0" : "-translate-x-[120%]"
        } xl:translate-x-0`}
      >
        <div className="h-full px-4">
          <div className="flex-center-between py-5 border-b border-neutral-300">
            <div className="flex flex-col gap-1">
              <h4 className="text-xl">Hello : </h4>
              <span className="text-sm">{isLogin && userInfo.userName}</span>
            </div>
            <button
              type="button"
              className="text-xl xl:hidden"
              onClick={() => dispatch(hideSidebar())}
            >
              {icons.close}
            </button>
          </div>

          <div className="space-y-4 my-6">
            {sidebarItems.map((item) => (
              <div key={item.id}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `sidebar-link p-3 rounded-xl flex-align-center gap-x-2 ${
                      isActive ? "active bg-[#1a1f37]" : ""
                    }`
                  }
                >
                  <span className="size-10 grid-center text-xl rounded-xl">
                    {item.icon}
                  </span>
                  <span>{item.title}</span>
                </NavLink>
              </div>
            ))}
          </div>

          <div
            style={{
              backgroundImage: 'url("/images/sidenav-card-background.jpg")',
            }}
            className="p-3 rounded-xl bg-cover-center"
          >
            <span className="bg-white size-8 grid-center rounded-xl text-primary text-xl">
              {icons.star}
            </span>

            <h4 className="text-lg mt-4">Need Help?</h4>
            <p className="text-sm">Please check our docs</p>

            <button
              type="button"
              className="py-1.5 w-full bg-black rounded-md transition-ease-300 hover:scale-90 mt-3"
            >
              Documention
            </button>
          </div>

          <button
            onClick={() => setShowLogoutModal(true)}
            type="button"
            className="w-full py-3 bg-red-700 mt-5 rounded-xl"
          >
            Logout
          </button>
        </div>
      </div>

      <Modal
        title="Delete User"
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(!showLogoutModal)}
      >
        <div className="flex-align-center flex-col gap-y-4 mb-4">
          <span className="text-red-700 text-6xl">{icons.alert}</span>
          <p>Do You Want To Logout From Website ? </p>
        </div>

        <div className="flex-align-center gap-x-3 [&>*]:flex-1">
          <button
            onClick={() => setShowLogoutModal(false)}
            type="button"
            className="bg-red-700 py-2 rounded-xl"
          >
            No
          </button>
          <button
            onClick={logoutUserHandler}
            type="button"
            className="bg-primary py-2 rounded-xl"
          >
            Yes
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Sidebar;
