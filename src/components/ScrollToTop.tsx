import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the pathname includes an anchor link (e.g., /#quotes)
    if (!location.hash) {
      window.scrollTo(0, 0); // Scroll to the top only if there's no anchor link
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default ScrollToTop;