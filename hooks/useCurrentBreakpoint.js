"use client";
import { useState, useEffect } from "react";

const useCurrentBreakpoint = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");

  useEffect(() => {
    const handleResize = () => {
      const breakpoints = {
        xs: "(max-width: 575.98px)",
        sm: "(min-width: 576px) and (max-width: 767.98px)",
        md: "(min-width: 768px) and (max-width: 991.98px)",
        lg: "(min-width: 992px) and (max-width: 1199.98px)",
        xl: "(min-width: 1200px)",
      };

      const matchedBreakpoint = Object.keys(breakpoints).find(
        (breakpoint) => window.matchMedia(breakpoints[breakpoint]).matches
      );

      setCurrentBreakpoint(matchedBreakpoint || "");
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return currentBreakpoint;
};

export default useCurrentBreakpoint;
