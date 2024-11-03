// react
import { useEffect } from "react";

// react router dom
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // path name
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
