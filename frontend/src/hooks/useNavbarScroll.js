import { useEffect, useRef, useState } from "react";

const useNavbarScroll = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const diff = currentScrollY - lastScrollY.current;

      // Always show near top
      if (currentScrollY <= 80) {
        setShowNavbar(true);
      }
      // Hide when scrolling down
      else if (diff > 5) {
        setShowNavbar(false);
      }
      // Show when scrolling up
      else if (diff < -5) {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return showNavbar;
};

export default useNavbarScroll;
