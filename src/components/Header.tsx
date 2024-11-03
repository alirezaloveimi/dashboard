import { useState, useEffect } from "react";

// redux
import { useAppDispatch, useAppSelector } from "../redux/store";
import { toggleSidebar } from "../redux/features/showSidebar";

// icons
import { icons } from "../data/icons";
import { useLocation } from "react-router-dom";

const MAXIMUM_SCROLL_VALUE = 15;

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);

  const { show } = useAppSelector((state) => state.showSidebar);
  const dispatch = useAppDispatch();

  const { pathname: currentPage } = useLocation();

  useEffect(() => {
    const windowScrollHandler = () => {
      const scrollYValue = window.scrollY;

      if (scrollYValue > MAXIMUM_SCROLL_VALUE) {
        setIsSticky(true);
        return;
      }

      setIsSticky(false);
    };

    window.addEventListener("scroll", windowScrollHandler);

    return () => {
      window.removeEventListener("scroll", windowScrollHandler);
    };
  }, []);

  return (
    <header
      className={`sticky top-5 z-40 rounded-xl p-5 ${
        isSticky ? "backdrop-blur-xl border border-[#a0aec0]" : ""
      }`}
    >
      <div className="flex flex-col space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
        <h3 className="capitalize text-xl">{currentPage}</h3>

        <div className="flex flex-col sm:flex-row sm:justify-between space-y-5 sm:items-center sm:space-y-0 md:space-x-4">
          <div className="border border-[#e2e8f04d] rounded-xl bg-[#0f1535] flex px-3">
            <span className="flex-align-center text-xl">{icons.search}</span>
            <input
              type="text"
              placeholder="Type Here..."
              className="w-full py-2 pl-2"
            />
          </div>

          <div className="flex-align-center justify-end gap-x-2 text-lg">
            <button
              type="button"
              className="xl:hidden"
              onClick={() => dispatch(toggleSidebar())}
            >
              {show ? icons.opneMenu : icons.closeMenu}
            </button>
            <button>{icons.settings}</button>
            <button>{icons.notification}</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
